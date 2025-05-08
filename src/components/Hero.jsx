import React, { useState } from "react";
import "../styling/Hero.css";
import FormModal from "./FormModal";
import SubmissionsTable from "./SubmissionsTable";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  const handleGetStarted = () => {
    setShowModal(true);
  };

  const handleSubmit = (formData) => {
    const newSubmission = {
      ...formData,
      timestamp: new Date().toLocaleString(),
    };
    setSubmissions([...submissions, newSubmission]);
    // setShowModal(false);
    console.log('Submission received:', newSubmission); 
  };

  return (
    <>
      <section className="hero-section text-center py-5">
        <div className="container">
          <h1
            className="hero-title"
            style={{
              fontFamily: "Roboto",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 50px)",
              color: "#170F49",
            }}
          >
            Simplify Your Life with Our
            <br />
            Todo App
          </h1>

          <p
            className="hero-subtext"
            style={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "clamp(16px, 2.5vw, 18px)",
              color: "#6F6C90",
            }}
          >
            Stay organized and boost your productivity with our intuitive todo
            website.
            <br />
            Experience a modern approach to task management that fits your
            lifestyle.
          </p>

          <div className="hero-buttons mt-4 d-flex justify-content-center gap-3">
            <button 
              className="btn btn-danger px-4 py-2 rounded-pill fw-semibold" 
              style={{
                background: "#FF3E54",
                color: "#fff",
              }}
              onClick={handleGetStarted}
            >
              Get started
            </button>
            <button className="btn btn-outline-danger px-4 py-2 rounded-pill fw-semibold">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <FormModal 
          onClose={() => setShowModal(false)} 
          onSubmit={handleSubmit}
        />
      )}

      {submissions.length > 0 && (
        <div className="container my-5">
          <SubmissionsTable submissions={submissions} />
        </div>
      )}
    </>
  );
};

export default Hero;