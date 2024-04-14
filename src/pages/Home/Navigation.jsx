import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeApi } from "../../context/themeContext";
import { LocalizationApi } from "../../context/localizationContext";

const Navigation = () => {
  const { theme } = useContext(ThemeApi);
  const { language } = useContext(LocalizationApi);

  return (
    <section
      className={`py-5 mt-10 rounded ${
        theme === "light"
          ? "sm:bg-light2 bg-light1 text-dark2"
          : "sm:bg-dark2 bg-dark1 text-light2"
      }`}>
      <nav>
        <ul className="flex sm:flex-row flex-col gap-7 justify-center items-center">
          <Link
            to={"/aboutMe"}
            className={`font-bold hover:shadow-xl sm:ml-5 sm:w-1/3 sm:h-64 w-5/6 py-3 rounded text-center flex justify-center items-center transition duration-500 hover:scale-105 ${
              theme === "light"
                ? "sm:bg-light1 bg-light2 text-dark1"
                : "sm:bg-dark1 bg-dark2 text-light1"
            }`}>
            <span
              className={`first-letter:text-blue md:border-b-2 ${
                theme === "light" ? "md:border-b-dark2" : "md:border-b-light2"
              }`}>
              {" "}
              {language === "uz"
                ? "MEN HAQIMDA"
                : language === "ru"
                ? "ОБО МНЕ "
                : "ABOUT ME "}
            </span>
          </Link>
          <Link
            to={`/myPortfolio`}
            className={`font-bold hover:shadow-xl sm:w-1/3 sm:h-64 w-5/6 py-3 rounded text-center flex justify-center items-center transition duration-500 hover:scale-105 ${
              theme === "light"
                ? "sm:bg-light1 bg-light2 text-dark1"
                : "sm:bg-dark1 bg-dark2 text-light1"
            }`}>
            <span
              className={`first-letter:text-blue md:border-b-2 ${
                theme === "light" ? "md:border-b-dark2" : "md:border-b-light2"
              }`}>
              {" "}
              {language === "uz"
                ? "MENING PORTFOLIOM"
                : language === "ru"
                ? "МОЕ ПОРТФОЛИО "
                : "MY PORTFOLIO "}
            </span>
          </Link>
          <Link
            to={`/contact`}
            className={`font-bold hover:shadow-xl sm:mr-5 sm:w-1/3 sm:h-64 w-5/6 py-3 rounded text-center flex justify-center items-center transition duration-500 hover:scale-105 ${
              theme === "light"
                ? "sm:bg-light1 bg-light2 text-dark1"
                : "sm:bg-dark1 bg-dark2 text-light1"
            }`}>
            <span
              className={`first-letter:text-blue md:border-b-2 ${
                theme === "light" ? "md:border-b-dark2" : "md:border-b-light2"
              }`}>
              {" "}
              {language === "uz"
                ? "BOG'LANISH"
                : language === "ru"
                ? "СВЯЗАТЬСЯ "
                : "GET IN TOUCH "}
            </span>
          </Link>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
