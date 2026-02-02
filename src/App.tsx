import { ThemeProvider } from "./contexts/ThemeContext"
import { LanguageProvider } from "./contexts/LanguageContext"
import RouterApp from "./routing/RouterApp"
import { RouterProvider } from "react-router-dom"
import "./styles/App.css"


function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <RouterProvider router={RouterApp} />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App