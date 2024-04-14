import React, { useContext } from "react";
import { LocalizationApi } from "../../../context/localizationContext";
import { ThemeApi } from "../../../context/themeContext";
import { FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  const { theme } = useContext(ThemeApi);
  const { language } = useContext(LocalizationApi);

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
            ? "TA'LIM"
            : language === "ru"
            ? "ОБРАЗОВАНИЕ"
            : "EDUCATION"}
        </h5>
      </div>
      <div className="mx-5 mt-5 flex flex-col gap-2 md:gap-3">
        <h6 className="font-bold">Millennium IELTS Center</h6>
        <span>
          IELTS 6.5{" "}
          <a
            href="https://oneapp-uploads.s3.eu-north-1.amazonaws.com/82585443-d2d1-4a94-82d4-bb58a4d655d7.pdf"
            className="underline text-blue hover:text-sky-600"
            target="_blank" rel="noreferrer">
            {" "}
            {language === "uz"
              ? "Sertifikat"
              : language === "ru"
              ? "Сертификат"
              : "Certificate"}
          </a>
        </span>
        <span
          className={`flex flex-row items-center gap-2 font-thin text-sm opacity-60 ${
            theme === "light" ? "text-dark2" : "text-light2"
          }`}>
          <FaCalendarAlt />
          2020-2021
        </span>
        <hr className="w-40 h-1 my-1 md:my-3 bg-blue border-0 rounded"></hr>
      </div>
      <div className="ml-5 mt-5 flex flex-col gap-2 md:gap-3">
        <h6 className="font-bold">
          {language === "uz"
            ? "QORAKO'L MATEMATIKA MAKTABI "
            : language === "ru"
            ? "КАРАКУЛЬСКАЯ МАТЕМАТИЧЕСКАЯ ШКОЛА"
            : "KARAKUL INTERNATIONAL SCHOOL OF MATHEMATICS"}
        </h6>
        <span
          className={`flex flex-row items-center gap-2 font-thin text-sm opacity-60 ${
            theme === "light" ? "text-dark2" : "text-light2"
          }`}>
          <FaCalendarAlt />
          2021-2022
        </span>
        <hr className="w-40 h-1 my-1 md:my-3 bg-blue border-0 rounded"></hr>
      </div>
      <div className="ml-5 mt-5 flex flex-col gap-2 md:gap-3">
        <h6 className="font-bold uppercase">
          {language === "uz"
            ? "Najot ta'lim - zamonaviy kasblar akademiyasi "
            : language === "ru"
            ? "Najot Ta'lim - академия современных профессий"
            : "Najot Ta'lim - an academy of modern professions"}
        </h6>
        <span>
          {language === "uz"
            ? "FULLSTACK WEB DASTURLASH "
            : language === "ru"
            ? "ПОЛНАЯ ВЕБ-РАЗРАБОТКА"
            : "FULLSTACK WEB DEVELOPMENT"}
            &nbsp;
            <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7117349074273472512/"
            className="underline text-blue hover:text-sky-600"
            target="_blank" rel="noreferrer">
            {language === "uz"
              ? "Sertifikat"
              : language === "ru"
              ? "Сертификат"
              : "Certificate"}
          </a>
        </span>
        <span
          className={`flex flex-row items-center gap-1 md:gap-2 font-thin text-sm opacity-60 ${
            theme === "light" ? "text-dark2" : "text-light2"
          }`}>
          <FaCalendarAlt />
          2022-2023
        </span>
        <hr className="w-40 h-1 my-1 md:my-3 bg-blue border-0 rounded"></hr>
      </div>
      <div className="ml-5 mt-5 flex flex-col gap-2 md:gap-3">
        <h6 className="font-bold uppercase">
          {language === "uz"
            ? "AJOU UNIVERSITY - ELECTROTEXNIKA VA KOMPUTER MUHANDISLIGI "
            : language === "ru"
            ? "AJOU UNIVERSITY - электротехника и компьютерная инженерия"
            : "AJOU UNIVERSITY - ELECTRICAL AND COMPUTER ENGINEERING"}
        </h6>
        <span>
          {" "}
          {language === "uz"
            ? "O'RTACHA GPA BALL"
            : language === "ru"
            ? "СРЕДНИЙ GPA БАЛЛ"
            : "AVERAGE GPA"}{" "}
          : 4.33 / 4.5
          <a
            href="https://oneapp-uploads.s3.eu-north-1.amazonaws.com/608e4367-998a-4494-bbef-16a0cd04eac4.pdf"
            className="text-blue underline ml-2"
            target="_blank" rel="noreferrer">
            Proof
          </a>
        </span>
        <span
          className={`flex flex-row items-center gap-2 font-thin text-sm opacity-60 ${
            theme === "light" ? "text-dark2" : "text-light2"
          }`}>
          <FaCalendarAlt />
          2022 - 2026
        </span>
        <hr className="w-40 h-1 my-1 md:my-3 bg-blue border-0 rounded"></hr>
      </div>
    </div>
  );
};

export default Education;
