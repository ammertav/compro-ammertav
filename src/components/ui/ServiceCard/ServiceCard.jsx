import { GlassCard } from "react-glass-ui";

export default function ServiceCard({ title, image, desc }) {
    return (
        <GlassCard className="!rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-1">
            <div data-cursor="view" className="flex justify-between items-center p-[4px]">
                <div className="flex-shrink-0">
                    <img loading="lazy" decoding="async"
                        src={image}
                        alt={title}
                        className="h-16 md:h-20 object-contain [filter:drop-shadow(0_0_8px_rgba(157,78,221,0.5))]"
                    />
                </div>

                <div className="text-right">
                    <h4 className="text-sm md:text-lg mb-1 font-semibold">{title}</h4>
                    <p className="text-xs md:text-base font-thin">{desc}</p>
                </div>
            </div>
        </GlassCard>
    );
}
