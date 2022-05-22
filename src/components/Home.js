import React from 'react'
import { useTranslation } from 'react-i18next';

export const Home = () => {

  const [t,i18n] = useTranslation("global");

  return (
    <div className='container home '>
      <div>
      <p>{t("home.hi")}</p>
      <h1>{t("home.name")}</h1>
      <p>{t("home.descrip")}</p>

      <div className="home__button">
        <button><a href="../docs/CV.pdf" download='CV.pdf'>{t("home.button")}</a></button>
      </div>
      </div>
      <div className='home__img'>
        <img src="https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
      </div>
    </div>
  )
}
