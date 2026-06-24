import { GlassCard } from "react-glass-ui";
import useDragScroll from "../../../../hooks/useDragScroll";

import logo1 from "../../../../assets/logohriesnew.webp";
import logo2 from "../../../../assets/logobeilpos.webp";
import logo3 from "../../../../assets/logofunnevnew.webp";
import SectionOrbs from "../../../../components/background/SectionOrbs";
import { ORB_CONFIG } from "../../../../components/background/orbConfig";

const products = [
  {
    title: "Hries",
    logo: logo1,
    desc: [
      "Fully automated payroll system that is fast, accurate, and minimizes errors",
      "Easier and more efficient employee monitoring and tracking",
      "Real-time integrated attendance system for direct attendance monitoring",
    ],
  },
  {
    title: "BePOS",
    logo: logo2,
    desc: [
      "Modern POS system with complete features",
      "Supports multi-branch operations and real-time transactions",
      "Flexible payment integration including e-wallets",
    ],
  },
  {
    title: "Funnev",
    logo: logo3,
    desc: [
      "User-friendly and secure e-ticketing platform.",
      "Clean interface, perfect for all types of events.",
      "Fast purchase process, ideal for both large and small events.",
    ],
  },
];

const innerCardGlow =
  "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)";

export default function ProductSection() {
  const dragRef = useDragScroll();

  return (
    <section
      className="relative w-full pb-24 overflow-hidden text-white pt-36"
    >
      <SectionOrbs config={ORB_CONFIG.product} /> 
      <div className="relative z-[2] w-full max-w-container mx-auto px-page">
        {/* HEADER — left-aligned */}
        <div className="flex flex-col gap-4 lg:gap-5 max-w-[760px] text-left items-start">
          <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
            OUR <span className="font-bold text-accent-pink">PRODUCTS</span>
          </h2>

          <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
            Innovating For The Future
          </h3>

          <p className="text-sm leading-relaxed md:text-base text-fg-muted lg:max-w-prose">
            Scalable adaptive and user focused. We build solutions that
            transform industries and create impact.
          </p>
        </div>

        {/* PRODUCT CARDS — flex scroll always: 1 card + 1/2 peek of next */}
        <div ref={dragRef} className="mt-12 md:mt-16 flex overflow-x-auto gap-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {products.map((item, index) => (
            <article
              key={index}
              className="snap-start flex-shrink-0 w-[300px] sm:w-[400px] md:w-[480px] lg:w-[calc((100%-2.5rem)/1.5)]"
            >
              {/* GlassCard — fills article. h-full + items-stretch → uniform height across cards, content always visible */}
              <div
  className="!w-full !h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.02]"
  style={{
    background: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "24px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  }}
>
  <div className="relative flex flex-row h-full gap-4 p-5 overflow-hidden md:p-6">
    {/* Inner radial glow — purple accent */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[60%] blur-2xl pointer-events-none"
      style={{ background: innerCardGlow }}
    />

    {/* Logo — LEFT, vertically centered */}
    <div className="relative self-center flex-shrink-0 size-14 md:size-16 lg:size-32 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <img loading="lazy" decoding="async"
        src={item.logo}
        alt={item.title}
        className="w-[100%] max-w-full h-auto object-contain"
      />
    </div>

    {/* Content — RIGHT */}
    <div className="relative flex flex-col flex-1 min-w-0">
      <h4 className="mb-2 text-lg font-bold md:text-xl">
        {item.title}
      </h4>

      <ul className="flex flex-col gap-1.5 text-xs md:text-base leading-relaxed list-disc list-inside">
        {item.desc.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>

      {/* LEARN MORE — glass effect via GlassCard */}
      <div className="self-end mt-auto transition-transform duration-300 hover:-translate-y-0.5">
        <GlassCard className="!rounded-full overflow-hidden">
          <button
            type="button"
            className="hidden md:inline-flex items-center justify-center rounded-full text-white font-semibold cursor-pointer transition-all duration-300 bg-gradient-to-r from-brand-purple to-brand-violet text-xs md:px-5 md:py-3 lg:px-6 lg:text-sm hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(157,78,221,0.3)]"
          >
            LEARN MORE
          </button>
        </GlassCard>
      </div>
    </div>
  </div>
</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
