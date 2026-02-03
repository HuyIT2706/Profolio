import { useLanguage } from "../contexts/LanguageContext";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Facebook,
  Instagram,
} from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  // Social Link component
  const SocialLink = ({
    href,
    label,
    children,
  }: {
    href: string;
    label: string;
    children: React.ReactNode;
  }) => (
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gradient-start to-gradient-end text-white text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{t("about.title")}</h1>
          <p className="text-lg md:text-xl max-w-[700px] mx-auto opacity-90">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            {/* Left - Image & Social */}
            <div className="flex flex-col items-center gap-8 lg:order-1 order-first">
              <div className="relative w-full max-w-[300px] aspect-square rounded-2xl overflow-hidden
                bg-gradient-to-br from-gradient-start to-gradient-end shadow-xl">
                <div className="w-full h-full flex flex-col items-center justify-center text-white font-bold">
                  <span className="text-6xl">BVH</span>
                </div>
              </div>

              <div className="flex gap-4">
                <SocialLink href="https://github.com/" label="GitHub">
                  <Github size={20} />
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/" label="LinkedIn">
                  <Linkedin size={20} />
                </SocialLink>
                <SocialLink href="https://facebook.com/" label="Facebook">
                  <Facebook size={20} />
                </SocialLink>
                <SocialLink href="https://instagram.com/" label="Instagram">
                  <Instagram size={20} />
                </SocialLink>
                <SocialLink href="mailto:example@email.com" label="Email">
                  <Mail size={20} />
                </SocialLink>
              </div>

              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium
                  transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5"
                download
              >
                <Download size={16} />
                {t("about.downloadResume")}
              </a>
            </div>

            {/* Right - Content */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <p className="text-xl font-medium text-primary">{t("about.intro")}</p>
                <p className="text-text leading-relaxed">{t("about.paragraph1")}</p>
                <p className="text-text leading-relaxed">{t("about.paragraph2")}</p>
                <p className="text-text leading-relaxed">{t("about.paragraph3")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: t("about.name"), value: "Bùi Văn Huy" },
                  { label: t("about.education"), value: t("about.universityName") },
                  { label: t("about.degree"), value: t("about.degreeName") },
                  { label: t("about.location"), value: t("about.locationName") },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold text-text-light">{item.label}</h3>
                    <p className="font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education, Interests, Goals Section */}
      <section className="py-20 bg-bg-alt">
        <div className="container">
          {/* Education */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 relative inline-block
              after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1
              after:bg-gradient-to-r after:from-gradient-start after:to-gradient-end after:rounded-full">
              {t("about.education")}
            </h2>

            <div className="flex flex-col gap-8">
              {[
                {
                  date: t("about.educationPeriod1"),
                  title: t("about.universityName"),
                  subtitle: t("about.degreeName"),
                  desc: t("about.universityDesc"),
                },
                {
                  date: t("about.educationPeriod2"),
                  title: t("about.highSchool"),
                  subtitle: t("about.highSchoolTrack"),
                  desc: t("about.highSchoolDesc"),
                },
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-8 items-start">
                  <span className="font-semibold text-primary whitespace-nowrap">{item.date}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-text-light font-medium mb-3">{item.subtitle}</p>
                    <p className="text-text">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 relative inline-block
              after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1
              after:bg-gradient-to-r after:from-gradient-start after:to-gradient-end after:rounded-full">
              {t("about.interests")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: t("about.interest1Title"), desc: t("about.interest1Desc") },
                { title: t("about.interest2Title"), desc: t("about.interest2Desc") },
                { title: t("about.interest3Title"), desc: t("about.interest3Desc") },
              ].map((item, index) => (
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

          {/* Goals */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 relative inline-block
              after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1
              after:bg-gradient-to-r after:from-gradient-start after:to-gradient-end after:rounded-full">
              {t("about.goals")}
            </h2>

            <div className="bg-card rounded-2xl p-8 shadow-lg shadow-shadow flex flex-col gap-6">
              <p className="text-text leading-relaxed">{t("about.goalsParagraph1")}</p>
              <p className="text-text leading-relaxed">{t("about.goalsParagraph2")}</p>
              <p className="text-text leading-relaxed">{t("about.goalsParagraph3")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
