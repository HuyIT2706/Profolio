import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "REACT / NEXT.JS", level: 88 },
    { name: "NODE.JS / EXPRESS", level: 85 },
    { name: "TYPESCRIPT/ JAVASCRIPT", level: 85 },
    { name: "SQL / POSTGRESQL", level: 78 },
    { name: "DOCKER / DEVOPS", level: 72 },
    { name: "TAILWIND / CSS", level: 90 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gradient-start to-gradient-end text-white text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{t("skills.title")}</h1>
          <p className="text-lg md:text-xl max-w-[700px] mx-auto opacity-90">
            {t("skills.subtitle")}
          </p>
        </div>
      </section>

      {/* Skills  */}
      <section className="py-20">
        <div className="container max-w-[700px]">
          <div 
            ref={skillsRef}
            className="rounded-2xl overflow-hidden shadow-2xl shadow-shadow border border-border"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-bg-alt border-b border-border">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <span className="flex-1 text-center text-sm font-mono text-text-light">SKILLS.EXE</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8 font-mono">
              <div className="flex flex-col gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    {/* Skill Name */}
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-bold">&gt;</span>
                      <span className="text-sm md:text-base font-semibold tracking-wide">{skill.name}</span>
                    </div>
                    
                    {/* Progress Bar with Animation */}
                    <div className="flex items-center gap-3 ml-5">
                      <div className="flex-1 h-3 bg-bg-alt rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-gradient-start to-gradient-end rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 150}ms`
                          }}
                        />
                      </div>
                      <span className="text-xs text-text-light w-10 text-right">{skill.level}%</span>
                    </div>
                  </div>
                ))}

                {/* Cursor */}
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-primary font-bold">&gt;</span>
                  <span className="w-2 h-5 bg-primary animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Skills Tags */}
      <section className="py-20 bg-bg-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 relative inline-block
              after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2
              after:w-12 after:h-1 after:bg-gradient-to-r after:from-gradient-start after:to-gradient-end after:rounded-full">
              {t("skills.otherTitle")}
            </h2>
            <p className="text-text-light text-lg max-w-[600px] mx-auto mt-4">
              {t("skills.otherSubtitle")}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center max-w-[800px] mx-auto">
            {[
              "Problem Solving",
              "Team Collaboration",
              "Agile / Scrum",
              "UI/UX Design",
              "RESTful APIs",
              "Git & GitHub",
              "Testing",
              "CI/CD",
              "Performance Optimization",
              "Code Review",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-card px-5 py-3 rounded-full font-medium shadow-md shadow-shadow border border-border
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 relative inline-block
              after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2
              after:w-12 after:h-1 after:bg-gradient-to-r after:from-gradient-start after:to-gradient-end after:rounded-full">
              {t("skills.learningTitle")}
            </h2>
            <p className="text-text-light text-lg max-w-[600px] mx-auto mt-4">
              {t("skills.learningSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            {[
              { title: "GraphQL", desc: t("skills.learning1") },
              { title: "AWS / Cloud", desc: t("skills.learning2") },
              { title: "AI / Machine Learning", desc: t("skills.learning3") },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-lg shadow-shadow border border-border
                  transition-all duration-300 hover:-translate-y-1 hover:border-primary"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gradient-start to-gradient-end mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-text-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Skills;
