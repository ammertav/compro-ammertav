import { Link } from "react-router-dom";
import { GlassCard } from "react-glass-ui";
import SectionOrbs from "../../background/SectionOrbs";
import { ORB_CONFIG } from "../../background/orbConfig";

export default function Footer() {
    return (
        <footer className="relative w-full text-white">
            <SectionOrbs config={ORB_CONFIG.footer} />

            {/* CTA SECTION */}
            <div className="relative z-[2] flex flex-col items-center text-center py-10 px-page">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 max-w-[1000px]">
                    &ldquo;READY TO START YOUR OWN PROJECT?&rdquo;
                </h2>

                <p className="max-w-[720px] text-xs md:text-sm text-fg-muted leading-relaxed mb-8">
                    LETS BUILD SOMETHING AMAZING TOGETHER WITH
                    SCALABLE, FUTURE READY TECHNOLOGY.
                </p>

                {/* GET STARTED — glass + thin border, routes to /contact */}
                <Link to="/contact" className="inline-flex transition-transform duration-300 hover:-translate-y-1">
                    <GlassCard className="!rounded-full overflow-hidden">
                        <span className="block px-8 py-3 text-white text-sm font-semibold tracking-wide transition duration-300 hover:opacity-85">
                            GET STARTED
                        </span>
                    </GlassCard>
                </Link>
            </div>

            {/* FOOTER BOTTOM */}
            <div
                className="relative z-[2] w-full min-h-[340px] md:min-h-[420px] flex flex-col justify-center items-center text-center pt-24 pb-5 px-page"
            >
                {/* Info */}
                <div className="relative z-[2] flex flex-col items-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                        PT. Pandu Usaha Nusantara
                    </h3>

                    <p className="text-sm md:text-base text-fg-muted leading-relaxed">
                        Jl. Kota Semarang, Indonesia
                    </p>
                    <p className="text-sm md:text-base text-fg-muted leading-relaxed">
                        Phone : 0821567891011
                    </p>
                    <p className="text-sm md:text-base text-fg-muted leading-relaxed">
                        Email : pausunantara@gmail.com
                    </p>
                </div>

                {/* Copyright */}
                <div className="relative z-[2] mt-3 text-xs text-white/45">
                    © Ammertav, All Right Reserved
                </div>
            </div>
        </footer>
    );
}
