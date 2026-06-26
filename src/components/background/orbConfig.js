// Ambient-orb configuration, one entry per section.
// Each orb: {
//   color   – hex of the orb (brand purple/pink palette)
//   size    – diameter in px
//   top/left– CSS position INSIDE the full-bleed orb layer (100vw wide)
//   anim    – keyframe name: 'orbA' | 'orbB' | 'orbC' | 'orbD' (gentle drift)
//   dur     – drift duration in seconds
//   opacity – base opacity 0–1 (multiplied by the global --orb-i variable)
//   depth   – mouse-parallax strength (≈0.9–1.5; higher = moves more with cursor)
//   scroll  – scroll-parallax strength in px (higher = drifts more on scroll)
// }
// Colors: pink #ef00fc · violet #7b2cff · purple #6a00ff · light violet #c77dff

export const ORB_CONFIG = {
  hero: [
    { color: '#ef00fc', size: 520, top: '-10%', left: '4%',  anim: 'orbA', dur: 34, opacity: 0.50, depth: 0.9, scroll: 120 },
    { color: '#7b2cff', size: 560, top: '18%',  left: '64%', anim: 'orbB', dur: 42, opacity: 0.50, depth: 1.3, scroll: 80 },
  ],
  // Vision renders INSIDE the Hero section in the current codebase — only use
  // this if you split Vision into its own <section>.
  vision: [
    { color: '#7b2cff', size: 420, top: '-10%', left: '42%', anim: 'orbC', dur: 40, opacity: 0.36, depth: 1.1, scroll: 90 },
  ],
  about: [
    { color: '#6a00ff', size: 480, top: '4%',  left: '2%',  anim: 'orbC', dur: 38, opacity: 0.46, depth: 1.0, scroll: 110 },
    { color: '#ef00fc', size: 440, top: '46%', left: '72%', anim: 'orbA', dur: 44, opacity: 0.40, depth: 1.4, scroll: 70 },
  ],
  service: [
    { color: '#7b2cff', size: 520, top: '-6%', left: '56%', anim: 'orbB', dur: 40, opacity: 0.46, depth: 1.2, scroll: 100 },
    { color: '#6a00ff', size: 460, top: '56%', left: '2%',  anim: 'orbD', dur: 46, opacity: 0.40, depth: 1.0, scroll: 120 },
  ],
  product: [
    { color: '#ef00fc', size: 500, top: '5%',  left: '66%', anim: 'orbA', dur: 36, opacity: 0.45, depth: 1.3, scroll: 90 },
    { color: '#7b2cff', size: 460, top: '35%', left: '2%',  anim: 'orbC', dur: 42, opacity: 0.40, depth: 1.0, scroll: 110 },
  ],
  quote: [
    { color: '#7b2cff', size: 520, top: '-25%', left: '36%', anim: 'orbB', dur: 44, opacity: 0.40, depth: 1.5, scroll: 60 },
  ],
  tech: [
    { color: '#ef00fc', size: 480, top: '8%',  left: '60%', anim: 'orbA', dur: 38, opacity: 0.45, depth: 1.2, scroll: 90 },
    { color: '#6a00ff', size: 440, top: '42%', left: '2%',  anim: 'orbD', dur: 46, opacity: 0.38, depth: 1.0, scroll: 110 },
  ],
  faq: [
    { color: '#7b2cff', size: 450, top: '5%',  left: '2%',  anim: 'orbC', dur: 40, opacity: 0.40, depth: 1.1, scroll: 100 },
    { color: '#ef00fc', size: 420, top: '58%', left: '70%', anim: 'orbA', dur: 44, opacity: 0.36, depth: 1.3, scroll: 80 },
  ],
  footer: [
    { color: '#ef00fc', size: 600, top: '18%', left: '36%', anim: 'orbB', dur: 40, opacity: 0.38, depth: 1.4, scroll: 70 },
  ],
  serviceNext: [
  { color: '#6a00ff', size: 460, top: '-40%', left: '2%',  anim: 'orbD', dur: 46, opacity: 0.38, depth: 1.0, scroll: 120 },
  { color: '#7b2cff', size: 500, top: '40%',  left: '58%', anim: 'orbB', dur: 42, opacity: 0.40, depth: 1.2, scroll: 100 }
  ],
  serviceNextB: [
    // Menyambung orb bawah-kiri serviceNext (top: '40%', left: '58%', #7b2cff)
    { color: '#7b2cff', size: 500, top: '-5%', left: '58%', anim: 'orbB', dur: 42, opacity: 0.2, depth: 1.2, scroll: 100 },
    // Menyambung orb pink bawah serviceNext (top: '75%', left: '20%', #ef00fc)
    { color: '#ef00fc', size: 420, top: '2%',  left: '20%', anim: 'orbA', dur: 44, opacity: 0.33, depth: 1.1, scroll: 90  },
    // Orb baru di bawah kanan untuk diteruskan ke section berikutnya
    { color: '#6a00ff', size: 300, top: '50%',  left: '4%',  anim: 'orbD', dur: 46, opacity: 0.36, depth: 1.0, scroll: 110 },
  ],
};