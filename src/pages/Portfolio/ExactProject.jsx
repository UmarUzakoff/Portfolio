import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ThemeApi } from "../../context/themeContext";
import { LocalizationApi } from "../../context/localizationContext";
import { getAccessTokenFromLocalStorage } from "../Admin/Form/storage";
import {
  FaCalendarAlt,
  FaEdit,
  FaRegSun,
  FaRegUser,
  FaTrashAlt,
} from "react-icons/fa";
import BackBtn from "../../utils/BackBtn";
import Heading from "../../utils/Heading";
import { toast } from "react-toastify";

const ExactProject = () => {
  const { theme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);

  const [project, setProject] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const token = getAccessTokenFromLocalStorage();
  let { id } = useParams();

  const navigate = useNavigate();

  let text = {
    uz: "MENING PORTFOLIOM ",
    ru: "МОЕ ПОРТФОЛИО ",
    en: "MY PORTFOLIO",
  };

  ///---GET---///

  const fetchUserData = () => {
    fetch(`https://portfolio-backend-fjkx.onrender.com/projects/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProject(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  ///---DELETE---///

  let handleDeleteProject = () => {
    fetch(`https://portfolio-backend-fjkx.onrender.com/admin/deleteProject/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        navigate("/myPortfolio");
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  ///---EDIT---///

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [usedTechnologies, setUsedTechnologies] = useState("");

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
      const token = getAccessTokenFromLocalStorage();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("link", link);
      formData.append("description", description);
      formData.append("usedTechnologies", usedTechnologies);

      let res = await fetch(`https://portfolio-backend-fjkx.onrender.com/admin/editProject/${id}`, {
        method: "PUT",
        body: formData,
        headers: { Authorization: `Bearer ${token}` },
      });
      let resJson = await res.json();
      if (res.status >= 200 && res.status < 300) {
        setDescription("");
        setLink("");
        setName("");
        setUsedTechnologies("");
        let messageFromBackend =
          language === "uz"
            ? resJson.message.uz
            : language === "ru"
            ? resJson.message.ru
            : resJson.message.en;
        message(messageFromBackend, "success");
        window.location.reload();
      } else {
        message(resJson.error, "error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`w-full h-screen ${
        theme === "light" ? "bg-light1 text-dark1" : "bg-dark1 text-light1"
      }`}>
      <div className="container">
      <div className="flex w-max flex-col text-center sm:flex-row gap-3 sm:gap-5">
        <BackBtn />
        <Link
          to={"/myPortfolio"}
          className="relative left-5 bottom-8 sm:bottom-7 bg-transparent hover:border-sky-600 text-blue hover:text-sky-500 transform duration-300 font-semibold sm:py-2 py-1 px-3 sm:px-4 border border-blue rounded">
          <span>
            &larr;{" "}
            {language === "uz"
              ? "BARCHA LOYIHALAR "
              : language === "ru"
              ? "ВСЕ ПРОЕКТЫ "
              : "ALL PROJECTS "}
          </span>
        </Link>
      </div>
        </div>
      <Heading text={text} />
      <div
        className={`container sm:px-20 px-2 pt-[14px] flex flex-col sm:flex-row justify-center gap-10 ${
          theme === "light" ? "bg-light2 text-dark2" : "bg-dark2 text-light2"
        }`}>
        <div className="w-screen px-1 py-10 sm:p-10 flex justify-center items-center sm:justify-start sm:items-start flex-col md:flex-row gap-10">
          <div
            className={`rounded-lg w-80 sm:w-96 bg-black/5 border-2 border-solid border-black/5 transition-all flex flex-col items-stretch justify-start ${
              theme === "light" ? "hover:bg-light1/50" : "hover:bg-dark1"
            }`}>
            <img
              src={`https://portfolio-backend-fjkx.onrender.com/uploads/${project.image}`}
              alt={`${project.name}`}
              className="w-full h-48 pb-0 mb-0 border-b-4 border-blue "
            />
            <div className="flex flex-col justify-start items-start ml-3 mt-2">
              <div className="flex justify-between gap-32 sm:gap-48 flex-row items-center">
                <h5 className="first-letter:text-blue font-bold uppercase">
                  {" "}
                  {language === "uz"
                    ? "ma `lumot"
                    : language === "ru"
                    ? "Информация"
                    : "Information"}
                </h5>
                {token ? (
                  <div>
                    <div className="flex flex-row items-center gap-5 w-max">
                      <button onClick={handleDeleteProject}>
                        <FaTrashAlt className="text-red-500 hover:mt-1 hover:opacity-80" />
                      </button>
                      <button onClick={() => setShowModal(true)}>
                        <FaEdit className="text-green-500 hover:mt-1 hover:opacity-80" />
                      </button>
                    </div>
                    {showModal ? (
                      <div>
                        <div
                          className="fixed z-10 inset-0 overflow-y-auto"
                          aria-labelledby="modal-title"
                          role="dialog"
                          aria-modal="true">
                          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div
                              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                              aria-hidden="true"></div>
                            <span
                              className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true">
                              &#8203;
                            </span>
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg
                                      className="h-6 w-6 text-green-600"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      aria-hidden="true">
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                    </svg>
                                  </div>
                                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3
                                      className="text-lg leading-6 font-medium text-gray-900"
                                      id="modal-title">
                                      
                                      {language === "uz"
                                        ? "Loyihani tahrirlash "
                                        : language === "ru"
                                        ? "Изменить проект "
                                        : "Edit Project "}
                                    </h3>
                                    <div className="mt-2">
                                      <form
                                        onSubmit={handleSubmit}
                                        className="flex flex-col gap-4">
                                        <div className="relative">
                                          <input
                                            autoComplete="off"
                                            id="name"
                                            value={name}
                                            onChange={(e) =>
                                              setName(e.target.value)
                                            }
                                            name="name"
                                            type="text"
                                            className="peer focus:border-blue placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                                            placeholder="Project Name"
                                          />
                                          <label
                                            htmlFor="Project Name"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-blue peer-focus:text-sm">
                                            {language === "uz"
                                              ? "Loyiha nomi"
                                              : language === "ru"
                                              ? "Имя проекта "
                                              : "Project Name "}
                                          </label>
                                        </div>
                                        <div className="relative">
                                          <input
                                            autoComplete="off"
                                            id="Description"
                                            value={description}
                                            onChange={(e) =>
                                              setDescription(e.target.value)
                                            }
                                            name="Description"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue"
                                            placeholder="Description"
                                          />
                                          <label
                                            htmlFor="Description"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-blue peer-focus:text-sm">
                                            {language === "uz"
                                              ? "Tavsifi "
                                              : language === "ru"
                                              ? "Описание "
                                              : "Description  "}
                                          </label>
                                        </div>
                                        <div className="relative">
                                          <input
                                            autoComplete="off"
                                            id="Link"
                                            value={link}
                                            onChange={(e) =>
                                              setLink(e.target.value)
                                            }
                                            name="Link"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue"
                                            placeholder="Link"
                                          />
                                          <label
                                            htmlFor="Link"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-blue peer-focus:text-sm">
                                            Link
                                          </label>
                                        </div>
                                        <div className="relative">
                                          <input
                                            autoComplete="off"
                                            id="usedTechnologies"
                                            value={usedTechnologies}
                                            onChange={(e) =>
                                              setUsedTechnologies(
                                                e.target.value
                                              )
                                            }
                                            name="usedTechnologies"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue"
                                            placeholder="usedTechnologies"
                                          />
                                          <label
                                            htmlFor="usedTechnologies"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-blue peer-focus:text-sm">
                                            {language === "uz"
                                              ? "Ish. texnologiyalar:"
                                              : language === "ru"
                                              ? "Исп. технологии: "
                                              : "Used Technologies: "}
                                          </label>
                                        </div>
                                        <div className="relative">
                                          <button
                                            type={`submit`}
                                            onClick={message}
                                            className="bg-blue mt-1 hover:text-blue hover:font-bold hover:bg-gray-300 transform duration-700 text-light2 rounded-md px-2 py-1">
                                            {language === "uz"
                                              ? "Tahrirlash "
                                              : language === "ru"
                                              ? "Изменить "
                                              : "Edit "}
                                          </button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={() => setShowModal(false)}
                                class="absolute top-0 right-0 p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                                aria-label="Close">
                                <svg
                                  class="h-6 w-6 text-gray-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor">
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <ul className="mt-5 flex flex-row justify-start items-center gap-5">
                <li className="flex flex-col gap-2 font-semibold">
                  <span className="flex flex-row gap-2 items-center">
                    <FaRegUser />
                    {language === "uz"
                      ? "Mijoz:"
                      : language === "ru"
                      ? "Клиент: "
                      : "Client: "}
                  </span>
                  <span className="flex flex-row gap-2 items-center">
                    <FaCalendarAlt />
                    {language === "uz"
                      ? "Boshlanish sanasi:"
                      : language === "ru"
                      ? "Дата начала: "
                      : "Start Date: "}
                  </span>
                  <span className="flex flex-row gap-2 items-center">
                    <FaCalendarAlt />
                    {language === "uz"
                      ? "Tugash sanasi:"
                      : language === "ru"
                      ? "Дата окончания: "
                      : "End Date: "}
                  </span>
                  <span className="flex flex-row gap-2 items-center">
                    <FaRegSun />
                    {language === "uz"
                      ? "Ishlatilgan texnologiyalar:"
                      : language === "ru"
                      ? "Использованные технологии: "
                      : "Used Technologies: "}
                  </span>
                </li>
                <li className="flex flex-col gap-2 opacity-70">
                  <span>
                    {" "}
                    {language === "uz"
                      ? "Mirasil"
                      : language === "ru"
                      ? "Мирасил "
                      : "Mirasil "}
                  </span>
                  <span>13.05.2023</span>
                  <span>03.06.2023</span>
                  <span>{project.usedTechnologies}</span>
                </li>
              </ul>
              <a
                href={project.link}
                target={`_blank`}
                className="text-blue font-thin text-sm mt-10 mb-2">
                {project.link == "classroomcoins.uz" ? project.link : "https://project.netlify.app"}
              </a>
            </div>
          </div>
          <div className="max-w-2xl sm:max-w-3xl">
            <h5 className="first-letter:text-blue first-letter:uppercase font-bold text-2xl mb-3">
              {project.name}
            </h5>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExactProject;
