import React, { useContext } from "react";
import { LocalizationApi } from "../../../context/localizationContext";
import { ThemeApi } from "../../../context/themeContext";

const Languages = () => {
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
            ? "MEN BILADIGAN TILLAR"
            : language === "ru"
            ? "ЯЗЫКИ, КОТОРЫЕ Я ЗНАЮ"
            : "LANGUAGES I KNOW"}
        </h5>
      </div>
      <div className="flex flex-col lg:flex-row xl:gap-10 items-center justify-start">
        <div>
          <div className="mx-5 mt-5 flex flex-col gap-3">
            <h6 className="font-bold text-lg md:text-2xl">
              {" "}
              {language === "uz"
                ? "Ingliz tili"
                : language === "ru"
                ? "Английский"
                : "English"}
            </h6>
            <span
              className={`flex flex-row items-center gap-2 font-thin text-sm opacity-60 ${
                theme === "light" ? "text-dark2" : "text-light2"
              }`}>
              {language === "uz"
                ? "To'liq professional malaka"
                : language === "ru"
                ? "Полная профессиональная квалификация"
                : "Full professional proficiency"}
            </span>
            <hr className="w-32 h-1 my-1 bg-blue border-0 rounded"></hr>
          </div>
          <div className="mx-5 mt-5 flex flex-col gap-3">
            <h6 className="font-bold text-lg md:text-2xl">
              {" "}
              {language === "uz"
                ? "Rus tili"
                : language === "ru"
                ? "Русский"
                : "Russian"}
            </h6>
            <span
              className={`flex flex-row items-center gap-2 font-thin text-sm opacity-60 ${
                theme === "light" ? "text-dark2" : "text-light2"
              }`}>
              {language === "uz"
                ? "To'liq professional malaka"
                : language === "ru"
                ? "Полная профессиональная квалификация"
                : "Full professional proficiency"}
            </span>
            <hr className="w-32 h-1 my-1 bg-blue border-0 rounded"></hr>
          </div>
          <div className="mx-5 mt-5 flex flex-col gap-3">
            <h6 className="font-bold text-lg md:text-2xl">
              {" "}
              {language === "uz"
                ? "O'zbek tili"
                : language === "ru"
                ? "Узбекский"
                : "Uzbek"}
            </h6>
            <span
              className={`flex flex-row items-center gap-2 font-thin text-sm opacity-60 ${
                theme === "light" ? "text-dark2" : "text-light2"
              }`}>
              {language === "uz"
                ? "Ona tili"
                : language === "ru"
                ? "Носитель языка"
                : "Native or bilingual proficiency"}
            </span>
            <hr className="w-40 h-1 my-1 bg-blue border-0 rounded"></hr>
          </div>
        </div>
        <div>
          <div className="mx-5 mt-5 flex flex-col gap-3">
            <h6 className="font-bold text-lg md:text-2xl">
              {" "}
              {language === "uz"
                ? "Tojik tili"
                : language === "ru"
                ? "Таджикский"
                : "Tajik"}
            </h6>
            <span
              className={`flex flex-row items-center gap-2 font-thin text-sm opacity-60 ${
                theme === "light" ? "text-dark2" : "text-light2"
              }`}>
              {language === "uz"
                ? "Ona tili"
                : language === "ru"
                ? "Носитель языка"
                : "Native or bilingual proficiency"}
            </span>
            <hr className="w-40 h-1 my-1 bg-blue border-0 rounded"></hr>
          </div>
          <div className="mx-5 mt-5 flex flex-col gap-3">
            <h6 className="font-bold text-lg md:text-2xl">
              {" "}
              {language === "uz"
                ? "Koreys tili"
                : language === "ru"
                ? "Корейский"
                : "Korean"}
            </h6>
            <span
              className={`flex flex-row items-center gap-2 font-thin text-sm opacity-60 ${
                theme === "light" ? "text-dark2" : "text-light2"
              }`}>
              {language === "uz"
                ? "Elementar malaka"
                : language === "ru"
                ? "Элементарное владение"
                : "Elementary proficiency"}
            </span>
            <hr className="w-8 h-1 my-1 bg-blue border-0 rounded"></hr>
          </div>
          <div className="mx-5 mt-5 flex flex-col gap-3">
            <h6 className="font-bold text-lg md:text-2xl">
              {" "}
              {language === "uz"
                ? "Arab tili"
                : language === "ru"
                ? "Арабский"
                : "Arabic"}
            </h6>
            <span
              className={`flex flex-row items-center gap-2 font-thin text-sm opacity-60 ${
                theme === "light" ? "text-dark2" : "text-light2"
              }`}>
              {language === "uz"
                ? "Elementar malaka"
                : language === "ru"
                ? "Элементарное владение"
                : "Elementary proficiency"}
            </span>
            <hr className="w-8 h-1 my-1 bg-blue border-0 rounded"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
