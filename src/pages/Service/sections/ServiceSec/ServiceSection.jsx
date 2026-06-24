import { GlassCard } from "react-glass-ui";

import robot from "../../../../assets/robotOurService.webp";
import logo1 from "../../../../assets/logoOS1.webp";
import logo2 from "../../../../assets/logoOS2.webp";
import logo3 from "../../../../assets/logoOS3.webp";
import logo4 from "../../../../assets/logoOS4.webp";
import logo5 from "../../../../assets/logoOS5.webp";
import logo6 from "../../../../assets/logoOS6.webp";
import SectionOrbs from "../../../../components/background/SectionOrbs";
import { ORB_CONFIG } from "../../../../components/background/orbConfig";

const services = [
  { label: "CONVERSION LANDING PAGE", icon: logo1 },
  { label: "INTERNAL SYSTEM & WEB APPLICATION", icon: logo2 },
  { label: "CORPORATE & BUSINESS WEBSITE", icon: logo3 },
  { label: "BUSINESS MOBILE APPLICATION", icon: logo4 },
  { label: "E-COMMERCE & ONLINE SALES SYSTEM", icon: logo5 },
  { label: "CUSTOM SOFTWARE SOLUTIONS", icon: logo6 },
];

export default function ServiceSection() {
  // Service content reused at mobile (inside GlassCard) and md+ (plain)
  const renderServiceContent = () => (
    <>
      <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
        OUR <span className="font-bold text-accent-pink">SERVICE</span>
      </h2>

      <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
        From Ideas to Digital Solutions
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
      <img src={service.icon} alt="" loading="lazy" decoding="async" />
    </div>
    <span className="leading-snug text-left">{service.label}</span>
  </button>
</div>
        ))}
      </div>
    </>
  );

  return (
    <section className="relative pb-24 text-white">
      <SectionOrbs config={ORB_CONFIG.service} />
        {/* CONTENT */}
        <div className="relative z-[2] pt-24 md:pt-56">
          {/* SERVICE — robot + service grid (NO READ MORE button) */}
          <div className="w-full max-w-container mx-auto px-page grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr] md:gap-8 lg:gap-16">
            {/* Robot — same responsive pattern as About */}
            <div className="flex justify-center flex-shrink-0 md:justify-start">
              <img
                src={robot}
                alt="robot"
                fetchPriority="high"
                decoding="async"
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
            </div>
          </div>
        </div>
    </section>
  );
}
