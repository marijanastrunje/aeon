import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "O Nama", id: "about" },
    { name: "Usluge", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Kontakt", id: "contact" },
  ];

  const contactInfo = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "info@aeonweb.com",
      link: "mailto:info@aeonweb.com",
    },
    {
      icon: faPhone,
      label: "Telefon",
      value: "+385 99 123 4567",
      link: "tel:+385991234567",
    },
    {
      icon: faMapMarkerAlt,
      label: "Lokacija",
      value: "Zagreb, Hrvatska",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: faGithub, url: "#", label: "GitHub" },
    { icon: faLinkedin, url: "#", label: "LinkedIn" },
    { icon: faTwitter, url: "#", label: "Twitter" },
    { icon: faInstagram, url: "#", label: "Instagram" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-orbit">
                <div className="footer-logo-planet"></div>
              </div>
              <span className="footer-logo-text">AEON WEB</span>
            </div>
            <p className="footer-description">
              Kreiram moderna, futuristička web rješenja koja spajaju
              tehnologiju, dizajn i korisničko iskustvo. Pretvarajmo vaše
              digitalne vizije u stvarnost.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Kontakt</h4>
            {contactInfo.map((info, index) => (
              <div key={index} className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FontAwesomeIcon icon={info.icon} />
                </div>
                <div className="footer-contact-content">
                  <p>{info.label}</p>
                  {info.link ? (
                    <a href={info.link}>{info.value}</a>
                  ) : (
                    <span>{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} <a href="#">AEON WEB</a>. Sva
            prava pridržana. Napravljeno s ❤️ u Hrvatskoj.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
