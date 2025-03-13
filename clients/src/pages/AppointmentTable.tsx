import React, { useState } from "react";
import { Table, Container, Form } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Appointment from "../models/Appointment"; // Import Appointment Interface

// Example appointment data
const appointmentsData: Appointment[] = [
  {
    appointment_id: "1",
    patient_name: "Alice Brown",
    doctor_name: "Dr. John Smith",
    date: "2025-03-20",
    time: "10:00 AM",
    status: "Pending",
  },
  {
    appointment_id: "2",
    patient_name: "Bob Green",
    doctor_name: "Dr. Emily White",
    date: "2025-03-21",
    time: "2:00 PM",
    status: "Completed",
  },
  {
    appointment_id: "3",
    patient_name: "Alice Brown",
    doctor_name: "Dr. John Smith",
    date: "2025-03-20",
    time: "10:00 AM",
    status: "Pending",
  },
  {
    appointment_id: "4",
    patient_name: "Bob Green",
    doctor_name: "Dr. Emily White",
    date: "2025-03-21",
    time: "2:00 PM",
    status: "Completed",
  },
  // More appointment records as needed...
];

const AppointmentTable: React.FC = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter appointment data based on search query
  const filteredAppointmentsData = appointmentsData.filter(
    (appointment) =>
      appointment.patient_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.doctor_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Appointment List</h2>

      {/* Search input */}
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by Patient Name, Doctor Name, Date, or Status"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>

      {/* Appointment table */}
      <Table striped bordered hover responsive variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointmentsData.map((appointment, index) => (
            <tr key={appointment.appointment_id}>
              <td>{index + 1}</td>
              <td>{appointment.patient_name}</td>
              <td>{appointment.doctor_name}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.status}</td>
              <td>
                <FaPencilAlt size={18} className="me-2 text-primary cursor-pointer" />
                <FaTrashAlt size={18} className="text-danger cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AppointmentTable;
