import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LocalizationApi } from "../../context/localizationContext";
import Button from "../../utils/Button";
import resume from "./Resume/resume.pdf";

const PersonalInfo = () => {
  const { setLanguage, language } = useContext(LocalizationApi);

  let text = {
    uz: "RESUMENI YUKLASH",
    ru: "СКАЧАТЬ РЕЗЮМЕ",
    en: "DOWNLOAD RESUME",
  };

  return (
    <section>
      <h4 className="font-bold">
        {language === "uz"
          ? "SHAXSIY MA'LUMOTLAR"
          : language === "ru"
          ? "ЛИЧНАЯ ИНФОРМАЦИЯ "
          : "PERSONAL INFO "}
      </h4>
      <p className="mt-5 text-xs sm:text-lg">
        {language === "uz"
          ? "Men Toshkent shahrida Fullstack Web Dasturchi sifatida ishlayman. Menda UI effektlari va yuqori sifatli web ilovalarni yaratishga bo'lgan kuchli istak bor."
          : language === "ru"
          ? "Я работаю как Fullstack Web Разработчик в Ташкенте, Узбекистан. У меня есть сильное желание создавать эффекты пользовательского интерфейса и высокопроизводительные приложения. "
          : "I work as a Fullstack Web Developer in Tashkent, Uzbekistan.Dedicated and efficient developer who has a strong desire to create UI effects and high-performance applications. "}
      </p>
      <div className="mt-5 flex md:flex-row justify-start flex-col md:items-center lg:gap-60 gap-7 text-xs sm:text-lg">
        <ul className="flex flex-row justify-start items-center gap-5">
          <li className="flex flex-col gap-2 font-semibold">
            <span>
              {language === "uz"
                ? "FAMILIYA:"
                : language === "ru"
                ? "ФАМИЛИЯ: "
                : "First Name: "}
            </span>
            <span>
              {language === "uz"
                ? "ISM:"
                : language === "ru"
                ? "ИМЯ: "
                : "Last Name: "}
            </span>
            <span>
              {language === "uz"
                ? "Tug'ilgan kun:"
                : language === "ru"
                ? "Дата рождения: "
                : "BirthDate: "}
            </span>
            <span>
              {language === "uz"
                ? "Millati:"
                : language === "ru"
                ? "Национальность: "
                : "Nationality: "}
            </span>
            <span>Freelance:</span>
          </li>
          <li className="flex flex-col gap-2 opacity-70">
            <span>
              {" "}
              {language === "uz"
                ? "Umarbek"
                : language === "ru"
                ? "Умарбек "
                : "Umarbek "}
            </span>
            <span>
              {" "}
              {language === "uz"
                ? "Uzoqov"
                : language === "ru"
                ? "Узаков "
                : "Uzoqov "}
            </span>
            <span>
              30.07.2004
            </span>
            <span>
              {language === "uz"
                ? "O'zbek"
                : language === "ru"
                ? "Узбек "
                : "Uzbek "}
            </span>
            <span>
              {" "}
              {language === "uz"
                ? "Mavjud"
                : language === "ru"
                ? "Доступен "
                : "Available "}
            </span>
          </li>
        </ul>
        <ul className="flex flex-row justify-start items-center gap-9">
          <li className="flex flex-col gap-2 font-semibold">
            <span>
              {language === "uz"
                ? "Telefon Raqam:"
                : language === "ru"
                ? "Номер телефона: "
                : "Phone: "}
            </span>
            <span>
              {language === "uz"
                ? "Manzil:"
                : language === "ru"
                ? "Адрес: "
                : "Address: "}
            </span>
            <span>Email:</span>
            <span>
              {language === "uz"
                ? "Tillar:"
                : language === "ru"
                ? "Языки: "
                : "Languages: "}
            </span>
            <span>Telegram:</span>
          </li>
          <li className="flex flex-col gap-2 opacity-70">
            <span>
              <a href="tel:+998999938869">+998 99 993 88 69</a>
            </span>
            <address>
              {language === "uz"
                ? "O'zbekiston, Toshkent"
                : language === "ru"
                ? "Узбекистан, Ташкент "
                : "Uzbekistan, Tashkent "}
            </address>
            <a href="mailto:uzakovumar338@gmail.com">uzakovumar338@gmail.com</a>
            <span>
              {language === "uz"
                ? "O'zbek, Rus, Ingliz"
                : language === "ru"
                ? "Узбекский, Русский, Английский "
                : "Uzbek, Russian, English "}
            </span>
            <a href="https://t.me/Uzakoff_u" target="blank">
              Uzakoff_u
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row gap-5 items-center">
        <a href={resume} download>
          <Button text={text} />
        </a>
        <Link
          to={"/aboutMe/myBlog"}
          className=" bg-transparent hover:border-sky-600 text-blue hover:text-sky-500 transform duration-300 font-semibold py-2.5 px-[75px] sm:px-8 border border-blue rounded">
          <span>
            {" "}
            {language === "uz"
              ? "Mening Blogim"
              : language === "ru"
              ? "Мой Блог"
              : "My Blog"}
          </span>
        </Link>
      </div>
    </section>
  );
};

export default PersonalInfo;
