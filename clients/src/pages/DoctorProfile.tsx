import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  photo: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Mahi Doe",
    specialization: "Cardiologist",
    photo: "https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg",
  },
  {
    id: 2,
    name: "Dr. Jemes Smith",
    specialization: "Neurologist",
    photo: "https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg",
  },
  {
    id: 3,
    name: "Dr. Ayele Wilson",
    specialization: "Pediatrician",
    photo: "https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg",
  },
   {
    id: 4,
    name: "Dr. kalid Doe",
    specialization: "Cardiologist",
    photo: "https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg",
  },
  {
    id: 5,
    name: "Dr. Tebarek Smith",
    specialization: "Neurologist",
    photo: "https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg",
  },
  {
    id: 6,
    name: "Dr. Abebe Wilson",
    specialization: "Pediatrician",
    photo: "https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg",
  },
];

const DoctorProfile: React.FC = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Meet Our Doctors</h2>
      <Row className="justify-content-center">
        {doctors.map((doctor) => (
          <Col key={doctor.id} md={4} sm={6} xs={12} className="mb-4">
            <Card className="shadow-sm text-center">
              <Card.Img
                variant="top"
                src={doctor.photo}
                alt={doctor.name}
                className="p-3 rounded-circle"
              />
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Text>{doctor.specialization}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DoctorProfile;
