import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import MyNavbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";
import Home from "./components/Home";
import About from "./components/About";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("MindRisers");
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("secondary");
    } else {
      setMode("dark");
    }
  };

  return (
    <BrowserRouter>
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

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
