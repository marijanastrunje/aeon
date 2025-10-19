import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faCode } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      {/* Svemirski Background Elementi */}
      <div className="hero-space">
        <div className="space-planet planet-1"></div>
        <div className="space-planet planet-2"></div>
        <div className="space-ring ring-1"></div>
        <div className="space-ring ring-2"></div>
      </div>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-10">
            <div className="hero-content">
              {/* Status Badge */}
              <div className="hero-badge">
                <span className="badge-pulse"></span>
                <span className="badge-text">Dostupan za nove projekte</span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-title">
                Digitalna Rješenja
                <br />
                <span className="text-silver">Za Budućnost</span>
              </h1>

              {/* Subtitle */}
              <p className="hero-description">
                Kreiram moderne, futurističke web aplikacije koje spajaju
                tehnologiju, dizajn i korisničko iskustvo. React, Node.js i
                cutting-edge tehnologije za vaš digitalni uspjeh.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta">
                <button
                  className="btn btn-silver btn-lg"
                  onClick={scrollToContact}
                >
                  <FontAwesomeIcon icon={faRocket} className="me-2" />
                  Pokreni Projekt
                </button>
                <button
                  className="btn btn-neon btn-lg"
                  onClick={scrollToPortfolio}
                >
                  <FontAwesomeIcon icon={faCode} className="me-2" />
                  Vidi Portfolio
                </button>
              </div>

              {/* Tech Stack Badges */}
              <div className="hero-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
