import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { FaDownload, FaFilter, FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Patient Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="download">
              <Button variant="link">
                <FaDownload size={20} /> Download
              </Button>
            </Nav.Link>

            <Nav.Link as={Link} to="#filter">
              <Button variant="link">
                <FaFilter size={20} /> Filter
              </Button>
            </Nav.Link>

            <NavDropdown
              title={<FaEllipsisH size={20} />}
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item as={Link} to="addmedical">
                Add Medical Record
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/patients/:patientId/medical-records`}>
                Medical Records
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">More Options</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
