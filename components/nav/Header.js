import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo_original.png";
import Link from "next/link";
import { Turn as Hamburger } from 'hamburger-react'
import { RiBook3Line, RiChat3Line, RiHome3Line, RiPenNibLine } from "react-icons/ri"
import { TiSortAlphabetically } from "react-icons/ti"
import { AiOutlinePicture } from "react-icons/ai"
import { useAppContext } from "../../context/AppContext";
import { useRouter } from 'next/router'

function Header() {
  const { state, dispatch } = useAppContext()
  const { showMenu, shrinkHeader } = state
  const router = useRouter()
  const CSS = " px-10 text-center py-2 flex shrink grow items-center text-3xl  rounded-md cursor-pointer hover:underline"
  const active = `${CSS} text-gray text`
      
  const toggleMenu = () => {
    dispatch({ type: "SHOWMENU", payload: !showMenu })
  }
  const handleRouting = (route) => {
    router.push(route)
    dispatch({
      type: "MULTIPLE_ASSIGNMENT", payload: {
        loadingPage: true,
      }
    })
  }

   const menuItems = [
    {
      name: "صفحه نخست",
      icon: <RiHome3Line className="ml-2"/>,
      pathName:"/"

    },
    {
      name:"الفبای کلښه الا",
      icon: <TiSortAlphabetically className="ml-2"/>,
      pathName: '/alphabets'
    },
    {
      name: "قاموس",
      icon: <RiBook3Line className="ml-2"/>,
      pathName: '/dictionary/dictionary'
    },
    {
      name: "مقالات",
      icon: < RiPenNibLine className = "ml-2" />,
      pathName: '/listArticles'
    },
    {
      name: "کتب ",
      icon: <RiBook3Line className="ml-2" />,
      pathName: '/bookList'
    },
    {
      name: "گالری عکس ها",
      icon: <AiOutlinePicture className = "ml-2" />,
      pathName: '/pictureGallery'
    },
    {
      name: "تماس",
      icon: <RiChat3Line className="ml-2" />,
      pathName: '/contact'
    },
   ]
  return (
    <header className={`sticky top-0 z-10`}>
      <nav
        className={`z-50 flex w-full wrap h-[130px] transition-all border-b-2 border-[#1B57A6] ease-in-out duration-1000  bg-[#F2F2F2] p-2 relative justify-center items-center`}
        dir="rtl"
      >
        <div className="flex flex-col justify-center items-center">
          <h1 dir="rtl" className="text-5xl md:text-3xl">
            نهاد فرهنگی میرزا تازه گل خان
          </h1>
          <h1 dir="ltr" className="text-2xl md:text-xl w-3/4 text-center" style={{ fontFamily: 'Poppins' }}>
            Mirza Taza Gul Khan Cultural Foundation

          </h1>
        </div>

        <Link href={{ pathname: "/" }} passHref>
          <div className={`flex absolute right-2 top-2 hover:cursor-pointer transition-all ease-in-out duration-1000 sm:hidden`}>
            <Image
              src={logo}
              alt="logo"
              width={90}
              height={100}
              className="absolute right-2 top-2 "
            />
          </div>
        </Link>
        <div className={`z-40 flex justify-center items-center h-full -mt-2 absolute right-2 top-2 transition-all ease-in-out duration-1000  ${!shrinkHeader && 'top-24'} sm:top-2 hidden sm:flex`}>
          <Hamburger toggled={showMenu} toggle={toggleMenu} direction="left" className={`z-40`} />
        </div>
      </nav>

      <div>
        <div
          dir="rtl"
         className='flex flex-row justify-center flex-wrap px-10  text-2xl bg-[#3772a6] text-[#f0f0f0] sm:hidden'>
          {menuItems.map((item,idx)=>(
            <div key={idx}
              className={CSS}
              onClick={() => handleRouting({ pathname: item.pathName })} >
                {/* {item.icon} */}
              <p> {item.name}</p>
            </div>
          ))}

        </div>
      </div>
    </header>
  );
}

export default Header;
