import React, { useContext } from "react";
import { ThemeApi } from "../../context/themeContext";
import BackBtn from "../../utils/BackBtn";
import Heading from "../../utils/Heading";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom/dist";
import { LocalizationApi } from "../../context/localizationContext";

const Blog = () => {
  const { theme } = useContext(ThemeApi);
  const { language } = useContext(LocalizationApi);
  let text = {
    uz: "Mening Blogim",
    ru: "Мой Блог",
    en: "My Blog",
  };
  return (
    <div
      className={`w-full h-[100vh] ${
        theme === "light" ? "bg-light1 text-dark1" : "bg-dark1 text-light1"
      }`}>
      <div className="container">
        <div className="flex flex-col sm:flex-row w-max gap-3">
          <BackBtn />
          <Link
            to={"/aboutMe"}
            className="relative left-5 bottom-8 sm:bottom-7 bg-transparent hover:border-sky-600 text-blue hover:text-sky-500 transform duration-300 font-semibold sm:py-2 py-1 px-3 sm:px-4 border border-blue rounded">
            <span>
              &larr;{" "}
              {language === "uz"
                ? "MEN HAQIMDA"
                : language === "ru"
                ? "ОБО МНЕ"
                : "ABOUT ME"}
            </span>
          </Link>
        </div>
        <Heading text={text} />
      </div>
      <div
        className={`container flex justify-center items-center flex-col 2xl:flex-row gap-10 pb-10 sm:pb-24 ${
          theme === "light" ? "bg-light2 text-dark2" : "bg-dark1 text-light2"
        }`}>
        <div
          className={`pb-5 ${
            theme === "light"
              ? "bg-gray-300 text-gray-900"
              : "bg-gray-900 text-light1"
          } rounded-xl max-w-[350px] sm:max-w-xl lg:max-w-2xl shadow-2xl duration-300 hover:bg-opacity-20`}>
          <ReactPlayer
            height={"498"}
            className="max-w-[350px] sm:max-w-xl lg:max-w-2xl h-96"
            light={"https://ik.imagekit.io/ekbcszw7tx/Portfolio/thumbnail.jpg"}
            url={"https://www.youtube.com/embed/hftggakTH-w"}
            controls
            playing
          />
          <div className="px-5 pt-5 text-sm sm:text-md text-center sm:text-start">
            <p className="mb-1">
              {language === "uz"
                ? "Bir nechta dasturlash tillarini o'rganishning afzalliklari"
                : language === "ru"
                ? "Преимущества изучения нескольких языков программирования"
                : "The benefits of learning multiple programming languages"}
            </p>
            <span>
              {language === "uz"
                ? "Umarbek Uzoqov | TEDxUWED"
                : language === "ru"
                ? "Умарбек Узаков | TEDxUWED"
                : "Umarbek Uzoqov | TEDxUWED"}
            </span>
          </div>
        </div>
        <div
          className={`pb-5 ${
            theme === "light"
              ? "bg-gray-300 text-gray-900"
              : "bg-gray-900 text-light1"
          } rounded-xl max-w-[350px] sm:max-w-xl lg:max-w-2xl shadow-2xl duration-300 hover:bg-opacity-20`}>
          <ReactPlayer
            height={"498"}
            className="max-w-[350px] sm:max-w-xl lg:max-w-2xl h-96"
            light={
              "https://ik.imagekit.io/ekbcszw7tx/Portfolio/me2.jpg"
            }
            url={"https://youtu.be/4Y1cpdriEj4"}
            controls
            playing
          />
          <div className="px-5 pt-5 text-sm sm:text-md text-center sm:text-start">
            <p className="mb-1">
              {language === "uz"
                ? "Ta'lim tizimini o'zgartirish: qiziqarli ta'lim sehri!"
                : language === "ru"
                ? "Преобразование обучения: магия веселого образования!"
                : "Transforming Learning: The Magic of Fun-filled Education!"}
            </p>
            <span>
              {language === "uz"
                ? "MuhammadUmar Uzoqov | Coddy Camp IT Academy"
                : language === "ru"
                ? "МухаммадУмар Узаков | Coddy Camp IT Academy"
                : "MuhammadUmar Uzoqov | Coddy Camp IT Academy"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
