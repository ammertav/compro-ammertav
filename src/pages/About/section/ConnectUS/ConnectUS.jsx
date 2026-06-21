import { useState } from "react";
import { GlassCard, GlassButton, GlassInput } from "react-glass-ui";

import faqLogo from "../../../../assets/Faqimage.webp";
import bgImage from "../../../../assets/ammertavBG.webp";

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

// NOTE: bg layer is rotated 90deg clockwise — so a `to bottom` gradient in
// here visually becomes the RIGHT-edge fade after rotation, etc.
const sideFade =
  "linear-gradient(to right, #040414 0%, rgba(4,4,20,0.95) 8%, rgba(4,4,20,0.4) 14%, transparent 22%)," +
  "linear-gradient(to left, #040414 0%, rgba(4,4,20,1) 18%, rgba(4,4,20,0.65) 38%, rgba(4,4,20,0.25) 48%, transparent 58%)," +
  "linear-gradient(to top, #040414 0%, rgba(4,4,20,0.95) 10%, rgba(4,4,20,0.4) 18%, transparent 30%)," +
  // Visually RIGHT-edge fade (post-rotation)
  "linear-gradient(to bottom, #040414 0%, rgba(4,4,20,0.95) 10%, rgba(4,4,20,0.4) 18%, transparent 30%)";

export default function ConnectUS() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="relative overflow-hidden min-h-screen bg-ink text-white">
      {/* BG IMAGE — rotated 90deg, oversized, with side/bottom fades */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[max(140vw,1600px)] h-[max(140vh,1200px)] rotate-90 pointer-events-none overflow-hidden">
        <div
          className="absolute -inset-[10%] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: sideFade }}
        />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-[2] w-full max-w-container mx-auto px-page pt-36 pb-section">
        {/* CONTACT */}
        <div>
          {/* HEADER */}
          <div className="flex flex-col gap-4 lg:gap-5 max-w-[760px] text-left items-start mb-8 md:mb-10">
            <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
              CONNECT{" "}
              <span className="text-accent-pink font-bold">WITH US</span>
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold">
              LET&rsquo;S BUILD SOMETHING TOGETHER
            </h3>
          </div>

          <GlassCard
            className="!w-full !rounded-3xl overflow-hidden"
            borderColor="#ffffff"
            borderSize={0.5}
            borderOpacity={0.15}
            borderRadius={24}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] items-stretch gap-8 p-6 md:p-8">
              {/* LEFT — FORM */}
              <div className="w-full flex flex-col gap-4">
                <FormField label="Name">
                  <GlassInput placeholder="Input your name" />
                </FormField>

                <FormField label="Phone">
                  <GlassInput placeholder="Input your phone" />
                </FormField>

                <FormField label="Email">
                  <GlassInput type="email" placeholder="Input your email" />
                </FormField>

                <FormField label="Message">
                  <textarea
                    placeholder="Write your message..."
                    className="w-full min-h-[140px] p-4 rounded-2xl bg-white/10 text-white outline-none border-0 resize-none placeholder:text-white/50"
                  />
                </FormField>

                <GlassButton className="!w-full !h-[54px] !rounded-2xl !bg-gradient-to-br !from-[#6d00ff] !to-[#cf00ff] !text-white !font-semibold">
                  Kirim Via WhatsApp
                </GlassButton>
              </div>

              {/* RIGHT — INFO */}
              <div className="flex flex-col gap-6 h-full">
                <div className="flex flex-col gap-3.5">
                  <h3 className="text-xl md:text-2xl font-bold">
                    PT. Pandu Usaha Nusantara
                  </h3>
                  <div className="flex flex-col gap-2 text-sm md:text-base text-fg-muted leading-relaxed">
                    <p>Jl. Kota Semarang, Indonesia</p>
                    <p>Phone : 082156789101</p>
                    <p>Email : pausnusantara@gmail.com</p>
                  </div>
                </div>

                <div className="mt-auto w-full">
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
          </GlassCard>
        </div>

        {/* FAQ */}
        <div className="mt-20 md:mt-28">
          {/* HEADER */}
          <div className="flex flex-col gap-4 lg:gap-5 max-w-[900px] text-left items-start mb-10 md:mb-14">
            <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
              <span className="text-accent-pink font-bold">FAQ</span>
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold">
              FIND ANSWERS TO YOUR QUESTIONS
            </h3>
            <p className="text-sm md:text-base text-fg-muted leading-relaxed lg:max-w-prose">
              We Are Your Trusted Partner In Innovative And Reliable Software
              Development. With Modern Technology, Expert Teams, And A
              Business-Focused Approach, We Are Ready To Deliver The Best
              Digital Solutions.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-10 lg:gap-16">
            {/* LEFT — FAQ LIST */}
            <div className="w-full flex flex-col gap-4">
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
                      className="w-full flex justify-between items-center gap-4 px-5 py-4 md:px-6 md:py-5 bg-transparent border-0 text-left text-white text-sm md:text-base font-semibold cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <span className="flex-shrink-0 text-xl md:text-2xl leading-none">
                        {active ? "−" : "⌄"}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-[max-height] duration-400 ease-out ${
                        active ? "max-h-80" : "max-h-0"
                      }`}
                    >
                      <p className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-fg-muted leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT — IMAGE */}
            <div className="flex justify-center items-center w-full">
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
      <label className="text-white text-sm md:text-base">{label}</label>
      {children}
    </div>
  );
}
