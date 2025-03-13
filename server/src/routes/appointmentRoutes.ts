import express from "express";
import { getAppointments, deleteAppointment } from "../controllers/appointmentController";
import { createAppointment } from "../controllers/appointmentController";

const router = express.Router();

// ✅ Get all appointments
router.get("/", getAppointments);

// router.post("/",createAppointment)
// ✅ Delete an appointment by ID
router.delete("/:id", deleteAppointment);

export default router;
