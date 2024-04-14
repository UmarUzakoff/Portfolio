import React, { useContext } from "react";
import { LocalizationApi } from "../../../context/localizationContext";
import { ThemeApi } from "../../../context/themeContext";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";

const Skills = () => {
  const { theme } = useContext(ThemeApi);
  const { language } = useContext(LocalizationApi);

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
      <div className="max-w-max ml-5 my-5">
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
              <img
                src="https://ik.imagekit.io/ekbcszw7tx/Portfolio/scss.svg"
                className="w-6"
                alt="scss"
              />
              &nbsp;SCSS
            </span>
            <span className="flex flex-row items-center">
              <img
                src="https://ik.imagekit.io/ekbcszw7tx/Portfolio/tailwind.svg"
                alt="TAILWIND_CSS"
              />
              &nbsp;TAILWIND
            </span>
            <span className="flex flex-row items-center">
              <img
                src="https://ik.imagekit.io/ekbcszw7tx/Portfolio/js.svg"
                alt="JAVASCRIPT"
              />
              &nbsp;JAVASCRIPT
            </span>
            <span className="flex flex-row items-center">
              <FaReact className="text-sky-400 w-6" />
              &nbsp;REACT
            </span>
            <span className="flex flex-row items-center">
              <img
                src="https://ik.imagekit.io/ekbcszw7tx/Portfolio/axios-logo.png"
                className="w-6"
                alt="AXIOS"
              />
              &nbsp;AXIOS
            </span>
            <span className="flex flex-row items-center">
              <img
                className="w-6"
                src="https://ik.imagekit.io/ekbcszw7tx/Portfolio/typescript"
                alt="TYPESCRIPT"
              />
              &nbsp;TYPESCRIPT
            </span>
          </li>
          <li className="flex flex-col gap-3 md:gap-5">
            <span className="flex flex-row items-center">
              <FaNodeJs className="text-green-600" />
              &nbsp;NODE.JS
            </span>
            <span className="flex flex-row items-center">
              <img
                src="https://ik.imagekit.io/ekbcszw7tx/Portfolio/express.svg"
                alt="EXPRESS.JS"
              />
              &nbsp;EXPRESS.JS
            </span>
            <span className="flex flex-row items-center">
              <img
                src="https://ik.imagekit.io/ekbcszw7tx/Portfolio/ejs.svg"
                alt="EJS"
              />
              &nbsp;EJS
            </span>
            <span className="flex flex-row items-center">
              <img
                src="https://ik.imagekit.io/ekbcszw7tx/Portfolio/grammy.png"
                className="w-6 h-6"
                alt="GRAMMY.JS"
              />
              &nbsp;GRAMMY.JS
            </span>
            <span className="flex flex-row items-center">
              <img
                src="https://ik.imagekit.io/ekbcszw7tx/Portfolio/socket.svg"
                alt="SOCKET.IO"
              />
              &nbsp;SOCKET.IO
            </span>
            <span className="flex flex-row items-center">
              <img
                src="https://ik.imagekit.io/ekbcszw7tx/Portfolio/database.png"
                className="w-[25px] h-9"
                alt="SQL"
              />
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
