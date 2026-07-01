import { useState } from "react";
import faqimage from "../../../../assets/Faqimage.webp";
import SectionOrbs from "../../../../components/background/SectionOrbs";
import { ORB_CONFIG } from "../../../../components/background/orbConfig";

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
    <section className="relative w-full text-white py-section">
      <SectionOrbs config={ORB_CONFIG.faq} />

      <div className="relative z-[2] w-full max-w-container mx-auto px-page">
        {/* HEADER — left-aligned at all viewports */}
        <div className="flex flex-col gap-4 lg:gap-5 max-w-[850px] text-left items-start mb-12 md:mb-16">
          <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
            <span className="text-accent-pink font-bold">FAQ</span>
          </h2>

          <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold">
            FIND ANSWERS TO YOUR QUESTIONS
          </h3>

          <p className="text-sm md:text-base text-fg-muted leading-relaxed lg:max-w-prose">
            Have questions before we start? Here are the answers our
            clients ask most&mdash;about our process, timelines, support,
            and how we turn your ideas into working solutions.
          </p>
        </div>

        {/* CONTENT — FAQ list + image */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* FAQ LIST — order 1 at lg+ (left side) */}
          <div className="w-full flex flex-col gap-3 md:gap-4 lg:order-1">
            {faqData.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-surface backdrop-blur-md rounded-2xl border overflow-hidden transition-all duration-300 hover:border-accent-pink/35 hover:-translate-y-0.5 ${
                    isOpen ? "border-accent-pink/45" : "border-surface-border"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full bg-transparent border-0 cursor-pointer flex justify-between items-center gap-4 p-5 md:p-6 text-left text-white font-semibold text-base md:text-lg leading-snug"
                  >
                    <span>{item.question}</span>
                    <span className="flex-shrink-0 text-2xl leading-none">
                      {isOpen ? "−" : "⌄"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                      isOpen ? "max-h-[320px]" : "max-h-0"
                    }`}
                  >
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-fg-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* IMAGE — first at mobile/md (top), right column at lg+ */}
          <div className="order-first lg:order-2 flex justify-center">
            <img loading="lazy" decoding="async"
              src={faqimage}
              alt="FAQ"
              className="max-w-full h-auto object-contain [filter:drop-shadow(0_0_45px_rgba(140,0,255,0.45))] w-44 md:w-56 lg:w-80 xl:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
