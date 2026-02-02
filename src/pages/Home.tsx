import { useRef } from "react";
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

const Home = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      id: 1,
      title: t("home.project3Title"),
      description: t("home.project3Description"),
      tags: ["React", "TypeScript", "Vite"],
    },
  ];

  const frontendTech = [
    { name: "JavaScript", icon: <i className="devicon-javascript-plain colored"></i> },
    { name: "TypeScript", icon: <i className="devicon-typescript-plain colored"></i> },
    { name: "React", icon: <i className="devicon-react-original colored"></i> },
    { name: "HTML5", icon: <i className="devicon-html5-plain colored"></i> },
    { name: "CSS3", icon: <i className="devicon-css3-plain colored"></i> },
    { name: "Tailwind", icon: <i className="devicon-tailwindcss-plain colored"></i> },
  ];

  const backendTech = [
    { name: "Node.js", icon: <i className="devicon-nodejs-plain colored"></i> },
    { name: "Express", icon: <i className="devicon-express-original colored"></i> },
    { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored"></i> },
    { name: "MySQL", icon: <i className="devicon-mysql-plain colored"></i> },
    { name: "Firebase", icon: <i className="devicon-firebase-plain colored"></i> },
    { name: "Git", icon: <i className="devicon-git-plain colored"></i> },
  ];

  // Social Link component
  const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-bg-alt text-text
        transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
      aria-label={label}
    >
      {children}
    </a>
  );

  return (
    <div className="pt-5">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center relative" ref={heroRef}>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="flex flex-col text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-xl md:text-2xl font-medium text-primary mb-2">{t("home.greeting")}</span>
              <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent mb-2">
                Bùi Văn Huy
              </span>
              <span className="text-xl md:text-2xl font-medium text-text-light">{t("home.role")}</span>
            </h1>

            <p className="text-lg text-text-light max-w-[600px] mb-8">
              {t("home.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium
                  transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5"
              >
                {t("home.contactBtn")}
                <ArrowRight size={16} />
              </Link>
              <a 
                href="/resume.pdf" 
                className="inline-flex items-center gap-2 bg-transparent text-text px-6 py-3 rounded-lg font-medium
                  border border-border transition-all duration-300 hover:bg-bg-alt hover:-translate-y-0.5"
                download
              >
                {t("home.resumeBtn")}
                <Download size={16} />
              </a>
            </div>

            <div className="flex gap-4">
              <SocialLink href="https://github.com/HuynhSang2005" label="GitHub"><Github size={20} /></SocialLink>
              <SocialLink href="https://www.linkedin.com/in/nghuynhsang/" label="LinkedIn"><Linkedin size={20} /></SocialLink>
              <SocialLink href="https://www.facebook.com/ng.huynhsangg" label="Facebook"><Facebook size={20} /></SocialLink>
              <SocialLink href="https://www.instagram.com/ng.huynhsang/" label="Instagram"><Instagram size={20} /></SocialLink>
              <SocialLink href="mailto:huynhsang060305@gmail.com" label="Email"><Mail size={20} /></SocialLink>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-full max-w-[400px] lg:max-w-[400px] md:max-w-[300px] aspect-square rounded-2xl overflow-hidden
              bg-gradient-to-br from-gradient-start to-gradient-end shadow-2xl shadow-shadow">
              <img
                src="/avatar-uth.jpg"
                alt="Bùi Văn Huy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <button
          className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-transparent border-none text-text cursor-pointer
            animate-bounce"
          onClick={scrollToAbout}
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-20 bg-bg-alt">
        <div className="container">
          <div className="text-center mb-12" data-animate>
            <h2 className="text-3xl font-bold mb-2 relative inline-block
              after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2
              after:w-12 after:h-1 after:bg-gradient-to-r after:from-gradient-start after:to-gradient-end after:rounded-full">
              {t("home.aboutTitle")}
            </h2>
            <p className="text-text-light text-lg max-w-[600px] mx-auto mt-4">{t("home.aboutSubtitle")}</p>
          </div>

          <div className="flex flex-col gap-8 max-w-[900px] mx-auto">
            {/* Main Card */}
            <div className="bg-card rounded-2xl p-8 shadow-lg shadow-shadow" data-animate>
              <div className="flex flex-col gap-3 mb-6">
                <p className="text-lg font-semibold text-primary">{t("home.aboutText1")}</p>
                <p className="text-text leading-relaxed">{t("home.aboutText2")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-bg-alt p-5 rounded-xl">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm text-primary">{t("home.university")}</span>
                  <span className="text-sm font-medium">University of Transport Ho Chi Minh City</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm text-primary">{t("home.location")}</span>
                  <span className="text-sm font-medium">Ho Chi Minh City, Vietnam</span>
                </div>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: GraduationCap, title: t("home.education"), text: t("home.educationText") },
                { icon: Heart, title: t("home.interests"), text: t("home.interestsText") },
                { icon: Target, title: t("home.goals"), text: t("home.goalsText") },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-lg shadow-shadow transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl"
                  data-animate
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl
                    bg-gradient-to-br from-gradient-start to-gradient-end text-white mb-4">
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-2" data-animate>
              <Link to="/about" className="inline-flex items-center gap-1 text-primary font-medium
                transition-all duration-300 hover:gap-2">
                {t("home.readMore")}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12" data-animate>
            <h2 className="text-3xl font-bold mb-2 relative inline-block
              after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2
              after:w-12 after:h-1 after:bg-gradient-to-r after:from-gradient-start after:to-gradient-end after:rounded-full">
              {t("home.techStack")}
            </h2>
            <p className="text-text-light text-lg max-w-[600px] mx-auto mt-4">{t("home.techStackSubtitle")}</p>
          </div>

          <div className="flex flex-col gap-12">
            {[
              { title: "Frontend", items: frontendTech },
              { title: "Backend", items: backendTech },
            ].map((category, catIndex) => (
              <div key={catIndex} className="flex flex-col gap-6" data-animate>
                <h3 className="text-2xl font-semibold flex items-center gap-3
                  after:content-[''] after:flex-grow after:h-px after:bg-border after:ml-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-6 justify-center">
                  {category.items.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-3 w-[88px] transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="text-4xl">{tech.icon}</div>
                      <span className="text-sm font-medium text-center">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-bg-alt">
        <div className="container">
          <div className="text-center mb-12" data-animate>
            <h2 className="text-3xl font-bold mb-2 relative inline-block
              after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2
              after:w-12 after:h-1 after:bg-gradient-to-r after:from-gradient-start after:to-gradient-end after:rounded-full">
              {t("home.projectsTitle")}
            </h2>
            <p className="text-text-light text-lg max-w-[600px] mx-auto mt-4">{t("home.projectsSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-2xl overflow-hidden shadow-lg shadow-shadow
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                data-animate
              >
                <div className="w-full h-[200px] bg-gradient-to-br from-gradient-start to-gradient-end" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-bg-alt px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/HuynhSang2005/portfolio-1"
                      target="_blank"
                      className="text-text transition-colors duration-300 hover:text-primary"
                      aria-label="View code"
                    >
                      <Github size={18} />
                    </a>
                    <a href="#" className="text-text transition-colors duration-300 hover:text-primary" aria-label="View live">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" data-animate>
            <Link to="/projects" className="inline-flex items-center gap-1 text-primary font-medium
              transition-all duration-300 hover:gap-2">
              {t("home.viewAllProjects")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gradient-start to-gradient-end text-white">
        <div className="container">
          <div className="text-center max-w-[700px] mx-auto" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.ctaTitle")}</h2>
            <p className="text-lg mb-8 opacity-90">{t("home.ctaText")}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium
                transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5"
            >
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
