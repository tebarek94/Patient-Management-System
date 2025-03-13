import React, { useEffect, useState } from "react";
import { Table, Container, Button, Form } from "react-bootstrap";
import axios from "axios";

interface MedicalRecord {
  id: number;
  patient_id: number;
  diagnosis: string;
  treatment: string;
  medication: string;
  record_date: string;
}

interface MedicalRecordsProps {
  patientId: number; 
}

const MedicalRecords: React.FC<MedicalRecordsProps> = ({ patientId }) => {
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/medical-records/${patientId}`)  
      .then((response) => {
        console.log(response.data); 
        setRecords(response.data);  
      })
      .catch((error) => {
        console.error("Error fetching medical records:", error); 
      })
      .finally(() => {
        setLoading(false);
      });
  }, [patientId]); 

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecords = records.filter((record) => {
    return (
      record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.treatment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (record.medication && record.medication.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <Container>
      <h1 className="text-center my-4">Medical Records</h1>
      
      <Form.Control
        type="text"
        placeholder="Search by diagnosis, treatment, or medication..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4"
      />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Record Date</th>
              <th>Diagnosis</th>
              <th>Treatment</th>
              <th>Medication</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={4}>No medical records available</td>
              </tr>
            ) : (
              filteredRecords.map((record) => (
                <tr key={record.id}>
                  <td>{new Date(record.record_date).toLocaleDateString()}</td>
                  <td>{record.diagnosis}</td>
                  <td>{record.treatment}</td>
                  <td>{record.medication || "N/A"}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}
      
      <Button variant="primary" href={`/patients/${patientId}/add-record`}>
        Add New Record
      </Button>
    </Container>
  );
};

export default MedicalRecords;
