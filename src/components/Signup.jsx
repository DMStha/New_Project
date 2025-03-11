import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-dark pt-4">
      <div className="card p-4 shadow-lg bg-black">
        <h2 className="text-center mb-5 text-light">Sign Up</h2>
        <form>
          <div className="mb-3">
            <label className="form-label text-light">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
            />
          </div>
          <button className="btn btn-dark w-100">Sign Up</button>
        </form>
        <p className="text-center mt-3 text-light">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
