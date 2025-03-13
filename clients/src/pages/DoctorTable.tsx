import React, { useState } from "react";
import { Table, Container, Form } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Doctor from "../models/Doctor";

// Example doctor data
const doctorsData: Doctor[] = [
  {
    doctor_id: "1",
    first_name: "Alice",
    last_name: "Brown",
    specialization: "Cardiology",
    contact: 1234567890,
    email: "alice.brown@example.com",
    created_at: new Date(),
  },
  {
    doctor_id: "2",
    first_name: "Bob",
    last_name: "Green",
    specialization: "Neurology",
    contact: 9876543210,
    email: "bob.green@example.com",
    created_at: new Date(),
  },
  {
    doctor_id: "3",
    first_name: "Charlie",
    last_name: "White",
    specialization: "Pediatrics",
    contact: 1122334455,
    email: "charlie.white@example.com",
    created_at: new Date(),
  },
  {
    doctor_id: "1",
    first_name: "Alice",
    last_name: "Brown",
    specialization: "Cardiology",
    contact: 1234567890,
    email: "alice.brown@example.com",
    created_at: new Date(),
  },
  {
    doctor_id: "2",
    first_name: "Bob",
    last_name: "Green",
    specialization: "Neurology",
    contact: 9876543210,
    email: "bob.green@example.com",
    created_at: new Date(),
  },
  {
    doctor_id: "3",
    first_name: "Charlie",
    last_name: "White",
    specialization: "Pediatrics",
    contact: 1122334455,
    email: "charlie.white@example.com",
    created_at: new Date(),
  },
  {
    doctor_id: "1",
    first_name: "Alice",
    last_name: "Brown",
    specialization: "Cardiology",
    contact: 1234567890,
    email: "alice.brown@example.com",
    created_at: new Date(),
  },
  {
    doctor_id: "2",
    first_name: "Bob",
    last_name: "Green",
    specialization: "Neurology",
    contact: 9876543210,
    email: "bob.green@example.com",
    created_at: new Date(),
  },
  {
    doctor_id: "3",
    first_name: "Charlie",
    last_name: "White",
    specialization: "Pediatrics",
    contact: 1122334455,
    email: "charlie.white@example.com",
    created_at: new Date(),
  },
];

const DoctorTable: React.FC = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter doctors based on search query
  const filteredDoctors = doctorsData.filter(
    (doctor) =>
      doctor.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Doctor List</h2>

      {/* Search input */}
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by name, specialization, or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>

      {/* Doctor table */}
      <Table striped bordered hover responsive variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Specialization</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDoctors.map((doctor, index) => (
            <tr key={doctor.doctor_id}>
              <td>{index + 1}</td>
              <td>{doctor.first_name}</td>
              <td>{doctor.last_name}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.contact}</td>
              <td>{doctor.email}</td>
              <td>{doctor.created_at.toLocaleDateString()}</td>
              <td>
                <FaPencilAlt
                  size={18}
                  className="me-2 text-primary cursor-pointer"
                />
                <FaTrashAlt size={18} className="text-danger cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DoctorTable;
