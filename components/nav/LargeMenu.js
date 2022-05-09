import React from 'react'
import MenuItems from './MenuItems'
import Image from 'next/image'
import logo from '../../public/logo_original.png'

function LargeMenu() {
    return (
        <nav className={` flex flex-row-reverse md:flex-row w-full wrap sm:h-[100px]  backdrop-blur-sm bg-white/60 drop-shadow-xl p-2 relative md:justify-between md:w-full md:items-center`} dir="rtl">
            <div className='flex flex-col justify-center items-center'>
                <p dir='rtl' className='text-5xl md:text-3xl'> نهاد فرهنگی میرزا تازه گل خان</p>
                <div dir="rtl" className='text-xl flex flex-row justify-center my-2 '>
                    <MenuItems />
                </div>
            </div>
            <div className="h-full w-1/4 flex justify-center items-center">
                <Image src={logo} alt='logo' width={100} height={100} className="absolute right-0 top-0 " />
            </div>
        </nav>
    )
}

export default LargeMenu