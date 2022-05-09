import React from 'react'
import { Turn as Hamburger } from 'hamburger-react'
import Image from 'next/image'
import logo from '../../public/logo_original.png'
import MenuItems from './MenuItems'
import { useAppContext } from '../../context/AppContext'

function MobileMenu() {
    const {state, dispatch} = useAppContext()
    const {mobileMenu } = state
    const setOpen = (payload)=>{
        dispatch({type:"MOBILEMENU", payload:payload})
    }

    return (
        <nav className={` flex flex-row-reverse md:flex-row w-full wrap md:min-h-[100px]  backdrop-blur-sm bg-white/90 drop-shadow-xl p-2  relative md:justify-between md:w-full md:items-center ease-in-out duration-500 ${mobileMenu? "md:h-screen":"md:h-auto"}`} dir="rtl">
            <div className="flex flex-row w-[calc(100%-2rem)] justify-between items-center fixed top-2 left-2 right-2">
                <div >
                    <Hamburger toggled={mobileMenu} toggle={setOpen} direction="left" />
                </div>
                <div >
                    <Image src={logo} alt='logo' width={80} height={80}  />
                </div>
            </div>
            <div className={`flex flex-col mt-[100px] items-center w-full  ${mobileMenu?"flex":"hidden"}`}>
                <p dir='rtl' className='text-5xl md:text-3xl'> نهاد فرهنگی میرزا تازه گل خان</p>
                <MenuItems />
            </div>
        </nav>
    )
}

export default MobileMenu