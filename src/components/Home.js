import React from "react";
import { useTranslation } from "react-i18next";

import pdf from "../docs/CV.pdf";

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
        <img
          src="https://user-images.githubusercontent.com/74631076/173156609-bbab78ec-4d15-4c0f-8556-32d8383072c0.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};
