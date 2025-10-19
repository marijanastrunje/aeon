import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faProjectDiagram,
  faTrophy,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./Stats.css";

const Stats = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    awards: 0,
    years: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    {
      icon: faUsers,
      end: 50,
      label: "Zadovoljnih Klijenata",
      suffix: "+",
      color: "#3b82f6",
    },
    {
      icon: faProjectDiagram,
      end: 120,
      label: "Završenih Projekata",
      suffix: "+",
      color: "#8b5cf6",
    },
    {
      icon: faTrophy,
      end: 15,
      label: "Osvojenih Nagrada",
      suffix: "+",
      color: "#06b6d4",
    },
    {
      icon: faClock,
      end: 5,
      label: "Godina Iskustva",
      suffix: "+",
      color: "#10b981",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const counters = stats.map((stat, index) => {
      const increment = stat.end / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= stat.end) {
          current = stat.end;
          clearInterval(counters[index]);
        }

        setCounts((prev) => ({
          ...prev,
          [Object.keys(prev)[index]]: Math.floor(current),
        }));
      }, interval);
    });

    return () => counters.forEach((counter) => clearInterval(counter));
  }, [isVisible]);

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="container">
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-icon" style={{ color: stat.color }}>
                  <FontAwesomeIcon icon={stat.icon} />
                </div>
                <div className="stat-number">
                  {Object.values(counts)[index]}
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
