import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo1 from "../assets/LOGO.png";

const MyNavbar = (props) => {
  const navigate = useNavigate();

  let iconClass = "bi";
  iconClass += props.mode === "bg-color2" ? " bi-moon" : " bi-sun";

  return (
    <>
      <div className="Navbar-img">
        <Navbar
          expand="lg"
          className={`navbar-expand-lg ${props.mode} bg-color1 text-white `}
        >
          <div className="container text-white ">
            <Navbar.Brand
              as={NavLink}
              to="/"
              className="d-flex align-items-center text-white"
            >
              <img src={logo1} className="logo me-2 " alt="Brand Logo" />
              {props.title}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto text-white ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active text-white "
                      : "nav-link text-white"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active text-white"
                      : "nav-link text-white"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active text-white"
                      : "nav-link text-white"
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/userlist"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active text-white"
                      : "nav-link text-white"
                  }
                >
                  User List
                </NavLink>
                <NavLink
                  to="News"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active text-white"
                      : "nav-link text-white"
                  }
                >
                  News
                </NavLink>

                {/* Signup Button */}
                <button
                  className={`btn  ms-2 text-white`}
                  onClick={() => navigate("/signup")}
                >
                  <i className="bi bi-person-plus"></i> Signup
                </button>

                {/* Theme Toggle Button */}
                <button
                  className={`btn border-0 btn-outline-${
                    props.mode === "bg-color1" ? "light" : "bg-color1"
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
    </>
  );
};

export default MyNavbar;
