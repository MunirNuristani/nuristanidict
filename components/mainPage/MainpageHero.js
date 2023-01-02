import React from 'react'
import {  mainHero } from '../CSS/TailwindCSS'
import Image from 'next/image'
import img  from '../../public/hero_image_1.jpg'

function MainpageHero() {
    return (
        <div className={mainHero}>
            <div className='flex flex-col justify-center items-right sm:items-center px-8 sm:p-4'>
                <h1 className="text-5xl  text-right sm:text-center mt-6 w-full">نهاد فرهنگی میرزا تازه گل خان </h1>
                <h2 className=" text-2xl text-right sm:text-center  "> هدف ما زنده نگهداشتن زبان و فرهنگ نورستان است.</h2>
                <h1 dir="ltr" className="text-3xl text-left sm:text-center w-3/4  sm:w-full mt-6 w-full" style={{fontFamily:'Poppins'}}>Mirza Taza Gul Khan Cultural Foundation</h1>
                <h2 dir="ltr" className=" text-lg text-left sm:text-center  w-3/4 sm:w-full" style={{fontFamily:'Poppins'}}> 
                Our mission is to keep Nuristani culture and language alive.</h2>
            </div>
            <div className="flex justify-center items-center my-10"  >
                <div style={{width:'300px', height:'50vh', position:'relative'}} className="border-2 rounded"> 
                    <Image src={img} alt="Nuristani Carving" layout="fill" />
                </div>
            </div>
        </div>
    )
}

export default MainpageHero