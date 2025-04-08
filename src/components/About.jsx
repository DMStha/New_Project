import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/productContext";

const About = (props) => {
  const context = useContext(ProductContext);
  const { s, handleTextChange, text } = context;

  console.log(s);
  console.log(handleTextChange);

  useEffect(() => {
    handleTextChange();
  });

  return (
    <div className={`${props.mode} text-light py-5`}>
      <div className="container">
        <h2 className="text-center mb-4 text-warning">About Us</h2>
        <p className="lead text-center">
          Welcome to <strong>MindRisers</strong>, where we empower individuals
          with cutting-edge skills and technology.
        </p>
        {/* <p>{text}</p>      */}

        <div className="row mt-4">
          {/* Mission Card */}
          <div className="col-md-6 mb-3">
            <div className="card custom-card">
              <div className="card-body">
                <h4 className="text-warning">Our Mission</h4>
                <p>
                  At MindRisers, we are dedicated to providing top-quality
                  education and hands-on training to prepare you for a
                  successful future in technology.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Card */}
          <div className="col-md-6 mb-3">
            <div className="card custom-card">
              <div className="card-body">
                <h4 className="text-warning">Why Choose Us?</h4>
                <ul>
                  <li>Expert Instructors</li>
                  <li>Hands-on Learning</li>
                  <li>Real-world Projects</li>
                  <li>Career Guidance & Mentorship</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mt-5">
          <h3 className="text-warning">Meet Our Team</h3>
          <p>
            We are a group of passionate educators, developers, and mentors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
