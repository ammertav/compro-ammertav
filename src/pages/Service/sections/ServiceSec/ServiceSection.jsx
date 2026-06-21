import { GlassCard } from "react-glass-ui";

import bgImage from "../../../../assets/ourserviceBG.webp";
import robot from "../../../../assets/robotOurService.webp";
import logo1 from "../../../../assets/logoOS1.webp";
import logo2 from "../../../../assets/logoOS2.webp";
import logo3 from "../../../../assets/logoOS3.webp";
import logo4 from "../../../../assets/logoOS4.webp";
import logo5 from "../../../../assets/logoOS5.webp";
import logo6 from "../../../../assets/logoOS6.webp";

const services = [
  { label: "CONVERSION LANDING PAGE", icon: logo1 },
  { label: "INTERNAL SYSTEM & WEB APPLICATION", icon: logo2 },
  { label: "CORPORATE & BUSINESS WEBSITE", icon: logo3 },
  { label: "BUSINESS MOBILE APPLICATION", icon: logo4 },
  { label: "E-COMMERCE & ONLINE SALES SYSTEM", icon: logo5 },
  { label: "CUSTOM SOFTWARE SOLUTIONS", icon: logo6 },
];

const overlayGlow =
  "radial-gradient(circle at 20% 70%, rgba(186,0,255,0.25), transparent 35%)," +
  "radial-gradient(circle at 80% 30%, rgba(0,140,255,0.18), transparent 30%)";

export default function ServiceSection() {
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
                <img src={service.icon} alt="" loading="lazy" decoding="async" />
              </div>
              <span className="text-left leading-snug">{service.label}</span>
            </button>
          </GlassCard>
        ))}
      </div>
    </>
  );

  return (
    <section className="relative bg-ink text-white pb-24">
      {/* BG IMAGE AREA — extends below into ServiceWorks header */}
      <div className="relative">
        {/* BG image — extends 400px below into next section */}
        <div
          className="absolute inset-x-0 top-0 -bottom-[400px] z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* CONTENT */}
        <div className="relative z-[2] pt-24 md:pt-56">
          {/* SERVICE — robot + service grid (NO READ MORE button) */}
          <div className="w-full max-w-container mx-auto px-page grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr] md:gap-8 lg:gap-16">
            {/* Robot — same responsive pattern as About */}
            <div className="flex justify-center md:justify-start flex-shrink-0">
              <img
                src={robot}
                alt="robot"
                fetchPriority="high"
                decoding="async"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
