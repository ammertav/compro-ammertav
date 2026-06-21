import { GlassCard } from "react-glass-ui";

import work1 from "../../../../assets/codefy.webp";
import work2 from "../../../../assets/mrtek.webp";
import work3 from "../../../../assets/harmain.webp";
import work4 from "../../../../assets/ramstainless.webp";

const works = [
  { id: 1, title: "Codefy", image: work1 },
  { id: 2, title: "MR.Teknik", image: work2 },
  { id: 3, title: "Noorharamain", image: work3 },
  { id: 4, title: "Ram Stainless", image: work4 },
];

export default function AboutWorkSection() {
  return (
    // Top transparent so AboutSection BG can bleed through; gradient fades to bg-ink
    <section className="relative overflow-hidden w-full ">
      {/* Gradient bg — transparent at top (shows AboutSection BG), solid ink after 400px */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0px, #040414 400px)",
        }}
      />

      <div className="relative z-[2] w-full max-w-container mx-auto px-page text-white">
        {/* HEADER — left-aligned */}
        <div className="flex flex-col gap-4 lg:gap-5 max-w-[760px] text-left items-start">
          <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
            OUR <span className="text-accent-pink font-bold">WORKS</span>
          </h2>

          <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold">
            SELECTED PROJECTS WE&rsquo;VE DELIVERED
          </h3>
        </div>

        {/* GRID — 1 col mobile, 2 cols md+ */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {works.map((work) => (
            <article
              key={work.id}
              className="group flex flex-col gap-3.5"
            >
              {/* Image card */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/25">
                <img loading="lazy" decoding="async"
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>

              {/* Title badge — glass */}
              <GlassCard
                className="!w-full !rounded-2xl overflow-hidden"
                borderColor="#ffffff"
                borderSize={0.5}
                borderOpacity={0.2}
                borderRadius={16}
              >
                <div className="px-4 py-3 text-center">
                  <h4 className="text-sm md:text-base font-semibold">
                    {work.title}
                  </h4>
                </div>
              </GlassCard>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
