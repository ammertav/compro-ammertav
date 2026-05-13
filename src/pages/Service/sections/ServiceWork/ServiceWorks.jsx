import React from "react";
import "./ServiceWorks.css"

export default function ServiceWorks() {
    return (
        <section className="workflowsec-wrapper">
            <div className="workflowsec-overlay"></div>

            <div className="workflowsec-container">
                <p className="workflowsec-subtitle">
                    HOW IT <span>WORKS</span>
                </p>

                <h2 className="workflowsec-title">
                    WEBSITE DEVELOPMENT PROCESS
                </h2>

                <p className="workflowsec-description">
                    A Structured And Transparent Workflow To Deliver High-Quality,
                    Scalable, And Reliable Websites Tailored To Your Business Needs.
                </p>

                <div className="workflowsec-slider">
                    {[
                        {
                            title: "Requirement & Consultation",
                            desc: "We discuss your business goals, target users, and technical requirements to ensure the right website solution from the start.",
                        },
                        {
                            title: "UI/UX Design",
                            desc: "We design a clean, modern, and responsive interface focused on usability, branding, and user experience.",
                        },
                        {
                            title: "Development",
                            desc: "We develop your website using clean code, modern frameworks, and performance-focused architecture.",
                        },
                        {
                            title: "Launch & Optimization",
                            desc: "We deploy, test, and optimize your website to ensure speed, security, and long-term stability.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="workflowsec-card"
                            style={{
                                clipPath:
                                    "path('M 24,0 Q 0,0 0,24 L 0,196 Q 0,220 24,220 L 256,220 Q 280,220 280,196 L 280,24 Q 280,0 256,0 L 198,0 Q 188,0 184,14 Q 180,22 168,22 L 112,22 Q 100,22 96,14 Q 92,0 82,0 Z')",
                            }}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}