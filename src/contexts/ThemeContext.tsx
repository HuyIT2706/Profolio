"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "light" | "dark" | "system"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  currentTheme: "light" | "dark"
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme")
    return (savedTheme as Theme) || "system"
  })

  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    localStorage.setItem("theme", theme)

    const updateTheme = () => {
      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        setCurrentTheme(systemTheme)
        document.documentElement.setAttribute("data-theme", systemTheme)
      } else {
        setCurrentTheme(theme)
        document.documentElement.setAttribute("data-theme", theme)
      }
    }

    updateTheme()

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if (theme === "system") {
        updateTheme()
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme, currentTheme }}>{children}</ThemeContext.Provider>
}

