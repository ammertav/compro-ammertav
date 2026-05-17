import React from "react";
import "./ServiceSection.css";

import robot from "../../../../assets/robotOurService.webp";
import logo1 from "../../../../assets/logoOS1.webp";
import logo2 from "../../../../assets/logoOS2.webp";
import logo3 from "../../../../assets/logoOS3.webp";
import logo4 from "../../../../assets/logoOS4.webp";
import logo5 from "../../../../assets/logoOS5.webp";
import logo6 from "../../../../assets/logoOS6.webp";

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
export default function ServiceSection() {
    return (
        <section className="servicesec-wrapper">
            <div className="servicesec-overlay-glow"></div>

            <section className="servicesec-section">
                <div className="servicesec-inner">
                    <div className="servicesec-layout">
                        <div className="servicesec-robot-box">
                            <img src={robot} alt="robot" className="servicesec-robot-image" />
                        </div>

                        <div className="servicesec-content">
                            <p className="servicesec-label-top">
                                OUR <span className="servicesec-label">SERVICE</span>
                            </p>

                            <h3>From Ideas to Digital Solutions</h3>

                            <p className="servicesec-text">
                                Transform your business with innovative technology! We deliver
                                digital solutions that accelerate growth, enhance productivity,
                                and ensure a competitive edge.
                            </p>

                            <div className="servicesec-grid">
                                {services.map((service, index) => (
                                    <button key={index} className="servicesec-btn">
                                        <div className="servicesec-left">
                                            <img src={service.icon} alt={service.label} />
                                        </div>

                                        <div className="servicesec-right">{service.label}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}