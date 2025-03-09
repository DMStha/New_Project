import React from "react";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
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
          Don't have an account?{" "}
          <a href="/signup" className="text-primary">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
