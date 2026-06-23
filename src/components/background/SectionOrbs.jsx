/*
 * SectionOrbs — ambient light orbs that belong to ONE section.
 *
 * Drop it in as the FIRST child of a section that is `position: relative`
 * and is NOT `overflow-hidden` (orbs intentionally bleed past the section
 * edges so transitions between sections are seamless — `body { overflow-x: clip }`
 * stops the horizontal scrollbar; see index.css snippet).
 *
 * The orbs sit at z-0; keep your section CONTENT at z-10+ (the existing
 * `relative z-[2]` wrappers already do this) so glass cards refract the orbs.
 *
 * Usage:
 *   import SectionOrbs from '@/components/background/SectionOrbs';
 *   import { ORB_CONFIG } from '@/components/background/orbConfig';
 *   ...
 *   <section className="relative ...">
 *     <SectionOrbs config={ORB_CONFIG.hero} />
 *     <div className="relative z-[2]"> ...your existing content... </div>
 *   </section>
 */
export default function SectionOrbs({ config = [] }) {
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {config.map((o, i) => (
        <div
          key={i}
          data-orb
          data-depth={o.depth}
          data-scroll={o.scroll}
          className="absolute will-change-transform"
          style={{
            top: o.top,
            left: o.left,
            width: `${o.size}px`,
            height: `${o.size}px`,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "9999px",
              background: `radial-gradient(circle at 35% 35%, ${o.color} 0%, transparent 68%)`,
              filter: "blur(55px)",
              opacity: `calc(${o.opacity} * var(--orb-i, 0.6))`,
              animation: `${o.anim} ${o.dur}s ease-in-out infinite`,
              animationPlayState: "var(--anim-play, running)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
