import React, { useContext } from "react";
import { ThemeApi } from "../../context/themeContext";
import Intro from "./Intro";
import Navigation from "./Navigation";

const Home = () => {
  const { theme } = useContext(ThemeApi);

  return (
    <div
      className={`container pt-7 h-screen sm:pb-[18px] ${
        theme === "light" ? "bg-light1 text-dark1" : "bg-dark1 text-light1"
      }`}>
      <Intro />
      <Navigation />
    </div>
  );
};

export default Home;
