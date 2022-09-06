import React from 'react'
import MainpageHero from './MainpageHero'
import { mainDivCSS } from '../CSS/TailwindCSS'
import Boxes from './Boxes'

export default function MainLandingPage() {



  return (
    <>
      <div dir='rtl' className={mainDivCSS} >
        <div className="flex flex-col h-full p-0 m-0">
          <MainpageHero />
          <Boxes />
        </div>
      </div>
    </>

  )
}




