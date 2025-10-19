import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-social mb-4">
          <a href="#" className="footer-social-icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="footer-social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="footer-social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <p className="footer-text">© 2025 Aeon Web. Sva prava pridržana.</p>
      </div>
    </footer>
  );
};

export default Footer;
