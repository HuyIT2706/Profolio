import { useLanguage } from "../contexts/LanguageContext";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
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
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gradient-start to-gradient-end text-white text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{t("projects.title")}</h1>
          <p className="text-lg md:text-xl max-w-[700px] mx-auto opacity-90">
            {t("projects.subtitle")}
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col gap-16">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl shadow-shadow
                      bg-gradient-to-br from-gradient-start to-gradient-end ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                  />

                  {/* Content */}
                  <div className={`flex flex-col gap-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                    <p className="text-text-light leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-bg-alt px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium
                          transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5"
                      >
                        <Github size={16} />
                        {t("projects.viewCode")}
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-transparent text-text px-5 py-2.5 rounded-lg font-medium
                          border border-border transition-all duration-300 hover:bg-bg-alt hover:-translate-y-0.5"
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

      {/* All Projects */}
      <section className="py-20 bg-bg-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 relative inline-block
              after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2
              after:w-12 after:h-1 after:bg-gradient-to-r after:from-gradient-start after:to-gradient-end after:rounded-full">
              {t("projects.allProjectsTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-2xl overflow-hidden shadow-lg shadow-shadow
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image placeholder */}
                <div className="w-full h-[200px] bg-gradient-to-br from-gradient-start to-gradient-end" />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-bg-alt px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text transition-colors duration-300 hover:text-primary"
                      aria-label={t("projects.viewCode")}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text transition-colors duration-300 hover:text-primary"
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
