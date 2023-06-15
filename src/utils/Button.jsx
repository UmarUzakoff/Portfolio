import React, { useContext } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { LocalizationApi } from "../context/localizationContext";

const Button = ( text) => {
  const { setLanguage, language } = useContext(LocalizationApi);

  return (
    <button type={`${text.text.uz === "XABARNI YUBORISH" ? "submit" : "button"}`} className="bg-blue hover:bg-sky-600 transform duration-300 text-light2 font-bold w-[220px] h-[45px] text-center rounded flex justify-center items-center">
      {/* <img src={img} alt="icon" /> */}
      <span className="flex flex-row items-center gap-2">
        {" "}
        {language === "uz"
          ? text.text.uz
          : language === "ru"
          ? text.text.ru
          : text.text.en}
        {text.text.uz === "XABARNI YUBORISH" ? <FaTelegramPlane /> : ""}
      </span>
    </button>
  );
};

export default Button;
