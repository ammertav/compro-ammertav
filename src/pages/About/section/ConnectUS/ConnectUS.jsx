import "./ConnectUS.css";
import { useState } from "react";
import {
    GlassCard,
    GlassButton,
    GlassInput,
} from "react-glass-ui";

import faqLogo from "../../../../assets/Faqimage.webp";

const faqData = [
    {
        question: "What makes our services stand out?",
        answer:
            "We combine modern technology, scalable architecture, and a business-focused approach to deliver reliable digital solutions.",
    },
    {
        question: "How do I get started?",
        answer:
            "You can contact us through email or consultation form to discuss your project requirements and goals.",
    },
    {
        question: "How long does software development take?",
        answer:
            "Project timelines depend on the complexity and scope, but we always provide a clear roadmap and milestones.",
    },
    {
        question: "Can I request custom software tailored to my business?",
        answer:
            "Yes. We specialize in custom software solutions designed specifically for your business needs.",
    },
    {
        question: "Do you provide customer support?",
        answer:
            "Absolutely. We provide maintenance and technical support after deployment.",
    },
    {
        question: "Is there a warranty after the project is completed?",
        answer:
            "Yes. We provide a post-launch warranty period to ensure system stability and reliability.",
    },
];

export default function ConnectUS() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="contactfaqsec">
            {/* BACKGROUND */}
            <div className="contactfaqsec-bg-wrapper" />

            {/* MAIN CONTAINER */}
            <div className="contactfaqsec-container">
                {/* CONTACT */}
                <div className="contactfaqsec-contact-wrapper">
                    <div className="contactfaqsec-heading">
                        <span>CONNECT</span>
                        <h2>WITH US</h2>
                    </div>

                    <GlassCard className="contactfaqsec-glass-shell">
                        <div className="contactfaqsec-glass-card-layout">
                            {/* LEFT */}
                            <div className="contactfaqsec-form-side">
                                <div className="contactfaqsec-form-group">
                                    <label>Name</label>
                                    <GlassInput placeholder="Input your name" />
                                </div>

                                <div className="contactfaqsec-form-group">
                                    <label>Phone</label>
                                    <GlassInput placeholder="Input your phone" />
                                </div>

                                <div className="contactfaqsec-form-group">
                                    <label>Email</label>
                                    <GlassInput
                                        type="email"
                                        placeholder="Input your email"
                                    />
                                </div>

                                <div className="contactfaqsec-form-group">
                                    <label>Message</label>
                                    <textarea placeholder="Write your message..." />
                                </div>

                                <GlassButton className="contactfaqsec-btn">
                                    Kirim Via WhatsApp
                                </GlassButton>
                            </div>

                            {/* RIGHT */}
                            <div className="contactfaqsec-info-side">
                                <div className="contactfaqsec-company">
                                    <h3>PT. Pandu Usaha Nusantara</h3>

                                    <div className="contactfaqsec-company-info">
                                        <p>Jl. Kota Semarang, Indonesia</p>
                                        <p>Phone : 082156789101</p>
                                        <p>Email : pausnusantara@gmail.com</p>
                                    </div>
                                </div>

                                <div className="contactfaqsec-map-wrapper">
                                    <iframe
                                        title="maps"
                                        src="https://www.google.com/maps?q=Semarang&output=embed"
                                        loading="lazy"
                                    />
                                    <p>Jl. Simongan No 24 RinginTelu, Semarang</p>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* FAQ */}
                <section className="contactfaqsec-section">
                    <div className="contactfaqsec-header">
                        <span className="contactfaqsec-tag">FAQ</span>

                        <h2 className="contactfaqsec-title">
                            FIND ANSWERS TO YOUR QUESTIONS
                        </h2>

                        <p className="contactfaqsec-description">
                            We Are Your Trusted Partner In Innovative And Reliable
                            Software Development. With Modern Technology, Expert Teams,
                            And A Business-Focused Approach, We Are Ready To Deliver
                            The Best Digital Solutions.
                        </p>
                    </div>

                    <div className="contactfaqsec-content">
                        {/* LEFT */}
                        <div className="contactfaqsec-left">
                            <div className="contactfaqsec-list">
                                {faqData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`contactfaqsec-item ${activeIndex === index ? "active" : ""
                                            }`}
                                    >
                                        <button
                                            className="contactfaqsec-question"
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            <span>{item.question}</span>
                                            <span className="contactfaqsec-icon">
                                                {activeIndex === index ? "−" : "⌄"}
                                            </span>
                                        </button>

                                        <div
                                            className={`contactfaqsec-answer-wrapper ${activeIndex === index ? "show" : ""
                                                }`}
                                        >
                                            <p className="contactfaqsec-answer">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="contactfaqsec-right">
                            <img
                                src={faqLogo}
                                alt="FAQ"
                                className="contactfaqsec-image"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}