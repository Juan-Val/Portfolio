import React from "react";
import { useTranslation } from "react-i18next";

export const Card2 = () => {
  const [t] = useTranslation("global");

  return (
    <div className="card ">
      <h3>{t("card.title2")}</h3>
      <div className="skills">
        <div className="skill">
          <i className="bx bxl-nodejs"></i>
          <h3>NODE JS</h3>
        </div>
        <div className="skill">
          <i className="bx bxl-mongodb"></i>
          <h3>MONGODB</h3>
        </div>
        <div className="skill">
          <i className="bx bxl-firebase"></i>
          <h3>FIREBASE</h3>
        </div>
      </div>
    </div>
  );
};
