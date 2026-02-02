"use client";

import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";
import "../styles/Footer.css";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-text">Huỳnh Sang</span>
              <span className="logo-dot">.</span>
            </Link>
            <p className="footer-tagline">{t("footer.tagline")}</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-group">
              <h3 className="footer-links-title">{t("footer.navigation")}</h3>
              <ul className="footer-links-list">
                <li>
                  <Link to="/">{t("nav.home")}</Link>
                </li>
                <li>
                  <Link to="/skills">{t("nav.skills")}</Link>
                </li>
                <li>
                  <Link to="/experience">{t("nav.experience")}</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h3 className="footer-links-title">{t("footer.more")}</h3>
              <ul className="footer-links-list">
                <li>
                  <Link to="/projects">{t("nav.projects")}</Link>
                </li>
                <li>
                  <Link to="/about">{t("nav.about")}</Link>
                </li>
                <li>
                  <Link to="/contact">{t("nav.contact")}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <h3 className="footer-social-title">{t("footer.connect")}</h3>
            <div className="social-links">
              <a
                href="https://github.com/HuynhSang2005"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nghuynhsang/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/ng.huynhsangg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ng.huynhsang/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="mailto:huynhsang060305@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Nguyễn Huỳnh Sang. {t("footer.rights")}
          </p>
          {/* <p className="made-with">
            {t("footer.madeWith")} <span className="heart">❤</span>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
