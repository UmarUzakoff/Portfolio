import React, { useContext } from "react";
import { LocalizationApi } from "../../../context/localizationContext";
import { ThemeApi } from "../../../context/themeContext";
import { FaLanguage, FaHandshake, FaRegHeart } from "react-icons/fa";

const Stats = () => {
  const { theme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);

  return (
    <section className="flex md:flex-row flex-col justify-center items-center gap-10 sm:gap-20 lg:gap-60">
      <div className="flex flex-row gap-3 justify-center items-center">
        <FaLanguage className="w-16 h-16" />
        <div className="flex flex-col">
          <span className="text-blue text-5xl">4+</span>
          <span
            className={`text-lg ${
              theme === "light" ? "text-dark1" : "text-light1"
            }`}>
            {language === "uz"
              ? "TIL KO'NIKMALARI"
              : language === "ru"
              ? "ЯЗЫКОВЫЕ НАВЫКИ "
              : "LANGUAGE SKILLS "}
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-3 justify-center items-center">
        <FaHandshake className="w-16 h-16" />
        <div className="flex flex-col">
          <span className="text-blue text-5xl">30+</span>
          <span
            className={`text-lg ${
              theme === "light" ? "text-dark1" : "text-light1"
            }`}>
            {language === "uz"
              ? "Bajarilgan loyihalar "
              : language === "ru"
              ? "ВЫПОЛНЕННЫЕ ПРОЕКТЫ "
              : "DONE PROJECTS "}
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-3 justify-center items-center">
        <FaRegHeart className="w-16 h-16" />
        <div className="flex flex-col">
          <span className="text-blue text-5xl">20+</span>
          <span
            className={`text-lg ${
              theme === "light" ? "text-dark1" : "text-light1"
            }`}>
            {language === "uz"
              ? "MAMNUN MIJOZLAR "
              : language === "ru"
              ? "СЧАСТЛИВЫЕ КЛИЕНТЫ "
              : "HAPPY CUSTOMERS "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
