import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovdje dodaj logiku za slanje forme (npr. EmailJS, API endpoint, itd.)
    console.log("Form submitted:", formData);
    alert("Hvala na poruci! Javit ću se uskoro.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      {/* Background */}
      <div className="contact-background">
        <div className="contact-orb-1"></div>
        <div className="contact-orb-2"></div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">Kontaktirajte Me</h2>
          <p className="contact-subtitle">
            Imate projekt na umu? Razgovarajmo o tome kako vam mogu pomoći
            ostvariti vaše digitalne ciljeve
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ime i Prezime</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Vaše ime..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Adresa</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vas.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Predmet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="O čemu se radi?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Poruka</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Vaša poruka..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                Pošalji Poruku
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
