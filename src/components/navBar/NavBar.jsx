import React from "react";
import log from "./Asset/Logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Asset/navbar.css";
const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={log} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className=" ms-auto  fw-bold menu-link ">
              <Nav.Link href="#home ">Home</Nav.Link>
              <Nav.Link href="#feature ">Features</Nav.Link>
              <Nav.Link href="#price">Pricing</Nav.Link>
              <Nav.Link href="#client">Testimonial</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              {" "}
              <div class="d-flex align-items-center ">
                <button
                  type="button"
                  class="btn btn-link px-3 me-2 text-decoration-none fw-bold text-dark"
                >
                  Login
                </button>
                <button type="button" class=" btn btn-primary me-3">
                  Get Started
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
