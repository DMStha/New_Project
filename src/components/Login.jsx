import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark pt-4">
      <div
        className="card p-4 bg-black shadow-lg text-white"
        style={{ width: "500px" }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <button className="btn btn-dark w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Do not have an account?{" "}
          <Link
            to="/signup"
            className="text-primary text-decoration-none link-offset-1-hover"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
