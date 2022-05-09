import React from 'react'
import { FiFacebook, FiInstagram, FiMail  } from "react-icons/fi"
import {useAppContext} from '../../context/AppContext'

function Footer() {
  const{ state } =useAppContext()
  const{mobileMenu} =state
  
  return (
      <footer className={` absolute -bottom-20 flex flex-row justify-center  mx-auto backdrop-blur-sm bg-white/60 drop-shadow-xl p-2 absolute  w-full ${mobileMenu&&"hidden"}`} dir="rtl">
          <div className="flex flex-row-reverse text-3xl ">
            <a href="https://www.facebook.com/MTGCF/" target="_blank" rel="noopener noreferrer" >
              <FiFacebook className='mx-4 hover:animate-[spin_linear_1s]' />
            </a>
            <a href="https://www.instagram.com/mtgkfoundation/" target="_blank" rel="noopener noreferrer">
              <FiInstagram className='mx-4 hover:animate-[spin_linear_1s]'/>
            </a>
            <a href="mailto:mtkgfoundation@gmail.com,nuristani.munir@gmail.com">
              <FiMail  className='mx-4 hover:animate-[spin_linear_1s]'/>
            </a>
          </div>
      </footer>
  );
}


export default Footer