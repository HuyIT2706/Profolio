"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

type Theme = "light" | "dark" | "system"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  currentTheme: "light" | "dark"
  toggleThemeWithAnimation: (event: React.MouseEvent) => void
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
  const [theme, setThemeState] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme")
    return (savedTheme as Theme) || "dark"
  })

  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark")

  const applyTheme = useCallback((newTheme: Theme) => {
    let resolvedTheme: "light" | "dark"

    if (newTheme === "system") {
      resolvedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    } else {
      resolvedTheme = newTheme
    }

    setCurrentTheme(resolvedTheme)

    if (resolvedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const setTheme = useCallback((newTheme: Theme) => {
    localStorage.setItem("theme", newTheme)
    setThemeState(newTheme)
    applyTheme(newTheme)
  }, [applyTheme])

  const getNextTheme = useCallback((): Theme => {
    if (theme === "light") return "dark"
    if (theme === "dark") return "system"
    return "light"
  }, [theme])

  const toggleThemeWithAnimation = useCallback((event: React.MouseEvent) => {
    const nextTheme = getNextTheme()

    if (!document.startViewTransition) {
      setTheme(nextTheme)
      return
    }
    const x = event.clientX
    const y = event.clientY

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )
    document.documentElement.style.setProperty("--click-x", `${x}px`)
    document.documentElement.style.setProperty("--click-y", `${y}px`)
    document.documentElement.style.setProperty("--expand-radius", `${endRadius}px`)

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme)
    })

    transition.ready.then(() => {
      const isDark = document.documentElement.classList.contains("dark")

      const clipPathStart = `circle(0px at ${x}px ${y}px)`
      const clipPathEnd = `circle(${endRadius}px at ${x}px ${y}px)`

      document.documentElement.animate(
        {
          clipPath: isDark
            ? [clipPathStart, clipPathEnd]
            : [clipPathStart, clipPathEnd],
        },
        {
          duration: 800,
          easing: "ease-in-out",
          pseudoElement: isDark
            ? "::view-transition-new(root)"
            : "::view-transition-new(root)",
        }
      )
    })
  }, [getNextTheme, setTheme])

  useEffect(() => {
    applyTheme(theme)

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if (theme === "system") {
        applyTheme(theme)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, applyTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme, toggleThemeWithAnimation }}>
      {children}
    </ThemeContext.Provider>
  )
}

