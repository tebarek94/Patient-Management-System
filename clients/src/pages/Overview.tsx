import React from 'react';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';
import { FaUserInjured, FaProcedures, FaHospital, FaUsers } from 'react-icons/fa';

const Overview: React.FC = () => {
  return (
    <Container className=" my-10"> 
     <h1 className="text-center m-5">Overview</h1>

      <Row xs={1} sm={2} md={4} className="g-4">
       
        <Col>
          <Card className="shadow-lg border-0 rounded">
            <Card.Body>
              <div className="d-flex align-items-center">
                <FaUserInjured size={40} className="text-primary me-3" />
                <div>
                  <Card.Title>Patients</Card.Title>
                  <Card.Text className="h3 text-primary">500</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow-lg border-0 rounded">
            <Card.Body>
              <div className="d-flex align-items-center">
                <FaProcedures size={40} className="text-success me-3" />
                <div>
                  <Card.Title>Doctors</Card.Title>
                  <Card.Text className="h3 text-success">50</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Hospital Beds Card */}
        <Col>
          <Card className="shadow-lg border-0 rounded">
            <Card.Body>
              <div className="d-flex align-items-center">
                <FaHospital size={40} className="text-danger me-3" />
                <div>
                  <Card.Title>Hospital Beds</Card.Title>
                  <Card.Text className="h3 text-danger">200</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Staff Card */}
        <Col>
          <Card className="shadow-lg border-0 rounded">
            <Card.Body>
              <div className="d-flex align-items-center">
                <FaUsers size={40} className="text-warning me-3" />
                <div>
                  <Card.Title>Staff</Card.Title>
                  <Card.Text className="h3 text-warning">120</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <h2 className="text-center mb-3">More Information</h2>
          <div className="text-center">
            <Button  variant="primary" size="lg" className="me-3">
              View Doctors
            </Button>
            <Button  variant="success" size="lg">
              View Patients
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Overview;
