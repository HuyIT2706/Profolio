"use client";

import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Facebook,
  Instagram,
} from "lucide-react";
import "../styles/About.css";

const About = () => {
  const { t } = useLanguage();

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

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="section-header animate">
            <h1 className="page-title">{t("about.title")}</h1>
            <p className="page-subtitle">{t("about.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-image animate">
              <div className="image-container about-image-container">
                <div className="image-placeholder">
                  <span className="image-text">NH</span>
                  <span className="image-text-full">Sang</span>
                </div>
              </div>

              <div className="about-social">
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

              <a href="/resume.pdf" className="resume-btn" download>
                <Download size={16} />
                {t("about.downloadResume")}
              </a>
            </div>

            <div className="about-content">
              <div className="about-text animate">
                <p className="about-intro-text">{t("about.intro")}</p>
                <p>{t("about.paragraph1")}</p>
                <p>{t("about.paragraph2")}</p>
                <p>{t("about.paragraph3")}</p>
              </div>

              <div className="about-details animate">
                <div className="details-item">
                  <h3 className="details-title">{t("about.name")}</h3>
                  <p className="details-content">Nguyễn Huỳnh Sang</p>
                </div>

                <div className="details-item">
                  <h3 className="details-title">{t("about.education")}</h3>
                  <p className="details-content">{t("about.universityName")}</p>
                </div>

                <div className="details-item">
                  <h3 className="details-title">{t("about.degree")}</h3>
                  <p className="details-content">{t("about.degreeName")}</p>
                </div>

                <div className="details-item">
                  <h3 className="details-title">{t("about.location")}</h3>
                  <p className="details-content">{t("about.locationName")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-sections">
        <div className="container">
          <div className="about-section animate">
            <h2 className="about-section-title">{t("about.education")}</h2>

            <div className="education-timeline">
              <div className="timeline-item">
                <div className="timeline-date">
                  {t("about.educationPeriod1")}
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">
                    {t("about.universityName")}
                  </h3>
                  <p className="timeline-subtitle">{t("about.degreeName")}</p>
                  <p className="timeline-description">
                    {t("about.universityDesc")}
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">
                  {t("about.educationPeriod2")}
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{t("about.highSchool")}</h3>
                  <p className="timeline-subtitle">
                    {t("about.highSchoolTrack")}
                  </p>
                  <p className="timeline-description">
                    {t("about.highSchoolDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section animate">
            <h2 className="about-section-title">{t("about.interests")}</h2>
            <div className="interests-grid">
              <div className="interest-item">
                <div className="interest-icon">
                  <div className="icon-placeholder"></div>
                </div>
                <h3 className="interest-title">{t("about.interest1Title")}</h3>
                <p className="interest-description">
                  {t("about.interest1Desc")}
                </p>
              </div>

              <div className="interest-item">
                <div className="interest-icon">
                  <div className="icon-placeholder"></div>
                </div>
                <h3 className="interest-title">{t("about.interest2Title")}</h3>
                <p className="interest-description">
                  {t("about.interest2Desc")}
                </p>
              </div>

              <div className="interest-item">
                <div className="interest-icon">
                  <div className="icon-placeholder"></div>
                </div>
                <h3 className="interest-title">{t("about.interest3Title")}</h3>
                <p className="interest-description">
                  {t("about.interest3Desc")}
                </p>
              </div>
            </div>
          </div>

          <div className="about-section animate">
            <h2 className="about-section-title">{t("about.goals")}</h2>
            <div className="goals-content">
              <p>{t("about.goalsParagraph1")}</p>
              <p>{t("about.goalsParagraph2")}</p>
              <p>{t("about.goalsParagraph3")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
