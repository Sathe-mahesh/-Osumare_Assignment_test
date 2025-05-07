import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import "../styling/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-white pt-5 pb-3 mt-5">
      <div className="container">
       
        <div className="row">
         
          <div className="col-12 col-md-6 col-lg-6 mb-4">
            <h5 className="fw-bold d-flex align-items-center">
              <img
                src="/Nav_log.png"
                alt="Do List Logo"
                style={{
                  width: "100px",
                  height: "45px",
                  objectFit: "contain",
                  marginRight: "8px",
                }}
              />
            </h5>
            <p style={{ color: "#000000" }}>
              Subscribe to our newsletter for the latest features and updates delivered to you.
            </p>
            <div className="d-flex mb-2">
              <input
                type="email"
                placeholder="Your email here"
                className="form-control me-2"
              />
              <button
                className="btn"
                style={{
                  backgroundColor: "#FF3E54",
                  color: "white",
                  padding: "9.75px 19.5px",
                  gap: "6.5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                }}
              >
                Join
              </button>
            </div>
            <small style={{ whiteSpace: "nowrap", color: "#000000" }}>
              By subscribing, you consent to our Privacy Policy and agree to receive updates.
            </small>
          </div>

         
          <div className="col-12 col-md-6 col-lg-2 mb-4" style={{ color: "#000000" }}>
            <h6 className="fw-bold">Useful Links</h6>
            <ul className="list-unstyled">
              <li>Home Page</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog Posts</li>
              <li>FAQs</li>
            </ul>
          </div>

          
          <div className="col-12 col-md-6 col-lg-2 mb-4" style={{ color: "#000000" }}>
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>User Guide</li>
              <li>Community Forum</li>
              <li>Feedback</li>
              <li>Support</li>
            </ul>
          </div>

         
          <div className="col-12 col-md-6 col-lg-2 mb-4">
            <h6 className="fw-bold">Connect With Us</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <FaFacebookF className="me-2 text-danger" /> Facebook
              </li>
              <li>
                <FaInstagram className="me-2 text-danger" /> Instagram
              </li>
              <li>
                <FaXTwitter className="me-2 text-danger" /> X
              </li>
              <li>
                <FaLinkedinIn className="me-2 text-danger" /> LinkedIn
              </li>
              <li>
                <FaYoutube className="me-2 text-danger" /> YouTube
              </li>
            </ul>
          </div>
        </div>

      
        <div className="d-flex justify-content-between border-top pt-3 mt-4 small flex-column flex-md-row" style={{ color: "#000000", fontFamily: "Roboto" }}>
          <span>© 2024 Qsourare. All rights reserved.</span>
          <div className="d-flex gap-3">
            <a href="#" className="text-dark" style={{ textDecoration: "underline", fontFamily: "Roboto" }}>
              Privacy Policy
            </a>
            <a href="#" className="text-dark" style={{ textDecoration: "underline", fontFamily: "Roboto" }}>
              Terms of Service
            </a>
            <a href="#" className="text-dark" style={{ textDecoration: "underline", fontFamily: "Roboto" }}>
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
