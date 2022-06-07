import React from "react";
import { useTranslation } from "react-i18next";

export const Card1 = () => {
  const [t] = useTranslation("global");

  return (
    <div className="card">
      <h3>{t("card.title1")}</h3>
      <div className="skills">
        <div className="skill">
          <i className="bx bxl-html5"></i>
          <h3>HTML</h3>
        </div>
        <div className="skill">
          <i className="bx bxl-css3"></i>
          <h3>CSS</h3>
        </div>
        <div className="skill">
          <i className="bx bxl-javascript"></i>
          <h3>JS</h3>
        </div>
        <div className="skill">
          <i className="bx bxl-react"></i>
          <h3>REACT</h3>
        </div>
        <div className="skill">
          <i className="bx bxl-tailwind-css"></i>
          <h3>TAILWIND CSS</h3>
        </div>
      </div>
    </div>
  );
};
