import "./ProductClient.css";

import client1 from "../../../../assets/logohriesnew.png";
import client2 from "../../../../assets/logobeilpos.png";
import client3 from "../../../../assets/logofunnevnew.png";
import client4 from "../../../../assets/logofunnevnew.png";
import client5 from "../../../../assets/logofunnevnew.png";

const clients = [
  {
    id: 1,
    title: "AFFY WW",
    image: client1,
    description:
      "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
  },
  {
    id: 2,
    title: "AFFY WW",
    image: client2,
    description:
      "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
  },
  {
    id: 3,
    title: "AFFY WW",
    image: client3,
    description:
      "A complete CRM solution to manage customers, automate workflows, and improve business productivity.",
  },
  {
    id: 4,
    title: "AFFY WW",
    image: client4,
    description:
      "Integrated enterprise management system for finance, HR, inventory, and operations management.",
  },
  {
    id: 5,
    title: "AFFY WW",
    image: client5,
    description:
      "Business intelligence dashboard with real-time analytics and advanced reporting capabilities.",
  },
];

export default function ProductClient() {
  return (
    <section className="psclient-showcase-section">
      <div className="psclient-showcase-container">
        <div className="psclient-showcase-header">
          <p className="psclient-showcase-subtitle">
            WHY{" "}
            <span className="psclient-showcase-subtitle-highlight">
              CHOOSE US
            </span>
          </p>

          <h2 className="psclient-showcase-title">
            OUR CLIENT SUCCESS STORIES!
          </h2>

          <p className="psclient-showcase-description">
            We are your trusted partner in innovative and reliable software
            development. With modern technology, expert teams, and a
            business-focused approach, we are ready to deliver the best digital
            solutions.
          </p>
        </div>

        <div className="psclient-showcase-slider">
          {clients.map((client) => (
            <div className="psclient-showcase-wrapper" key={client.id}>
              <div className="psclient-showcase-logo">
                <img src={client.image} alt={client.title} />
              </div>

              <div
                className="psclient-showcase-card"
                style={{
                  clipPath:
                    "path('M 32,0 L 96,0 C 116,0 108,22 128,22 L 192,22 C 212,22 204,0 224,0 L 288,0 Q 320,0 320,32 L 320,268 Q 320,288 288,288 L 32,288 Q 0,288 0,268 L 0,32 Q 0,0 32,0 Z')",
                }}
              >
                <div className="psclient-showcase-glow"></div>

                <div className="psclient-showcase-content">
                  <h3>{client.title}</h3>
                  <p>{client.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}