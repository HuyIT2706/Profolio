
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { Sun, Moon, Laptop, Menu, X } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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
      setScrollProgress(scrollPercentage);
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

  const ThemeButtons = ({ size = 18 }: { size?: number }) => (
    <>
      <button
        className={`flex items-center justify-center bg-transparent border-none rounded-full p-2 text-text-light transition-all duration-300 cursor-pointer
          ${theme === "light" ? "bg-primary text-white" : "hover:text-text"}`}
        onClick={() => setTheme("light")}
        aria-label="Light mode"
      >
        <Sun size={size} />
      </button>
      <button
        className={`flex items-center justify-center bg-transparent border-none rounded-full p-2 text-text-light transition-all duration-300 cursor-pointer
          ${theme === "system" ? "bg-primary text-white" : "hover:text-text"}`}
        onClick={() => setTheme("system")}
        aria-label="System theme"
      >
        <Laptop size={size} />
      </button>
      <button
        className={`flex items-center justify-center bg-transparent border-none rounded-full p-2 text-text-light transition-all duration-300 cursor-pointer
          ${theme === "dark" ? "bg-primary text-white" : "hover:text-text"}`}
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
      >
        <Moon size={size} />
      </button>
    </>
  );

  // Language toggle component
  const LanguageToggle = () => (
    <>
      <button
        className={`bg-transparent border-none font-medium p-1 transition-colors duration-300 cursor-pointer
          ${language === "en" ? "text-primary font-semibold" : "text-text-light hover:text-text"}`}
        onClick={() => setLanguage("en")}
        aria-label="English"
      >
        EN
      </button>
      <span className="text-text-light">|</span>
      <button
        className={`bg-transparent border-none font-medium p-1 transition-colors duration-300 cursor-pointer
          ${language === "vi" ? "text-primary font-semibold" : "text-text-light hover:text-text"}`}
        onClick={() => setLanguage("vi")}
        aria-label="Vietnamese"
      >
        VI
      </button>
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300
        ${isScrolled ? "bg-bg/85 backdrop-blur-md shadow-lg py-3" : ""}`}
    >
      <div className="container py-7.25 flex items-center justify-between">
        {/* Left side - Logo & Mobile Controls */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center text-xl font-bold text-text whitespace-nowrap no-underline hover:text-text"
            onClick={closeMenu}
          >
            <span className="transition-colors duration-300">Huỳnh Sang</span>
            <span className="text-primary ml-0.5">.</span>
          </Link>

          {/* Mobile controls - visible on tablet */}
          <div className="hidden md:hidden sm:flex items-center gap-3 ml-3">
            <div className="flex items-center bg-bg-alt rounded-full p-1">
              <ThemeButtons size={16} />
            </div>
            <div className="flex items-center gap-1">
              <LanguageToggle />
            </div>
          </div>
        </div>

        {/* Right side - Nav, Controls, Menu Toggle */}
        <div className="flex items-center gap-8">
          {/* Navigation */}
          <nav
            className={`md:static md:w-auto md:h-auto md:bg-transparent md:shadow-none md:p-0 md:translate-x-0
              fixed top-0 right-0 w-[70%] h-screen bg-bg shadow-[-2px_0_10px] shadow-shadow z-[1001] pt-20 px-8 pb-8
              transition-transform duration-300 ease-in-out
              ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}
          >
            <ul className="flex md:flex-row flex-col list-none gap-6 md:gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-text font-medium relative transition-colors duration-300 no-underline
                      after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:rounded-full
                      after:bg-gradient-to-r after:from-gradient-start after:to-gradient-end after:transition-all after:duration-300
                      ${location.pathname === link.path ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Controls inside mobile nav */}
            <div className="md:hidden flex flex-col gap-4 mt-8">
              <div className="flex items-center bg-bg-alt rounded-full p-1 w-fit">
                <ThemeButtons size={18} />
              </div>
              <div className="flex items-center gap-1">
                <LanguageToggle />
              </div>
            </div>
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center bg-bg-alt rounded-full p-1">
              <ThemeButtons size={18} />
            </div>
            <div className="flex items-center gap-1">
              <LanguageToggle />
            </div>
          </div>

          {/* Menu Toggle Button */}
          <button
            className="md:hidden flex bg-transparent border-none text-text z-[1002] cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-gradient-start to-gradient-end transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
};

export default Header;
