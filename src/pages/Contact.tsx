"use client";

import type React from "react";

import { useState, type FormEvent, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  // Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
  Instagram,
} from "lucide-react";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      // For demo purposes, we'll just show success
      setFormStatus("success");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="section-header animate">
            <h1 className="page-title">{t("contact.title")}</h1>
            <p className="page-subtitle">{t("contact.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info animate">
              <h2 className="contact-info-title">{t("contact.getInTouch")}</h2>
              <p className="contact-info-text">{t("contact.getInTouchText")}</p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-detail-content">
                    <h3 className="contact-detail-title">
                      {t("contact.email")}
                    </h3>
                    <p className="contact-detail-text">
                      huynhsang060305@email.com
                    </p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-detail-content">
                    <h3 className="contact-detail-title">
                      {t("contact.location")}
                    </h3>
                    <p className="contact-detail-text">
                      {t("contact.locationValue")}
                    </p>
                  </div>
                </div>

                {/* <div className="contact-detail-item">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-detail-content">
                    <h3 className="contact-detail-title">
                      {t("contact.phone")}
                    </h3>
                    <p className="contact-detail-text">+84 123 456 789</p>
                  </div>
                </div> */}
              </div>

              <div className="contact-social">
                <h3 className="contact-social-title">
                  {t("contact.orConnect")}
                </h3>
                <div className="social-links">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="mailto:example@email.com"
                    className="social-link"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-container animate">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t("contact.nameLabel")}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t("contact.emailLabel")}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t("contact.subjectLabel")}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t("contact.messageLabel")}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={formStatus !== "idle"}
                >
                  {formStatus === "idle" ? (
                    <>
                      {t("contact.sendButton")}
                      <Send size={16} />
                    </>
                  ) : formStatus === "success" ? (
                    <>
                      {t("contact.formSuccess")}
                      <CheckCircle size={16} />
                    </>
                  ) : (
                    <>
                      {t("contact.formError")}
                      <AlertCircle size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
