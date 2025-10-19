import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online trgovina s payment integracijom",
      tech: "React, Node.js, MongoDB",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    },
    {
      title: "SaaS Dashboard",
      description: "Kompleksni analytics dashboard za startup",
      tech: "React, Charts.js, Firebase",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title: "Portfolio Website",
      description: "Moderna portfolio stranica za kreativnu agenciju",
      tech: "React, Three.js, GSAP",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="portfolio-heading">Portfolio</h2>
        <p className="portfolio-subtitle">Neki od mojih najnovijih projekata</p>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-content">
                  <div className="project-tech">{project.tech}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href="#" className="project-link">
                    Pogledaj Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
