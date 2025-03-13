import React, { useState } from "react";
import { Table, Container, Form } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Patient1 from "../models/Patient"; // Import your Patient interface

// Example patient data
const patientsData: Patient1[] = [
  {
    patient_id: "1",
    first_name: "John",
    last_name: "Doe",
    dob: 19900101,
    gender: "Male",
    contact: 1234567890,
    address: "123 Street, City",
    email: "john.doe@example.com",
    created_at: new Date(),
  },
  {
    patient_id: "2",
    first_name: "Jane",
    last_name: "Smith",
    dob: 19920202,
    gender: "Female",
    contact: 9876543210,
    address: "456 Avenue, Town",
    email: "jane.smith@example.com",
    created_at: new Date(),
  },
  {
    patient_id: "2",
    first_name: "Jane",
    last_name: "Smith",
    dob: 19920202,
    gender: "Female",
    contact: 9876543210,
    address: "456 Avenue, Town",
    email: "jane.smith@example.com",
    created_at: new Date(),
  },
  {
    patient_id: "1",
    first_name: "John",
    last_name: "Doe",
    dob: 19900101,
    gender: "Male",
    contact: 1234567890,
    address: "123 Street, City",
    email: "john.doe@example.com",
    created_at: new Date(),
  },
  {
    patient_id: "2",
    first_name: "Jane",
    last_name: "Smith",
    dob: 19920202,
    gender: "Female",
    contact: 9876543210,
    address: "456 Avenue, Town",
    email: "jane.smith@example.com",
    created_at: new Date(),
  },
  {
    patient_id: "2",
    first_name: "Jane",
    last_name: "Smith",
    dob: 19920202,
    gender: "Female",
    contact: 9876543210,
    address: "456 Avenue, Town",
    email: "jane.smith@example.com",
    created_at: new Date(),
  },
   {
    patient_id: "1",
    first_name: "John",
    last_name: "Doe",
    dob: 19900101,
    gender: "Male",
    contact: 1234567890,
    address: "123 Street, City",
    email: "john.doe@example.com",
    created_at: new Date(),
  },
  {
    patient_id: "2",
    first_name: "Jane",
    last_name: "Smith",
    dob: 19920202,
    gender: "Female",
    contact: 9876543210,
    address: "456 Avenue, Town",
    email: "jane.smith@example.com",
    created_at: new Date(),
  },
  {
    patient_id: "2",
    first_name: "Jane",
    last_name: "Smith",
    dob: 19920202,
    gender: "Female",
    contact: 9876543210,
    address: "456 Avenue, Town",
    email: "jane.smith@example.com",
    created_at: new Date(),
  },
  {
    patient_id: "1",
    first_name: "John",
    last_name: "Doe",
    dob: 19900101,
    gender: "Male",
    contact: 1234567890,
    address: "123 Street, City",
    email: "john.doe@example.com",
    created_at: new Date(),
  },
  {
    patient_id: "2",
    first_name: "Jane",
    last_name: "Smith",
    dob: 19920202,
    gender: "Female",
    contact: 9876543210,
    address: "456 Avenue, Town",
    email: "jane.smith@example.com",
    created_at: new Date(),
  },
  {
    patient_id: "2",
    first_name: "Jane",
    last_name: "Smith",
    dob: 19920202,
    gender: "Female",
    contact: 9876543210,
    address: "456 Avenue, Town",
    email: "jane.smith@example.com",
    created_at: new Date(),
  },
];

const Patient: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPatients = patientsData.filter(
    (patient) =>
      patient.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Patient List</h2>

      {/* Search input */}
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by name, email, or address"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>

      {/* Patient table */}
      <Table striped bordered hover responsive variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient, index) => (
            <tr key={patient.patient_id}>
              <td>{index + 1}</td>
              <td>{patient.first_name}</td>
              <td>{patient.last_name}</td>
              <td>{new Date(patient.dob).toLocaleDateString()}</td>
              <td>{patient.gender}</td>
              <td>{patient.contact}</td>
              <td>{patient.address}</td>
              <td>{patient.email}</td>
              <td>{patient.created_at.toLocaleDateString()}</td>
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

export default Patient;
