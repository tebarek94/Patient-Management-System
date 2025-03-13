import React, { useState } from "react";
import { Table, Container, Form } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Billing from "../models/Billing"; // Import the Billing Interface

// Example billing data
const billingData: Billing[] = [
  {
    billing_id: "1",
    patient_id: "101",
    amount: 200,
    date: new Date("2025-03-01"),
    status: "Paid",
    payment_method: "Credit Card",
  },
  {
    billing_id: "2",
    patient_id: "102",
    amount: 350,
    date: new Date("2025-03-05"),
    status: "Unpaid",
    payment_method: "Cash",
  },
  {
    billing_id: "3",
    patient_id: "103",
    amount: 150,
    date: new Date("2025-03-10"),
    status: "Pending",
    payment_method: "Insurance",
  },
  // More billing records as needed...
];

const BillingTable: React.FC = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter billing data based on search query
  const filteredBillingData = billingData.filter(
    (billing) =>
      billing.patient_id.includes(searchQuery) ||
      billing.amount.toString().includes(searchQuery) ||
      billing.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      billing.payment_method.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Billing List</h2>

      {/* Search input */}
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by Patient ID, Amount, Status, or Payment Method"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>

      {/* Billing table */}
      <Table striped bordered hover responsive variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Payment Method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBillingData.map((billing, index) => (
            <tr key={billing.billing_id}>
              <td>{index + 1}</td>
              <td>{billing.patient_id}</td>
              <td>${billing.amount}</td>
              <td>{billing.date.toLocaleDateString()}</td>
              <td>{billing.status}</td>
              <td>{billing.payment_method}</td>
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

export default BillingTable;
