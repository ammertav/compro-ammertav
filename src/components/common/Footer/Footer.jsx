import "./Footer.css";
import imagefooter from "../../../assets/footerimage.png"

export default function Footer() {
  return (
    <footer className="footer-section">

      {/* CTA */}
      <div className="footer-cta">
        <h2>"READY TO START YOUR OWN PROJECT?"</h2>

        <p>
          LETS BUILD SOMETHING AMAZING TOGETHER WITH
          SCALABLE, FUTURE READY TECHNOLOGY.
        </p>

        <button>GET STARTED</button>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        {/* FOOTER CONTENT */}
        <div className="footer-info">
          <h3>PT. Pandu Usaha Nusantara</h3>

          <p>Jl. Kota Semarang, Indonesia</p>
          <p>Phone : 0821567891011</p>
          <p>Email : pausunantara@gmail.com</p>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-copy">
          © Ammertav, All Right Reserved
        </div>
      </div>
    </footer>
  );
}