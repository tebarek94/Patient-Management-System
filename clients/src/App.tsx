import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar"; 
import Sidebar from "./pages/Sidebar"; 
import HomePage from "./pages/HomePage";
import Patient from "./pages/Patients";
import DoctorTable from "./pages/DoctorTable";
import AppointmentTable from "./pages/AppointmentTable";
import UserTable from "./pages/UserTable";
import BillingTable from "./pages/BillingTable";
import DownloadReportPage from "./pages/DownloadReportPage";
import AddMedicalRecord from "./pages/AddMedicalRecord";
import MedicalRecords from "./pages/MedicalRecords";
import Dashboard from "./pages/Dashboard"; 

const App: React.FC = () => {
  return (
    <>
      <NavBar /> 
      
      <div className="app-layout">
        <Sidebar /> 
        <div className="main-content">
          <div className="content-container container">
            <Routes>
              <Route path="/" element={<Dashboard />} /> 
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/patientlist" element={<Patient />} />
              <Route path="/doctor" element={<DoctorTable />} />
              <Route path="/appointment" element={<AppointmentTable />} />
              <Route path="/user" element={<UserTable />} />
              <Route path="/billing" element={<BillingTable />} />
              <Route path="/download" element={<DownloadReportPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/patients/:patientId/medical-records" element={<MedicalRecords patientId={2} />} />
              <Route path="/patients/:patientId/add-record" element={<AddMedicalRecord patientId={2} />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
