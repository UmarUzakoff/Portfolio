import React, { useContext, useEffect, useState } from "react";
import { ThemeApi } from "../../../../context/themeContext";
import { LocalizationApi } from "../../../../context/localizationContext";
import { useNavigate } from "react-router-dom";
import {
  getAccessTokenFromLocalStorage,
} from "../../Form/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackBtn from "../../../../utils/BackBtn";
import { FaRegIdCard } from "react-icons/fa";

const AddProjectToPortfolio = () => {
  const { theme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);

  const navigate = useNavigate();

  useEffect(() => {
    const token = getAccessTokenFromLocalStorage();
    if (!token || token === undefined) {
      return navigate("/");
    }
  }, [navigate]);

  ////////-----------FORM--------------------------------
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [usedTechnologies, setUsedTechnologies] = useState("");
  const [image, setImage] = useState([]);

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
      formData.append("image", image);

      let res = await fetch(
        "http://localhost:4567/admin/dashboard/postProject",
        {
          method: "POST",
          body: formData,
          headers: { Authorization: `Bearer ${token}` }
        }
      );
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
          <div className="relative py-2 my-10 sm:max-w-xl sm:mx-auto">
            <div className="absolute bg-blue inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-12">
              <div className="max-w-md mx-auto">
                <div>
                  <span>
                    <FaRegIdCard />
                  </span>
                  <h1 className="text-2xl mt-4">
                    {language === "uz"
                      ? "+1 portfolioga loyiha!"
                      : language === "ru"
                      ? "+1 новый проект в портфолио! "
                      : "+1 new project to portfolio! "}
                  </h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <form
                      encType={`multipart/form-data`}
                      name="adminLoginForm"
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4">
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                          onChange={(e) => setDescription(e.target.value)}
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
                          onChange={(e) => setLink(e.target.value)}
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
                          onChange={(e) => setUsedTechnologies(e.target.value)}
                          name="usedTechnologies"
                          type="text"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue"
                          placeholder="usedTechnologies"
                        />
                        <label
                          htmlFor="usedTechnologies"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-blue peer-focus:text-sm">
                          {language === "uz"
                            ? "Ishlatilgan texnologiyalar:"
                            : language === "ru"
                            ? "Использованные технологии: "
                            : "Used Technologies: "}
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="Image"
                          onChange={(e) => setImage(e.target.files[0])}
                          name="Image"
                          type="file"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue"
                          placeholder="Image"
                        />
                      </div>
                      <div className="relative">
                        <button
                          type={`submit`}
                          onClick={message}
                          className="bg-blue mt-1 hover:text-blue hover:font-bold hover:bg-gray-300 transform duration-700 text-light2 rounded-md px-2 py-1">
                          {language === "uz"
                            ? "Qo'shish "
                            : language === "ru"
                            ? "Добавить "
                            : "Add "}
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

export default AddProjectToPortfolio;
