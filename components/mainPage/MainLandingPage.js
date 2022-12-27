import React from 'react'
import MainpageHero from './MainpageHero'
import { mainDivCSS } from '../CSS/TailwindCSS'
import CardContainer from './CardContainer'

export default function MainLandingPage() {



  return (
      <div dir='rtl' className={mainDivCSS} >
        <div className="flex flex-col h-full w-full p-0 m-0 mx-10 sm:mx-4">
          <MainpageHero />
          <CardContainer />
        </div>
      </div>

  )
}




