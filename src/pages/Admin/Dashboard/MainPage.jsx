import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeApi } from "../../../context/themeContext";
import { getAccessTokenFromLocalStorage } from "../Form/storage";
import BackBtn from "../../../utils/BackBtn";
import Heading from "../../../utils/Heading";
import AdminNavigation from "./Navigation";

const MainPage = () => {
  const { theme } = useContext(ThemeApi);

  let text = {
    uz: "ADMIN PANELI",
    ru: "ПАНЕЛЬ АДМИНИСТРАТОРА",
    en: "ADMIN PANEL",
  };

  const navigate = useNavigate();

  useEffect(() => {
    const token = getAccessTokenFromLocalStorage();

    if (!token) {
      return navigate("/");
    }
  }, [navigate]);

  return (
    <div
      className={`container h-screen ${
        theme === "light" ? "bg-light1 text-dark1" : "bg-dark1 text-light1"
      }`}>
      <BackBtn />
      <Heading text={text} />
      <AdminNavigation />
    </div>
  );
};

export default MainPage;
