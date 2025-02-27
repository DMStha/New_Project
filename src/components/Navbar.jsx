import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import logo1 from "../assets/LOGO.png";

const MyNavbar = (props) => {
  return (
    <div className="Navbar-img">
      <Navbar expand="lg" className="navbar-expand-lg">
        <div className="container">
          <a href="#">
            <img src={logo1} className="logo" alt="Brand Logo" />
          </a>
          <Navbar.Brand href="#">
            <span className="px-1">{props.title}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">
                <i className="bi bi-house-door"></i> Home
              </Nav.Link>
              <Nav.Link href="#">
                <i className="bi bi-info-circle"></i> About
              </Nav.Link>
              <Nav.Link href="#">
                <i className="bi bi-envelope"></i> Contact
              </Nav.Link>
              <button className="btn btn-dark ms-2">
                <i className="bi bi-person-plus"></i> Signup
              </button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
