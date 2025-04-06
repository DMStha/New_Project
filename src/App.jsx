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
import Users from "./components/Userdetails";
import Userlist from "./components/Userlist";
import ProductState from "./context/productState";

const App = (props) => {
  const [title, setTitle] = useState("MindRisers");
  const [mode, setMode] = useState("bg-color1");

  const toggleMode = () => {
    setMode(mode === "bg-color1" ? "bg-color2" : "bg-color1");
  };
  return (
    <ProductState>
      <BrowserRouter>
        <MyNavbar title={title} mode={mode} toggleMode={toggleMode} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner mode={mode} />
                <div className={`container-fluid py-5 bg-color1 ${mode}`}>
                  <Testimonials />
                </div>
              </>
            }
          />
          <Route path="/home" element={<Home mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/login" element={<Login mode={mode} />} />
          <Route path="/signup" element={<Signup mode={mode} />} />
          <Route path="/contact" element={<Contact mode={mode} />} />
          <Route
            path="/:user_id/:userName"
            element={<Users mode={mode} />}
          />{" "}
          <Route path="/userlist" element={<Userlist mode={mode} />} />
        </Routes>

        <Footer mode={mode} />
      </BrowserRouter>
    </ProductState>
  );
};

export default App;
