import "./OurTechnologies.css";
import laravel from "../../../../assets/laravel.png";
import react from "../../../../assets/react.png";
import javascript from "../../../../assets/javascript.png";
import mysql from "../../../../assets/mysql.png";
import docker from "../../../../assets/docker.png"
import quoteBG from "../../../../assets/quotesBG.png"
import codeLogo from "../../../../assets/logotech.png"

const technologies = [
    {
        name: "LARAVEL",
        icon: laravel,
    },
    {
        name: "MYSQL",
        icon: mysql,
    },
    {
        name: "REACT",
        icon: react,
    },
    {
        name: "DOCKER",
        icon: docker,
    },
    {
        name: "JAVASCRIPT",
        icon: javascript,
    },
];

export default function OurTechnologies() {
    return (
        <section className="technology-section">
            <div
                className="quote-wrapper"
                style={{ backgroundImage: `url(${quoteBG})` }}
            >
                <div className="quote-wp">
                    <h2>"The best way to predict the future is to invent it."</h2>

                    <div className="quote-meta">
                        <div className="quote-line"></div>
                        <span className="quote-author">Alan Kay</span>
                        <div className="quote-line"></div>
                    </div>
                </div>



            </div>

            <div className="technology-content">
                <div className="technology-left">
                    <p className="subtitle">
                        OUR<span> TECHNOLOGIES</span>
                    </p>

                    <h2 className="title-ot">Foundation of the Digital Future</h2>

                    <p className="description">
                        We Build Digital Solutions Using Modern Technology To Drive
                        Business Efficiency And Growth. Powered By Top Technology Stacks
                        Like Laravel, React, Redis, MySQL, And Docker.
                    </p>

                    <div className="tech-grid">
                        {technologies.map((tech, index) => (
                            <div className="tech-card" key={index}>
                                <div className="tech-icon">
                                    <img src={tech.icon} alt={tech.name} />
                                </div>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="technology-right">
                    <div className="hexagon-glow">
                        <img src={codeLogo} alt="Technology Logo" className="hexagon-logo" />
                    </div>
                </div>
            </div>
        </section>
    );
}