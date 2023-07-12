import React, { useContext } from "react";
import { ThemeApi } from "../../context/themeContext";
import BackBtn from "../../utils/BackBtn";
import Heading from "../../utils/Heading";
import ReactPlayer from "react-player/youtube";
import thumbnail from "../../images/thumbnail.png";
import { Link } from "react-router-dom/dist";
import { LocalizationApi } from "../../context/localizationContext";

const Blog = () => {
  const { theme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);
  let text = {
    uz: "Mening Blogim",
    ru: "Мой Блог",
    en: "My Blog",
  };
  return (
    <div
      className={`w-full h-screen ${
        theme === "light" ? "bg-light1 text-dark1" : "bg-dark1 text-light1"
      }`}>
      <div className="container">
        <div className="flex flex-col sm:flex-row w-max gap-3">
          <BackBtn />
          <Link
            to={"/admin/dashboard"}
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
        className={`container flex justify-center items-center ${
          theme === "light" ? "bg-light2 text-dark2" : "bg-dark1 text-light2"
        }`}>
        <ReactPlayer
          className="w-full h-96"
          height={"498"}
          light={thumbnail}
          url={"https://www.youtube.com/embed/hftggakTH-w"}
          controls
          playing
        />
      </div>
    </div>
  );
};

export default Blog;
