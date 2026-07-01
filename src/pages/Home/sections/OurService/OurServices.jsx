import { Link } from "react-router-dom";
import { GlassCard } from "react-glass-ui";
import useDragScroll from "../../../../hooks/useDragScroll";
import SectionOrbs from "../../../../components/background/SectionOrbs";
import { ORB_CONFIG } from "../../../../components/background/orbConfig";

import arrow from "../../../../assets/arrow.webp";
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
    text: "We turn your ideas into solid, well-architected systems built on clean, scalable code.",
    image: build,
  },
  {
    title: "INNOVATE",
    text: "We apply the right modern technology to solve real business problems—not just to follow trends.",
    image: innovation,
  },
  {
    title: "DELIVER",
    text: "We ship on time, then support and optimize so your solution performs in the real world.",
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
  const dragRef = useDragScroll();

  // Service content reused at mobile (inside GlassCard) and md+ (plain)
  const renderServiceContent = () => (
    <>
      <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
        OUR <span className="font-bold text-accent-pink">SERVICE</span>
      </h2>

      <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
        FROM IDEAS TO DIGITAL SOLUTIONS
      </h3>

      <p className="text-sm leading-relaxed md:text-base lg:max-w-prose">
        Transform your business with innovative technology! We deliver
        digital solutions that accelerate growth, enhance productivity,
        and ensure a competitive edge.
      </p>

      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
        {services.map((service, index) => (
          <div
  key={index}
  className="!w-full !rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
  style={{
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  }}
>
  <button
    type="button"
    className="flex items-center w-full gap-3 p-4 text-xs font-semibold text-white bg-transparent border-0 cursor-pointer md:text-sm"
  >
    <div className="flex-shrink-0 w-6">
      <img loading="lazy" decoding="async" src={service.icon} alt="" />
    </div>
    <span className="leading-snug text-left">{service.label}</span>
  </button>
</div>
        ))}
      </div>
    </>
  );

  return (
    <section className="relative text-white">
      <SectionOrbs config={ORB_CONFIG.service} />

      {/* HEADER */}
      <div className="relative z-[3] w-full max-w-container mx-auto px-page pt-4 md:pt-8 flex flex-col items-start gap-3">
        <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
          HOW WE <span className="font-bold text-accent-pink">WORK</span>
        </h2>

        <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
          BUILD, INNOVATE, DELIVER
        </h3>

        <p className="text-base font-semibold md:text-lg text-fg-muted">
          TRANSFORMING IDEAS INTO INTELLIGENT SOLUTIONS
        </p>
        
        {/* BOTTOM FADE — smooth transition to next section */}
        {/* <div className="absolute inset-x-0 bottom-0 h-64 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-ink" /> */}
      </div>
      
      {/* CONTENT AREA */}
      <div className="relative ">
        {/* CONTENT */}
        <div className="relative z-[2] py-4 md:py-8">
          {/* WORKFLOW CARDS — flex scroll up to lg, grid at lg+ */}
          <div ref={dragRef} className="w-full max-w-container mx-auto px-6 md:px-page flex overflow-x-auto gap-8 md:gap-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-16 lg:overflow-visible">
            {steps.map((step, index) => (
              <div
                key={index}
                className="snap-start flex-shrink-0 w-[260px] lg:w-full relative pt-9 flex justify-center"
              >
                {/* Floating icon — slightly above the card */}
                <div className="absolute z-10 -translate-x-1/2 -top-4 left-1/2 size-20 md:size-28 lg:size-32">
                  <img loading="lazy" decoding="async"
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain [filter:drop-shadow(0_0_14px_rgba(168,85,247,0.35))]"
                  />
                </div>

                {/* GlassCard — same as About workflow */}
                <div
  className="!w-full !rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02]"
  style={{
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  }}
>
  <div className="relative min-h-[240px] md:min-h-[280px] overflow-hidden flex flex-col justify-center text-center pt-12 pb-6 px-6">
    {/* Inner glow */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[60%] blur-2xl pointer-events-none"
      style={{ background: innerCardGlow }}
    />

    <h4 className="relative mb-2 text-xl font-bold md:text-2xl md:mb-3">
      {step.title}
    </h4>
    <p className="relative text-xs leading-relaxed md:text-sm text-fg-muted">
      {step.text}
    </p>
  </div>
</div>

                {/* Arrow — exactly in middle of gap, responsive sizing */}
                {index < steps.length - 1 && (
                  <img loading="lazy" decoding="async"
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
            <div className="flex justify-center flex-shrink-0 md:justify-start">
              <img loading="lazy" decoding="async"
                src={robot}
                alt="robot"
                className="max-w-full h-auto w-64 md:w-48 lg:w-80 [filter:drop-shadow(0_0_25px_rgba(168,85,247,0.3))]"
              />
            </div>

            {/* Text column — GlassCard wrap at mobile, plain at md+ */}
            <div className="flex flex-col items-start w-full gap-4 lg:gap-5">
              {/* Mobile: wrapped in GlassCard */}
              <div className="w-full md:hidden">
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

              {/* READ MORE — glass button, routes to /service */}
              <Link to="/service" className="inline-flex transition-transform duration-300 hover:-translate-y-0.5">
                <GlassCard className="!rounded-full overflow-hidden">
                  <span className="hidden md:inline-flex items-center justify-center rounded-full text-white font-semibold cursor-pointer transition-all duration-300 bg-gradient-to-r from-brand-purple to-brand-violet text-xs md:px-5 md:py-3 lg:px-6 lg:text-sm hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(157,78,221,0.3)]">
                    READ MORE
                  </span>
                </GlassCard>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
