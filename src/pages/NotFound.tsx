"use client"

import { Link } from "react-router-dom"
import { useLanguage } from "../contexts/LanguageContext"
import { Home } from "lucide-react"
import "../styles/NotFound.css"

const NotFound = () => {
  const { t } = useLanguage()

  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <h1 className="not-found-title">{t("notFound.title")}</h1>
          <p className="not-found-message">{t("notFound.message")}</p>
          <Link to="/" className="primary-btn">
            <Home size={16} />
            {t("notFound.button")}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound

