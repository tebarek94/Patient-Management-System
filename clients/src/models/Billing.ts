// models/Billing.ts
export default interface Billing {
  billing_id: string;
  patient_id: string;
  amount: number;
  date: Date;
  status: string; 
  payment_method: string; 
}
