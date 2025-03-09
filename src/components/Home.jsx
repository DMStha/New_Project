import React from "react";
import { Link } from "react-router-dom";
import App from "../App";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1>Welcome to MindRisers</h1>
        <p>Your journey to a better mindset starts here.</p>

        <button onClick={Banner} className="btn btn-primary mt-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
