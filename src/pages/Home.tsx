"use client";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  ExternalLink,
  Facebook,
  Instagram,
  GraduationCap,
  Heart,
  Target,
} from "lucide-react";
import "../styles/Home.css";

const Home = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Define projects data to avoid template literal type errors
  const projects = [
    // {
    //   id: 1,
    //   title: t("home.project1Title"),
    //   description: t("home.project1Description"),
    //   tags: ["React", "Node.js", "Express", "MongoDB"],
    // },
    // {
    //   id: 2,
    //   title: t("home.project2Title"),
    //   description: t("home.project2Description"),
    //   tags: ["React", "TypeScript", "Firebase"],
    // },
    {
      id: 1,
      title: t("home.project3Title"),
      description: t("home.project3Description"),
      tags: ["React", "TypeScript", "Vite"],
    },
  ];

  // Frontend and backend tech stacks
  const frontendTech = [
    {
      name: "JavaScript",
      icon: <i className="devicon-javascript-plain colored"></i>,
    },
    {
      name: "TypeScript",
      icon: <i className="devicon-typescript-plain colored"></i>,
    },
    { name: "React", icon: <i className="devicon-react-original colored"></i> },
    { name: "HTML5", icon: <i className="devicon-html5-plain colored"></i> },
    { name: "CSS3", icon: <i className="devicon-css3-plain colored"></i> },
    {
      name: "Tailwind",
      icon: <i className="devicon-tailwindcss-plain colored"></i>,
    },
  ];

  const backendTech = [
    { name: "Node.js", icon: <i className="devicon-nodejs-plain colored"></i> },
    {
      name: "Express",
      icon: <i className="devicon-express-original colored"></i>,
    },
    {
      name: "MongoDB",
      icon: <i className="devicon-mongodb-plain colored"></i>,
    },
    { name: "MySQL", icon: <i className="devicon-mysql-plain colored"></i> },
    {
      name: "Firebase",
      icon: <i className="devicon-firebase-plain colored"></i>,
    },
    { name: "Git", icon: <i className="devicon-git-plain colored"></i> },
  ];

  return (
    <div className="home-page">
      <section className="hero" ref={heroRef}>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title animate">
              <span className="greeting">{t("home.greeting")}</span>
              <h1 className="text-3xl font-bold underline">Hello world!</h1>
              <span className="name">Nguyen Huynh Sang</span>
              <span className="role">{t("home.role")}</span>
            </h1>

            <p className="hero-description animate text-red-500">
              {t("home.description")}
            </p>

            <div className="hero-cta animate">
              <Link to="/contact" className="primary-btn">
                {t("home.contactBtn")}
                <ArrowRight size={16} />
              </Link>
              <a href="/resume.pdf" className="secondary-btn" download>
                {t("home.resumeBtn")}
                <Download size={16} />
              </a>
            </div>

            <div className="hero-social animate">
              <a
                href="https://github.com/HuynhSang2005"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nghuynhsang/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/ng.huynhsangg"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/ng.huynhsang/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:huynhsang060305@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-image animate">
            <div className="image-container">
              {/* <div className="image-placeholder">
                <span className="image-text">NH</span>
                <span className="image-text-full">Sang</span>
              </div> */}
              <img
                src="/avatar-uth.jpg"
                alt="Nguyen Huynh Sang"
                className="hero-avatar"
              />
            </div>
          </div>
        </div>

        <button
          className="scroll-down"
          onClick={scrollToAbout}
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </section>

      <section id="about-section" className="home-about">
        <div className="container">
          <div className="section-header animate">
            <h2 className="section-title">{t("home.aboutTitle")}</h2>
            <p className="section-subtitle">{t("home.aboutSubtitle")}</p>
          </div>

          <div className="about-content">
            <div className="about-main-card animate">
              <div className="about-text">
                <p className="home-about-intro">{t("home.aboutText1")}</p>
                <p className="about-description">{t("home.aboutText2")}</p>
              </div>

              <div className="about-info">
                <div className="info-item">
                  <span className="info-label">{t("home.university")}</span>
                  <span className="info-value">
                    University of Transport Ho Chi Minh City
                  </span>
                </div>

                <div className="info-item">
                  <span className="info-label">{t("home.location")}</span>
                  <span className="info-value">Ho Chi Minh City, Vietnam</span>
                </div>
              </div>
            </div>

            <div className="about-cards-grid">
              <div className="about-card animate">
                <div className="about-card-icon">
                  <GraduationCap size={24} />
                </div>
                <h3 className="about-card-title">{t("home.education")}</h3>
                <p className="about-card-text">{t("home.educationText")}</p>
              </div>

              <div className="about-card animate">
                <div className="about-card-icon">
                  <Heart size={24} />
                </div>
                <h3 className="about-card-title">{t("home.interests")}</h3>
                <p className="about-card-text">{t("home.interestsText")}</p>
              </div>

              <div className="about-card animate">
                <div className="about-card-icon">
                  <Target size={24} />
                </div>
                <h3 className="about-card-title">{t("home.goals")}</h3>
                <p className="about-card-text">{t("home.goalsText")}</p>
              </div>
            </div>

            <div className="about-cta animate">
              <Link to="/about" className="text-link">
                {t("home.readMore")}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack-section">
        <div className="container">
          <div className="section-header animate">
            <h2 className="section-title">{t("home.techStack")}</h2>
            <p className="section-subtitle">{t("home.techStackSubtitle")}</p>
          </div>

          <div className="tech-categories">
            <div className="tech-category animate">
              <h3 className="tech-category-title">
                <span>Frontend</span>
              </h3>
              <div className="tech-list">
                {frontendTech.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <div className="tech-icon">{tech.icon}</div>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category animate">
              <h3 className="tech-category-title">
                <span>Backend</span>
              </h3>
              <div className="tech-list">
                {backendTech.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <div className="tech-icon">{tech.icon}</div>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="container">
          <div className="section-header animate">
            <h2 className="section-title">{t("home.projectsTitle")}</h2>
            <p className="section-subtitle">{t("home.projectsSubtitle")}</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card animate">
                <div className="project-image">
                  <div className="image-placeholder project-placeholder"></div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href="https://github.com/HuynhSang2005/portfolio-1"
                      target="_blank"
                      className="project-link"
                      aria-label="View code"
                    >
                      <Github size={18} />
                    </a>
                    <a href="#" className="project-link" aria-label="View live">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="view-all animate">
            <Link to="/projects" className="text-link">
              {t("home.viewAllProjects")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate">
            <h2 className="cta-title">{t("home.ctaTitle")}</h2>
            <p className="cta-text">{t("home.ctaText")}</p>
            <Link to="/contact" className="primary-btn">
              {t("home.ctaButton")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
