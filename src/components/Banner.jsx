import React from "react";

const Banner = (props) => {
  return (
    <section
      className={`container-fluid Banner bg-color1 ${props.mode} bg-gradient d-flex flex-column align-items-center justify-content-center min-vh-100`}
    >
      <div className="container text-center">
        <h1 className="text-warning">Welcome to React Project Mindrisers</h1>
        <p className="text-warning lead">
          We are a dedicated team that works closely with our clients to create
          a suitable and client-friendly environment.
        </p>
        <button className="btn btn-primary mt-3">Learn More</button>
      </div>
    </section>
  );
};

export default Banner;
