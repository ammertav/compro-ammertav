import { GlassCard } from "react-glass-ui";
import SectionOrbs from "../../../../components/background/SectionOrbs";
import { ORB_CONFIG } from "../../../../components/background/orbConfig";

import laravel from "../../../../assets/laravel.webp";
import react from "../../../../assets/react.webp";
import javascript from "../../../../assets/javascript.webp";
import mysql from "../../../../assets/mysql.webp";
import docker from "../../../../assets/docker.webp";
import codeLogo from "../../../../assets/logotech.webp";

const technologies = [
    { name: "LARAVEL", icon: laravel },
    { name: "MYSQL", icon: mysql },
    { name: "REACT", icon: react },
    { name: "DOCKER", icon: docker },
    { name: "JAVASCRIPT", icon: javascript },
];

const hexagonGlow =
    "radial-gradient(circle, rgba(239,0,252,0.3) 0%, rgba(239,0,252,0.16) 35%, rgba(239,0,252,0.08) 55%, transparent 75%)";

export default function OurTechnologies() {
    return (
        <section className="relative w-full text-white pb-section">
            <SectionOrbs config={ORB_CONFIG.tech} />

            {/* ============ QUOTE BAND ============ */}
            <div className="relative">
                <SectionOrbs config={ORB_CONFIG.quote} />

                {/* Quote glass — full viewport width, side borders clipped via clip-path wrapper */}
                <div className="relative z-[2] w-full pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
                    {/* clip-path wrapper crops 2px from left/right — hides side borders regardless of how library renders them */}
                    <div className="[clip-path:inset(0_2px)]">
                        <GlassCard className="!w-full !rounded-none overflow-hidden">
                            <div className="flex flex-col items-center py-8 text-center px-page md:py-12">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug max-w-[60ch]">
                                    &ldquo;The best way to predict the future is to invent it.&rdquo;
                                </h2>

                                <div className="flex items-center justify-center w-full gap-4 mt-5 md:mt-6 max-w-container">
                                    <div className="flex-1 max-w-[180px] h-px bg-white/[0.45]"></div>
                                    <span className="text-sm italic font-medium tracking-widest md:text-base whitespace-nowrap">
                                        Alan Kay
                                    </span>
                                    <div className="flex-1 max-w-[180px] h-px bg-white/[0.45]"></div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>

            {/* ============ MAIN CONTENT ============ */}
            <div className="relative z-[3] w-full max-w-container mx-auto px-page mt-8 md:mt-12 flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between">

  {/* Text + tech grid — mepet kiri */}
  <div className="flex flex-col gap-4 text-right lg:gap-5 md:max-w-[48%]">
    <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
      OUR <span className="font-bold text-accent-pink">TECHNOLOGIES</span>
    </h2>

    <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
      Foundation of the Digital Future
    </h3>

    <p className="text-sm leading-relaxed md:text-base text-fg-muted lg:max-w-prose lg:ml-auto">
      We Build Digital Solutions Using Modern Technology To Drive
      Business Efficiency And Growth. Powered By Top Technology Stacks
      Like Laravel, React, Redis, MySQL, And Docker.
    </p>

    <div className="grid grid-cols-2 gap-4 w-full mt-2 md:max-w-[640px] md:ml-auto">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="!w-full !rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 last:col-span-2 last:max-w-[calc(50%-0.5rem)] last:justify-self-center"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="flex items-center gap-3 p-4">
            <div className="flex items-center justify-center flex-shrink-0 size-12 rounded-xl">
              <img loading="lazy" decoding="async"
                src={tech.icon}
                alt={tech.name}
                className="h-auto max-w-full"
              />
            </div>
            <span className="flex-1 text-sm font-semibold text-center md:text-base">
              {tech.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Logo — mepet kanan */}
  <div className="flex justify-center flex-shrink-0">
    <div className="relative flex items-center justify-center">
      <div
        className="absolute size-[200px] md:size-[360px] lg:size-[440px] rounded-full blur-[40px] pointer-events-none"
        style={{ background: hexagonGlow }}
      />
      <img loading="lazy" decoding="async"
        src={codeLogo}
        alt="Technology Logo"
        className="relative z-[2] max-w-full h-auto w-44 md:w-72 lg:w-80"
      />
    </div>
  </div>

</div>
        </section>
    );
}
