export default interface Patient {
  patient_id: string;
  first_name: string;
  last_name: string;
  dob: number;
  gender: string;
  contact: number;
  address: string | number;
  email: string;
  created_at: Date;
}
