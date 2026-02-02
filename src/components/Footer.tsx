"use client";

import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Social link component
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
      aria-label={label}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-bg text-text 
        transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
    >
      {children}
    </a>
  );

  // Footer link group component
  const FooterLinkGroup = ({
    title,
    links,
  }: {
    title: string;
    links: { to: string; label: string }[];
  }) => (
    <div>
      <h3
        className="text-lg font-semibold mb-5 relative inline-block
        after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-1
        after:bg-gradient-to-r after:from-gradient-start after:to-gradient-end after:rounded-full"
      >
        {title}
      </h3>
      <ul className="list-none flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-text-light transition-all duration-300 inline-block no-underline
                hover:text-primary hover:translate-x-1"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-bg-alt pt-16 pb-8 mt-auto">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col gap-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_2fr_1fr] gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="inline-flex items-center text-2xl font-bold text-text no-underline hover:text-text"
            >
              <span className="hover:text-primary-hover transition-colors duration-300">
                Bùi Văn Huy
              </span>
            </Link>
            <p className="text-text-light max-w-[300px]">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <FooterLinkGroup
              title={t("footer.navigation")}
              links={[
                { to: "/", label: t("nav.home") },
                { to: "/skills", label: t("nav.skills") },
                { to: "/experience", label: t("nav.experience") },
              ]}
            />
            <FooterLinkGroup
              title={t("footer.more")}
              links={[
                { to: "/projects", label: t("nav.projects") },
                { to: "/about", label: t("nav.about") },
                { to: "/contact", label: t("nav.contact") },
              ]}
            />
          </div>

          {/* Social */}
          <div className="lg:col-span-1 md:col-span-2">
            <h3
              className="text-lg font-semibold mb-5 relative inline-block
              after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-1
              after:bg-gradient-to-r after:from-gradient-start after:to-gradient-end after:rounded-full"
            >
              {t("footer.connect")}
            </h3>
            <div className="flex gap-4">
              <SocialLink
                href="https://github.com/HuynhSang2005"
                label="GitHub"
              >
                <Github size={20} />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/nghuynhsang/"
                label="LinkedIn"
              >
                <Linkedin size={20} />
              </SocialLink>
              <SocialLink
                href="https://www.facebook.com/ng.huynhsangg"
                label="Facebook"
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/ng.huynhsang/"
                label="Instagram"
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </SocialLink>
              <SocialLink href="mailto:huynhsang060305@gmail.com" label="Email">
                <Mail size={20} />
              </SocialLink>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-text-light text-sm gap-4 text-center md:text-left">
          <p>
            &copy; {currentYear} Bùi Văn Huy {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
