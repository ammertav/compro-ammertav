import { Link } from "react-router-dom";
import { GlassCard } from "react-glass-ui";

import ServiceCard from "../../../../components/ui/ServiceCard/ServiceCard";
import Vision from "../Vision/Vision";
import SectionOrbs from "../../../../components/background/SectionOrbs";
import { ORB_CONFIG } from "../../../../components/background/orbConfig";

import robotImg from "../../../../assets/robot.webp";
import webDev from "../../../../assets/webdev.webp";
import softwareDev from "../../../../assets/customsoftware.webp";
import integration from "../../../../assets/system.webp";
import consulting from "../../../../assets/itconsul.webp";

export default function Hero() {
    return (
        <section className="relative text-fg md:min-h-screen">
            <SectionOrbs config={ORB_CONFIG.hero} />

            {/* HERO CONTENT */}
            <div className="relative z-[2] w-full max-w-container mx-auto px-page flex flex-col-reverse items-center text-center gap-4 pt-20 pb-12 md:flex-row md:justify-between md:text-left md:pt-36 md:pb-section">
                <div className="w-full md:flex-1 md:max-w-[440px] lg:max-w-[760px]">
                    <h1 className="italic leading-loose text-white/95 text-base lg:text-2xl">
                        <span className="font-bold not-italic">Technology simplifies</span> every aspect of life
                        Connecting people, accelerating ideas, and turning complex tasks <br />
                        <span className="font-bold not-italic">into effortless</span> possibilities.
                    </h1>

                    <Link to="/contact" className="mt-8 inline-flex transition-transform duration-300 hover:-translate-y-0.5">
                        <GlassCard className="!rounded-full overflow-hidden">
                            <span className="block px-7 py-3.5 text-white font-semibold tracking-wide transition duration-300 hover:opacity-85">
                                GET STARTED
                            </span>
                        </GlassCard>
                    </Link>
                </div>

                <div className="w-full md:w-auto flex justify-center">
                    <img
                        src={robotImg}
                        alt="robot"
                        fetchPriority="high"
                        decoding="async"
                        className="max-w-full h-auto w-44 md:w-60 lg:w-[340px]"
                    />
                </div>
            </div>

            {/* SERVICE CARDS */}
            <div className="relative z-[2] w-full max-w-container mx-auto px-page grid grid-cols-1 gap-5 pb-16 md:grid-cols-2 md:pb-0">
                <ServiceCard title="Web Development" image={webDev} desc={
                    <><span className="font-bold">Building</span> company websites, web systems, dashboards, and web applications.</>
                } />
                <ServiceCard title="Custom Software Development" image={softwareDev} desc={
                    <>Developing tailored software <span className="font-bold">solutions</span> based on business needs.</>
                } />
                <ServiceCard title="System Integration" image={integration} desc={
                    <>Integrating APIs, payment gateways, ERP, CRM, and other <span className="font-bold">business systems</span>.</>
                } />
                <ServiceCard title="IT Consulting" image={consulting} desc={
                    <>Offering technology consulting to <span className="font-bold">support digital transformation</span> and business.</>
                } />
            </div>

            <Vision />
        </section>
    );
}
