import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faRocket } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "portfolio", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenu(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-glow"></div>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo" onClick={() => scrollToSection("home")}>
            <div className="logo-orbit">
              <div className="logo-planet"></div>
            </div>
            <span className="logo-text">AEON WEB</span>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu-desktop">
            {["home", "about", "services", "portfolio", "contact"].map(
              (item) => (
                <button
                  key={item}
                  className={`nav-link ${
                    activeSection === item ? "active" : ""
                  }`}
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="nav-link-glow"></span>
                </button>
              )
            )}
            <button
              className="btn btn-silver btn-sm"
              onClick={() => scrollToSection("contact")}
            >
              <FontAwesomeIcon icon={faRocket} className="me-2" />
              Započni Projekt
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={mobileMenu ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="navbar-menu-mobile">
            {["home", "about", "services", "portfolio", "contact"].map(
              (item) => (
                <button
                  key={item}
                  className={`nav-link-mobile ${
                    activeSection === item ? "active" : ""
                  }`}
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              )
            )}
            <button
              className="btn btn-silver w-100 mt-3"
              onClick={() => scrollToSection("contact")}
            >
              <FontAwesomeIcon icon={faRocket} className="me-2" />
              Započni Projekt
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
