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
          We are your trusted partner in innovative and reliable software development. 
          With modern technology, expert teams, and a business-focused approach, we are ready to deliver the best digital solutions.
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
                  "path('M 26,0 L 78,0 C 94,0 87,19 104,19 L 156,19 C 172,19 166,0 182,0 L 234,0 Q 260,0 260,26 L 260,220 Q 260,240 234,240 L 26,240 Q 0,240 0,220 L 0,26 Q 0,0 26,0 Z')",
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
    </section>
  );
}