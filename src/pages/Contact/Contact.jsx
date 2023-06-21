import React, { useContext } from "react";
import { ThemeApi } from "../../context/themeContext";
import BackBtn from "../../utils/BackBtn";
import Heading from "../../utils/Heading";
import Info from "./Info";
import Form from "./Form";

const Contact = () => {
  const { theme } = useContext(ThemeApi);

  let text = {
    uz: "BOG'LANISH",
    ru: "СВЯЗАТЬСЯ",
    en: "GET IN TOUCH",
  };
  return (
    <div
      className={`w-full h-screen ${
        theme === "light" ? "bg-light1 text-dark1" : "bg-dark1 text-light1"
      }`}>
      <div className="container">
        <BackBtn />
        <Heading text={text} />
      </div>
      <div
        className={`container sm:px-20 px-7 pt-5 pb-[85px] flex flex-col sm:flex-row justify-center gap-10 ${
          theme === "light" ? "bg-light2 text-dark2" : "bg-dark2 text-light2"
        }`}>
        <Info />
        <Form />
      </div>
    </div>
  );
};

export default Contact;
