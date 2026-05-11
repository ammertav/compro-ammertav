import logo from "../../../assets/ammertavlogo.png";
import { GlassCard } from "react-glass-ui";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-wrapper">
        <GlassCard className="navbar-glass">
          <div className="navbar-container">
            {/* LEFT - LOGO */}
            <div className="navbar-logo">
              <img src={logo} alt="logo" />
            </div>

            {/* CENTER - NAVIGATION */}
            <nav className="navbar-menu">
              <ul>
                <li className="active">Home</li>
                <li>Product</li>
                <li>Service</li>
                <li>About Us</li>
              </ul>
            </nav>

            {/* RIGHT - ACTION */}
            <div className="navbar-action">
              <button className="btn-connect">CONNECT US</button>
            </div>
          </div>
        </GlassCard>
      </div>
    </header>
  );
}