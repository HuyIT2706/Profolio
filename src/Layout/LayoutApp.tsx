import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ScrollApp from "../util/ScrollApp";
const LayoutApp = () => {
  return (
    <>
      <ScrollApp />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutApp;
