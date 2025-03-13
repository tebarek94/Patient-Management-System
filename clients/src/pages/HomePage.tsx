import React from "react";
import DoctorProfile from "./DoctorProfile";
import HospitalStatsGraph from "./HospitalStatsGraph";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-center mt-4">Hospital Management System</h1>
      <HospitalStatsGraph />
      <DoctorProfile /> 

    </div>
  );
};

export default HomePage;
