import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }
]);

export default appRouter;
