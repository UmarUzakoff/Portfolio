import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
import { LocalizationApi } from "../../../context/localizationContext";
import { ThemeApi } from "../../../context/themeContext";
import moon from "../../../images/moon.svg";
import sun from "../../../images/sun.svg";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeApi);
  const { setLanguage } = useContext(LocalizationApi);

  function onChange(e) {
    setLanguage(e.target.value);
  }

  return (
    <header
      className={`py-3 px-5 container  ${
        theme === "dark" ? "bg-dark1 text-light1" : "bg-light1 text-dark1"
      }`}>
      <div className="flex flex-row justify-end gap-5 items-end">
        <div
          className={`rounded-full${
            theme === "dark" ? "bg-dark1 text-light1" : "bg-light1 text-dark1"
          }`}
          onClick={toggleTheme}>
          <img
            className="cursor-pointer"
            src={theme === "dark" ? moon : sun}
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

// <nav className="p-2 flex justify-between">
//   <ul className="flex gap-3">
//     <li>
//       {/* <Link to={'/'}>Home</Link> */}
//       <NavLink
//         className={({ isActive }) => `${isActive ? "navActive" : ""} p-3`}
// to={"/"}>
// {language === "uz"
//   ? "Asosiy"
//   : language === "ru"
//   ? "Главное"
//   : "Home"}
//       </NavLink>
//     </li>
//     <li>
//       {/* <Link to={'/product'}>Product</Link> */}
//       <NavLink
//         className={({ isActive }) => `${isActive ? "navActive" : ""} p-3`}
//         to={"/product"}>
//         Product
//       </NavLink>
//     </li>
//     <li>
//       {/* <Link to={'/about'}>About</Link> */}
//       <NavLink
//         className={({ isActive }) => `${isActive ? "navActive" : ""} p-3`}
//         to={"/about"}>
//         About
//       </NavLink>
//     </li>
//     <li className="rounded-full bg-white" onClick={toggleTheme}>
//       {theme}
//     </li>
//   </ul>

//   <select onChange={onChange}>
//     <option value="uz">uzbek</option>
//     <option value="ru">russian</option>
//     <option value="en" selected>
//       english
//     </option>
//   </select>
// </nav>
