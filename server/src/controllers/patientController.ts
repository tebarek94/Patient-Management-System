import { Request, Response } from "express";
import dbCon from "../config/database";
import Patient from "../models/Patient";

export function createPatientHandler(req: Request<{}, {}, Patient>, res: Response) {
  // Extract patient details from the request body
  const { first_name, last_name, dob, gender, contact, address, email }: Patient = req.body;

  // Validate input fields
  if (!first_name || !last_name || !dob || !gender || !contact || !address || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // SQL query to insert patient data into the database
  const query = `
    INSERT INTO patients (first_name, last_name, dob, gender, contact, address, email, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  // Get the current date and time for 'created_at' field
  const created_at = new Date();

  // Execute the query to insert patient data into the database
  dbCon.query(
    query,
    [first_name, last_name, dob, gender, contact, address, email, created_at],
    (err, results) => {
      if (err) {
        console.error("Error inserting patient:", err);
        return res.status(500).json({ error: "Database error", details: err.message });
      }

      // If insertion is successful, return the newly created patient's details
      return res.status(201).json({
        message: "Patient created successfully",
      });
    }
  );
}
