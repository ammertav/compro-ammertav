import "./About.css";
import robotImg from "../../../../assets/aboutRobot.png";
import bgImage from "../../../../assets/aboutBG.png"; 
import Client from "./Client";
import hexagon1 from "../../../../assets/tinyhex.png"
import hexagon2 from "../../../../assets/tinyhex.png"
import hexagon3 from "../../../../assets/tinyhex.png"

const steps = [
  {
    title: "BUILD",
    text: "Lorem ipsum dolor sit amet consectetur. Id elementum quis et tincidunt donec.",
    image: hexagon1,
  },
  {
    title: "INNOVATE",
    text: "Lorem ipsum dolor sit amet consectetur. Mauris nisi diam arcu pulvinar.",
    image: hexagon2,
  },
  {
    title: "DELIVER",
    text: "Lorem ipsum dolor sit amet consectetur. Vehicula volutpat blandit.",
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
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-left">
          <div className="about-image-wrapper">
            <img src={robotImg} alt="robot" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">
          <p className="about-subtitle">ABOUT <span>US</span></p>
          <h2 className="about-title">WHAT IS AMMERTAV?</h2>

          <p className="about-desc">
            AMMERTAV is a Software House focused on building innovative,
            scalable, and future-ready digital solutions.
          </p>

          <p className="about-highlight">
            WE’VE SUCCESSFULLY DELIVERED 250+ PROJECTS.
          </p>

          <button className="about-btn">READ MORE</button>
        </div>
      </div>

      {/* CARDS */}
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
                  "path('M 26,0 L 78,0 C 94,0 87,19 104,19 L 156,19 C 172,19 166,0 182,0 L 234,0 Q 260,0 260,26 L 260,220 Q 260,240 234,240 L 26,240 Q 0,240 0,220 L 0,26 Q 0,0 26,0 Z')",
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
      <p className="about-subtitle-our">OUR <span>CLIENT</span></p>
      <Client />
    </section>
  );
}

