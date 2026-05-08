import React from "react";
import "./OurServices.css";
import robot from "../../../../assets/robotOurService.png";
import build from "../../../../assets/buildOurService.png";
import innovation from "../../../../assets/InnovationOurService.png";
import deliver from "../../../../assets/DeliverOS.png";
import logo1 from "../../../../assets/logoOS1.png";
import logo2 from "../../../../assets/logoOS2.png";
import logo3 from "../../../../assets/logoOS3.png";
import logo4 from "../../../../assets/logoOS4.png";
import logo5 from "../../../../assets/logoOS5.png";
import logo6 from "../../../../assets/logoOS6.png";

const steps = [
  {
    title: "BUILD",
    text: "Lorem ipsum dolor sit amet consectetur. Id elementum quis et tincidunt donec.",
    image: build,
  },
  {
    title: "INNOVATE",
    text: "Lorem ipsum dolor sit amet consectetur. Mauris nisi diam arcu pulvinar.",
    image: innovation,
  },
  {
    title: "DELIVER",
    text: "Lorem ipsum dolor sit amet consectetur. Vehicula volutpat blandit.",
    image: deliver,
  },
];

const services = [
  {
    label: "CONVERSION LANDING PAGE",
    icon: logo1,
  },
  {
    label: "INTERNAL SYSTEM & WEB APPLICATION",
    icon: logo2,
  },
  {
    label: "CORPORATE & BUSINESS WEBSITE",
    icon: logo3,
  },
  {
    label: "BUSINESS MOBILE APPLICATION",
    icon: logo4,
  },
  {
    label: "E-COMMERCE & ONLINE SALES SYSTEM",
    icon: logo5,
  },
  {
    label: "CUSTOM SOFTWARE SOLUTIONS",
    icon: logo6,
  },
];

export default function OurServices() {
  return (
    <section className="workflow-section">
      <div className="overlay-glow"></div>

      <div className="container">
        <p className="sub">HOW WE <span className="subtitle">WORK</span></p>
        <h2 className="title">BUILD, INNOVATE, DELIVER</h2>
        <p className="description">
          TRANSFORMING IDEAS INTO INTELLIGENT SOLUTIONS
        </p>
    <div className="workflow-container">
        {steps.map((step, index) => (
            <div className="workflow-wrapper" key={index}>

            <div className="step-icon">
                <img src={step.image} alt={step.title} />
            </div>

            <div
                className="workflow-card"
                style={{
                clipPath:
                    "path('M 26,0 L 78,0 C 94,0 87,19 104,19 L 156,19 C 172,19 166,0 182,0 L 234,0 Q 260,0 260,26 L 260,220 Q 260,240 234,240 L 26,240 Q 0,240 0,220 L 0,26 Q 0,0 26,0 Z')",
                }}
            >
                <div className="workflow-glow"></div>

                <div className="workflow-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                </div>
            </div>

            </div>
        ))}
    </div>

        <div className="service-section">
            <div className="robot-box">
                <img
                    src={robot}
                    alt="robot"
                    className="robot-image"
                />
            </div>

          <div className="service-content">
            <p className="service-label">OUR <span className="service-label">SERVICE</span></p>
            <h3>From Ideas to Digital Solutions</h3>
            <p className="service-text">
              Transform your business with innovative technology! We deliver
              digital solutions that accelerate growth, enhance productivity,
              and ensure a competitive edge.
            </p>

            <div className="service-grid">
                {services.map((service, index) => (
                    <button key={index} className="service-btn">

                    <div className="service-left">
                        <img src={service.icon} alt={service.label} />
                    </div>

                    <div className="service-right">
                        {service.label}
                    </div>

                    </button>
                ))}
            </div>

            <button className="read-more-btn">READ MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
}
