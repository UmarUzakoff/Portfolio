import React, { useContext } from "react";
import { LocalizationApi } from "../../../context/localizationContext";
import { ThemeApi } from "../../../context/themeContext";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import scss from "../../../images/scss.svg";
import tailwind from "../../../images/tailwind.svg";
import js from "../../../images/js.svg";
import express from "../../../images/express.svg";
import ejs from "../../../images/ejs.svg";
import grammy from "../../../images/grammy.png";
import socket from "../../../images/socket.svg";
import sql from "../../../images/sql.svg";

const Skills = () => {
  const { theme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);

  return (
    <div>
      <div
        className={`rounded bg-dark1 rounded-t-none border-2 py-4 text-center   ${
          theme === "light"
            ? "bg-light1  border-light1"
            : "bg-dark1 border-light2"
        }`}>
        <h5 className="text-blue font-bold">
          {" "}
          {language === "uz"
            ? "KO'NIKMALAR"
            : language === "ru"
            ? "НАВЫКИ"
            : "SKILLS"}
        </h5>
      </div>
      <div className="max-w-max ml-5 mt-5">
        <ul
          className={`flex flex-row gap-10 text-sm sm:gap-7 lg:gap-40  sm:text-base lg:text-2xl opacity-60 font-semibold ${
            theme === "light" ? "text-dark2" : "text-light1"
          }`}>
          <li className="flex flex-col gap-3 md:gap-5">
            <span className="flex flex-row items-center">
              <FaHtml5 className="text-orange-400"/>
              &nbsp;HTML
            </span>
            <span className="flex flex-row items-center">
              <FaCss3 className="text-sky-500"/>
              &nbsp;CSS
            </span>
            <span className="flex flex-row items-center">
              <img src={scss} alt="scss"/>
              &nbsp;SCSS
            </span>
            <span className="flex flex-row items-center">
              <img src={tailwind} alt="TAILWIND_CSS"/>
              &nbsp;TAILWIND CSS
            </span>
            <span className="flex flex-row items-center">
              <img src={js} alt="JAVASCRIPT"/>
              &nbsp;JAVASCRIPT
            </span>
            <span className="flex flex-row items-center">
              <FaReact className="text-sky-400"/>
              &nbsp;REACT
            </span>
          </li>
          <li className="flex flex-col gap-3 md:gap-5">
            <span className="flex flex-row items-center">
              <FaNodeJs className="text-green-600"/>
              &nbsp;NODE.JS
            </span>
            <span className="flex flex-row items-center">
              <img src={express} alt="EXPRESS.JS"/>
              &nbsp;EXPRESS.JS
            </span>
            <span className="flex flex-row items-center">
              <img src={ejs} alt="EJS"/>
              &nbsp;EJS
            </span>
            <span className="flex flex-row items-center">
              <img src={grammy} className="w-6 h-6" loading={`lazy`} decoding={`async`} alt="GRAMMY.JS"/>
              &nbsp;GRAMMY.JS
            </span>
            <span className="flex flex-row items-center">
              <img src={socket} alt="SOCKET.IO"/>
              &nbsp;SOCKET.IO
            </span>
            <span className="flex flex-row items-center">
              <img src={sql} className="w-[25px] h-9" alt="SQL"/>
              &nbsp;SQL (PostgreSQL)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
