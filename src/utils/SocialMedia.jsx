import React, { useContext } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeApi } from "../context/themeContext";

const SocialMedia = () => {
  const { theme } = useContext(ThemeApi);
  return (
    <>
      <Link to={"https://www.instagram.com/uzakoff_u/"} target="_blank">
        <button
          className={`bg-transparent rounded-full w-10 h-10 hover:text-blue border-2 flex group justify-center animate-pulse items-center hover:border-blue transform duration-300 ${
            theme === "light" ? "border-dark1" : "border-light1"
          }`}>
          <FaInstagram className="w-6 h-6" />
        </button>
      </Link>
      <Link to={"https://t.me/Uzakoff_u"} target="_blank">
        <button
          className={`bg-transparent rounded-full w-10 h-10 hover:text-blue border-2 flex group justify-center animate-pulse animate-delay-[200ms] items-center hover:border-blue transform duration-300 ${
            theme === "light" ? "border-dark1" : "border-light1"
          }`}>
          <FaTelegram className="w-6 h-6" />
        </button>
      </Link>
      <Link to={"https://github.com/UmarUzakoff"} target="_blank">
        <button
          className={`bg-transparent rounded-full w-10 h-10 hover:text-blue border-2 flex group justify-center animate-pulse animate-delay-[400ms] items-center hover:border-blue transform duration-300 ${
            theme === "light" ? "border-dark1" : "border-light1"
          }`}>
          <FaGithub className="w-6 h-6" />
        </button>
      </Link>
      <Link
        to={
          "https://www.linkedin.com/in/muhammadumar-uzakov-%F0%9F%87%B5%F0%9F%87%B8-a71921267/"
        }
        target="_blank">
        <button
          className={`bg-transparent rounded-full w-10 h-10 hover:text-blue border-2 flex group justify-center animate-pulse animate-delay-[600ms] items-center hover:border-blue transform duration-300 ${
            theme === "light" ? "border-dark1" : "border-light1"
          }`}>
          <FaLinkedin className="w-6 h-6" />
        </button>
      </Link>
    </>
  );
};

export default SocialMedia;
