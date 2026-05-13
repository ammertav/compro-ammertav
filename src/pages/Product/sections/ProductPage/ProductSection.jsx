import "./ProductSection.css";
import logo1 from "../../../../assets/logohriesnew.png";
import logo2 from "../../../../assets/logobeilpos.png";
import logo3 from "../../../../assets/logofunnevnew.png"
import bgImage from "../../../../assets/productsecBG.png";
import * as GlassUI from "react-glass-ui";


const products = [
  {
    title: "Hries",
    logo: logo1,
    desc: [
      "Fully automated payroll system that is fast, accurate, and minimizes errors",
      "Easier and more efficient employee monitoring and tracking",
      "Real-time integrated attendance system for direct attendance monitoring",
    ],
  },
  {
    title: "Beil Pos",
    logo: logo2,
    desc: [
      "Modern POS system with complete features",
      "Supports multi-branch operations and real-time transactions",
      "Flexible payment integration including e-wallets",
    ],
  },
  {
    title: "Funnev",
    logo: logo3,
    desc: [
      "User-friendly and secure e-ticketing platform.",
      "Clean interface, perfect for all types of events.",
      "Fast purchase process, ideal for both large and small events.",
    ],
  },
];

export default function ProductSection() {
  return (
    <section
      className="productsec-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="productsec-container">
        <div className="productsec-heading">
          <p className="pg">OUR<span> PRODUCTS</span></p>
          <h2>Innovating For The Future</h2>
          <p>
            Scalable adaptive and user focused. We build solutions that
            transform industries and create impact.
          </p>
        </div>

        <div className="productsec-slider">
          {products.map((item, index) => (
            <div
              key={index}
              className="productsec-card"
              style={{
                clipPath:
                  "path('M 42,0 L 186,0 C 212,0 202,24 228,24 L 392,24 C 418,24 408,0 434,0 L 578,0 Q 620,0 620,36 L 620,298 Q 620,320 578,320 L 42,320 Q 0,320 0,298 L 0,36 Q 0,0 42,0 Z')",
              }}>
              <div className="productsec-logo">
                <img src={item.logo} alt={item.title} />
              </div>

              <div className="productsec-content">
                <h3>{item.title}</h3>

                <ul>
                  {item.desc.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>

                <div className="productsec-btn-wrapper">
                  <GlassUI.GlassButton className="product-glass-btn">
                    LEARN MORE
                  </GlassUI.GlassButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}