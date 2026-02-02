"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { en } from "../locales/en"
import { vi } from "../locales/vi"

type Language = "en" | "vi"
type Translations = typeof en

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: keyof Translations) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language")
    return (savedLanguage as Language) || "en"
  })

  const translations = {
    en,
    vi,
  }

  const t = (key: keyof Translations) => {
    return translations[language][key] || key
  }

  const handleSetLanguage = (newLanguage: Language) => {
    localStorage.setItem("language", newLanguage)
    setLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

