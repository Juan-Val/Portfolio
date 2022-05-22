import React from 'react'
import { useTranslation } from 'react-i18next'

export const Card2 = () => {

  const [t] = useTranslation("global");

  return (
    <div className="card ">
          <h3>{t("card.title2")}</h3>
          <div className="skills">
            <div className="skill">
            <i class='bx bxl-html5' ></i>
            <h3>HTML</h3> 
            <p>{t("card.experience2")}</p>
            </div>
            <div className="skill">
            <i class='bx bxl-css3' ></i>
            <h3>HTML</h3> 
            <p>{t("card.experience2")}</p>
            </div>
            <div className="skill">
            <i class='bx bxl-javascript'></i>
            <h3>HTML</h3> 
            <p>{t("card.experience2")}</p>
            </div>
            <div className="skill">
            <i class='bx bxl-react' ></i>
            <h3>HTML</h3> 
            <p>{t("card.experience2")}</p>
            </div>
            <div className="skill">
            <i class='bx bxl-react' ></i>
            <h3>HTML</h3> 
            <p>{t("card.experience2")}</p>
            </div>
            <div className="skill">
            <i class='bx bxl-tailwind-css' ></i>
            <h3>HTML</h3> 
            <p>{t("card.experience2")}</p>
            </div>
            

          </div>
        </div>
  )
}
