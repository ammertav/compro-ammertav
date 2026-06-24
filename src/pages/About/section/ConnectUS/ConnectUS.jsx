import { useState } from "react";


import faqLogo from "../../../../assets/Faqimage.webp";
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

export default function ConnectUS() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="relative min-h-screen overflow-hidden text-white ">
      <SectionOrbs config={ORB_CONFIG.footer} />   

      {/* MAIN CONTAINER */}
      <div className="relative z-[2] w-full max-w-container mx-auto px-page pt-36 pb-section">
        {/* CONTACT */}
        <div>
          {/* HEADER */}
          <div className="flex flex-col gap-4 lg:gap-5 max-w-[760px] text-left items-start mb-8 md:mb-10">
            <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
              CONNECT{" "}
              <span className="font-bold text-accent-pink">WITH US</span>
            </h2>
            <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              LET&rsquo;S BUILD SOMETHING TOGETHER
            </h3>
          </div>

          <div
  className="!w-full !rounded-3xl overflow-hidden"
  style={{
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "0.5px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "24px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  }}
>
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] items-stretch gap-8 p-6 md:p-8">
    {/* LEFT — FORM */}
    <div className="flex flex-col w-full gap-4">
      <FormField label="Name">
        <input
          placeholder="Input your name"
          className="w-full p-4 text-white border-0 outline-none rounded-2xl placeholder:text-white/50"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        />
      </FormField>

      <FormField label="Phone">
        <input
          placeholder="Input your phone"
          className="w-full p-4 text-white border-0 outline-none rounded-2xl placeholder:text-white/50"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        />
      </FormField>

      <FormField label="Email">
        <input
          type="email"
          placeholder="Input your email"
          className="w-full p-4 text-white border-0 outline-none rounded-2xl placeholder:text-white/50"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        />
      </FormField>

      <FormField label="Message">
        <textarea
          placeholder="Write your message..."
          className="w-full min-h-[140px] p-4 rounded-2xl text-white outline-none border-0 resize-none placeholder:text-white/50"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        />
      </FormField>

      <button
        type="button"
        className="w-full h-[54px] rounded-2xl text-white font-semibold cursor-pointer border-0"
        style={{
          background: "linear-gradient(135deg, #6d00ff, #cf00ff)",
        }}
      >
        Kirim Via WhatsApp
      </button>
    </div>

    {/* RIGHT — INFO */}
    <div className="flex flex-col h-full gap-6">
      <div className="flex flex-col gap-3.5">
        <h3 className="text-xl font-bold md:text-2xl">
          PT. Pandu Usaha Nusantara
        </h3>
        <div className="flex flex-col gap-2 text-sm leading-relaxed md:text-base text-fg-muted">
          <p>Jl. Kota Semarang, Indonesia</p>
          <p>Phone : 082156789101</p>
          <p>Email : pausnusantara@gmail.com</p>
        </div>
      </div>

      <div className="w-full mt-auto">
        <iframe
          title="maps"
          src="https://www.google.com/maps?q=Semarang&output=embed"
          loading="lazy"
          className="w-full h-[220px] border-0 rounded-2xl block"
        />
        <p className="mt-2.5 text-sm text-white leading-relaxed">
          Jl. Simongan No 24 RinginTelu, Semarang
        </p>
      </div>
    </div>
  </div>
</div>
        </div>

        {/* FAQ */}
        <div className="mt-20 md:mt-28">
          {/* HEADER */}
          <div className="flex flex-col gap-4 lg:gap-5 max-w-[900px] text-left items-start mb-10 md:mb-14">
            <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
              <span className="font-bold text-accent-pink">FAQ</span>
            </h2>
            <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              FIND ANSWERS TO YOUR QUESTIONS
            </h3>
            <p className="text-sm leading-relaxed md:text-base text-fg-muted lg:max-w-prose">
              We Are Your Trusted Partner In Innovative And Reliable Software
              Development. With Modern Technology, Expert Teams, And A
              Business-Focused Approach, We Are Ready To Deliver The Best
              Digital Solutions.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-10 lg:gap-16">
            {/* LEFT — FAQ LIST */}
            <div className="flex flex-col w-full gap-4">
              {faqData.map((item, index) => {
                const active = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-2xl border bg-white/[0.04] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-0.5 ${
                      active
                        ? "border-accent-pink/45"
                        : "border-white/10 hover:border-accent-pink/35"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="flex items-center justify-between w-full gap-4 px-5 py-4 text-sm font-semibold text-left text-white bg-transparent border-0 cursor-pointer md:px-6 md:py-5 md:text-base"
                    >
                      <span>{item.question}</span>
                      <span className="flex-shrink-0 text-xl leading-none md:text-2xl">
                        {active ? "−" : "⌄"}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-[max-height] duration-400 ease-out ${
                        active ? "max-h-80" : "max-h-0"
                      }`}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed md:px-6 md:pb-6 md:text-base text-fg-muted">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT — IMAGE */}
            <div className="flex items-center justify-center w-full">
              <img loading="lazy" decoding="async"
                src={faqLogo}
                alt="FAQ"
                className="w-[clamp(220px,34vw,420px)] max-w-full h-auto object-contain [filter:drop-shadow(0_0_45px_rgba(140,0,255,0.45))]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-white md:text-base">{label}</label>
      {children}
    </div>
  );
}
