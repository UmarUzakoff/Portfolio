import React, { useContext } from "react";
import { ThemeApi } from "../../context/themeContext";
import BackBtn from "../../utils/BackBtn";
import Heading from "../../utils/Heading";
import ReactPlayer from "react-player/youtube";
import thumbnail from "../../images/thumbnail.png"

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
