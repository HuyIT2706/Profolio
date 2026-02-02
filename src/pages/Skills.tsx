"use client"

import { useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import "../styles/Skills.css"

const Skills = () => {
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const frontendSkills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 88 },
    { name: "HTML & CSS", level: 92 },
    { name: "Redux", level: 80 },
    { name: "Responsive Design", level: 85 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 82 },
    { name: "Nest.js", level: 78 },
    { name: "RESTful APIs", level: 88 },
    { name: "MongoDB", level: 75 },
    { name: "SQL", level: 70 },
  ]

  const toolsSkills = [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "Postman", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "npm", level: 88 },
    { name: "Webpack", level: 70 },
  ]

  return (
    <div className="skills-page">
      <section className="skills-hero">
        <div className="container">
          <div className="section-header animate">
            <h1 className="page-title">{t("skills.title")}</h1>
            <p className="page-subtitle">{t("skills.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="skills-overview">
        <div className="container">
          <div className="skills-grid">
            <div className="skills-category animate">
              <h2 className="category-title">{t("skills.frontend")}</h2>
              <div className="skills-list">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category animate">
              <h2 className="category-title">{t("skills.backend")}</h2>
              <div className="skills-list">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category animate">
              <h2 className="category-title">{t("skills.tools")}</h2>
              <div className="skills-list">
                {toolsSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="other-skills">
        <div className="container">
          <div className="section-header animate">
            <h2 className="section-title">{t("skills.otherTitle")}</h2>
            <p className="section-subtitle">{t("skills.otherSubtitle")}</p>
          </div>

          <div className="tags-container animate">
            <div className="skill-tag">Problem Solving</div>
            <div className="skill-tag">Team Collaboration</div>
            <div className="skill-tag">Agile Methodology</div>
            <div className="skill-tag">UI/UX Design</div>
            <div className="skill-tag">Responsive Design</div>
            <div className="skill-tag">Performance Optimization</div>
            <div className="skill-tag">Code Review</div>
            <div className="skill-tag">Testing</div>
            <div className="skill-tag">CI/CD</div>
            <div className="skill-tag">RESTful API Design</div>
          </div>
        </div>
      </section>

      <section className="learning">
        <div className="container">
          <div className="section-header animate">
            <h2 className="section-title">{t("skills.learningTitle")}</h2>
            <p className="section-subtitle">{t("skills.learningSubtitle")}</p>
          </div>

          <div className="learning-grid">
            <div className="learning-item animate">
              <div className="learning-icon">
                <div className="icon-placeholder"></div>
              </div>
              <h3 className="learning-title">GraphQL</h3>
              <p className="learning-description">{t("skills.learning1")}</p>
            </div>

            <div className="learning-item animate">
              <div className="learning-icon">
                <div className="icon-placeholder"></div>
              </div>
              <h3 className="learning-title">Next.js</h3>
              <p className="learning-description">{t("skills.learning2")}</p>
            </div>

            <div className="learning-item animate">
              <div className="learning-icon">
                <div className="icon-placeholder"></div>
              </div>
              <h3 className="learning-title">AWS</h3>
              <p className="learning-description">{t("skills.learning3")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills

