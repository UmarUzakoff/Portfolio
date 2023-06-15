import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LocalizationApi } from "../context/localizationContext";

const BackBtn = () => {
  const { setLanguage, language } = useContext(LocalizationApi);

  return (
    <Link
      to={"/"}
      className="relative left-5 bottom-8 sm:bottom-7 bg-transparent hover:border-sky-600 text-blue hover:text-sky-500 transform duration-300 font-semibold sm:py-2 py-1 px-3 sm:px-4 border border-blue rounded">
      <span>
        &larr;{" "}
        {language === "uz"
          ? "Bosh Menu"
          : language === "ru"
          ? "Главная"
          : "Home"}
      </span>
    </Link>
  );
};

export default BackBtn;
