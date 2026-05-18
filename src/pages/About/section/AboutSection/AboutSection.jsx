import { GlassCard } from "react-glass-ui";

import robotImg from "../../../../assets/aboutRobot.webp";
import bgImage from "../../../../assets/quotesBG.webp";
import hexagon from "../../../../assets/tinyhex.webp";

const steps = [
  { title: "250+", text: "PROJECT" },
  { title: "20+", text: "EMPLOYEES" },
  { title: "75+", text: "CLIENT" },
];

const innerGlow =
  "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)";

const overlayGlowRight =
  "radial-gradient(circle 360px at 80% 30%, rgba(0,140,255,0.18), transparent 70%)";

const overlayGlowLeft =
  "radial-gradient(circle 360px at 20% 70%, rgba(186,0,255,0.25), transparent 70%)";

export default function AboutSection() {
  return (
    <section className="relative bg-black text-white">
      {/* BG IMAGE — extends 400px past the section so the bottom of the quotes
          art bleeds into AboutWorkSection below. */}
      <div
        className="absolute inset-x-0 top-0 -bottom-[230px] z-0 bg-contain bg-bottom bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      />


      {/* OVERLAY GLOW — soft blue radial accent on the right */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: overlayGlowRight }}
      />

      {/* OVERLAY GLOW — soft purple radial accent on the left */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: overlayGlowLeft }}
      />

      {/* CONTENT */}
      <div className="relative z-[2] pt-24 md:pt-56 pb-12 md:pb-24">
        {/* MAIN GRID */}
        <div className="w-full max-w-container mx-auto px-page grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr] md:gap-8 lg:gap-16">
          {/* Robot */}
          <div className="flex justify-center md:justify-start flex-shrink-0">
            <img
              src={robotImg}
              alt="robot"
              className="max-w-full h-auto w-64 md:w-48 lg:w-80"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col items-start gap-4 lg:gap-5 max-md:bg-ink/40 max-md:backdrop-blur-sm max-md:rounded-2xl max-md:p-5">
            <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
              ABOUT <span className="text-accent-pink font-bold">US</span>
            </h2>

            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold">
              WHAT IS AMMERTAV?
            </h3>

            <p className="text-sm md:text-base leading-relaxed lg:max-w-prose">
              AMMERTAV is a software house focused on building innovative,
              scalable, and future-ready digital solutions. We help businesses
              grow through modern web and mobile applications.
            </p>

            <p className="text-base md:text-lg font-semibold">
              WE&rsquo;VE SUCCESSFULLY DELIVERED 250+ PROJECTS.
            </p>

            <p className="text-sm md:text-base leading-relaxed lg:max-w-prose">
              We specialize{" "}
              <span className="font-bold">in full-stack development</span>,
              cloud technologies, and advanced system integration&mdash;ensuring
              your business thrives in the digital era.
            </p>
          </div>
        </div>

        {/* WORKFLOW — scroll mobile + md, grid lg+ */}
        <div className="w-full max-w-container mx-auto px-6 md:px-page mt-12 md:mt-16 flex overflow-x-auto snap-x snap-mandatory gap-8 md:gap-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:overflow-visible">
          {steps.map((step, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-[260px] md:w-[300px] lg:w-full lg:max-w-[320px] lg:justify-self-center relative pt-9 flex justify-center"
            >
              {/* Floating hexagon icon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 size-[90px]">
                <img
                  src={hexagon}
                  alt=""
                  className="w-full h-full object-contain [filter:drop-shadow(0_0_10px_rgba(168,85,247,0.4))]"
                />
              </div>

              <GlassCard className="!w-full !rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02]">
                <div className="relative min-h-[240px] md:min-h-[280px] overflow-hidden flex flex-col justify-center items-center text-center pt-12 pb-6 px-6">
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[60%] blur-2xl pointer-events-none"
                    style={{ background: innerGlow }}
                  />

                  <h3 className="relative text-3xl md:text-5xl font-bold mb-2 md:mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="relative text-xs md:text-sm text-fg-muted leading-relaxed max-w-[22ch]">
                    {step.text}
                  </p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
