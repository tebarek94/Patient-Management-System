import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaUserInjured, FaUserMd, FaCalendarCheck, FaFileInvoiceDollar, FaUsers, FaChartBar } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul className="sidebar-menu">
        <li><Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link></li>
        <li><Link to="/patientlist"><FaUserInjured /> Patients List</Link></li>
        <li><Link to="/doctor"><FaUserMd /> Doctors</Link></li>
        <li><Link to="/appointment"><FaCalendarCheck /> Appointments</Link></li>
        <li><Link to="/billing"><FaFileInvoiceDollar /> Billing</Link></li>
        <li><Link to="/user"><FaUsers /> User List</Link></li>
        <li><Link to="/patients/:patientId/medical-records"><FaChartBar /> Medical Records </Link></li>
        <li><Link to="/download"><FaChartBar /> Reports</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
