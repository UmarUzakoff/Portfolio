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
import axios from "../../../images/axios.png";
import github from "../../../images/github.jpg";

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
          className={`flex flex-row gap-7 text-sm sm:gap-7 lg:gap-40 sm:text-base lg:text-2xl opacity-60 font-semibold ${
            theme === "light" ? "text-dark2" : "text-light1"
          }`}>
          <li className="flex flex-col gap-3 md:gap-5">
            <span className="flex flex-row items-center">
              <FaHtml5 className="text-orange-400 w-6" />
              &nbsp;HTML
            </span>
            <span className="flex flex-row items-center">
              <FaCss3 className="text-sky-500 w-6" />
              &nbsp;CSS
            </span>
            <span className="flex flex-row items-center">
              <img src={scss} className="w-6" alt="scss" />
              &nbsp;SCSS
            </span>
            <span className="flex flex-row items-center">
              <img src={tailwind} alt="TAILWIND_CSS" />
              &nbsp;TAILWIND
            </span>
            <span className="flex flex-row items-center">
              <img src={js} alt="JAVASCRIPT" />
              &nbsp;JAVASCRIPT
            </span>
            <span className="flex flex-row items-center">
              <FaReact className="text-sky-400 w-6" />
              &nbsp;REACT
            </span>
            <span className="flex flex-row items-center">
              <img src={axios} className="w-6" alt="AXIOS" />
              &nbsp;AXIOS
            </span>
            <span className="flex flex-row items-center">
              <img src={github} className="w-6" alt="Github" />
              &nbsp;GITHUB
            </span>
          </li>
          <li className="flex flex-col gap-3 md:gap-5">
            <span className="flex flex-row items-center">
              <FaNodeJs className="text-green-600" />
              &nbsp;NODE.JS
            </span>
            <span className="flex flex-row items-center">
              <img src={express} alt="EXPRESS.JS" />
              &nbsp;EXPRESS.JS
            </span>
            <span className="flex flex-row items-center">
              <img src={ejs} alt="EJS" />
              &nbsp;EJS
            </span>
            <span className="flex flex-row items-center">
              <img
                src={grammy}
                className="w-6 h-6"
                loading={`lazy`}
                decoding={`async`}
                alt="GRAMMY.JS"
              />
              &nbsp;GRAMMY.JS
            </span>
            <span className="flex flex-row items-center">
              <img src={socket} alt="SOCKET.IO" />
              &nbsp;SOCKET.IO
            </span>
            <span className="flex flex-row items-center">
              <img src={sql} className="w-[25px] h-9" alt="SQL" />
              &nbsp;
              <div className="flex flex-col gap-4">
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>Mongoose</span>
              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
