import nasmoco from "../../../../assets/nasmoco.png";
import ram from "../../../../assets/ram.png";
import mrteknik from "../../../../assets/mrteknik.png";
import bpom from "../../../../assets/bpom.png";
import gofood from "../../../../assets/gofood.png";
import shoope from "../../../../assets/shoope.png";
import "./Client.css"

export default function Client() {
  const logos = [nasmoco, ram, mrteknik, bpom, gofood, shoope];

  return (
    <section className="client-marquee-section">
      <div className="client-marquee-overlay"></div>

      <div className="client-marquee-content">
        <div className="client-marquee-wrapper">
          <div className="client-gradient-left"></div>
          <div className="client-gradient-right"></div>

          <div className="client-track">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="client-logo-item">
                <img
                  src={logo}
                  alt={`client-${index}`}
                  className="client-logo-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}