import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const AddMedicalRecord: React.FC<{ patientId: number }> = ({ patientId }) => {
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");
  const [medication, setMedication] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post(`/api/medical-records`, {
        patient_id: patientId,
        diagnosis,
        treatment,
        medication,
        record_date: date,
      })
      .then(() => {
        alert("Medical record added successfully!");
      })
      .catch((error) => {
        console.error("Error adding medical record:", error);
      });
  };

  return (
    <Container>
      <h1 className="text-center my-4">Add Medical Record</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="diagnosis">
          <Form.Label>Diagnosis</Form.Label>
          <Form.Control
            type="text"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="treatment">
          <Form.Label>Treatment</Form.Label>
          <Form.Control
            type="text"
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="medication">
          <Form.Label>Medication</Form.Label>
          <Form.Control
            type="text"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Record Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddMedicalRecord;
