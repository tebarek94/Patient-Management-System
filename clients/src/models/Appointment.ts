// models/Appointment.ts
export default interface Appointment {
  appointment_id: string;
  patient_name: string;
  doctor_name: string;
  date: string;
  time: string;
  status: string; // Can be "Pending", "Completed", "Cancelled"
}
