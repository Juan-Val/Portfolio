import React from "react";
import { useTranslation } from "react-i18next";

import pdf from "../docs/CV.pdf";
import img from "../asset/img/Juan.jpg";

export const Home = () => {
  const [t] = useTranslation("global");

  return (
    <div className="container home" id="home">
      <div>
        <p>{t("home.hi")}</p>
        <h1>{t("home.name")}</h1>
        <p>{t("home.descrip")}</p>

        <div className="home__button">
          <button>
            <a href={pdf} download="CV.pdf">
              {t("home.button")}
            </a>
          </button>
        </div>
      </div>
      <div className="home__img">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};
