import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeApi } from "../../../context/themeContext";
import { LocalizationApi } from "../../../context/localizationContext";
import {
  getAccessTokenFromLocalStorage,
  setAccessTokenToLocalStorage,
} from "./storage";
import { FaRegIdCard } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackBtn from "../../../utils/BackBtn";

const AdminForm = () => {
  const { theme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);

  const navigate = useNavigate();

  useEffect(() => {
    const token = getAccessTokenFromLocalStorage();

    if (token) {
      return navigate("/admin/dashboard");
    }
  }, [navigate]);

  ////////-----------FORM--------------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let notifySuccess = (note) => toast.success(note);
  let notifyError = (note) => toast.error(note);

  let message = (note, type) => {
    if (type === "success") {
      notifySuccess(note);
    } else {
      notifyError(note);
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://portfolio-backend-fjkx.onrender.com/admin/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let resJson = await res.json();
      if (res.status >= 200 && res.status < 300) {
        setEmail("");
        setPassword("");
        let messageFromBackend =
          language === "uz"
            ? resJson.message.uz
            : language === "ru"
            ? resJson.message.ru
            : resJson.message.en;
        message(messageFromBackend, "success");
        setAccessTokenToLocalStorage(resJson.token);
        navigate("/admin/dashboard");
      } else {
        message(resJson.error, "error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      className={`container ${theme === "light" ? "bg-light1" : "bg-dark1"}`}>
      <BackBtn />
      <div>
        <div
          className={`flex flex-col justify-center ${
            theme === "light" ? "bg-light2" : "bg-dark2"
          }`}>
          <div className="relative py-2 my-[120px] sm:max-w-xl sm:mx-auto">
            <div className="absolute bg-blue inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <span>
                    <FaRegIdCard />
                  </span>
                  <h1 className="text-2xl mt-4">
                    {language === "uz"
                      ? "Tizimga xush kelibsiz!"
                      : language === "ru"
                      ? "Добро пожаловать в "
                      : "Back to your  "}
                    <span className="font-bold">
                      {language === "uz"
                        ? " "
                        : language === "ru"
                        ? "цифровую жизнь! "
                        : "digital life! "}
                    </span>
                  </h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <form
                      name="adminLoginForm"
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4">
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          type="text"
                          className="peer focus:border-blue placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                          placeholder="Email address"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-blue peer-focus:text-sm">
                          {language === "uz"
                            ? "Sizning elektron manzilingiz"
                            : language === "ru"
                            ? "Ваш адрес электронной почты "
                            : "Email Address  "}
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          name="password"
                          type="password"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue"
                          placeholder="Password"
                        />
                        <label
                          htmlFor="password"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-blue peer-focus:text-sm">
                          {language === "uz"
                            ? "Parol "
                            : language === "ru"
                            ? "Пароль "
                            : "Password  "}
                        </label>
                      </div>
                      <div className="relative">
                        <button
                          type={`submit`}
                          onClick={message}
                          className="bg-blue mt-1 hover:text-blue hover:font-bold hover:bg-gray-300 transform duration-700 text-light2 rounded-md px-2 py-1">
                          {language === "uz"
                            ? "Tizimga Kirish "
                            : language === "ru"
                            ? "Войти "
                            : "Log In  "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminForm;
