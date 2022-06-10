import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../asset/img/Clon-Pexels.png";
import img2 from "../asset/img/Pokemon-App.png";

export const Proyects = () => {
  const [t] = useTranslation("global");

  return (
    <div className="container proyecto" id="proyects">
      <h1>{t("proyects.title")}</h1>
      <div className="container__proyectos">
        <div className="proyect">
          <img src={img1} alt="img" />
          <h4>Clon Pexels</h4>
          <div className="proyect__buttons">
            <a
              href="https://github.com/Juan-Val/clon-pexels"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://juan-val.github.io/clon-pexels/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="proyect">
          <img src={img2} alt="img" />
          <h4>Poke App</h4>
          <div className="proyect__buttons">
            <a
              href="https://github.com/Juan-Val/Poke-app"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://juan-val.github.io/Poke-app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
