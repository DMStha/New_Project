import { useState } from "react";
import Footer from "./components/Footer";
import MyNavbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  const [title, setTitle] = useState("MindRisers");
  const [mode, setMode] = useState("dark"); // Store mode as a string

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("secondary");
    } else {
      setMode("dark");
    }
  };

  return (
    <>
      <MyNavbar title={title} mode={mode} toggleMode={toggleMode} />

      <Banner />

      <div
        className={
          mode === "dark" ? "bg-dark text-white" : "bg-light text-dark"
        }
      >
        <div className="container py-5">
          <Testimonials />
        </div>
      </div>

      <Footer />

      <BrowserRouter>
        <Routes>
          <Route path="./components/Home.jsx" element={<Home />} />
          <Route path="./components/About.jsx" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
