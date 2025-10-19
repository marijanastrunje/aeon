import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faPalette,
  faServer,
  faShoppingCart,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: faCode,
      title: "Web Development",
      description:
        "Moderna, brza i responzivna web rješenja izgrađena s najnovijim tehnologijama.",
      features: [
        "React, Next.js, Vue.js",
        "Responsive dizajn",
        "SEO optimizacija",
        "Performance optimizacija",
      ],
    },
    {
      icon: faMobileAlt,
      title: "Mobile Apps",
      description:
        "Native i cross-platform mobilne aplikacije koje pružaju vrhunsko korisničko iskustvo.",
      features: [
        "React Native",
        "iOS & Android",
        "Offline funkcionalnost",
        "Push notifikacije",
      ],
    },
    {
      icon: faPalette,
      title: "UI/UX Design",
      description:
        "Dizajniram intuitivna i vizualno privlačna sučelja koja korisnici obožavaju.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
      ],
    },
    {
      icon: faServer,
      title: "Backend Development",
      description:
        "Robusna backend rješenja koja osiguravaju stabilnost i skalabilnost vaše aplikacije.",
      features: [
        "Node.js, Express",
        "RESTful & GraphQL APIs",
        "Database dizajn",
        "Cloud deployment",
      ],
    },
    {
      icon: faShoppingCart,
      title: "E-Commerce",
      description:
        "Kompletan e-commerce sustav s integriranim plaćanjem i upravljanjemInventarom.",
      features: [
        "Shopify, WooCommerce",
        "Payment gateway integracija",
        "Inventory management",
        "Analytics & reporting",
      ],
    },
    {
      icon: faRocket,
      title: "Consulting & Strategy",
      description:
        "Strateško savjetovanje za digitalni razvoj vašeg poslovanja i tehnološku transformaciju.",
      features: [
        "Tech stack selection",
        "Architecture planning",
        "Performance audit",
        "Team mentoring",
      ],
    },
  ];

  return (
    <section id="services" className="services-section">
      {/* Background */}
      <div className="services-background">
        <div className="services-orb"></div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="services-header">
          <h2 className="services-title">Što Mogu Napraviti Za Vas?</h2>
          <p className="services-subtitle">
            Od ideje do realizacije - pružam kompletna digitalna rješenja
            prilagođena vašim potrebama
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                </div>
              </div>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="services-cta">
          <h3>Spremni Za Početak?</h3>
          <p>
            Razgovarajmo o vašem projektu i napravimo nešto nevjerojatno
            zajedno!
          </p>
          <button
            className="btn btn-silver btn-lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <FontAwesomeIcon icon={faRocket} className="me-2" />
            Kontaktirajte Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
