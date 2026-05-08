import "./FAQSection.css";
import { useState } from "react";
import faqimage from "../../../../assets/Faqimage.png"
import Footer from "../../../../components/common/Footer/Footer";

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

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* TOP CONTENT */}
        <div className="faq-header">
          <span className="faq-tag">FAQ</span>

          <h2 className="faq-title">
            FIND ANSWERS TO YOUR QUESTIONS
          </h2>

          <p className="faq-description">
            We Are Your Trusted Partner In Innovative And Reliable
            Software Development. With Modern Technology,
            Expert Teams, And A Business-Focused Approach,
            We Are Ready To Deliver The Best Digital Solutions.
          </p>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="faq-content">
          {/* FAQ LIST */}
          <div className="faq-left">
            <div className="faq-list">
              {faqData.map((item, index) => (
                <div
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  key={index}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>

                    <span className="faq-icon">
                      {activeIndex === index ? "−" : "⌄"}
                    </span>
                  </button>

                  <div
                    className={`faq-answer-wrapper ${
                      activeIndex === index ? "show" : ""
                    }`}
                  >
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ IMAGE */}
          <div className="faq-right">
            <img
              src={faqimage}
              alt="FAQ"
              className="faq-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}