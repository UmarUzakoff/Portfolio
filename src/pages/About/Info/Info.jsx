import React, { useContext, useState } from "react";
import { LocalizationApi } from "../../../context/localizationContext";
import { ThemeApi } from "../../../context/themeContext";
import { FaStar, FaBriefcase, FaUniversity, FaLanguage } from "react-icons/fa";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Languages from "./Languages";

const Info = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const { theme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section>
      <div className="md:hidden flex flex-col gap-10">
        <div
          className={`h-max pb-3 rounded border ${
            theme === "light"
              ? "border-dark2 opacity-60 border-t-0"
              : "border-light2 "
          }`}>
          <Experience />
        </div>
        <div
          className={`h-max pb-3 rounded border ${
            theme === "light"
              ? "border-dark2 opacity-60 border-t-0"
              : "border-light2 "
          }`}>
          <Education />
        </div>
        <div
          className={`h-max pb-3 rounded border ${
            theme === "light"
              ? "border-dark2 opacity-60 border-t-0"
              : "border-light2 "
          }`}>
          <Skills />
        </div>
        <div
          className={`h-max pb-3 rounded border ${
            theme === "light"
              ? "border-dark2 opacity-60 border-t-0"
              : "border-light2 "
          }`}>
          <Languages />
        </div>
      </div>
      <div className="md:flex flex-row justify-around items-start gap-10 hidden">
        <div className="flex flex-col gap-5 justify-start items-center">
          <button
            onClick={() => handleTabClick("experience")}
            className={` transform duration-300 ${
              theme === "light" ? " " : "bg-blue text-light2 "
            } font-bold w-[220px] h-[45px] text-center rounded flex justify-center items-center ${
              activeTab === "experience"
                ? `${
                    theme === "light"
                      ? "bg-blue text-light2"
                      : "hover:bg-sky-600 "
                  }`
                : ` ${
                    theme === "light"
                      ? "text-dark2 border-2 border-dark2 opacity-60 "
                      : "bg-transparent border-2 border-light2 "
                  }`
            }`}>
            <FaBriefcase />
            &nbsp;
            <span>
              {language === "uz"
                ? "TAJRIBA"
                : language === "ru"
                ? "ОПЫТ"
                : "EXPERIENCE"}
            </span>
          </button>
          <button
            onClick={() => handleTabClick("education")}
            className={` transform duration-300 ${
              theme === "light" ? " " : "bg-blue text-light2 "
            } font-bold w-[220px] h-[45px] text-center rounded flex justify-center items-center ${
              activeTab === "education"
                ? `${
                    theme === "light"
                      ? "bg-blue text-light2"
                      : "hover:bg-sky-600 "
                  }`
                : ` ${
                    theme === "light"
                      ? "text-dark2 border-2 border-dark2 opacity-60 "
                      : "bg-transparent border-2 border-light2 "
                  }`
            }`}>
            <FaUniversity />
            &nbsp;
            <span>
              {language === "uz"
                ? "TA'LIM"
                : language === "ru"
                ? "ОБРАЗОВАНИЕ"
                : "EDUCATION"}
            </span>
          </button>
          <button
            onClick={() => handleTabClick("skills")}
            className={` transform duration-300 ${
              theme === "light" ? " " : "bg-blue text-light2 "
            } font-bold w-[220px] h-[45px] text-center rounded flex justify-center items-center ${
              activeTab === "skills"
                ? `${
                    theme === "light"
                      ? "bg-blue text-light2"
                      : "hover:bg-sky-600 "
                  }`
                : ` ${
                    theme === "light"
                      ? "text-dark2 border-2 border-dark2 opacity-60 "
                      : "bg-transparent border-2 border-light2 "
                  }`
            }`}>
            <FaStar />
            &nbsp;
            <span>
              {language === "uz"
                ? "KO'NIKMALAR"
                : language === "ru"
                ? "НАВЫКИ"
                : "SKILLS"}
            </span>
          </button>
          <button
            onClick={() => handleTabClick("languages")}
            className={` transform duration-300 ${
              theme === "light" ? " " : "bg-blue text-light2 "
            } font-bold w-[220px] h-[45px] text-center rounded flex justify-center items-center ${
              activeTab === "languages"
                ? `${
                    theme === "light"
                      ? "bg-blue text-light2"
                      : "hover:bg-sky-600 "
                  }`
                : ` ${
                    theme === "light"
                      ? "text-dark2 border-2 border-dark2 opacity-60 "
                      : "bg-transparent border-2 border-light2 "
                  }`
            }`}>
            <FaLanguage />
            &nbsp;
            <span>
              {language === "uz"
                ? "TILLAR"
                : language === "ru"
                ? "ЯЗЫКИ"
                : "LANGUAGES"}
            </span>
          </button>
        </div>
        <div
          className={`w-4/5 sm:h-[430px] rounded border ${
            activeTab === "experience"
              ? " "
              : "sm:overflow-y-scroll sm:scrollbar-thin sm:scrollbar-thumb-gray-400 sm:scrollbar-track-gray-300"
          } ${
            theme === "light"
              ? "border-dark2 opacity-60 border-t-0"
              : "border-light2 "
          }`}>
          {activeTab === "skills" && <Skills />}
          {activeTab === "experience" && <Experience />}
          {activeTab === "education" && <Education />}
          {activeTab === "languages" && <Languages />}
        </div>
      </div>
    </section>
  );
};

export default Info;
