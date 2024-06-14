import { createContext, useState } from "react";

export const LocalizationApi = createContext({});

const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = useState("ru");

  return (
    <LocalizationApi.Provider value={{ language, setLanguage }}>
      {children}
    </LocalizationApi.Provider>
  );
};

export default LocalizationProvider;
