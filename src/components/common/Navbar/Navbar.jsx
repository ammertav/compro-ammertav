import { useState } from "react";
import logo from "../../../assets/ammertavlogo.png";
import { GlassCard } from "react-glass-ui";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
    { to: "/", label: "Home" },
    { to: "/product", label: "Product" },
    { to: "/service", label: "Service" },
    { to: "/about-us", label: "About Us" },
];

const linkBase =
    "relative inline-block px-3.5 py-2 rounded-full text-white font-medium transition-all duration-300 text-sm hover:text-brand-violet-light hover:bg-[rgba(157,78,221,0.12)]";
const linkActive = "text-brand-violet-light bg-[rgba(157,78,221,0.12)]";

function HamburgerIcon({ open }) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {open ? (
                <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </>
            ) : (
                <>
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                </>
            )}
        </svg>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const close = () => setOpen(false);

    // Clicking a NavLink that points to the current route doesn't trigger the
    // global ScrollToTop (pathname doesn't change) — force scroll-to-top here.
    const handleNavClick = (to) => () => {
        if (pathname === to) window.scrollTo(0, 0);
        close();
    };

    return (
        <header className="fixed top-3 md:top-5 left-0 w-full z-[1000] px-3.5 md:px-5 box-border">
            <div className="w-full mx-auto max-w-container lg:max-w-[1100px] xl:max-w-container 3xl:max-w-[1320px]">
                <GlassCard className="!w-full !rounded-3xl overflow-hidden">
                    {/* TOP ROW */}
                    <div className="w-full flex items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4 lg:px-8">
                        {/* LOGO — routes to home */}
                        <Link to="/" onClick={handleNavClick("/")} className="flex-shrink-0 flex items-center" aria-label="Ammertav home">
                            <img
                                src={logo}
                                alt="logo"
                                className="h-auto object-contain w-[110px] md:w-[124px] lg:w-[136px]"
                            />
                        </Link>

                        {/* DESKTOP NAV */}
                        <nav className="hidden md:flex flex-1 justify-center">
                            <ul className="flex items-center list-none p-0 m-0 gap-5 lg:gap-8">
                                {navItems.map((item) => (
                                    <li key={item.to}>
                                        <NavLink
                                            to={item.to}
                                            onClick={handleNavClick(item.to)}
                                            className={({ isActive }) =>
                                                `${linkBase} ${isActive ? linkActive : ""}`
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* RIGHT GROUP */}
                        <div className="flex items-center gap-2">
                            {/* CONNECT US — desktop only */}
                            <NavLink
                                to="/contact"
                                onClick={handleNavClick("/contact")}
                                className="hidden md:inline-flex items-center justify-center rounded-full text-white font-semibold cursor-pointer transition-all duration-300 bg-gradient-to-r from-brand-purple to-brand-violet text-xs md:px-5 md:py-3 lg:px-6 lg:text-sm hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(157,78,221,0.3)]"
                            >
                                CONNECT US
                            </NavLink>

                            {/* HAMBURGER — mobile only */}
                            <button
                                type="button"
                                onClick={() => setOpen(!open)}
                                className="md:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors"
                                aria-label={open ? "Close menu" : "Open menu"}
                                aria-expanded={open}
                            >
                                <HamburgerIcon open={open} />
                            </button>
                        </div>
                    </div>

                    {/* MOBILE DROPDOWN */}
                    {open && (
                        <div className="md:hidden border-t border-white/10">
                            <ul className="flex flex-col list-none p-3 gap-1">
                                {navItems.map((item) => (
                                    <li key={item.to}>
                                        <NavLink
                                            to={item.to}
                                            onClick={handleNavClick(item.to)}
                                            className={({ isActive }) =>
                                                `block px-4 py-3 rounded-xl text-white font-medium transition-colors ${
                                                    isActive
                                                        ? "text-brand-violet-light bg-[rgba(157,78,221,0.12)]"
                                                        : "hover:bg-white/5"
                                                }`
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                                <li className="mt-2">
                                    <NavLink
                                        to="/contact"
                                        onClick={handleNavClick("/contact")}
                                        className="block text-center px-4 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-brand-purple to-brand-violet"
                                    >
                                        CONNECT US
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </GlassCard>
            </div>
        </header>
    );
}
