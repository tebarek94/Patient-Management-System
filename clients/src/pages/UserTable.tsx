import React, { useState } from "react";
import { Table, Container, Form } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import User from "../models/User"; // Import the User Interface

// Example user data
const usersData: User[] = [
  {
    user_id: "1",
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    created_at: new Date(),
  },
  {
    user_id: "2",
    first_name: "Jane",
    last_name: "Smith",
    email: "jane.smith@example.com",
    role: "Doctor",
    status: "Active",
    created_at: new Date(),
  },
  {
    user_id: "3",
    first_name: "Mary",
    last_name: "Johnson",
    email: "mary.johnson@example.com",
    role: "Patient",
    status: "Inactive",
    created_at: new Date(),
  },
  {
    user_id: "1",
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    created_at: new Date(),
  },
  {
    user_id: "2",
    first_name: "Jane",
    last_name: "Smith",
    email: "jane.smith@example.com",
    role: "Doctor",
    status: "Active",
    created_at: new Date(),
  },
  {
    user_id: "3",
    first_name: "Mary",
    last_name: "Johnson",
    email: "mary.johnson@example.com",
    role: "Patient",
    status: "Inactive",
    created_at: new Date(),
  },
  {
    user_id: "1",
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    created_at: new Date(),
  },
  {
    user_id: "2",
    first_name: "Jane",
    last_name: "Smith",
    email: "jane.smith@example.com",
    role: "Doctor",
    status: "Active",
    created_at: new Date(),
  },
  {
    user_id: "3",
    first_name: "Mary",
    last_name: "Johnson",
    email: "mary.johnson@example.com",
    role: "Patient",
    status: "Inactive",
    created_at: new Date(),
  },
  {
    user_id: "1",
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    created_at: new Date(),
  },
  {
    user_id: "2",
    first_name: "Jane",
    last_name: "Smith",
    email: "jane.smith@example.com",
    role: "Doctor",
    status: "Active",
    created_at: new Date(),
  },
  {
    user_id: "3",
    first_name: "Mary",
    last_name: "Johnson",
    email: "mary.johnson@example.com",
    role: "Patient",
    status: "Inactive",
    created_at: new Date(),
  },
];

const UserTable: React.FC = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter user data based on search query
  const filteredUsersData = usersData.filter(
    (user) =>
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">User List</h2>

      {/* Search input */}
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by Full Name, Email, Role, or Status"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>

      {/* User table */}
      <Table striped bordered hover responsive variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsersData.map((user, index) => (
            <tr key={user.user_id}>
              <td>{index + 1}</td>
              <td>{`${user.first_name} ${user.last_name}`}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
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

export default UserTable;
