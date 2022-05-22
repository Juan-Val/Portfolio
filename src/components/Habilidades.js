import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card1 } from './cards/Card1';
import { Card2 } from './cards/Card2';


export const Habilidades = () => {

  const [t] = useTranslation("global");

  return (
    <div className='container habilidades  ' id="habilidades">
      <h1>{t("header.skills")}</h1>

      <div className="habilidades__cards">
        <Card1/>
        <Card2 />
      
      </div>

    </div>
  )
}
