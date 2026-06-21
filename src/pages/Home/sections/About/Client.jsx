import nasmoco from "../../../../assets/nasmoco.webp";
import ram from "../../../../assets/ram.webp";
import mrteknik from "../../../../assets/mrteknik.webp";
import bpom from "../../../../assets/bpom.webp";
import gofood from "../../../../assets/gofood.webp";
import shoope from "../../../../assets/shoope.webp";

export default function Client() {
  const logos = [nasmoco, ram, mrteknik, bpom, gofood, shoope];

  return (
    <section className="relative w-full overflow-hidden font-sans bg-[rgba(4,4,20,0.2)] py-[clamp(48px,10vw,72px)] md:py-section">
      <div className="absolute inset-0 bg-[rgba(4,4,20,0.2)] z-0"></div>

      <div className="relative z-[2] w-full max-w-container mx-auto px-page">
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 z-10 pointer-events-none w-12 3xl:w-[100px] bg-gradient-to-r from-ink to-transparent"></div>
          <div className="absolute inset-y-0 right-0 z-10 pointer-events-none w-12 3xl:w-[100px] bg-gradient-to-l from-ink to-transparent"></div>

          <div className="flex items-center w-max will-change-transform animate-client-slide-mobile md:animate-client-slide-tablet lg:animate-client-slide-desktop xl:animate-client-slide-mid 3xl:animate-client-slide-large">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex justify-center items-center w-[92px] mx-[12px] md:w-[110px] md:mx-4 lg:w-[125px] lg:mx-[clamp(14px,2vw,28px)] xl:w-[138px] 3xl:w-[150px] 3xl:mx-7"
              >
                <img loading="lazy" decoding="async"
                  src={logo}
                  alt={`client-${index}`}
                  className="w-auto max-w-full object-contain transition-transform duration-300 hover:scale-[1.08] h-7 md:h-[34px] lg:h-[clamp(32px,4vw,48px)] 3xl:h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
