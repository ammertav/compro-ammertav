import "./AboutSection.css";
import robotImg from "../../../../assets/aboutRobot.webp";
import bgImage from "../../../../assets/quotesBG.webp";

import hexagon1 from "../../../../assets/tinyhex.webp";
import hexagon2 from "../../../../assets/tinyhex.webp";
import hexagon3 from "../../../../assets/tinyhex.webp";


const steps = [
    {
        title: "250+",
        text: "PROJECT",
        image: hexagon1,
    },
    {
        title: "20+",
        text: "EMPLOYEES",
        image: hexagon2,
    },
    {
        title: "75+",
        text: "CLIENT",
        image: hexagon3,
    },
];

export default function AboutSection() {
    return (
        <section
            className="aboutsec">
            <div
                className="aboutsec-bg"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <div className="aboutsec-shell">
                <div className="aboutsec-container">
                    <div className="aboutsec-left">
                        <div className="aboutsec-image-wrapper">
                            <img src={robotImg} alt="robot" />
                        </div>
                    </div>

                    <div className="aboutsec-right">
                        <p className="aboutsec-subtitle">
                            ABOUT <span>US</span>
                        </p>

                        <h2 className="aboutsec-title">WHAT IS AMMERTAV?</h2>

                        <p className="aboutsec-desc">
                            AMMERTAV is a software house focused on building innovative,
                            scalable, and future-ready digital solutions. We help businesses
                            grow through modern web and mobile applications.
                        </p>

                        <p className="aboutsec-highlight">
                            WE’VE SUCCESSFULLY DELIVERED 250+ PROJECTS.
                        </p>

                        <p className="aboutsec-desc">
                            We specialize
                            <span className="bold"> in full-stack development</span>, cloud
                            technologies, and advanced system integration—ensuring your
                            business thrives in the digital era.
                        </p>
                    </div>
                </div>

                <div className="aboutsec-workflow-container">
                    {steps.map((step, index) => (
                        <div className="aboutsec-workflow-wrapper" key={index}>
                            <div className="aboutsec-step-icon">
                                <img src={step.image} alt={step.title} />
                            </div>

                            <div
                                className="aboutsec-workflow-card"
                                style={{
                                    clipPath:
                                        "path('M 32,0 L 96,0 C 116,0 108,22 128,22 L 192,22 C 212,22 204,0 224,0 L 288,0 Q 320,0 320,32 L 320,268 Q 320,288 288,288 L 32,288 Q 0,288 0,268 L 0,32 Q 0,0 32,0 Z')",
                                }}
                            >
                                <div className="aboutsec-workflow-glow"></div>

                                <div className="aboutsec-workflow-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}