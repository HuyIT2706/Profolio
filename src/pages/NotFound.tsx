import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Home } from "lucide-react";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center min-h-screen py-8">
      <div className="container">
        <div className="text-center max-w-[600px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
            {t("notFound.title")}
          </h1>
          <p className="text-text-light text-lg md:text-xl mb-8">
            {t("notFound.message")}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium
              transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5"
          >
            <Home size={16} />
            {t("notFound.button")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
