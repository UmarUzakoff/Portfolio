import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeApi } from "../../../../context/themeContext";
import { LocalizationApi } from "../../../../context/localizationContext";
import { getAccessTokenFromLocalStorage } from "../../Form/storage";
import BackBtn from "../../../../utils/BackBtn";
import Heading from "../../../../utils/Heading";

const MessagesFromUsers = () => {
  const { theme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);

  ////-------------------LOADING--------------------

  const [loading, setLoading] = useState(false);

  let text = {
    uz: "FOYDALANUVCHILAR FIKRI",
    ru: "КОММЕНТАРИИ ПОЛЬЗОВАТЕЛЕЙ",
    en: "COMMENTS",
  };

  const navigate = useNavigate();

  useEffect(() => {
    const token = getAccessTokenFromLocalStorage();

    if (!token) {
      return navigate("/");
    }
  }, [navigate]);

  ////-------------------GET_MESSAGES--------------------

  const [messages, setMessages] = useState([]);

  const fetchUserData = () => {
    setLoading(true);
    const token = getAccessTokenFromLocalStorage();
    const headers = { Authorization: `Bearer ${token}` };
    try {
      fetch(
        "https://portfolio-backend-fjkx.onrender.com/admin/dashboard/messages",
        { headers }
      )
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            setLoading(false);
            return response.json();
          }
          if (response.error) {
            return navigate("/");
          }
        })
        .then((data) => {
          setMessages(data);
        });
    } catch (error) {
      return navigate("/");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div
      className={`w-full h-screen ${
        theme === "light" ? "bg-light1 text-dark1" : "bg-dark1 text-light1"
      }`}>
      <div className="container">
        <div className="flex flex-col sm:flex-row w-max gap-3">
          <BackBtn />
          <Link
            to={"/admin/dashboard"}
            className="relative left-5 bottom-8 sm:bottom-7 bg-transparent hover:border-sky-600 text-blue hover:text-sky-500 transform duration-300 font-semibold sm:py-2 py-1 px-3 sm:px-4 border border-blue rounded">
            <span>
              &larr;{" "}
              {language === "uz"
                ? "ASOSIY PANEL"
                : language === "ru"
                ? "ГЛАВНАЯ ПАНЕЛЬ"
                : "DASHBOARD"}
            </span>
          </Link>
        </div>
        <Heading text={text} />
      </div>
      <div
        className={`container sm:px-20 px-7 pt-5 pb-[85px] flex flex-col sm:flex-row justify-center gap-10 ${
          theme === "light" ? "bg-light2 text-dark2" : "bg-dark2 text-light2"
        }`}>
        <div className="p-10">
          {loading ? (
            <div className="mt-20 flex justify-center items-center">
              <div
                className="w-12 h-12 rounded-full animate-spin absolute border-8 border-dashed
                border-blue border-t-transparent"></div>
            </div>
          ) : (
            messages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`rounded-lg p-4 bg-black/5 border-2 border-solid border-black/5 transition-all flex flex-col items-stretch justify-start gap-2 ${
                      theme === "light"
                        ? "hover:bg-light1/50"
                        : "hover:bg-dark1"
                    }`}
                    href="#">
                    <h2 className="font-mono font-bold text-lg">
                      <span className="text-blue">
                        {" "}
                        {language === "uz"
                          ? "Ismi:"
                          : language === "ru"
                          ? "Имя: "
                          : "Username:  "}
                      </span>{" "}
                      {message.username}
                    </h2>
                    <span className="font-thin">
                      <span className="text-blue text-base font-bold">
                        {" "}
                        {language === "uz"
                          ? "Elektron manzili: "
                          : language === "ru"
                          ? "Адрес электронной почты: "
                          : "Email: "}
                      </span>{" "}
                      {message.email}
                    </span>
                    <div
                      className={`${
                        message.comment.length > 50
                          ? "overflow-y-scroll max-w-max h-10 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300"
                          : " "
                      }`}>
                      <p className="text-xs">
                        <span className="text-blue text-base font-bold">
                          {language === "uz"
                            ? "Fikri: "
                            : language === "ru"
                            ? "Kомментарий: "
                            : "Comment: "}
                        </span>{" "}
                        {message.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesFromUsers;
