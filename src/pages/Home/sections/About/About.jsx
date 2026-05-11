import "./About.css";
import robotImg from "../../../../assets/aboutRobot.png";
import bgImage from "../../../../assets/aboutBG.png";
import Client from "./Client";
import hexagon1 from "../../../../assets/tinyhex.png"
import hexagon2 from "../../../../assets/tinyhex.png"
import hexagon3 from "../../../../assets/tinyhex.png"

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

export default function About() {
  return (
    <section
      className="about"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="about-shell">
        <div className="about-container">
          <div className="about-left">
            <div className="about-image-wrapper">
              <img src={robotImg} alt="robot" />
            </div>
          </div>

          <div className="about-right">
            <p className="about-subtitle">
              ABOUT <span>US</span>
            </p>

            <h2 className="about-title">WHAT IS AMMERTAV?</h2>

            <p className="about-desc">
             AMMERTAV is a software house focused on building innovative, scalable, and future-ready digital solutions. 
             We help businesses grow through modern web and mobile applications.
            </p>

            <p className="about-highlight">
              WE’VE SUCCESSFULLY DELIVERED 250+ PROJECTS.
            </p>

            <p className="about-desc">
             We specialize<span className="bold"> infull-stack development</span>, cloud technologies, and advanced system integration—ensuring your business thrives in the digital era.
            </p>

            <button className="about-btn">READ MORE</button>
          </div>
        </div>

        <div className="about-workflow-container">
          {steps.map((step, index) => (
            <div className="about-workflow-wrapper" key={index}>
              <div className="about-step-icon">
                <img src={step.image} alt={step.title} />
              </div>

              <div
                className="about-workflow-card"
                style={{
                  clipPath:
                    "path('M 32,0 L 96,0 C 116,0 108,22 128,22 L 192,22 C 212,22 204,0 224,0 L 288,0 Q 320,0 320,32 L 320,268 Q 320,288 288,288 L 32,288 Q 0,288 0,268 L 0,32 Q 0,0 32,0 Z')",
                }}
              >
                <div className="about-workflow-glow"></div>

                <div className="about-workflow-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="about-client-section">
          <p className="about-subtitle-our">
            OUR <span>CLIENT</span>
          </p>
          <Client />
        </div>
      </div>
    </section>
  );
}

