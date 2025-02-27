import { useState } from "react";
import Footer from "./components/Footer";
import MyNavbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("MindRisers");
  return (
    <>
      <MyNavbar title={title} />

      <Banner />

      <div className="bg-dark">
        <div className="container py-5">
          <Testimonials />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
