import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Main = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={`${isDarkMode && "dark"}`}>
      <section className="dark:bg-dark">
        <section className="w-3/4 xl:w-2/4 mx-auto py-10">
          <Header />
          <SubHeader />
          <Outlet />
          <Footer />
        </section>
      </section>
    </section>
  );
};

export default Main;
