import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeApi } from "../../../context/themeContext";
import { LocalizationApi } from "../../../context/localizationContext";

const AdminNavigation = () => {
  const { theme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);

  return (
    <section
      className={`py-5 mt-10 rounded ${
        theme === "light"
          ? "sm:bg-light2 bg-light1 text-dark2"
          : "sm:bg-dark2 bg-dark1 text-light2"
      }`}>
      <nav>
        <ul className="flex sm:flex-row flex-col gap-7 justify-center items-center">
          <Link
            to={"/admin/dashboard/comments"}
            className={`font-bold sm:ml-5 sm:w-1/3 sm:h-64 w-5/6 py-3 rounded text-center flex justify-center items-center transform transition duration-500 hover:scale-105 ${
              theme === "light"
                ? "sm:bg-light1 bg-light2 text-dark1"
                : "sm:bg-dark1 bg-dark2 text-light1"
            }`}>
            <span
              className={`first-letter:text-blue md:border-b-2 ${
                theme === "light" ? "md:border-b-dark2" : "md:border-b-light2"
              }`}>
              {" "}
              {language === "uz"
                ? "FOYDALANUVCHILAR FIKRI"
                : language === "ru"
                ? "КОММЕНТАРИИ ПОЛЬЗОВАТЕЛЕЙ"
                : "COMMENTS "}
            </span>
          </Link>
          <Link
            to={`/admin/dashboard/addProject`}
            className={`font-bold sm:w-1/3 sm:h-64 w-5/6 py-3 rounded text-center flex justify-center items-center transform transition duration-500 hover:scale-105 ${
              theme === "light"
                ? "sm:bg-light1 bg-light2 text-dark1"
                : "sm:bg-dark1 bg-dark2 text-light1"
            }`}>
            <span
              className={`first-letter:text-blue md:border-b-2 ${
                theme === "light" ? "md:border-b-dark2" : "md:border-b-light2"
              }`}>
              {" "}
              {language === "uz"
                ? "PORTFOLIOGA loyiha qo'shish"
                : language === "ru"
                ? "Добавить проект в ПОРТФОЛИО "
                : "Add Project To PORTFOLIO "}
            </span>
          </Link>
          <Link
            to={`/admin/dashboard`}
            className={`font-bold sm:mr-5 sm:w-1/3 sm:h-64 w-5/6 py-3 rounded text-center flex justify-center items-center transform transition duration-500 hover:scale-105 ${
              theme === "light"
                ? "sm:bg-light1 bg-light2 text-dark1"
                : "sm:bg-dark1 bg-dark2 text-light1"
            }`}>
            <span
              className={`first-letter:text-blue md:border-b-2 ${
                theme === "light" ? "md:border-b-dark2" : "md:border-b-light2"
              }`}>
              {" "}
              {language === "uz"
                ? "Blog yaratish"
                : language === "ru"
                ? "Создать блог "
                : "Create Blog "}
            </span>
          </Link>
        </ul>
      </nav>
    </section>
  );
};

export default AdminNavigation;
