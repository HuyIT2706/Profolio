import { RouterProvider } from "react-router-dom";
import "./App.css";
import appRouter from "./routing/Routing";

function App() {
  return (
    <>
      <div className="bg-main">
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
}

export default App;
