import { GlassCard } from "react-glass-ui";

import laravel from "../../../../assets/laravel.webp";
import react from "../../../../assets/react.webp";
import javascript from "../../../../assets/javascript.webp";
import mysql from "../../../../assets/mysql.webp";
import docker from "../../../../assets/docker.webp";
import quoteBG from "../../../../assets/quotesBG.webp";
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
        <section className="relative w-full bg-black text-white pb-section">
            {/* ============ QUOTE — BG full width/height + extends down to title area ============ */}
            <div className="relative">
                {/* BG image — full width, height extends below into main content area */}
                <div
                    className="absolute inset-x-0 top-0 -bottom-[100px] md:-bottom-[140px] lg:-bottom-[180px] z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${quoteBG})` }}
                />

                {/* Quote glass — full viewport width, side borders clipped via clip-path wrapper */}
                <div className="relative z-[2] w-full pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
                    {/* clip-path wrapper crops 2px from left/right — hides side borders regardless of how library renders them */}
                    <div className="[clip-path:inset(0_2px)]">
                        <GlassCard className="!w-full !rounded-none overflow-hidden">
                            <div className="px-page py-8 md:py-12 flex flex-col items-center text-center">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug max-w-[60ch]">
                                    &ldquo;The best way to predict the future is to invent it.&rdquo;
                                </h2>

                                <div className="flex items-center justify-center gap-4 w-full mt-5 md:mt-6 max-w-container">
                                    <div className="flex-1 max-w-[180px] h-px bg-white/[0.45]"></div>
                                    <span className="text-sm md:text-base font-medium italic whitespace-nowrap tracking-widest">
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
            <div className="relative z-[3] w-full max-w-container mx-auto px-page mt-8 md:mt-12 flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-8 lg:gap-16">
                {/* Text + tech grid — left at md+, right-aligned */}
                <div className="flex flex-col gap-4 lg:gap-5 flex-1 text-right">
                    <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
                        OUR <span className="text-accent-pink font-bold">TECHNOLOGIES</span>
                    </h2>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold">
                        Foundation of the Digital Future
                    </h3>

                    <p className="text-sm md:text-base text-fg-muted leading-relaxed lg:max-w-prose lg:ml-auto">
                        We Build Digital Solutions Using Modern Technology To Drive
                        Business Efficiency And Growth. Powered By Top Technology Stacks
                        Like Laravel, React, Redis, MySQL, And Docker.
                    </p>

                    {/* Tech grid — 2 cols always, last card centered (5 items, lone in last row) */}
                    <div className="grid grid-cols-2 gap-4 w-full mt-2 md:max-w-[640px] md:ml-auto">
                        {technologies.map((tech, index) => (
                            <GlassCard
                                key={index}
                                className="!w-full !rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 last:col-span-2 last:max-w-[calc(50%-0.5rem)] last:justify-self-center"
                            >
                                <div className="flex items-center gap-3 p-4">
                                    <div className="size-12 flex justify-center items-center rounded-xl flex-shrink-0">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="max-w-full h-auto"
                                        />
                                    </div>
                                    <span className="flex-1 text-sm md:text-base font-semibold text-center">
                                        {tech.name}
                                    </span>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Hexagon glow logo — smaller at mobile */}
                <div className="flex justify-center flex-shrink-0">
                    <div className="relative flex justify-center items-center">
                        {/* Radial glow behind logo */}
                        <div
                            className="absolute size-[200px] md:size-[360px] lg:size-[440px] rounded-full blur-[40px] pointer-events-none"
                            style={{ background: hexagonGlow }}
                        />
                        <img
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
