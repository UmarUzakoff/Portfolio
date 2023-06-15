import React, { useContext } from "react";
import { ThemeApi } from "../context/themeContext";


const Hr = () => {
  const { theme } = useContext(ThemeApi);

  return (
    <hr
      className={`opacity-20 rounded-sm h-px my-8 ${
        theme === "light" ? "bg-dark1" : "bg-light1"
      }`}
    />
  );
};

export default Hr;
