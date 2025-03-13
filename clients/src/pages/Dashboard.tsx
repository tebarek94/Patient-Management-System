import React from "react";
import Overview from "./Overview";
import HospitalStatsGraph from "./HospitalStatsGraph";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>

      <div className="cantainer">
          <HospitalStatsGraph />
          <Overview />
      </div>
    </div>
  );
};

export default Dashboard;
