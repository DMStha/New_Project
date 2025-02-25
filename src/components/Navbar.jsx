import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo1 from "../assets/LOGO.png";

const MyNavbar = () => {
  return (
    <div className="Navbar-img ">
      <Navbar color="light" expand="lg" className="navbar-expand-lg">
        <div className="container">
          <a href="">
            <img src={logo1} className="logo" alt="" />
          </a>
          <Navbar.Brand href="#">Upex Move</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
