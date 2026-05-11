import Navbar from "../../../../components/common/Navbar/Navbar";
import ServiceCard from "../../../../components/ui/ServiceCard/ServiceCard";
import "./Hero.css"

import bgWave from "../../../../assets/ammertavBG.png";
import robotImg from "../../../../assets/robot.png";
import webDev from "../../../../assets/webdev.png";
import softwareDev from "../../../../assets/customsoftware.png";
import integration from "../../../../assets/System.png";
import consulting from "../../../../assets/itconsul.png";

import Vision from "../Vision/Vision";
import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            const wave = document.querySelector(".hero-bg-wrapper");

            if (wave) {
                wave.style.transform = `
            translate(-50%, calc(-50% + ${scrollY * 0.2}px))
            rotate(90deg)
            `;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="hero">
            <div className="section-container">
                {/* BACKGROUND (WAJIB PALING ATAS) */}
                <div className="hero-bg-wrapper"></div>

                <Navbar />
                <div className="hero-container">
                    <div className="hero-left">

                        <p className="hero-description">
                            <span className="bold">Technology simplifies</span> every aspect of life
                            Connecting people, accelerating ideas, and <span className="">turning complex</span> tasks <br /> <span className="bold">into effortless</span> possibilities.
                        </p>

                        <button className="btn-primary">GET STARTED</button>
                    </div>

                    <div className="hero-right">
                        <img src={robotImg} alt="robot" />
                    </div>
                </div>

                <div className="hero-cards">
                    <ServiceCard title="Web Development" image={webDev} desc="Building company websites, web systems, dashboards, and web applications." />
                    <ServiceCard title="Custom Software Development" image={softwareDev} desc="Developing tailored software solutions based on business needs." />
                    <ServiceCard title="System Integration" image={integration} desc="Integrating APIs, payment gateways, ERP, CRM, and other business systems." />
                    <ServiceCard title="IT Consulting" image={consulting} desc="Offering technology consulting to support digital transformation and business." />
                </div>

                <Vision />
            </div>




        </section>
    );
};