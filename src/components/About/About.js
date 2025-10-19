import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faLightbulb,
  faUsers,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const About = () => {
  const features = [
    {
      icon: faRocket,
      title: "Brzi Razvoj",
      description:
        "Koristim najnovije tehnologije i best practices za brzu isporuku kvalitetnih rješenja.",
    },
    {
      icon: faLightbulb,
      title: "Kreativna Rješenja",
      description:
        "Svaki projekt je jedinstvena prilika za inovaciju i kreiranje nečeg posebnog.",
    },
    {
      icon: faUsers,
      title: "User-Centric Pristup",
      description:
        "Korisničko iskustvo je na prvom mjestu - dizajniram s ljudima u mislima.",
    },
    {
      icon: faAward,
      title: "Vrhunska Kvaliteta",
      description:
        "Posvećen sam izvrsnosti u svakom aspektu projekta - od koda do dizajna.",
    },
  ];

  return (
    <section id="about" className="about-section">
      {/* Background */}
      <div className="about-background">
        <div className="about-orb"></div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="about-header">
          <h2 className="about-title">O Nama</h2>
          <p className="about-subtitle">
            Strast prema tehnologiji i dizajnu pretvaram u digitalna iskustva
            koja nadilaze očekivanja
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Image Side */}
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <div className="about-image-glow"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                alt="Digital workspace"
                className="about-image"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="about-text">
            <div className="about-description">
              <p>
                <strong>Dobrodošli u budućnost web developmenta!</strong> Kao
                specijalizirani full-stack developer, spajam tehničku ekspertizu
                s kreativnom vizijom kako bih stvorio digitalna rješenja koja
                oduševljavaju.
              </p>
              <p>
                S više od 5 godina iskustva u industriji, radim s najnovijim
                tehnologijama poput React, Node.js, i TypeScript. Moj cilj je
                jednostavan - pretvoriti vaše ideje u stvarnost kroz
                futuristički dizajn i čistu, održivu arhitekturu koda.
              </p>
            </div>

            {/* CTA */}
            <div className="about-cta">
              <button
                className="btn btn-silver btn-lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <FontAwesomeIcon icon={faRocket} className="me-2" />
                Započnimo Suradnju
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="about-features">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
