import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo1 from "../assets/LOGO.png";
import { Link } from "react-router-dom";

const MyNavbar = (props) => {
  let iconClass = "bi";
  if (props.mode === "dark") {
    iconClass += " bi-sun"; // Light mode icon ☀️
  } else {
    iconClass += " bi-moon"; // Dark mode icon 🌙
  }

  return (
    <div className="Navbar-img">
      <Navbar
        bg={props.mode}
        variant={props.mode === "dark" ? "dark" : "light"}
        expand="lg"
        className="navbar-expand-lg"
      >
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
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <button
                className={`btn ${
                  props.mode === "dark" ? "btn-light" : "btn-dark"
                } ms-2`}
              >
                <i className="bi bi-person-plus"></i> Signup
              </button>
              <button
                className={`btn ${
                  props.mode === "dark" ? "btn-light" : "btn-dark"
                } ms-2`}
                onClick={props.toggleMode}
              >
                <i className={iconClass}></i>
              </button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
