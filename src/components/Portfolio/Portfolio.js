import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Moderna e-commerce platforma s real-time inventarom, payment gateway integracijom i admin dashboardom.",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Fitness Tracking App",
      description:
        "Cross-platform mobilna aplikacija za praćenje treninga, ishrane i fitness ciljeva s AI preporukama.",
      category: "Mobile App",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      tech: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Elegantna portfolio stranica za kreativnog profesionalca s modernim dizajnom i smooth animacijama.",
      category: "Website",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Task Management System",
      description:
        "Napredni sustav za upravljanje projektima i zadacima s real-time collaboration i notifikacijama.",
      category: "SaaS",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tech: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      {/* Background */}
      <div className="portfolio-background">
        <div className="portfolio-orb"></div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="portfolio-header">
          <h2 className="portfolio-title">Moji Projekti</h2>
          <p className="portfolio-subtitle">
            Pogledajte neke od mojih najnovijih radova - od web aplikacija do
            mobilnih rješenja
          </p>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Project Image */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay"></div>
                <span className="project-category">{project.category}</span>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faCode} />
                    View Code
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
