import React, { useContext } from "react";
import { ThemeApi } from "../../context/themeContext";
import BackBtn from "../../utils/BackBtn";
import Heading from "../../utils/Heading";

const Blog = () => {
  const { theme } = useContext(ThemeApi);
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
        <BackBtn />
        <Heading text={text} />
      </div>
      <div
        className={`container flex justify-center items-center ${
          theme === "light" ? "bg-light2 text-dark2" : "bg-dark2 text-light2"
        }`}>
        <iframe
          className="w-full"
          height="498"
          src="https://www.youtube.com/embed/hftggakTH-w"
          title="The benefits of learning multiple programming languages | Umarbek Uzoqov | TEDxUWED"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Blog;
