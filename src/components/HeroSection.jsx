import React from "react";
import heroImg from "../assets/photo1.png"; 


const HeroSection = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
       
       
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={heroImg}
            alt="App Preview"
            className="img-fluid rounded shadow"
          />
        </div>

       
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fw-bold mb-3">Start Organizing Your Life Today</h2>
          <p
            className="mb-4"
            style={{ fontFamily: "Roboto", fontWeight: 400, fontSize: "18px" }}
          >
            Join us now and transform your productivity with our intuitive to-do
            list platform!
          </p>

          <div
            className="d-flex justify-content-center justify-content-md-start"
            style={{ gap: "12px" }}
          >
           
           
            <button
              style={{
                backgroundColor: "#FF3E54",
                color: "white",
                padding: "12px 24px",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Sign Up
            </button>

           
           
            <button
              style={{
                padding: "12px 24px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "transparent",
                color: "#333",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
