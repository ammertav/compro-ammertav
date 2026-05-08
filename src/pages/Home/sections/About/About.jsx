import "./About.css";
import robotImg from "../../../../assets/aboutRobot.png";
import bgImage from "../../../../assets/aboutBG.png"; // 🔥 background kamu
import ClippedCard from "./ClippedCard";
import Client from "./Client";


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
        <div className="card-wrapper">
            <ClippedCard />
        </div>
      <p className="about-subtitle-our">OUR <span>CLIENT</span></p>
      <Client/>
    </section>
  );
}

