import { useEffect, useRef } from "react";
import { GlassCard } from "react-glass-ui";

import client1 from "../../../../assets/logohriesnew.webp";
import client2 from "../../../../assets/logobeilpos.webp";
import client3 from "../../../../assets/logofunnevnew.webp";
import client4 from "../../../../assets/logofunnevnew.webp";
import client5 from "../../../../assets/logofunnevnew.webp";
import bgImage from "../../../../assets/ourclientBG.webp";

const clients = [
  {
    id: 1,
    title: "Hries",
    image: client1,
    description:
      "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
  },
  {
    id: 2,
    title: "Beil POS",
    image: client2,
    description:
      "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
  },
  {
    id: 3,
    title: "CRM System",
    image: client3,
    description:
      "A complete CRM solution to manage customers, automate workflows, and improve business productivity.",
  },
  {
    id: 4,
    title: "ERP Solution",
    image: client4,
    description:
      "Integrated enterprise management system for finance, HR, inventory, and operations management.",
  },
  {
    id: 5,
    title: "Smart Analytics",
    image: client5,
    description:
      "Business intelligence dashboard with real-time analytics and advanced reporting capabilities.",
  },
];

const innerCardGlow = "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)";

export default function OurClient() {
  const scrollRef = useRef(null);

  // Convert vertical mouse wheel scroll → horizontal scroll inside cards container.
  // At edges, defer to native vertical scroll (so page can scroll past the section).
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;

      const atStart = el.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = el.scrollLeft >= maxScroll && e.deltaY > 0;
      if (atStart || atEnd) return;

      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden py-section bg-ink bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative z-[2] w-full max-w-container mx-auto px-page">
        {/* HEADER — left-aligned at all viewports */}
        <div className="flex flex-col gap-4 lg:gap-5 max-w-[760px] text-left items-start">
          <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
            WHY <span className="text-accent-pink font-bold">CHOOSE US</span>
          </h2>

          <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold">
            OUR CLIENT SUCCESS STORIES!
          </h3>

          <p className="text-sm md:text-base text-fg-muted leading-relaxed lg:max-w-prose">
            We are your trusted partner in innovative and reliable software
            development. With modern technology, expert teams, and a
            business-focused approach, we are ready to deliver the best digital
            solutions.
          </p>
        </div>

        {/* CLIENT CARDS — horizontal scroll, mouse wheel converts to horizontal */}
        <div
          ref={scrollRef}
          className="mt-12 md:mt-16 flex overflow-x-auto snap-x snap-mandatory gap-8 md:gap-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="snap-start flex-shrink-0 w-[260px] md:w-[280px] lg:w-auto lg:basis-[28%] relative pt-10 flex justify-center"
            >
              {/* Floating logo — white circle on top of card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 size-16 md:size-20 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <img
                  src={client.image}
                  alt={client.title}
                  className="w-[72%] max-w-full h-auto object-contain"
                />
              </div>

              {/* GlassCard — same pattern as other workflow cards */}
              <GlassCard className="!w-full !rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02]">
                <div className="relative min-h-[240px] md:min-h-[280px] overflow-hidden flex flex-col justify-center text-center pt-12 pb-6 px-6">
                  {/* Inner radial glow */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[60%] blur-2xl pointer-events-none"
                    style={{ background: innerCardGlow }}
                  />

                  <h4 className="relative text-xl md:text-2xl font-bold mb-2 md:mb-3">
                    {client.title}
                  </h4>
                  <p className="relative text-xs md:text-sm text-fg-muted leading-relaxed">
                    {client.description}
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
