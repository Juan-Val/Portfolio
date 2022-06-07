import React from "react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const [t] = useTranslation("global");

  return (
    <div className="container contact" id="contact">
      <h1>{t("contact.title")}</h1>
      <div className="contact__cards">
        <div className="contact__card">
          <i className="bx bxl-gmail"></i>
          <h3>{t("contact.email")}</h3>
          <a href="mailto:juan.vo.11.2000@gmail.com" target="_blank">
            {t("contact.send")}
          </a>
        </div>
        <div className="contact__card">
          <i className="bx bxl-linkedin"></i>
          <h3>{t("contact.linkedin")}</h3>
          <a
            href="https://www.linkedin.com/in/juan-valencia-679605230/"
            target="_blank"
          >
            {t("contact.send")}
          </a>
        </div>
        <div className="contact__card">
          <i className="bx bxl-github"></i>
          <h3>{t("contact.github")}</h3>
          <a href="https://github.com/Juan-Val" target="_blank">
            {t("contact.send")}
          </a>
        </div>
      </div>
    </div>
  );
};
