import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-line"></div>
      <div className="container">
        <div className="topbar-content">
          <div className="topbar-left">
            <a href="mailto:info@aeonweb.com" className="topbar-link">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>info@aeonweb.com</span>
            </a>
            <a href="tel:+385991234567" className="topbar-link">
              <FontAwesomeIcon icon={faPhone} />
              <span>+385 99 123 4567</span>
            </a>
          </div>
          <div className="topbar-right">
            <a href="#" className="topbar-social" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="topbar-social" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="topbar-social" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
