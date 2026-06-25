

export default function ServiceCard({ title, image, desc }) {
    return (
        <div
  className="!rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-1"
  style={{
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  }}
>
  <div data-cursor="view" className="flex items-center justify-between gap-4 px-4 py-3">
    <div className="flex-shrink-0">
      <img loading="lazy" decoding="async"
        src={image}
        alt={title}
        className="h-16 md:h-20 object-contain [filter:drop-shadow(0_0_8px_rgba(157,78,221,0.5))]"
      />
    </div>

    <div className="text-right">
      <h4 className="mb-1 text-sm font-semibold md:text-lg">{title}</h4>
      <p className="text-xs font-thin md:text-base">{desc}</p>
    </div>
  </div>
</div>
    );
}
