import React from "react";

const Contact = (props) => {
  return (
    <div className={`container-fluid   bg-color1 ${props.mode}  text-white`}>
      <div className="container py-5 ">
        <h2 className="text-center mb-4">Contact Us</h2>
        <p className="text-center">
          Have any questions? Feel free to reach out!
        </p>
        <div className="d-flex justify-content-center">
          <form className="w-50">
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-secondary w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
