import React from "react";
import "../styling/Features.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const features = [
  {
    id: "01",
    title: "User-Friendly Interface",
    description:
      "Our platform offers seamless task management to boost your efficiency.",
    icon: logo1,
  },
  {
    id: "02",
    title: "Collaborate & Share Effortlessly",
    description:
      "Invite team members to work together and achieve your goals faster.",
    icon: logo2,
  },
  {
    id: "03",
    title: "Effortless Collaboration",
    description:
      "Invite team members to work together and achieve your goals faster.",
    icon: logo3,
  },
  {
    id: "04",
    title: "Seamless Access",
    description: "Stay connected and manage your tasks on the go with ease.",
    icon: logo4,
  },
];

const Features = () => {
  return (
    <section className="text-center py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold text-dark mb-5">
          Transform Your Productivity with Our <br />
          Innovative To-Do List Features
        </h2>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div
                className="card h-100 border-0 shadow-sm p-3 feature-card"
                style={{ backgroundColor: "#F7F7F7" }}
              >
                <div className="text-muted fw-bold text-end fs-4">
                  {feature.id}
                </div>
                <div className="my-3 text-center">
                  <div className="mb-3 text-start">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="feature-icon"
                    />
                  </div>
                </div>
                <h5
                  className="fw-bold"
                  style={{ color: "#0E1F51", textAlign: "left" }}
                >
                  {feature.title}
                </h5>

                <hr
                 className="custom-hr" 
                />

                <p
                  className=" small"
                  style={{
                    color: "#000000",
                    fontSize: "16px",
                    fontWeight: "400",
                    fontFamily: "Roboto",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
