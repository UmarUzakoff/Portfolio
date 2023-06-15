import React, { useContext, useState } from "react";
import { LocalizationApi } from "../../context/localizationContext";
// import { ThemeApi } from "../../context/themeContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FaRegComment,
  FaRegEnvelope,
  FaRegUser,
} from "react-icons/fa";
import Button from "../../utils/Button";

const Form = () => {
  // const { theme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);

  let text = {
    uz: "XABARNI YUBORISH",
    ru: "ОТПРАВИТЬ СООБЩЕНИЕ",
    en: "SEND MESSAGE",
  };

  ////////-----------FORM--------------------------------
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  let notifySuccess = (note) => toast.success(note);
  let notifyError = (note) => toast.error(note);


  let message = (note, type) => {
    if (type === "success") {
        notifySuccess(note);
    } else {
        notifyError(note);
    }
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:4567/comments", {
        method: "POST",
        body: JSON.stringify({username, email, comment}),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      let resJson = await res.json();
      if (res.status >= 200 && res.status < 300) {
        setUsername("");
        setEmail("");
        setComment("");
        let messageFromBackend = language === "uz" ? resJson.message.uz : language === "ru" ? resJson.message.ru : resJson.message.en;
        message(messageFromBackend, "success");
        // window.location.reload();
      } else {
        message(resJson.error, "error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <iframe name="hiddenFrame" className="hide" title=" "></iframe>
      <h6 className="font-bold text-xl">
        {language === "uz"
          ? "TORTINMANG, YOZAVERING!"
          : language === "ru"
          ? "НЕ СТОИТ ЗАДУМЫВАТЬСЯ, ПИШИТЕ! "
          : "FEEL FREE TO DROP ME A LINE! "}
      </h6>
      <p className="font-thin text-sm mt-5">
        {language === "uz"
          ? "Agar sizda biron bir taklif, loyiha yoki hatto salom aytmoqchi bo'lsangiz.. Iltimos, quyidagi formani to'ldiring va men sizga tez orada javob beraman."
          : language === "ru"
          ? "Если у вас есть какое-либо предложение, проект или даже вы хотите поздороваться.. Пожалуйста, заполните форму ниже, и я отвечу вам в ближайшее время. "
          : "If you have any suggestion, project or even you want to say Hello.. Please fill out the form below and I will reply you shortly. "}
      </p>
      <form onSubmit={handleSubmit} className="mt-10 text-gray-500" name="getInTouch">
        <div className="focus-within:text-blue">
          <label className="flex flex-row items-center gap-1">
            <FaRegUser />
            &nbsp;
            {language === "uz"
              ? "Ismingiz"
              : language === "ru"
              ? "Ваше имя "
              : "Your Name  "}
          </label>
          <input
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="appearance-none border-gray-500 bg-transparent border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:border-blue focus:text-light1 focus:outline-none"
            type="text"
            name="username"
          />
        </div>
        <div className="focus-within:text-blue">
          <label className="flex flex-row items-center gap-1 mt-10">
            <FaRegEnvelope />
            &nbsp;
            {language === "uz"
              ? "Sizning elektron manzilingiz"
              : language === "ru"
              ? "Ваш адрес электронной почты "
              : "Your Email  "}
          </label>
          <input
            autoComplete="off"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none border-gray-500 bg-transparent border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:border-blue focus:text-light1 focus:outline-none"
            type="email"
            name="email"
          />
        </div>
        <div className="focus-within:text-blue">
          <label className="flex flex-row items-center gap-1 mt-20 focus-within:text-red-400">
            <FaRegComment />
            &nbsp;
            {language === "uz"
              ? "Sizning fikringiz"
              : language === "ru"
              ? "Ваш комментарий "
              : "Your Comment  "}
          </label>
          <input
            autoComplete="off"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="appearance-none border-gray-500 bg-transparent border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:border-blue focus:text-light1 focus:outline-none"
            type="text"
            name="comment"
          />
        </div>
        <div className="mt-5" onClick={message}>
          <Button text={text}/>
        </div>
      </form>
      <ToastContainer theme="dark"/>
    </div>
  );
};

export default Form;
