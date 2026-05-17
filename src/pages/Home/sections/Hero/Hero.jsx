import { GlassCard } from "react-glass-ui";

import ServiceCard from "../../../../components/ui/ServiceCard/ServiceCard";
import Vision from "../Vision/Vision";

import bgY from "../../../../assets/ammertavBGY.png";
import robotImg from "../../../../assets/robot.png";
import webDev from "../../../../assets/webdev.webp";
import softwareDev from "../../../../assets/customsoftware.webp";
import integration from "../../../../assets/System.webp";
import consulting from "../../../../assets/itconsul.webp";

const sideFade =
    "linear-gradient(to right," +
    "#040414 0%," +
    "rgba(4,4,20,0.85) 6%," +
    "transparent 20%," +
    "transparent 55%," +
    "rgba(4,4,20,0.3) 70%," +
    "rgba(4,4,20,0.6) 82%," +
    "rgba(4,4,20,0.85) 92%," +
    "#040414 100%)";

export default function Hero() {
    return (
        <section className="relative overflow-hidden text-fg bg-ink md:min-h-screen">
            {/* BG IMAGE */}
            <div
                className="absolute inset-0 z-0 bg-no-repeat bg-center [background-size:auto_100%]"
                style={{ backgroundImage: `url(${bgY})` }}
            />

            {/* SIDE FADE OVERLAY */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{ background: sideFade }}
            />

            {/* BOTTOM FADE — smooth transition to next section */}
            <div className="absolute inset-x-0 bottom-0 h-64 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-ink" />

            {/* HERO CONTENT */}
            <div className="relative z-[2] w-full max-w-container mx-auto px-page flex flex-col-reverse items-center text-center gap-4 pt-20 pb-12 md:flex-row md:justify-between md:text-left md:pt-36 md:pb-section">
                <div className="w-full md:flex-1 md:max-w-[440px] lg:max-w-[760px]">
                    <h1 className="italic leading-loose text-white/95 text-base lg:text-2xl">
                        <span className="font-bold not-italic">Technology simplifies</span> every aspect of life
                        Connecting people, accelerating ideas, and turning complex tasks <br />
                        <span className="font-bold not-italic">into effortless</span> possibilities.
                    </h1>

                    <div className="mt-8 inline-flex">
                        <GlassCard className="!rounded-full overflow-hidden">
                            <button
                                type="button"
                                className="px-7 py-3.5 bg-transparent border-0 text-white font-semibold tracking-wide cursor-pointer transition duration-300 hover:opacity-85"
                            >
                                GET STARTED
                            </button>
                        </GlassCard>
                    </div>
                </div>

                <div className="w-full md:w-auto flex justify-center">
                    <img
                        src={robotImg}
                        alt="robot"
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
