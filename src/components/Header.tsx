"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { Sun, Moon, Laptop, Menu, X } from "lucide-react";
import "../styles/Header.css";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;

      setIsScrolled(scrollPosition > 20);

      // Update progress bar width based on scroll percentage
      const progressBar = document.querySelector(
        ".header-progress"
      ) as HTMLElement;
      if (progressBar) {
        progressBar.style.width = `${scrollPercentage}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/skills", label: t("nav.skills") },
    { path: "/experience", label: t("nav.experience") },
    { path: "/projects", label: t("nav.projects") },
    { path: "/about", label: t("nav.about") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <div className="header-left">
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-text">Huỳnh Sang</span>
            <span className="logo-dot">.</span>
          </Link>

          {/* Mobile controls */}
          <div className="mobile-controls">
            <div className="theme-toggle">
              <button
                className={`theme-btn ${theme === "light" ? "active" : ""}`}
                onClick={() => setTheme("light")}
                aria-label="Light mode"
              >
                <Sun size={16} />
              </button>
              <button
                className={`theme-btn ${theme === "system" ? "active" : ""}`}
                onClick={() => setTheme("system")}
                aria-label="System theme"
              >
                <Laptop size={16} />
              </button>
              <button
                className={`theme-btn ${theme === "dark" ? "active" : ""}`}
                onClick={() => setTheme("dark")}
                aria-label="Dark mode"
              >
                <Moon size={16} />
              </button>
            </div>

            <div className="language-toggle">
              <button
                className={`lang-btn ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
                aria-label="English"
              >
                EN
              </button>
              <span className="lang-separator">|</span>
              <button
                className={`lang-btn ${language === "vi" ? "active" : ""}`}
                onClick={() => setLanguage("vi")}
                aria-label="Vietnamese"
              >
                VI
              </button>
            </div>
          </div>
        </div>

        <div className="header-right">
          <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <Link
                    to={link.path}
                    className={`nav-link ${
                      location.pathname === link.path ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-controls">
            <div className="theme-toggle desktop-only">
              <button
                className={`theme-btn ${theme === "light" ? "active" : ""}`}
                onClick={() => setTheme("light")}
                aria-label="Light mode"
              >
                <Sun size={18} />
              </button>
              <button
                className={`theme-btn ${theme === "system" ? "active" : ""}`}
                onClick={() => setTheme("system")}
                aria-label="System theme"
              >
                <Laptop size={18} />
              </button>
              <button
                className={`theme-btn ${theme === "dark" ? "active" : ""}`}
                onClick={() => setTheme("dark")}
                aria-label="Dark mode"
              >
                <Moon size={18} />
              </button>
            </div>

            <div className="language-toggle desktop-only">
              <button
                className={`lang-btn ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
                aria-label="English"
              >
                EN
              </button>
              <span className="lang-separator">|</span>
              <button
                className={`lang-btn ${language === "vi" ? "active" : ""}`}
                onClick={() => setLanguage("vi")}
                aria-label="Vietnamese"
              >
                VI
              </button>
            </div>
          </div>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div className={`header-progress ${isScrolled ? "visible" : ""}`}></div>
    </header>
  );
};

export default Header;
