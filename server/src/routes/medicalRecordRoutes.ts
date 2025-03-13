import express, { Request, Response } from "express";
import dbCon from "../config/database"; // Your MySQL database connection

const router = express.Router();
router.get("/", (req: Request, res: Response) => {

  const sql = "SELECT * FROM MedicalRecords";
  dbCon.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching medical records:", err);
      return res.status(500).json({ error: "Database error", details: err.message });
    }

    res.json(results);
  });
});

// Get all medical records for a specific patient
router.get("/:patientId", (req: Request, res: Response) => {
  const patientId = req.params.patientId;

  const sql = "SELECT * FROM MedicalRecords WHERE patient_id = ?";
  dbCon.query(sql, [patientId], (err, results) => {
    if (err) {
      console.error("Error fetching medical records:", err);
      return res.status(500).json({ error: "Database error", details: err.message });
    }

    // Return medical records as JSON
    res.json(results);
  });
});

// Add a new medical record for a patient
// router.post("/", (req: Request, res: Response) => {
//   const { patient_id, doctor_id, diagnosis, treatment, prescription, record_date } = req.body;

//   // Basic validation to check if required fields are provided
//   if (!patient_id || !doctor_id || !diagnosis || !treatment || !record_date) {
//     return res.status(400).json({ error: "Missing required fields" });
//   }

//   const sql = "INSERT INTO MedicalRecords (patient_id, doctor_id, diagnosis, treatment, prescription, record_date) VALUES (?, ?, ?, ?, ?, ?)";
//   dbCon.query(sql, [patient_id, doctor_id, diagnosis, treatment, prescription, record_date], (err, results) => {
//     if (err) {
//       console.error("Error adding medical record:", err);
//       return res.status(500).json({ error: "Database error", details: err.message });
//     }

//     // Return success response
//     res.status(201).json({ message: "Medical record added successfully" });
//   });
// });

// Optional: Update an existing medical record
router.put("/:id", (req: Request, res: Response) => {
  const recordId = req.params.id;
  const { diagnosis, treatment, prescription, record_date } = req.body;

  const sql = "UPDATE MedicalRecords SET diagnosis = ?, treatment = ?, prescription = ?, record_date = ? WHERE record_id = ?";
  dbCon.query(sql, [diagnosis, treatment, prescription, record_date, recordId], (err, results) => {
    if (err) {
      console.error("Error updating medical record:", err);
      return res.status(500).json({ error: "Database error", details: err.message });
    }

    res.json({ message: "Medical record updated successfully" });
  });
});

// Optional: Delete a medical record
router.delete("/:id", (req: Request, res: Response) => {
  const recordId = req.params.id;

  const sql = "DELETE FROM MedicalRecords WHERE record_id = ?";
  dbCon.query(sql, [recordId], (err, results) => {
    if (err) {
      console.error("Error deleting medical record:", err);
      return res.status(500).json({ error: "Database error", details: err.message });
    }

    res.json({ message: "Medical record deleted successfully" });
  });
});

export default router;
