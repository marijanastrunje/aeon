import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faRocket,
  faLightbulb,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const About = () => {
  const skills = [
    "React & Next.js",
    "Node.js & Express",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB & PostgreSQL",
    "REST & GraphQL APIs",
    "Git & CI/CD",
    "UI/UX Design",
  ];

  const values = [
    {
      icon: faCode,
      title: "Clean Code",
      description:
        "Pišem čitljiv, maintainable kod koji slijedi best practices i industry standarde.",
    },
    {
      icon: faRocket,
      title: "Performance",
      description:
        "Optimiziram svaki aspekt aplikacije za maksimalnu brzinu i efikasnost.",
    },
    {
      icon: faLightbulb,
      title: "Inovacija",
      description:
        "Uvijek učim nove tehnologije i implementiram najmodernija rješenja.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">O Meni</span>
          <h2 className="section-title">Passion. Performance. Precision.</h2>
          <p className="section-description">
            Full-stack developer s fokusom na kreiranje modernih, skalabilnih i
            user-friendly web aplikacija koje rješavaju stvarne poslovne
            izazove.
          </p>
        </div>

        <div className="row g-4 align-items-center">
          {/* About Content */}
          <div className="col-lg-6">
            <div className="about-content">
              <h3 className="about-subtitle">Moj Pristup</h3>
              <p className="about-text">
                Vjerujem da svaki projekt zaslužuje pažnju do najsitnijih
                detalja. Kombiniram tehničku ekspertizu s kreativnim pristupom
                kako bih kreirao rješenja koja ne samo da izgledaju odlično, već
                i performiraju izvrsno.
              </p>
              <p className="about-text">Moj fokus je na:</p>

              {/* Skills List */}
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="skill-icon"
                    />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="col-lg-6">
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <FontAwesomeIcon icon={value.icon} />
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
