import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import truck1 from "../assets/Truck_Kun.png";
import truck2 from "../assets/Truck_Kun.jpg";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2, // Adjusted for better display on smaller screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src={truck1}
          alt="Truck Kun"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
      <div>
        <img
          src={truck2}
          alt="Truck Kun"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
      <div>
        <img
          src={truck1}
          alt="Truck Kun"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
      <div>
        <img
          src={truck2}
          alt="Truck Kun"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
      <div>
        <img
          src={truck1}
          alt="Truck Kun"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
      <div>
        <img
          src={truck2}
          alt="Truck Kun"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
    </Slider>
  );
};

export default Testimonials;
