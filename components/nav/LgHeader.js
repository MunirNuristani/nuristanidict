import React from 'react'
import Image from 'next/image'
import { RiBook3Line, RiChat3Line, RiHome3Line, RiInformationLine, RiPenNibLine } from "react-icons/ri"
import { TiSortAlphabetically } from "react-icons/ti"
import logo from '../../public/logo_original.png'
import { useRouter } from 'next/router'

function LgHeader() {
  const router = useRouter()
  const css = "flex flex-row items-center mx-4 border-2 w-36 backdrop-blur-sm bg-white/60 drop-shadow-xl px-2 rounded-xl hover:cursor-pointer hover:bg-gray-500 hover:text-white my-1"
  return (
    <nav className=" flex flex-row-reverse w-full wrap  backdrop-blur-sm bg-white/60 drop-shadow-xl p-2 relative " dir="rtl" >
      <div className='w-full flex flex-col justify-center items-center'>
        <p dir='rtl' className='text-5xl'> نهاد فرهنگی میرزا تازه گل خان</p>
        <div dir="rtl" className='text-xl flex flex-row justify-center '>
          <ul className='flex flex-row justify-center flex-wrap'>
            <li className={css}onClick={() => router.push({ pathname: '/' })} >
              <span className="hover:bg-gray-500"><RiHome3Line className="ml-3" /></span> <p> صفحه نخست </p></li>
            <li className={css} onClick={() => router.push({ pathname: '/alphabets' })}>
                <span><TiSortAlphabetically className="ml-3" /></span> <p>الفبای کلښه الا</p></li>
            <li className={css} onClick={() => router.push({ pathname: '/about' })}><span><RiInformationLine className="ml-3" /></span> <p> معلومات </p></li>
            <li className={css}><span><RiBook3Line className="ml-3" /></span> <p> قاموس </p></li>
            <li className={css} onClick={() => router.push({ pathname: '/listArticles' })}><span><RiPenNibLine className="ml-3" /></span> <p> مقالات </p></li>
            <li className={css}><span><RiBook3Line className="ml-3" /></span> <p> کتب </p></li>
            <li className={css} onClick={() => router.push({ pathname: '/contact' })}>
              <span><RiChat3Line className="ml-3" /></span> <p> تماس </p></li>
          </ul>
        </div>
      </div>
      <div>
        <Image src={logo} alt='logo' width={100} height={100} className="absolute right-0 top-0" />
      </div>
    </nav >
  )
}

export default LgHeader