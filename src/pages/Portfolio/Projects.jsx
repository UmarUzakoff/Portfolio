import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeApi } from "../../context/themeContext";
import { FaCalendarAlt } from "react-icons/fa";

const MyProjects = () => {
  const { theme } = useContext(ThemeApi);

  ////-------------------LOADING--------------------

  const [loading, setLoading] = useState(false);

  ////-------------------GET_Projects--------------------

  const [projects, setProjects] = useState([]);

  const fetchUserData = () => {
    setLoading(true);
    fetch("https://portfolio-backend-fjkx.onrender.com/projects")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="h-full w-full">
      {loading ? (
        <div className="mt-20 flex justify-center items-center">
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
                className={`rounded-lg bg-black/5 border-2 border-solid border-black/5 transition-all flex flex-col items-stretch justify-start ${
                  theme === "light" ? "hover:bg-light1/50" : "hover:bg-dark1"
                }`}
                href="#">
                <img
                  src={`https://portfolio-backend-fjkx.onrender.com/uploads/${project.image}`}
                  alt={`${project.name}`}
                  className="w-full h-48 pb-0 mb-0 border-b-4 border-blue "
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
