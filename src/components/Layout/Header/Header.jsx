import React, { useContext } from "react";
import { LocalizationApi } from "../../../context/localizationContext";
import { ThemeApi } from "../../../context/themeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeApi);
  const { setLanguage } = useContext(LocalizationApi);

  function onChange(e) {
    setLanguage(e.target.value);
  }

  return (
    <header
      className={`py-3 px-5 w-full ${
        theme === "dark" ? "bg-dark1 text-light1" : "bg-light1 text-dark1"
      }`}>
      <div className="flex container flex-row justify-end gap-5 items-end">
        <div
          className={`rounded-full${
            theme === "dark" ? "bg-dark1 text-light1" : "bg-light1 text-dark1"
          }`}
          onClick={toggleTheme}>
          <img
            className="cursor-pointer"
            src={`https://ik.imagekit.io/ekbcszw7tx/Portfolio/${
              theme === "dark" ? "moon.svg" : "sun.svg"
            }?w=100`}
            alt={theme === "dark" ? "moon" : "sun"}
          />
        </div>
        <select
          onChange={onChange}
          defaultValue={"en"}
          className={`${
            theme === "dark"
              ? "bg-dark1 text-light2 cursor-pointer"
              : "bg-light2 text-dark2 cursor-pointer"
          }`}>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
