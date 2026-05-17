import { GlassCard } from "react-glass-ui";

import product1 from "../../../../assets/logohriesnew.webp";
import product2 from "../../../../assets/logobeilpos.webp";
import product3 from "../../../../assets/logofunnevnew.webp";

const products = [
  {
    id: 1,
    title: "Hries",
    image: product1,
    description:
      "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
  },
  {
    id: 2,
    title: "Beil POS",
    image: product2,
    description:
      "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
  },
  {
    id: 3,
    title: "CRM System",
    image: product3,
    description:
      "A complete CRM solution to manage customers, automate workflows, and improve business productivity.",
  },
];

const innerCardGlow = "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)";

export default function OurProduct() {
  return (
    // Top transparent so OurService BG can bleed through; gradient fades to bg-ink
    <section className="relative overflow-hidden w-full pt-8 md:pt-12 lg:pt-28 pb-6 ">
      {/* Gradient bg — transparent at top (shows OurService BG), solid ink after 400px */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(to bottom, transparent 0px, #040414 400px)" }}
      />

      <div className="relative z-[2] w-full max-w-container mx-auto">
        {/* HEADER — right-aligned, no glass at mobile */}
        <div className="px-page">
          <div className="flex flex-col gap-4 lg:gap-5 max-w-[760px] ml-auto text-right">
            <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
              OUR <span className="text-accent-pink font-bold">PRODUCT</span>
            </h2>

            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold">
              Your Smart Solution
            </h3>

            <p className="text-sm md:text-base text-fg-muted leading-relaxed lg:max-w-prose lg:ml-auto">
              We Bring You Innovative Technologies To Support Your
              Business&mdash;From Modern POS Systems, Ticketing Solutions,
              And CRM To Professional Websites&mdash;All In One Platform!
            </p>

            <button
              type="button"
              className="self-end w-fit rounded-full bg-gradient-to-r from-brand-purple to-[#ff00ff] text-white font-semibold cursor-pointer transition duration-300 px-7 py-3 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,0,255,0.35)]"
            >
              READ MORE
            </button>
          </div>
        </div>

        {/* PRODUCT CARDS — flex scroll up to lg, grid at lg+ (same as workflow) */}
        <div className="mt-12 md:mt-16 px-6 md:px-page flex overflow-x-auto snap-x snap-mandatory gap-8 md:gap-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-16 lg:overflow-visible">
          {products.map((item) => (
            <article
              className="snap-start flex-shrink-0 w-[260px] lg:w-full relative pt-10 flex justify-center"
              key={item.id}
            >
              {/* Floating logo — white circle on top of card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 size-16 md:size-20 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[72%] max-w-full h-auto object-contain"
                />
              </div>

              {/* GlassCard */}
              <GlassCard className="!w-full !rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02]">
                <div className="relative min-h-[260px] md:min-h-[280px] overflow-hidden flex flex-col justify-center text-center pt-12 pb-6 px-6">
                  {/* Inner radial glow */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[60%] blur-2xl pointer-events-none"
                    style={{ background: innerCardGlow }}
                  />

                  <h3 className="relative text-xl md:text-2xl font-bold mb-2 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="relative text-xs md:text-sm text-fg-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
