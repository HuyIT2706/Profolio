import { useLanguage } from "../contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const frontendSkills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 88 },
    { name: "HTML & CSS", level: 92 },
    { name: "Redux", level: 80 },
    { name: "Responsive Design", level: 85 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 82 },
    { name: "Nest.js", level: 78 },
    { name: "RESTful APIs", level: 88 },
    { name: "MongoDB", level: 75 },
    { name: "SQL", level: 70 },
  ];

  const toolsSkills = [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "Postman", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "npm", level: 88 },
    { name: "Webpack", level: 70 },
  ];

  const otherSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Agile Methodology",
    "UI/UX Design",
    "Responsive Design",
    "Performance Optimization",
    "Code Review",
    "Testing",
    "CI/CD",
    "RESTful API Design",
  ];

  const learningItems = [
    { title: "GraphQL", desc: t("skills.learning1") },
    { title: "Next.js", desc: t("skills.learning2") },
    { title: "AWS", desc: t("skills.learning3") },
  ];

  // Skill bar component
  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-text-light">{level}%</span>
      </div>
      <div className="h-2 bg-bg-alt rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-gradient-start to-gradient-end rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  // Skills category component
  const SkillsCategory = ({
    title,
    skills,
  }: {
    title: string;
    skills: { name: string; level: number }[];
  }) => (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg shadow-shadow">
      <h2 className="text-xl md:text-2xl font-semibold mb-8 relative inline-block
        after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-1
        after:bg-gradient-to-r after:from-gradient-start after:to-gradient-end after:rounded-full">
        {title}
      </h2>
      <div className="flex flex-col gap-6">
        {skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );

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

      {/* Skills Overview */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillsCategory title={t("skills.frontend")} skills={frontendSkills} />
            <SkillsCategory title={t("skills.backend")} skills={backendSkills} />
            <SkillsCategory title={t("skills.tools")} skills={toolsSkills} />
          </div>
        </div>
      </section>

      {/* Other Skills */}
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

          <div className="flex flex-wrap gap-4 justify-center">
            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-card px-5 py-3 rounded-full font-medium shadow-md shadow-shadow
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Learning */}
      <section className="py-20">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningItems.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-lg shadow-shadow
                  transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gradient-start to-gradient-end mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-text-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
