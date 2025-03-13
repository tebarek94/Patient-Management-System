// models/User.ts
export default interface User {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string; 
  status: string; 
  created_at: Date;
}
