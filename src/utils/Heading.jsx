import React, { useContext } from "react";
import { LocalizationApi } from "../context/localizationContext";
import { ThemeApi } from "../context/themeContext";


const Heading = (text) => {
  const { theme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);
  return (
    <div className="sm:pb-10 pb-5 pt-2.5 sm:pt-5 flex justify-center text-2xl">
      <h3
        className={`first-letter:text-blue md:border-b-2 w-max font-bold ${
          theme === "light" ? "md:border-b-dark2" : "md:border-b-light2"
        }`}>
        {language === "uz" ? text.text.uz : language === "ru" ? text.text.ru : text.text.en}
      </h3>
    </div>
  );
};

export default Heading;
