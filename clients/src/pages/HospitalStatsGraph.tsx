import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", Patients: 150, Appointments: 80 },
  { name: "Feb", Patients: 200, Appointments: 120 },
  { name: "Mar", Patients: 250, Appointments: 150 },
  { name: "Apr", Patients: 300, Appointments: 200 },
];

const HospitalStatsGraph: React.FC = () => {
  return (
    <div style={{ width: "100%", height: 300, padding: 20 }}>
      <h3 className="text-center">Hospital Statistics</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Patients" fill="#8884d8" />
          <Bar dataKey="Appointments" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HospitalStatsGraph;
