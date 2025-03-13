import express from "express";
import dotenv from "dotenv";
import dbCon from "./config/database";
import { QueryError } from "mysql2";
import appointmentRoutes from "./routes/appointmentRoutes";
import medicalRecordRoutes from "./routes/medicalRecordRoutes"; 

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 4000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the appointmentRoutes for any "/api/appointments" endpoint
app.use("/api/appointments", appointmentRoutes);
app.use("/api/medical-records", medicalRecordRoutes);

// Establish the database connection and start the server
dbCon.connect((err: QueryError | null) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1); // Exit the process if database connection fails
  } else {
    console.log("✅ Database connected successfully");

    // Start the server after successful DB connection
    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  }
});
