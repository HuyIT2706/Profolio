import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ScrollApp from "../util/ScrollApp";
import ParticleStars from "../components/ParticleStars";

const LayoutApp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <ParticleStars />
      <ScrollApp />
      <Header />
      <main className="flex-1 pt-20 relative z-[1]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutApp;
