import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeApi } from "../../context/themeContext";
import { LocalizationApi } from "../../context/localizationContext";
import { FaCalendarAlt, FaRegSun } from "react-icons/fa";
import BackBtn from "../../utils/BackBtn";
import Heading from "../../utils/Heading";
import projects from "./projectsdata";

const ExactProject = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  const { theme } = useContext(ThemeApi);
  const { language } = useContext(LocalizationApi);

  let { id } = useParams();

  const project = projects.find((project) => project.id == id);

  let text = {
    uz: "MENING PORTFOLIOM ",
    ru: "МОЕ ПОРТФОЛИО ",
    en: "MY PORTFOLIO",
  };

  return (
    <div
      className={`w-full h-[100vh] ${
        theme === "light" ? "bg-light1 text-dark1" : "bg-dark1 text-light1"
      }`}>
      <div className="container">
        <div className="flex w-max flex-col text-center sm:flex-row gap-3 sm:gap-5">
          <BackBtn />
          <Link
            to={"/myPortfolio"}
            className="relative left-5 bottom-8 sm:bottom-7 bg-transparent hover:border-sky-600 text-blue hover:text-sky-500 transform duration-300 font-semibold sm:py-2 py-1 px-3 sm:px-4 border border-blue rounded">
            <span>
              &larr;{" "}
              {language === "uz"
                ? "BARCHA LOYIHALAR "
                : language === "ru"
                ? "ВСЕ ПРОЕКТЫ "
                : "ALL PROJECTS "}
            </span>
          </Link>
        </div>
      </div>
      <Heading text={text} />
      {loading ? (
        <div className="mt-20 flex justify-center items-center">
          <div
            className="w-12 h-12 rounded-full animate-spin absolute border-8 border-dashed
       border-blue border-t-transparent"></div>
        </div>
      ) : (
        <div
          className={`container sm:px-20 py-5 flex flex-col sm:flex-row justify-center gap-10 ${
            theme === "light" ? "bg-light2 text-dark2" : "bg-dark2 text-light2"
          }`}>
          <div className="w-screen px-1 py-10 sm:p-10 flex justify-center items-center sm:justify-start sm:items-start flex-col md:flex-row gap-10">
            <div
              className={`shadow-2xl rounded-lg w-80 sm:w-96 bg-black/5 border-2 border-solid border-black/5 transition-all flex flex-col items-stretch justify-start ${
                theme === "light" ? "hover:bg-light1/50" : "hover:bg-dark1"
              }`}>
              <img
                src={project.image}
                alt={`${project.name}`}
                className="w-full h-48 rounded-lg pb-0 mb-0 border-b-4 border-blue "
                loading="lazy"
              />
              <div className="flex flex-col justify-start items-start mx-3 my-2">
                <div className="flex justify-between gap-32 sm:gap-48 flex-row items-center">
                  <h5 className="first-letter:text-blue font-bold uppercase">
                    {" "}
                    {language === "uz"
                      ? "ma `lumot"
                      : language === "ru"
                      ? "Информация"
                      : "Information"}
                  </h5>
                </div>
                <ul className="mt-5 flex flex-row justify-start items-center gap-5">
                  <li className="flex flex-col gap-2 font-semibold">
                    <span className="flex flex-row gap-2 items-center">
                      <FaCalendarAlt />
                      {language === "uz"
                        ? "Boshlanishi:"
                        : language === "ru"
                        ? "Дата начала: "
                        : "Start Date: "}
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                      <FaCalendarAlt />
                      {language === "uz"
                        ? "Tugashi:"
                        : language === "ru"
                        ? "Дата окончания: "
                        : "End Date: "}
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                      <FaRegSun />
                      {language === "uz"
                        ? "Texnologiyalar:"
                        : language === "ru"
                        ? "Технологии: "
                        : "Technologies: "}
                    </span>
                  </li>
                  <li className="flex flex-col gap-2 opacity-70">
                    <span>{project.start_date}</span>
                    <span>{project.end_date}</span>
                    <span>{project.usedTechnologies}</span>
                  </li>
                </ul>
                <a
                  href={project.link}
                  target={`_blank`}
                  className="text-blue font-thin text-sm mt-10 mb-2">
                  {project.link === "https://classroomcoins.uz"
                    ? project.link
                    : project.link === "https://metallcenter.uz"
                    ? project.link
                    : project.link === "https://smileboutique.uz"
                    ? project.link
                    : "https://project.netlify.app"}
                </a>
              </div>
            </div>
            <div className="max-w-2xl sm:max-w-3xl px-5">
              <h5 className="first-letter:text-blue first-letter:uppercase font-bold text-2xl mb-3">
                {project.name}
              </h5>
              <p>
                {language === "uz"
                  ? project.description.uz
                  : language === "ru"
                  ? project.description.ru
                  : project.description.en}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExactProject;
