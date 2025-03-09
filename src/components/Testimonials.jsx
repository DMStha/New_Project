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
    speed: 500,
    autoplay: true, //  Enables autoplay
    autoplaySpeed: 2000, //  Slides change every 2 seconds
    slidesToShow: 3, // Adjusted for better display
    slidesToScroll: 1,
    pauseOnHover: true, //  Pauses when hovered
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="testimonial-container">
      <Slider {...settings}>
        {[truck1, truck2, truck1, truck2, truck1].map((image, index) => (
          <div key={index} className="testimonial-slide">
            <img src={image} alt={`Truck Kun ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
