import { useEffect, useRef } from "react";
import { GlassCard } from "react-glass-ui";

const innerCardGlow =
  "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)";

const glowLeft =
  "radial-gradient(circle 360px at 20% 70%, rgba(186,0,255,0.25), transparent 70%)";
const glowRight =
  "radial-gradient(circle 320px at 80% 30%, rgba(0,140,255,0.18), transparent 70%)";

// showOverlayGlow accepts: true (= "both"), "both", "left", "right", or false.
function resolveGlowBackground(variant) {
  if (!variant) return null;
  const v = variant === true ? "both" : variant;
  if (v === "left") return glowLeft;
  if (v === "right") return glowRight;
  return `${glowLeft},${glowRight}`;
}

/**
 * Reusable client showcase section.
 *
 * Props:
 * - clients: array of { id, title, image, description } — REQUIRED
 * - bgImage: optional background image URL. If omitted, falls back to bg-ink solid.
 * - topGradient: optional. If true, renders a black → transparent gradient at top
 *   for smooth transition from a previous section that ends with dark/image bg.
 * - paddingY: optional Tailwind padding-block class(es). Default "py-section".
 *   Pass e.g. "py-12 md:py-16" for a more compact section.
 */
export default function ClientShowcase({
  clients,
  bgImage,
  topGradient = false,
  paddingY = "py-section",
  showCardBorder = false,
  showOverlayGlow = false,
  glowBleed = false,
}) {
  const glowBackground = resolveGlowBackground(showOverlayGlow);
  const scrollRef = useRef(null);

  // Convert vertical mouse wheel → horizontal scroll, defer at edges to page scroll.
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
      className={`relative w-full ${glowBleed ? "overflow-visible" : "overflow-hidden"} ${paddingY} bg-ink text-white ${
        bgImage ? "bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed" : ""
      }`}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      {/* Optional top gradient — smooths transition from previous section with dark/image bg */}
      {topGradient && (
        <div className="absolute inset-x-0 top-0 h-40 z-[1] pointer-events-none bg-gradient-to-b from-black to-transparent" />
      )}

      {/* Optional overlay glow — soft radial accents over the section bg.
          When glowBleed is true, the layer extends above/below the section so
          the glow blends into neighbouring sections. */}
      {glowBackground && (
        <div
          className={`absolute inset-x-0 z-[1] pointer-events-none ${
            glowBleed ? "-top-40 -bottom-40" : "top-0 bottom-0"
          }`}
          style={{ background: glowBackground }}
        />
      )}

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
                  className="w-[100%] max-w-full h-auto object-contain"
                />
              </div>

              {/* GlassCard */}
              <GlassCard
                className="!w-full !rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02]"
                {...(showCardBorder && {
                  borderColor: "#ffffff",
                  borderSize: 0.5,
                  borderOpacity: 0.25,
                  borderRadius: 24,
                })}
              >
                <div className="relative min-h-[240px] md:min-h-[280px] overflow-hidden flex flex-col justify-center text-center pt-12 pb-6 px-6">
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
