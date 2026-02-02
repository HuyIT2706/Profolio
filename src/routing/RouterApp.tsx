import { createBrowserRouter } from "react-router";
import LayoutApp from "../Layout/LayoutApp";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
const RouterApp = createBrowserRouter([
  {
    path: "/",
    element: <LayoutApp />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default RouterApp;
