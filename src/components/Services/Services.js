import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faPalette,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: faCode,
      title: "Web Development",
      description:
        "Moderne, responzivne web aplikacije koristeći najnovije tehnologije i best practices.",
    },
    {
      icon: faMobileAlt,
      title: "Mobile First",
      description:
        "Dizajn koji savršeno izgleda na svim uređajima - od mobitela do desktop računala.",
    },
    {
      icon: faPalette,
      title: "UI/UX Design",
      description:
        "Intuitivni interfejsi koji pružaju odličnu korisničku iskustvo i konverzije.",
    },
    {
      icon: faRocket,
      title: "Performance",
      description:
        "Optimizirane aplikacije s brzim loading vremenom i smooth animacijama.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="services-heading">Usluge</h2>
        <p className="services-subtitle">Što mogu napraviti za tebe</p>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
