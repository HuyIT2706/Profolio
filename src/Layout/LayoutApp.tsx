import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ScrollApp from "../util/ScrollApp";

const LayoutApp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <ScrollApp />
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutApp;
