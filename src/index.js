import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/context";
import ThemeProvider from "./context/themeContext";
import LocalizationProvider from "./context/localizationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <ContextProvider>
        <LocalizationProvider>
          <App />
        </LocalizationProvider>
      </ContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
