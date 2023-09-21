import React, { useContext } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LocalizationApi } from "../../context/localizationContext";
import { ThemeApi } from "../../context/themeContext";
import me from "../../images/me.png";

const Intro = () => {
  const { theme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);

  return (
    <div className="flex flex-row gap-2 sm:w-[560px] justify-center md:justify-start md:ml-20 items-center md:rounded-sm md:border-b-2 md:border-b-blue">
      <div className="hidden sm:flex">
        <img src={me} className="sm:w-72" alt="myImage" />
      </div>
      <div className="sm:w-1/2 w-2/5 flex flex-col justify-center items-center sm:items-start gap-4">
        <h1 className="sm:text-3xl text-4xl font-bold text-center sm:text-start">
          {language === "uz"
            ? "Salom, men Umarbek Uzoqovman"
            : language === "ru"
            ? "Привет, я Умарбек Узаков "
            : "Hi,I’m Umarbek Uzoqov "}
        </h1>
        <h4 className="sm:text-sm whitespace-nowrap text-center text-lg text-blue font-bold">
          {language === "uz"
            ? "Fullstack dasturchi "
            : language === "ru"
            ? "Fullstack-разработчик "
            : "Fullstack Web Developer "}
        </h4>
        <div className="mt-5 flex flex-row gap-3 items-center justify-center sm:justify-start">
          <Link to={"https://www.instagram.com/uzakoff_u/"} target="_blank">
            <button
              className={`bg-transparent rounded-full w-10 h-10 border-2 flex group justify-center animate-pulse items-center hover:border-blue transform duration-300 ${
                theme === "light" ? "border-dark1" : "border-light1"
              }`}>
              <FaInstagram className="w-6 h-6" />
            </button>
          </Link>
          <Link to={"https://t.me/Uzakoff_u"} target="_blank">
            <button
              className={`bg-transparent rounded-full w-10 h-10 border-2 flex group justify-center animate-pulse items-center hover:border-blue transform duration-300 ${
                theme === "light" ? "border-dark1" : "border-light1"
              }`}>
              <FaTelegram className="w-6 h-6" />
            </button>
          </Link>
          <Link to={"https://github.com/UmarUzakoff"} target="_blank">
            <button
              className={`bg-transparent rounded-full w-10 h-10 border-2 flex group justify-center animate-pulse items-center hover:border-blue transform duration-300 ${
                theme === "light" ? "border-dark1" : "border-light1"
              }`}>
              <FaGithub className="w-6 h-6" />
            </button>
          </Link>
          <Link
            to={"https://www.linkedin.com/in/umar-uzakov-a71921267"}
            target="_blank">
            <button
              className={`bg-transparent rounded-full w-10 h-10 border-2 flex group justify-center animate-pulse items-center hover:border-blue transform duration-300 ${
                theme === "light" ? "border-dark1" : "border-light1"
              }`}>
              <FaLinkedin className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
