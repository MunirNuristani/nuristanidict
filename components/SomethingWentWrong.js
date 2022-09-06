import React from 'react'
import Image from 'next/image'
import logo from '../public/logo_original.png'
import { buttonCSS } from './CSS/TailwindCSS'
function SomethingWentWrong() {
  return (
    
    <div dir='rtl' className="container mt-10  flex flex-col justify-center  items-center mx-auto backdrop-blur-sm bg-white/90 drop-shadow-xl px-16 py-5 rounded-xl w-[900px] text-x min-h-full ">
        <div className="m-5">
            <Image src={logo} width={200} height={200} alt="main Logo" />
        </div>
        <h1 dir='ltr' className='text-4xl'> 500 </h1>
        <h2 className="text-3xl"> از اینکه به مشکلات تخنیکی روبرو شده اید معذوریم!</h2>
        <h2 className="text-xl"> در صورتیکه به شکل مدوام دچار مشکل شدید لطفا با ما در تماس شوید.</h2>
        <button className={`${buttonCSS} text-2xl`} onClick={()=>{document.location.reload(true)}}>دوباره امتحان کنید !  </button>
        </div>
  )
}

export default SomethingWentWrong