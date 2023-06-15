import React, { useContext } from "react";
import { LocalizationApi } from "../../../context/localizationContext";
import { ThemeApi } from "../../../context/themeContext";

const Experience = () => {
  const { theme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);

  return (
    <div>
      <div
        className={`rounded bg-dark1 rounded-t-none border-2 py-4 text-center   ${
          theme === "light"
            ? "bg-light1  border-light1"
            : "bg-dark1 border-light2"
        }`}>
        <h5 className="text-blue font-bold">
          {" "}
          {language === "uz"
            ? "TAJRIBA"
            : language === "ru"
            ? "ОПЫТ"
            : "EXPERIENCE"}
        </h5>
      </div>
      <div className="mx-5 mt-5 flex flex-col gap-3">
        <h6 className="font-bold">
          {language === "uz"
            ? "FULLSTACK WEB DASTURCHI"
            : language === "ru"
            ? "FULLSTACK ВЕБ-РАЗРАБОТЧИК"
            : "FULLSTACK WEB DEVELOPER"}
        </h6>
        <p className="font-thin">
          {language === "uz"
            ? "Garchi bu sohada hozirchalik haqiqiy tajribam bo'lmasada, mening asosiy maqsadim bu o'zimning nazariy bilim va amaliy ko'nikmalarimni yuqori sifatli veb-ilovalarni yaratish uchun qo'llashdir!"
            : language === "ru"
            ? "Как веб-разработчик с полным стеком, я полон решимости использовать свое образование и навыки для достижения успеха на этой должности. Хотя я недавний выпускник без какого-либо предыдущего опыта, я очень хочу применить свои теоретические знания и практические навыки для развития и поддержания успешных веб-приложений."
            : "As a full-stack web developer, I am determined to utilize my education and skills to achieve success in this position. Although I am a recent graduate without any prior experience, I am eager to apply my theoretical knowledge and practical skills to develop and maintain successful web applications."}
        </p>
        <hr className="w-40 h-1 my-3 bg-blue border-0 rounded"></hr>
      </div>
    </div>
  );
};

export default Experience;
