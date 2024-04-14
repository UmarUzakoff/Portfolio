import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeApi } from "../../context/themeContext";
import { FaCalendarAlt } from "react-icons/fa";
import projects from "./projectsdata";

const MyProjects = () => {
  const { theme } = useContext(ThemeApi);

  ////-------------------LOADING--------------------

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <div className={`${loading ? "h-[100vh]" : "h-full"} w-full`}>
      {loading ? (
        <div className="mt-40 flex justify-center items-center">
          <div
            className="w-12 h-12 rounded-full animate-spin absolute border-8 border-dashed
         border-blue border-t-transparent"></div>
        </div>
      ) : (
        projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Link
                to={`/myPortfolio/${project.id}`}
                key={project.id}
                className={`rounded-lg bg-black/5 border-2 border-solid border-black/5 duration-500 hover:scale-105 flex flex-col items-stretch justify-start ${
                  theme === "light" ? "hover:bg-light1/50" : "hover:bg-dark1"
                }`}
                href="#">
                <img
                  src={project.image}
                  alt={`${project.name}`}
                  className="w-full h-48 pb-0 mb-0 border-b-4 border-blue rounded-lg"
                  loading="lazy"
                />
                <div className="flex flex-row justify-between items-center p-2">
                  <span>{project.name}</span>
                  <span
                    className={`flex flex-row items-center gap-2 font-thin text-sm opacity-60 ${
                      theme === "light" ? "text-dark2" : "text-light2"
                    }`}>
                    <FaCalendarAlt />
                    13.06.2023
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default MyProjects;
