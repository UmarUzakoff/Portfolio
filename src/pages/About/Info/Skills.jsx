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
import database from "../../../images/database.png";
import axios from "../../../images/axios.png";

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
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="#3178C6" d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"/><path fill="#FFF" d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179c6.133 1.151 12.597 1.726 19.393 1.726c6.622 0 12.914-.633 18.874-1.899c5.96-1.266 11.187-3.352 15.678-6.257c4.492-2.906 8.048-6.704 10.669-11.394c2.62-4.689 3.93-10.486 3.93-17.391c0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898c-3.945-2.33-8.394-4.531-13.347-6.602c-3.628-1.497-6.881-2.949-9.761-4.359c-2.879-1.41-5.327-2.848-7.342-4.316c-2.016-1.467-3.571-3.021-4.665-4.661c-1.094-1.64-1.641-3.495-1.641-5.567c0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547c2.591-.604 5.471-.906 8.638-.906c2.304 0 4.737.173 7.299.518c2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582c-4.981-.777-10.697-1.165-17.147-1.165c-6.565 0-12.784.705-18.658 2.115c-5.874 1.409-11.043 3.61-15.506 6.602c-4.463 2.993-7.99 6.805-10.582 11.437c-2.591 4.632-3.887 10.17-3.887 16.615c0 8.228 2.375 15.248 7.127 21.06c4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66c2.39 1.611 4.276 3.366 5.658 5.265c1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97c-1.756 1.122-3.945 1.999-6.565 2.632c-2.62.633-5.687.95-9.2.95c-5.989 0-11.92-1.05-17.794-3.151c-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"/></svg>
              &nbsp;TYPESCRIPT
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
              <img src={database} className="w-[25px] h-9" alt="SQL" />
              &nbsp;
              <div className="flex flex-col gap-4">
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>Redis</span>
              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
