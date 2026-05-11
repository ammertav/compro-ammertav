// OurClient.jsx
import "./OurClient.css";

import client1 from "../../../../assets/logohriesnew.png";
import client2 from "../../../../assets/logobeilpos.png";
import client3 from "../../../../assets/logofunnevnew.png";
import client4 from "../../../../assets/logofunnevnew.png";
import client5 from "../../../../assets/logofunnevnew.png";

const clients = [
  {
    id: 1,
    title: "Hries",
    image: client1,
    description:
      "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
  },
  {
    id: 2,
    title: "Beil POS",
    image: client2,
    description:
      "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
  },
  {
    id: 3,
    title: "CRM System",
    image: client3,
    description:
      "A complete CRM solution to manage customers, automate workflows, and improve business productivity.",
  },
  {
    id: 4,
    title: "ERP Solution",
    image: client4,
    description:
      "Integrated enterprise management system for finance, HR, inventory, and operations management.",
  },
  {
    id: 5,
    title: "Smart Analytics",
    image: client5,
    description:
      "Business intelligence dashboard with real-time analytics and advanced reporting capabilities.",
  },
];

export default function OurClient() {
  return (
    <section className="client-showcase-section">
      <div className="client-showcase-container">

        <div className="client-showcase-header">
          <p className="client-showcase-subtitle">
            WHY{" "}
            <span className="client-showcase-subtitle-highlight">
              CHOOSE US
            </span>
          </p>

          <h2 className="client-showcase-title">
            OUR CLIENT SUCCESS STORIES!
          </h2>

          <p className="client-showcase-description">
            We are your trusted partner in innovative and reliable software
            development. With modern technology, expert teams, and a
            business-focused approach, we are ready to deliver the best digital
            solutions.
          </p>
        </div>

        <div className="client-showcase-slider">
          {clients.map((client) => (
            <div className="client-showcase-wrapper" key={client.id}>
              <div className="client-showcase-logo">
                <img src={client.image} alt={client.title} />
              </div>

              <div
                className="client-showcase-card"
                style={{
                  clipPath:
                    "path('M 32,0 L 96,0 C 116,0 108,22 128,22 L 192,22 C 212,22 204,0 224,0 L 288,0 Q 320,0 320,32 L 320,268 Q 320,288 288,288 L 32,288 Q 0,288 0,268 L 0,32 Q 0,0 32,0 Z')",
                }}
              >
                <div className="client-showcase-glow"></div>

                <div className="client-showcase-content">
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