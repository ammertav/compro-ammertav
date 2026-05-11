import "./OurProduct.css";
import product1 from "../../../../assets/logohriesnew.png";
import product2 from "../../../../assets/logobeilpos.png";
import product3 from "../../../../assets/logofunnevnew.png";

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
      <div className="product-container">

        <div className="product-header">
          <p className="product-subtitle">
            OUR <span className="product-sub-bold">PRODUCT</span>
          </p>

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

        <div className="product-grid">
          {products.map((item) => (
            <article className="product-wrapper" key={item.id}>

              <div className="product-logo">
                <img src={item.image} alt={item.title} />
              </div>

              <div
                className="product-card"
                style={{
                  clipPath:
                    "path('M 32,0 L 96,0 C 116,0 108,22 128,22 L 192,22 C 212,22 204,0 224,0 L 288,0 Q 320,0 320,32 L 320,268 Q 320,288 288,288 L 32,288 Q 0,288 0,268 L 0,32 Q 0,0 32,0 Z')",
                }}
              >
                <div className="product-glow"></div>

                <div className="product-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}