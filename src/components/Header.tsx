import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { Sun, Moon, Menu, X, Home, User, Briefcase, Code, Mail, Monitor } from "lucide-react";

const Header = () => {
  const { theme, toggleThemeWithAnimation } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: t("nav.home"), icon: Home },
    { path: "/about", label: t("nav.about"), icon: User },
    { path: "/skills", label: t("nav.skills"), icon: Code },
    { path: "/projects", label: t("nav.projects"), icon: Briefcase },
    { path: "/contact", label: t("nav.contact"), icon: Mail },
  ];

  // Get current theme icon
  const getThemeIcon = () => {
    if (theme === "light") return <Sun size={18} />;
    if (theme === "dark") return <Moon size={18} />;
    return <Monitor size={18} />;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300
        ${isScrolled ? "py-3" : ""}`}
    >
      <div className="container flex items-center justify-center">
        {/* Pill Navigation Container */}
        <div className={`flex items-center gap-2 bg-bg/80 backdrop-blur-md rounded-full px-3 py-2 shadow-lg shadow-shadow/30 border border-border/50
          transition-all duration-300 ${isScrolled ? "bg-bg/95" : ""}`}>
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center px-3 py-1.5 text-sm font-bold text-text-light hover:text-text transition-colors duration-300"
            onClick={closeMenu}
          >
            BVHuy
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                    ${isActive 
                      ? "bg-white text-gray-900 shadow-md" 
                      : "text-text-light hover:text-text hover:bg-bg-alt/50"
                    }`}
                  onClick={closeMenu}
                >
                  <Icon size={16} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-border/50 mx-1" />

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-1">
            {/* Language Toggle */}
            <button
              className={`px-2 py-1.5 rounded-full text-sm font-medium transition-all duration-300 
                ${language === "vi" ? "text-text" : "text-text-light hover:text-text hover:cursor-pointer"}`}
              onClick={() => setLanguage(language === "en" ? "vi" : "en")}
            >
              {language.toUpperCase()}
            </button>

            {/* Theme Toggle */}
            <button
              className="flex items-center justify-center w-8 h-8 rounded-full text-text-light hover:text-text hover:bg-bg-alt/50 hover:cursor-pointer transition-all duration-300"
              onClick={toggleThemeWithAnimation}
              aria-label="Toggle theme"
            >
              {getThemeIcon()}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full text-text-light hover:text-text transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-[75%] h-screen bg-bg/95 backdrop-blur-md shadow-[-2px_0_20px] shadow-shadow z-[1001]
          transition-transform duration-300 ease-in-out pt-20 px-6
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300
                  ${isActive 
                    ? "bg-primary text-white" 
                    : "text-text hover:bg-bg-alt"
                  }`}
                onClick={closeMenu}
              >
                <Icon size={20} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
          {/* Language */}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-bg-alt text-sm font-medium "
            onClick={() => setLanguage(language === "en" ? "vi" : "en")}
          >
            {language === "en" ? "EN" : "VI"}
          </button>

          {/* Theme */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-bg-alt text-text "
            onClick={toggleThemeWithAnimation}
          >
            {getThemeIcon()}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-[1000]"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;
