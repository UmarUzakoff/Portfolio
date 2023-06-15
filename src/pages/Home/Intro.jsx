import React, { useContext } from "react";
import { LocalizationApi } from "../../context/localizationContext";
import me from "../../images/me.png";

const Intro = () => {
  const { setLanguage, language } = useContext(LocalizationApi);

  return (
    <div className="flex flex-row gap-2 sm:w-[560px] justify-center md:justify-start md:ml-20 items-center md:rounded-sm md:border-b-2 md:border-b-blue">
      <div className="hidden sm:flex">
        <img src={me} className="sm:w-72" alt="myImage" />
      </div>
      <div className="sm:w-1/2 w-2/5 flex flex-col gap-4">
        <h1 className="sm:text-3xl text-4xl font-bold">
          {language === "uz"
            ? "Salom, men Umarbek Uzoqovman"
            : language === "ru"
            ? "Привет, я Умарбек Узаков "
            : "Hi I’m Umarbek Uzoqov "}
        </h1>
        <h4 className="sm:text-sm text-lg text-blue font-bold">
          {language === "uz"
            ? "Fullstack dasturchi "
            : language === "ru"
            ? "Fullstack-разработчик "
            : "Fullstack developer "}
        </h4>
      </div>
    </div>
  );
};

export default Intro;
