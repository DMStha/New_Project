import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo1 from "../assets/LOGO.png";

const MyNavbar = (props) => {
  const navigate = useNavigate();

  let iconClass = "bi";
  iconClass += props.mode === "dark" ? " bi-sun" : " bi-moon";

  return (
    <div className="Navbar-img">
      <Navbar
        bg={props.mode}
        variant={props.mode === "dark" ? "dark" : "light"}
        expand="lg"
        className="navbar-expand-lg"
      >
        <div className="container">
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="d-flex align-items-center"
          >
            <img src={logo1} className="logo me-2" alt="Brand Logo" />
            {props.title}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/userlist"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                User List
              </NavLink>

              {/* Signup Button */}
              <button
                className={`btn btn-${
                  props.mode === "dark" ? "dark" : "secondary"
                } ms-2`}
                onClick={() => navigate("/signup")}
              >
                <i className="bi bi-person-plus"></i> Signup
              </button>

              {/* Theme Toggle Button */}
              <button
                className={`btn btn-outline-${
                  props.mode === "dark" ? "light" : "dark"
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
