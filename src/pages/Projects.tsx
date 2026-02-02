"use client";

import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Github, ExternalLink } from "lucide-react";
import "../styles/Projects.css";

const Projects = () => {
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

  const projects = [
    // {
    //   id: 1,
    //   title: t("projects.project1Title"),
    //   description: t("projects.project1Desc"),
    //   image: "/placeholder.jpg",
    //   tags: ["React", "Node.js", "Express", "MongoDB"],
    //   github: "https://github.com/",
    //   live: "https://example.com/",
    //   featured: true,
    // },
    // {
    //   id: 2,
    //   title: t("projects.project2Title"),
    //   description: t("projects.project2Desc"),
    //   image: "/placeholder.jpg",
    //   tags: ["React", "TypeScript", "Firebase"],
    //   github: "https://github.com/",
    //   live: "https://example.com/",
    //   featured: true,
    // },
    {
      id: 1,
      title: t("projects.project3Title"),
      description: t("projects.project3Desc"),
      image: "/placeholder.jpg",
      tags: ["React", "TypeScript", "Vite"],
      github: "https://github.com/HuynhSang2005/portfolio-1",
      live: "https://huynhsang.id.vn",
      featured: true,
    },
    // {
    //   id: 4,
    //   title: t("projects.project4Title"),
    //   description: t("projects.project4Desc"),
    //   image: "/placeholder.jpg",
    //   tags: ["JavaScript", "API Integration", "CSS"],
    //   github: "https://github.com/",
    //   live: "https://example.com/",
    // },
    // {
    //   id: 5,
    //   title: t("projects.project5Title"),
    //   description: t("projects.project5Desc"),
    //   image: "/placeholder.jpg",
    //   tags: ["React", "Node.js", "Express", "MongoDB"],
    //   github: "https://github.com/",
    //   live: "https://example.com/",
    // },
    // {
    //   id: 6,
    //   title: t("projects.project6Title"),
    //   description: t("projects.project6Desc"),
    //   image: "/placeholder.jpg",
    //   tags: ["React", "Socket.io", "Node.js", "Express"],
    //   github: "https://github.com/",
    //   live: "https://example.com/",
    // },
  ];

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <div className="section-header animate">
            <h1 className="page-title">{t("projects.title")}</h1>
            <p className="page-subtitle">{t("projects.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <div className="featured-projects-grid">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div key={project.id} className="featured-project animate">
                  <div className="featured-project-image">
                    <div className="image-placeholder project-placeholder"></div>
                  </div>
                  <div className="featured-project-content">
                    <h2 className="featured-project-title">{project.title}</h2>
                    <p className="featured-project-description">
                      {project.description}
                    </p>
                    <div className="featured-project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="featured-project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-btn"
                      >
                        <Github size={16} />
                        {t("projects.viewCode")}
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-btn"
                      >
                        <ExternalLink size={16} />
                        {t("projects.viewLive")}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="all-projects">
        <div className="container">
          <div className="section-header animate">
            <h2 className="section-title">{t("projects.allProjectsTitle")}</h2>
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
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={t("projects.viewCode")}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={t("projects.viewLive")}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
