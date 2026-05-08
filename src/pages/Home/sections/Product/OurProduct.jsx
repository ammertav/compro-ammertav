import "./OurProduct.css";
import product1 from "../../../../assets/logohriesnew.png";
import product2 from "../../../../assets/logobeilpos.png";
import product3 from "../../../../assets/logofunnevnew.png"

const products = [
  {
    id: 1,
    title: "Hries",
    image: product1,
    description:
      "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
  },
  {
    id: 2,
    title: "Beil POS",
    image: product2,
    description:
      "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
  },
  {
    id: 3,
    title: "CRM System",
    image: product3,
    description:
      "A complete CRM solution to manage customers, automate workflows, and improve business productivity.",
  },
];

export default function OurProduct() {
  return (
    <section className="product-section">
      <div className="product-header">
        <p className="product-subtitle">OUR <span className="product-sub-bold">PRODUCT</span></p>

        <h2 className="product-title">
          Your Smart Solution
        </h2>

        <p className="product-description">
          We Bring You Innovative Technologies To Support Your
          Business—From Modern POS Systems, Ticketing Solutions,
          And CRM To Professional Websites—All In One Platform!
        </p>

        <button className="read-more-btn">
          READ MORE
        </button>
      </div>

      <div className="product-slider">
  {products.map((item, index) => (
    <div className="product-wrapper" key={index}>
      
      <div className="product-logo">
        <img src={item.image} alt={item.title} />
      </div>

    <div
        className="product-card"
        style={{
        clipPath:
        "path('M 26,0 L 78,0 C 94,0 87,19 104,19 L 156,19 C 172,19 166,0 182,0 L 234,0 Q 260,0 260,26 L 260,220 Q 260,240 234,240 L 26,240 Q 0,240 0,220 L 0,26 Q 0,0 26,0 Z')",
                    }}
        >
                    <div className="product-glow"></div>

                    <div className="product-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    </div>
                </div>
                </div>
            ))}
    </div>
    </section>
  );
}