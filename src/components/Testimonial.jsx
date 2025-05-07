import React from "react";
import "../styling/Testimonial.css";
import profileImg from "../assets/image_girl.png"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="testimonial-section py-5 bg-white">
      <div className="container">
        <h3
          className=" fw-bold"
          style={{
            fontFamily: "Roboto",
            fontWeight: 700,
            fontSize: "48px",
            color: "#0E1F51",
          }}
        >
          Customer Testimonials
        </h3>

        <p className=" custom-heading">
          This tool has transformed my productivity and organization!
        </p>

        <div className="row align-items-center mt-4">
         
          <div className="col-md-8">
            <div className="quote-box position-relative p-4">
              <p className="fw-bold fs-5">
                “Using this website has made my tasks so much easier! I can't
                imagine my day without it.”
              </p>
              <div className="d-flex align-items-center mt-4">
                <div
                  className="bg-danger rounded-1 me-3"
                  style={{ width: "20px", height: "20px" }}
                ></div>
                <div>
                  <strong>Sherri Cronin</strong>
                  <p className="mb-0 small text-muted">
                    Project Manager, TechCorp
                  </p>
                </div>
              </div>

             

              <div className="mt-4 d-flex gap-2">
  <button className="btn btn-outline-danger rounded-circle px-2 py-1 d-flex align-items-center justify-content-center">
    <FaChevronLeft />
  </button>
  <button className="btn btn-danger rounded-circle px-2 py-1 d-flex align-items-center justify-content-center">
    <FaChevronRight />
  </button>
</div>

            </div>
          </div>

         
          <div className="col-md-4">
            <div className="image-frame">
              <img
                src={profileImg}
                alt="Customer"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
