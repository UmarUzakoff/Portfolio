import React, { useContext, useEffect, useState } from "react";
import { LocalizationApi } from "../context/localizationContext";

const Heading = (text) => {
  const { language } = useContext(LocalizationApi);

  const [underlineWidth, setUnderlineWidth] = useState("w-0");

  useEffect(() => {
    const timer = setTimeout(() => setUnderlineWidth("w-full"), 100); // Adjust delay if needed
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="sm:pb-10 pb-5 pt-2.5 sm:pt-5 flex flex-col justify-center items-center text-2xl">
      <h3 className={`first-letter:text-blue w-max font-bold`}>
        {language === "uz"
          ? text.text.uz
          : language === "ru"
          ? text.text.ru
          : text.text.en}
      </h3>
      <div
        className={`h-[2px] rounded-full mt-[2px] max-w-[200px] bg-blue duration-[3000ms] ${underlineWidth}`}></div>
    </div>
  );
};

export default Heading;
