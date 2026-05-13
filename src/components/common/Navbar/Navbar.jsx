import logo from "../../../assets/ammertavlogo.png";
import { GlassCard } from "react-glass-ui";
import { NavLink } from "react-router-dom";
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
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/product">Product</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/service">Service</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/about-us">About Us</NavLink>
                                </li>
                            </ul>
                        </nav>

                        {/* RIGHT - ACTION */}
                        <div className="navbar-action">
                            <NavLink to="/contact" className="btn-connect">
                                CONNECT US
                            </NavLink>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </header>
    );
}