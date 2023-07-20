import React, {useEffect, useState} from 'react'
import { mainHero } from '../CSS/TailwindCSS'
import Image from 'next/image'
import img  from '../../public/assets/heroImage01.png'
import { phrases } from '../../utils/i18n'

function MainpageHero() {
    const { mainH1, statementTitle } = phrases
    const [dir, setDir] = useState("")
    const lan  = (typeof window !== "undefined" && localStorage.getItem('lan'))

    useEffect(() => {
        setDir(lan === "en" ? "ltr" : "rtl")
    }, [lan])

    return (
        <div className={mainHero}>
            <div className='flex flex-col justify-center items-right sm:items-center px-8 sm:p-4'>
                <h1 dir={dir} className="text-5xl  text-right sm:text-center mt-6 w-full">{mainH1[lan]} </h1>
                <h2 dir={dir} className=" text-2xl text-right sm:text-center  "> {statementTitle[lan]}</h2>
            </div>
            <div className="flex justify-center items-center my-10"  >
                <div className=" w-[300px] h-[500px] relative border-2 rounded"> 
                    <Image src={img} alt="Nuristani Carving" layout="fill" />
                </div>
            </div>
        </div>
    )
}

export default MainpageHero