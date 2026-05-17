import { GlassCard } from "react-glass-ui";

import bgImage from "../../../../assets/ourserviceBG.webp";
import arrow from "../../../../assets/arrow.png";
import robot from "../../../../assets/robotOurService.webp";
import build from "../../../../assets/buildOurService.webp";
import innovation from "../../../../assets/InnovationOurService.webp";
import deliver from "../../../../assets/DeliverOS.webp";

import logo1 from "../../../../assets/logoOS1.webp";
import logo2 from "../../../../assets/logoOS2.webp";
import logo3 from "../../../../assets/logoOS3.webp";
import logo4 from "../../../../assets/logoOS4.webp";
import logo5 from "../../../../assets/logoOS5.webp";
import logo6 from "../../../../assets/logoOS6.webp";

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
  { label: "CONVERSION LANDING PAGE", icon: logo1 },
  { label: "INTERNAL SYSTEM & WEB APPLICATION", icon: logo2 },
  { label: "CORPORATE & BUSINESS WEBSITE", icon: logo3 },
  { label: "BUSINESS MOBILE APPLICATION", icon: logo4 },
  { label: "E-COMMERCE & ONLINE SALES SYSTEM", icon: logo5 },
  { label: "CUSTOM SOFTWARE SOLUTIONS", icon: logo6 },
];

const innerCardGlow = "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)";

export default function OurServices() {
  // Service content reused at mobile (inside GlassCard) and md+ (plain)
  const renderServiceContent = () => (
    <>
      <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
        OUR <span className="text-accent-pink font-bold">SERVICE</span>
      </h2>

      <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold">
        From Ideas to Digital Solutions
      </h3>

      <p className="text-sm md:text-base leading-relaxed lg:max-w-prose">
        Transform your business with innovative technology! We deliver
        digital solutions that accelerate growth, enhance productivity,
        and ensure a competitive edge.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        {services.map((service, index) => (
          <GlassCard
            key={index}
            className="!w-full !rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
          >
            <button
              type="button"
              className="flex items-center gap-3 p-4 w-full bg-transparent border-0 text-white text-xs md:text-sm font-semibold cursor-pointer"
            >
              <div className="w-6 flex-shrink-0">
                <img src={service.icon} alt="" />
              </div>
              <span className="text-left leading-snug">{service.label}</span>
            </button>
          </GlassCard>
        ))}
      </div>
    </>
  );

  return (
    <section className="relative bg-black text-white">
      {/* HEADER — plain bg-ink */}
      <div className="relative z-[3] w-full max-w-container mx-auto px-page pt-4 md:pt-8 flex flex-col items-start gap-3">
        <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
          HOW WE <span className="text-accent-pink font-bold">WORK</span>
        </h2>

        <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold">
          BUILD, INNOVATE, DELIVER
        </h3>

        <p className="text-base md:text-lg font-semibold text-fg-muted">
          TRANSFORMING IDEAS INTO INTELLIGENT SOLUTIONS
        </p>
        
        {/* BOTTOM FADE — smooth transition to next section */}
        {/* <div className="absolute inset-x-0 bottom-0 h-64 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-ink" /> */}
      </div>
      
      {/* BG IMAGE AREA — starts from workflow card, extends below into OurProduct */}
      <div className="relative ">
        {/* BG image — extends 400px below into OurProduct */}
        <div
          className="absolute inset-x-0 top-0 -bottom-[400px] z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Glow overlay */}
        {/* <div
          className="absolute inset-x-0 top-0 -bottom-[400px] z-[1] pointer-events-none"
          style={{ background: overlayGlow }}
        /> */}



        {/* CONTENT */}
        <div className="relative z-[2] py-4 md:py-8">
          {/* WORKFLOW CARDS — flex scroll up to lg, grid at lg+ */}
          <div className="w-full max-w-container mx-auto px-6 md:px-page flex overflow-x-auto snap-x snap-mandatory gap-8 md:gap-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-16 lg:overflow-visible">
            {steps.map((step, index) => (
              <div
                key={index}
                className="snap-start flex-shrink-0 w-[260px] lg:w-full relative pt-9 flex justify-center"
              >
                {/* Floating icon — slightly above the card */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 size-20 md:size-28 lg:size-32">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain [filter:drop-shadow(0_0_14px_rgba(168,85,247,0.35))]"
                  />
                </div>

                {/* GlassCard — same as About workflow */}
                <GlassCard className="!w-full !rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02]">
                  <div className="relative min-h-[240px] md:min-h-[280px] overflow-hidden flex flex-col justify-center text-center pt-12 pb-6 px-6">
                    {/* Inner glow */}
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[60%] blur-2xl pointer-events-none"
                      style={{ background: innerCardGlow }}
                    />

                    <h4 className="relative text-xl md:text-2xl font-bold mb-2 md:mb-3">
                      {step.title}
                    </h4>
                    <p className="relative text-xs md:text-sm text-fg-muted leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </GlassCard>

                {/* Arrow — exactly in middle of gap, responsive sizing */}
                {index < steps.length - 1 && (
                  <img
                    src={arrow}
                    alt=""
                    className="absolute top-1/2 left-full -translate-y-1/2 z-[3] ml-1 lg:ml-2 w-6 md:w-8 lg:w-12"
                  />
                )}
              </div>
            ))}
          </div>

          {/* SERVICE — robot + service grid */}
          <div className="w-full max-w-container mx-auto px-page mt-16 md:mt-24 grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr] md:gap-8 lg:gap-16">
            {/* Robot — same responsive pattern as About */}
            <div className="flex justify-center md:justify-start flex-shrink-0">
              <img
                src={robot}
                alt="robot"
                className="max-w-full h-auto w-64 md:w-48 lg:w-80 [filter:drop-shadow(0_0_25px_rgba(168,85,247,0.3))]"
              />
            </div>

            {/* Text column — GlassCard wrap at mobile, plain at md+ */}
            <div className="flex flex-col items-start gap-4 lg:gap-5 w-full">
              {/* Mobile: wrapped in GlassCard */}
              <div className="md:hidden w-full">
                <GlassCard className="!w-full !rounded-2xl overflow-hidden">
                  <div className="flex flex-col items-start gap-4 p-5">
                    {renderServiceContent()}
                  </div>
                </GlassCard>
              </div>

              {/* md+: plain (no glass) */}
              <div className="hidden md:flex md:flex-col md:items-start md:gap-4 md:w-full">
                {renderServiceContent()}
              </div>

              {/* READ MORE — outside glass container */}
              <button
                type="button"
                className="w-fit rounded-full bg-gradient-to-r from-brand-purple to-[#ff00ff] text-white font-semibold cursor-pointer transition duration-300 px-7 py-3 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,0,255,0.35)]"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
