import React from "react";
import { useTranslation } from "react-i18next";

export const Proyects = () => {
  const [t] = useTranslation("global");

  return (
    <div className="container proyecto" id="proyects">
      <h1>{t("proyects.title")}</h1>
      <div className="container__proyectos">
        <div className="proyect">
          <img
            src="https://user-images.githubusercontent.com/74631076/173156515-a17a41fe-1ccc-4493-b50b-1534c1426778.png"
            alt="img"
          />
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
          <img
            src="https://user-images.githubusercontent.com/74631076/173156636-444cfcd3-852b-47b1-babf-b82f7959404a.png"
            alt="img"
          />
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
