import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Poruka poslana! (ovo je demo)");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-heading">Kontakt</h2>
        <p className="contact-subtitle">Započnimo projekt zajedno</p>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="contact-info">
              <div className="d-flex align-items-center mb-3">
                <div className="contact-icon-box">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <h4 className="contact-info-title">Email</h4>
                  <p className="contact-info-text">info@aeonweb.com</p>
                </div>
              </div>
            </div>
            <div className="contact-info">
              <div className="d-flex align-items-center mb-3">
                <div className="contact-icon-box">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <h4 className="contact-info-title">Telefon</h4>
                  <p className="contact-info-text">+385 99 123 4567</p>
                </div>
              </div>
            </div>
            <div className="contact-info">
              <div className="d-flex align-items-center">
                <div className="contact-icon-box">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <h4 className="contact-info-title">Lokacija</h4>
                  <p className="contact-info-text">Zagreb, Hrvatska</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Ime"
                    className="contact-input"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    placeholder="Email"
                    className="contact-input"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Predmet"
                className="contact-input"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
              <textarea
                placeholder="Poruka"
                rows="6"
                className="contact-textarea"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={handleSubmit}
              >
                Pošalji Poruku
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
