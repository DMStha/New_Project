import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container justify-content-between pt-3">
        <div className="row">
          {/* About Us Section */}
          <div className="about-us col-md-3 col-sm-8">
            <h5>ABOUT US</h5>
            <p>
              From packing and unpacking to <br />
              furniture disassembly and transportation, <br />
              we handle every detail with care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="quick-links col-md-3 col-sm-6">
            <h5>QUICK LINKS</h5>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Our Projects</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="get-in-touch col-md-3 col-sm-6">
            <h5>GET IN TOUCH</h5>
            <ul>
              <li>
                <i className="bi bi-telephone-fill text-teal"></i> &nbsp;
                <span>0433 546 954</span>
              </li>
              <li>
                <i className="bi bi-envelope-fill text-teal"></i> &nbsp;
                <span>upexmove@gmail.com</span>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill text-teal"></i> &nbsp;
                <span>Benowa QLD 4217</span>
              </li>
            </ul>
          </div>

          {/* Location Map */}
          <div className="location-map col-md-3 col-sm-6">
            <h5>LOCATION MAP</h5>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d14130.387211468187!2d85.30491725530963!3d27.698854018995497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d27.6967568!2d85.3093751!4m5!1s0x39eb19688077a1ff%3A0x3ea9b1c08b4234dc!2smindrisers%20location!3m2!1d27.7012628!2d85.321213!5e0!3m2!1sen!2snp!4v1737197622942!5m2!1sen!2snp"
                width="70%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container copyright">
        <hr />
        <div className="copyright-text d-flex justify-content-between">
          <div className="msg">
            <p>
              Copyright &copy; 2025
              <span className="text-teal"> UPEX MOVE</span>. All rights
              reserved.
            </p>
          </div>
          <div className="designed-by">
            <p>
              Designed By <span className="text-teal">UPEX MOVE</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
