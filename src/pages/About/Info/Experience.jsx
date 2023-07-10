import React, { useContext } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { LocalizationApi } from "../../../context/localizationContext";
import { ThemeApi } from "../../../context/themeContext";

const Experience = () => {
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
            ? "TAJRIBA"
            : language === "ru"
            ? "ОПЫТ"
            : "EXPERIENCE"}
        </h5>
      </div>
      <div className="mx-5 mt-5 flex flex-col gap-3">
        <h6 className="font-bold text-2xl">Mars IT School</h6>
        <p className="font-thin uppercase">
          {language === "uz"
            ? "FRONTEND - INSTRUKTOR"
            : language === "ru"
            ? "Инструктор - Frontend"
            : "FRONTEND - INSTRUCTOR"}
        </p>
        <span
          className={`flex flex-row items-center gap-2 font-thin text-sm opacity-60 ${
            theme === "light" ? "text-dark2" : "text-light2"
          }`}>
          <FaCalendarAlt />
          2023 {" "}
          {language === "uz"
            ? "Iyun - Hozirda ishlamoqdaman"
            : language === "ru"
            ? "Июнь - сейчас работаю"
            : "June - Currently working"}
        </span>
        <hr className="w-40 h-1 my-3 bg-blue border-0 rounded"></hr>
      </div>
    </div>
  );
};

export default Experience;
