import React, { useContext, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { LocalizationApi } from "../../context/localizationContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegComment, FaRegEnvelope, FaRegUser } from "react-icons/fa";
import Button from "../../utils/Button";

const Form = () => {
  const { language } = useContext(LocalizationApi);

  ////-------------------LOADING--------------------

  const [loading, setLoading] = useState(false);

  let loadingText = loading
    ? {
        uz: "Yuborilmoqda...",
        ru: "Отправка...",
        en: "Sending...",
      }
    : {
        uz: "XABARNI YUBORISH",
        ru: "ОТПРАВИТЬ СООБЩЕНИЕ",
        en: "SEND MESSAGE",
      };

  const sentMessage =
    language === "uz"
      ? "XABARINGIZ YUBORIlDI!"
      : language === "ru"
      ? "ОТПРАВЛЕНО!"
      : "Got your message 😉";
  ////////-----------FORM--------------------------------

  let notifySuccess = (note) => toast.success(note);
  let notifyError = (note) => toast.error(note);

  let message = (note, type) => {
    if (type === "success") {
      notifySuccess(note);
    } else {
      notifyError(note);
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_qc4nftx",
        "template_jn6x53c",
        form.current,
        "8Fg4UhLrfqGFQLg5G"
      )
      .then(
        (result) => {
          message(sentMessage, "success");
          setLoading(false);
        },
        (error) => {
          message(error.text, "error");
          setLoading(false);
        }
      );
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
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-10 text-gray-500"
        name="getInTouch">
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
            className="appearance-none border-gray-500 bg-transparent border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:border-blue focus:text-light1 focus:outline-none"
            type="text"
            name="message"
          />
        </div>
        <div className="mt-5" onClick={message}>
          <Button text={loadingText} />
        </div>
      </form>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Form;
