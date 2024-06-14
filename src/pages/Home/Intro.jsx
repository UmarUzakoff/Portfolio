import React, { useContext } from "react";
import { LocalizationApi } from "../../context/localizationContext";
import SocialMedia from "../../utils/SocialMedia";

const Intro = () => {
  const { language } = useContext(LocalizationApi);

  return (
    <div className="flex flex-row gap-2 sm:w-[620px] justify-center md:justify-start md:ml-20 items-center md:rounded-sm md:border-b-2 md:border-b-blue">
      <div className="hidden sm:flex">
        <img
          src="https://ik.imagekit.io/ekbcszw7tx/Portfolio/me.png"
          width="288"
          className="sm:w-72"
          alt="myImage"
        />
      </div>
      <div className="sm:w-1/2 w-2/5 flex flex-col justify-center items-center sm:items-start gap-4">
        <h1 className="sm:text-3xl text-4xl font-bold text-center sm:text-start">
          {language === "uz"
            ? "Salom, men Umarbek Uzoqovman"
            : language === "ru"
            ? "Привет, я Умарбек Узаков "
            : "Hi,I’m Umarbek Uzoqov "}
          <br />
          <span className="text-sm whitespace-nowrap">
            {language === "uz"
              ? "(MuhammadUmar nomi bilan ham tanilgan)"
              : language === "ru"
              ? "(также известный как Мухаммад Умар)"
              : "(also known as MuhammadUmar)"}
          </span>
        </h1>
        <h4 className="sm:text-sm whitespace-nowrap text-center text-lg text-blue font-bold">
          {language === "uz"
            ? "Fullstack Web Dasturchi "
            : language === "ru"
            ? "Fullstack-веб-разработчик "
            : "Fullstack Web Developer "}
        </h4>
        <div className="mt-5 flex flex-row gap-3 items-center justify-center sm:justify-start">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Intro;
