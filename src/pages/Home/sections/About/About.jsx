import { Link } from "react-router-dom";
import { GlassCard } from "react-glass-ui";
import useDragScroll from "../../../../hooks/useDragScroll";
import Client from "./Client";
import SectionOrbs from "../../../../components/background/SectionOrbs";
import { ORB_CONFIG } from "../../../../components/background/orbConfig";

import robotImg from "../../../../assets/aboutRobotHome.webp";
import hexagon from "../../../../assets/tinyhex.webp";

const steps = [
  { title: "250+", text: "PROJECT" },
  { title: "20+", text: "EMPLOYEES" },
  { title: "75+", text: "CLIENT" },
];

const innerGlow = "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)";

export default function About() {
  const dragRef = useDragScroll();

  return (
    <section className="relative text-white">
      <SectionOrbs config={ORB_CONFIG.about} />

      {/* CONTENT */}
      <div className="relative z-[2] py-16 md:py-8">
        {/* MAIN GRID */}
        <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto max-w-container px-page md:grid-cols-2 md:gap-8 lg:gap-16">
          {/* Robot — center at mobile, hug column at md+ */}
          <div className="flex justify-center flex-shrink-0 md:justify-start">
            <img loading="lazy" decoding="async"
              src={robotImg}
              alt="robot"
              className="w-64 h-auto max-w-full md:w-48 lg:w-80"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col items-start gap-4 lg:gap-5 max-md:bg-ink/40 max-md:backdrop-blur-sm max-md:rounded-2xl max-md:p-5">
            <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
              ABOUT <span className="font-bold text-accent-pink">US</span>
            </h2>

            <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              WHAT IS AMMERTAV?
            </h3>

            <p className="text-sm leading-relaxed md:text-base lg:max-w-prose">
              AMMERTAV is a software house focused on building innovative, scalable, and future-ready digital solutions.
              We help businesses grow through modern web and mobile applications.
            </p>

            <p className="text-base font-semibold md:text-lg">
              WE&rsquo;VE SUCCESSFULLY DELIVERED 250+ PROJECTS.
            </p>

            <p className="text-sm leading-relaxed md:text-base lg:max-w-prose">
              We specialize <span className="font-bold">in full-stack development</span>, cloud technologies, and advanced system integration&mdash;ensuring your business thrives in the digital era.
            </p>

            <Link to="/about-us" className="inline-flex transition-transform duration-300 hover:-translate-y-0.5">
              <GlassCard className="!rounded-full overflow-hidden">
                <span className="hidden md:inline-flex items-center justify-center rounded-full text-white font-semibold cursor-pointer transition-all duration-300 bg-gradient-to-r from-brand-purple to-brand-violet text-xs md:px-5 md:py-3 lg:px-6 lg:text-sm hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(157,78,221,0.3)]">
                  READ MORE
                </span>
              </GlassCard>
            </Link>
          </div>
        </div>

        {/* WORKFLOW — horizontal scroll mobile, grid md+ */}
        <div ref={dragRef} className="w-full max-w-container mx-auto px-6 md:px-page mt-12 md:mt-16 flex overflow-x-auto gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              className="snap-start flex-shrink-0 w-[260px] md:w-full md:max-w-[320px] md:justify-self-center md:last:col-span-2 lg:last:col-span-1 relative pt-9 flex justify-center"
              key={index}
            >
              {/* Floating hexagon icon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 size-[90px]">
                <img loading="lazy" decoding="async"
                  src={hexagon}
                  alt=""
                  className="w-full h-full object-contain [filter:drop-shadow(0_0_10px_rgba(168,85,247,0.4))]"
                />
              </div>

              {/* Ganti GlassCard dengan div glassmorphism */}
<div className="relative w-full rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02]"
  style={{
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
  }}
>
  <div className="relative min-h-[240px] md:min-h-[280px] overflow-hidden flex flex-col justify-center items-center text-center pt-12 pb-6 px-6">
    {/* Inner radial glow */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[60%] blur-2xl pointer-events-none"
      style={{ background: innerGlow }}
    />

    <h3 className="relative mb-2 text-3xl font-bold leading-tight md:text-5xl md:mb-3">
      {step.title}
    </h3>
    <p className="relative text-xs md:text-sm text-fg-muted leading-relaxed max-w-[22ch]">
      {step.text}
    </p>
  </div>
</div>
            </div>
          ))}
        </div>

        {/* CLIENT MARQUEE */}
        <div>
          <h2 className="tracking-[6px] text-center mt-24 font-thin text-lg md:text-xl uppercase">
            OUR <span className="font-bold text-accent-pink">CLIENT</span>
          </h2>
          <Client />
        </div>
      </div>
    </section>
  );
}
