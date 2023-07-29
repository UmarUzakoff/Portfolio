import React, { useContext } from "react";
import { LocalizationApi } from "../../context/localizationContext";
import { ThemeApi } from "../../context/themeContext";
import {
  FaEnvelope,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTelegram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Info = () => {
  const { theme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);

  return (
    <div
      className={`p-5 w-full sm:w-96 rounded ${
        theme === "light" ? "bg-light1" : "bg-dark1"
      }`}>
      <ul className="flex flex-col gap-5">
        <li className="flex flex-col gap-3">
          <span className="text-blue font-bold uppercase">
            {" "}
            {language === "uz"
              ? "Telefon Raqam:"
              : language === "ru"
              ? "Номер телефона: "
              : "Phone: "}
          </span>
          <span className="flex flex-row items-center gap-2 ">
            <FaPhoneAlt />
            <a href="tel:+998999938869">+998 99 993 88 69</a>
          </span>
        </li>
        <li className="flex flex-col gap-3">
          <span className="text-blue font-bold">EMAIL</span>
          <span className="flex flex-row items-center gap-2 ">
            <FaEnvelope />
            <a href="mailto:umar.uzakoff@mail.ru">umar.uzakoff@mail.ru</a>
          </span>
        </li>
        <li className="flex flex-col gap-3">
          <span className="text-blue font-bold">TELEGRAM</span>
          <span className="flex flex-row items-center gap-2 ">
            <FaTelegram />
            <a href="https://t.me/Uzakoff_u" target="blank">
              Uzakoff_u
            </a>
          </span>
        </li>
        <li className="flex flex-col gap-3">
          <span className="text-blue font-bold uppercase">
            {" "}
            {language === "uz"
              ? "Manzil:"
              : language === "ru"
              ? "Адрес: "
              : "Address: "}
          </span>
          <address className="flex flex-row items-center gap-2 ">
            <FaHome />
            {language === "uz"
              ? "O'zbekiston, Toshkent"
              : language === "ru"
              ? "Узбекистан, Ташкент "
              : "Uzbekistan, Tashkent "}
          </address>
        </li>
        <li className="flex flex-col gap-3">
          <span className="text-blue font-bold">
            {language === "uz"
              ? "IJTIMOIY PROFILLAR"
              : language === "ru"
              ? "СОЦИАЛЬНЫЕ ПРОФИЛИ "
              : "SOCIAL PROFILES "}
          </span>
          <div className="flex flex-row gap-3 items-center justify-start">
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
                className={`bg-transparent rounded-full w-10 h-10 hover:text-blue border-2 flex group justify-center animate-pulse items-center hover:border-blue transform duration-300 ${
                  theme === "light" ? "border-dark1" : "border-light1"
                }`}>
                <FaTelegram className="w-6 h-6" />
              </button>
            </Link>
            <Link to={"https://github.com/UmarUzakoff"} target="_blank">
              <button
                className={`bg-transparent rounded-full w-10 h-10 hover:text-blue border-2 flex group justify-center animate-pulse items-center hover:border-blue transform duration-300 ${
                  theme === "light" ? "border-dark1" : "border-light1"
                }`}>
                <FaGithub className="w-6 h-6" />
              </button>
            </Link>
            <Link to={"https://www.linkedin.com/in/umar-uzakov-a71921267"} target="_blank">
              <button
                className={`bg-transparent rounded-full w-10 h-10 hover:text-blue border-2 flex group justify-center animate-pulse items-center hover:border-blue transform duration-300 ${
                  theme === "light" ? "border-dark1" : "border-light1"
                }`}>
                <FaLinkedin className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Info;
