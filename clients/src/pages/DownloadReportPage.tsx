import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaDownload } from "react-icons/fa"; // Filter icon for UI

const DownloadReportPage: React.FC = () => {
  const [reportType] = useState<string>("pdf"); // Default is PDF
  const [filter] = useState<string>("category"); // Default filter category
  const [category] = useState<string>("patients"); // Default category
  const [status] = useState<string>("active"); // Default status

  // Handle the change of report type
//   const handleReportTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setReportType((event.target as HTMLSelectElement).value);
//   };

//   // Handle filter change
//   const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setFilter((event.target as HTMLSelectElement).value);
//   };

//   // Handle category filter change
//   const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setCategory((event.target as HTMLSelectElement).value);
//   };

//   // Handle status filter change
//   const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>)  => {
//     setStatus((event.target as HTMLSelectElement).value);
//   };

  // Handle download action
  const handleDownload = () => {
    alert(`Downloading ${reportType.toUpperCase()} report for ${filter} with category: ${category} and status: ${status}`);
    // Logic to trigger the download of the selected report type and filter options
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="text-center">Download Report</h1>
          <Card className="shadow-lg border-0 rounded mt-4">
            <Card.Body>
              <h3 className="text-center">Select Report Type & Apply Filters</h3>
              <Form>
                {/* Report Type Selection */}
                <Row className="mb-3">
                  <Col sm={6} className="mx-auto">
                    <Form.Group controlId="formReportType">
                      <Form.Label>Select Report Format</Form.Label>
                      <Form.Control
                        as="select"
                        value={reportType}
                      >
                        <option value="pdf">PDF</option>
                        <option value="csv">CSV</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Filter Section */}
                <Row className="mb-3">
                  <Col sm={6} className="mx-auto">
                    <Form.Group controlId="formFilter">
                      <Form.Label>Apply Filter</Form.Label>
                      <Form.Control
                        as="select"
                        value={filter}
                      >
                        <option value="category">Category</option>
                        <option value="status">Status</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Conditional Filters */}
                {filter === "category" && (
                  <Row className="mb-3">
                    <Col sm={6} className="mx-auto">
                      <Form.Group controlId="formCategory">
                        <Form.Label>Choose Category</Form.Label>
                        <Form.Control
                          as="select"
                          value={category}
                        >
                          <option value="patients">Patients</option>
                          <option value="doctors">Doctors</option>
                          <option value="appointments">Appointments</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                )}

                {filter === "status" && (
                  <Row className="mb-3">
                    <Col sm={6} className="mx-auto">
                      <Form.Group controlId="formStatus">
                        <Form.Label>Choose Status</Form.Label>
                        <Form.Control
                          as="select"
                          value={status}
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                          <option value="pending">Pending</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                )}

                {/* Download Button */}
                <Row className="my-4">
                  <Col className="text-center">
                    <Button variant="primary" size="lg" onClick={handleDownload}>
                      <FaDownload size={20} className="me-2" />
                      Download {reportType.toUpperCase()} Report
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DownloadReportPage;
