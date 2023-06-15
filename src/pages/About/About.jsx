import React, { useContext } from "react";
import { ThemeApi } from "../../context/themeContext";
import BackBtn from "../../utils/BackBtn";
import Heading from "../../utils/Heading";
import Hr from "../../utils/Hr";
import Info from "./Info/Info";
import PersonalInfo from "./PersonalInfo";
import Stats from "./Stats/Stats";

const About = () => {
  const { theme } = useContext(ThemeApi);
  let text = {
    uz: "MEN HAQIMDA",
    ru: "ОБО МНЕ",
    en: "ABOUT ME",
  };
  return (
    <div
      className={`container ${
        theme === "light" ? "bg-light1 text-dark1" : "bg-dark1 text-light1"
      }`}>
      <BackBtn />
      <Heading text={text} />
      <div
        className={`sm:px-20 px-7 pt-5 pb-10 ${
          theme === "light" ? "bg-light2 text-dark2" : "bg-dark2 text-light2"
        }`}>
        <PersonalInfo />
        <Hr />
        <Info />
        <Hr />
        <Stats />
      </div>
    </div>
  );
};

export default About;
