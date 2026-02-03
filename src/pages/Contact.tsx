import type React from "react";
import { useState, type FormEvent } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => {
        setFormStatus("idle");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }, 1000);
  };

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

  // Contact detail item component
  const ContactDetail = ({
    icon,
    title,
    value,
  }: {
    icon: React.ReactNode;
    title: string;
    value: string;
  }) => (
    <div className="flex gap-4 items-start">
      <div className="flex items-center justify-center w-10 h-10 rounded-full
        bg-gradient-to-br from-gradient-start to-gradient-end text-white shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-text-light">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gradient-start to-gradient-end text-white text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{t("contact.title")}</h1>
          <p className="text-lg md:text-xl max-w-[700px] mx-auto opacity-90">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-lg shadow-shadow flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">{t("contact.getInTouch")}</h2>
                <p className="text-text-light">{t("contact.getInTouchText")}</p>
              </div>

              <div className="flex flex-col gap-6">
                <ContactDetail
                  icon={<Mail size={20} />}
                  title={t("contact.email")}
                  value="huynhsang060305@email.com"
                />
                <ContactDetail
                  icon={<MapPin size={20} />}
                  title={t("contact.location")}
                  value={t("contact.locationValue")}
                />
              </div>

              <div className="mt-auto">
                <h3 className="font-semibold mb-4">{t("contact.orConnect")}</h3>
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
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-lg shadow-shadow">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium">
                    {t("contact.nameLabel")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-border rounded-lg bg-bg text-text font-sans
                      transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-medium">
                    {t("contact.emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-border rounded-lg bg-bg text-text font-sans
                      transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="font-medium">
                    {t("contact.subjectLabel")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-border rounded-lg bg-bg text-text font-sans
                      transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-medium">
                    {t("contact.messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-border rounded-lg bg-bg text-text font-sans resize-none
                      transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium
                    transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5
                    disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {formStatus === "idle" ? (
                    <>
                      {t("contact.sendButton")}
                      <Send size={16} />
                    </>
                  ) : formStatus === "success" ? (
                    <>
                      {t("contact.formSuccess")}
                      <CheckCircle size={16} />
                    </>
                  ) : (
                    <>
                      {t("contact.formError")}
                      <AlertCircle size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
