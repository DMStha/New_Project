import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import MyNavbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

const App = (props) => {
  const [title, setTitle] = useState("MindRisers");
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode(mode === "dark" ? "secondary" : "dark");
  };

  return (
    <BrowserRouter>
      <MyNavbar title={title} mode={mode} toggleMode={toggleMode} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner mode={mode} />
              <div className={`container-fluid py-5 bg-${mode}`}>
                <Testimonials />
              </div>
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
