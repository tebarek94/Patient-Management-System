// models/Doctor.ts
export default interface Doctor {
  doctor_id: string;
  first_name: string;
  last_name: string;
  specialization: string;
  contact: number;
  email: string;
  created_at: Date;
}
