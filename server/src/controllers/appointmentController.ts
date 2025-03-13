import { Request, Response } from "express";
import dbCon from "../config/database";
import { Appointment } from "../models/Appointment";

// ✅ Get all appointments
export const getAppointments = (req: Request, res: Response) => {
  dbCon.query("SELECT * FROM appointments", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error", details: err.message });
    }
    res.json(results);
  });
};
export const createAppointment = (req: Request<{}, {}, Appointment>, res: Response) => {
  const { patient_id, doctor_id, date, time } = req.body;

  // Validate input
  if (!patient_id || !doctor_id || !date || !time) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO appointments (patient_id, doctor_id, date, time) VALUES (?, ?, ?, ?)";

  // Execute the query
  dbCon.query(sql, [patient_id, doctor_id, date, time], (err, results) => {
    if (err) {
      console.error("Database error:", err.message); // Log error
      return res.status(500).json({ error: "Database error", details: err.message });
    }

    // Check if a row was inserted
    if (results && results  ) {
      return res.status(201).json({
        message: "Appointment created successfully",
        appointmentId: results, 
      });
    } else {
      return res.status(400).json({ error: "Failed to create appointment" });
    }
  });
};

export const deleteAppointment = (req: Request, res: Response) => {
  const { id } = req.params;

  dbCon.query("DELETE FROM appointments WHERE id = ?", [id], (err, results: any) => {
    if (err) {
      return res.status(500).json({ error: "Database error", details: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Appointment not found" });
    }
    res.json({ message: "Appointment deleted" });
  });
};
