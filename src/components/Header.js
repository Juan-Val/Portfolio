import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [toggleButton, setToggleButton] = useState(false);
  const [lenguage, setLenguage] = useState("es");

  const toggleButtonn = () => {
    toggleButton === true ? setToggleButton(false) : setToggleButton(true);
  };

  const changeLanguage = () => {
    lenguage === "es" ? setLenguage("en") : setLenguage("es");
    lenguage === "es" ? i18n.changeLanguage("en") : i18n.changeLanguage("es");
    toggleButton === true ? setToggleButton(false) : setToggleButton(true);
  };

  return (
    <div className="header">
      <div className="header__title">
        <a href="#home">
          <h1>JVO.</h1>
        </a>
      </div>
      <button className="header__toggle" onClick={toggleButtonn}>
        <i className="bx bx-menu"></i>
      </button>
      <div
        className={
          toggleButton === true
            ? "header__links header__links-visible"
            : "header__links"
        }
      >
        <ul>
          <li>
            <a href="#habilidades" className="" onClick={toggleButtonn}>
              {t("header.skills")}
            </a>
          </li>
          <li>
            <a href="#proyects" className="" onClick={toggleButtonn}>
              {t("header.projects")}
            </a>
          </li>
          <li>
            <a href="#contact" className="" onClick={toggleButtonn}>
              {t("header.contact")}
            </a>
          </li>

          <li>
            <button className="" onClick={changeLanguage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
