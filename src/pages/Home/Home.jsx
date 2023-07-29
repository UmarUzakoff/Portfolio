import React, { useContext } from "react";
import { ThemeApi } from "../../context/themeContext";
import Intro from "./Intro";
import Navigation from "./Navigation";

const Home = () => {
  const { theme } = useContext(ThemeApi);

  return (
    <div
      className={`w-full pt-7 h-screen sm:h-full  sm:pb-[18px] ${
        theme === "light" ? "bg-light1 text-dark1" : "bg-dark1 text-light1"
      }`}>
      <div className="container">
        <Intro />
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
