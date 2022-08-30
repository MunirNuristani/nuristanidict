import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo_original.png";
import Link from "next/link";
import { buttonCSS } from '../CSS/TailwindCSS'
import { Turn as Hamburger } from 'hamburger-react'
import { HiOutlineSearch, HiX } from 'react-icons/hi'
import SearchBar from "../SearchBar";
import { useAppContext } from "../../context/AppContext";

function Header() {
  const {state, dispatch} = useAppContext()
  const [ showSearchBar, setShowSearchBar ] = useState(false)
  const {showMenu, shrinkHeader} = state

  useEffect(() => {
    const onScroll = () => {
        if (
          !shrinkHeader &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          dispatch({type:'SHRINKHEADER', payload: true});
        }
        if (
          shrinkHeader &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          dispatch({type:'SHRINKHEADER', payload: false});
        }
  };
    ;

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [shrinkHeader]);

  const toggleSearchBar =()=>{
    setShowSearchBar(prevState=>!prevState)
  }
  const toggleMenu =()=>{
    dispatch({type:"SHOWMENU", payload:!showMenu})
  }
  return (
    <header className={`sticky top-0 z-10`}>
      <nav
        className={`z-50 flex w-full wrap h-[120px] transition-all border-b-2 border-[#1B57A6] ease-in-out duration-1000 ${shrinkHeader &&"h-[90px]"} bg-[#F2F2F2] p-2 relative justify-center items-center`}
        dir="rtl"
      >
        <div className="flex flex-col justify-center items-center">
          <p dir="rtl" className="text-5xl md:text-3xl">
            نهاد فرهنگی میرزا تازه گل خان
          </p>
          <p dir="ltr" className="text-3xl md:text-2xl" style={{fontFamily:'Poppins'}}>
            Mirza Taza Gul Khan Cultural Foundation
          
          </p>
        </div>
        <div className="flex justify-center items-center absolute left-2 top-2 h-full -mt-2 text-2xl">
          <button className={`${buttonCSS} sm:hidden`} onClick={()=>toggleSearchBar()}>جستجو&nbsp; {showSearchBar?<HiX/>:<HiOutlineSearch />} </button>
        </div>
        <Link href={{ pathname: "/" }} passHref>
          <div className={`flex absolute right-2 top-2 hover:cursor-pointer transition-all ease-in-out duration-1000 ${shrinkHeader && 'hidden'} sm:hidden`}>
            <Image
              src={logo}
              alt="logo"
              width={90}
              height={100}
              className="absolute right-2 top-2 "
            />
          </div>
        </Link>
        <div className={`z-[99] flex justify-center items-center h-full -mt-2 absolute right-2 top-2 transition-all ease-in-out duration-1000 ${!shrinkHeader&& 'top-24'} sm:top-2`}>
          <Hamburger toggled={showMenu} toggle={toggleMenu} direction="left" />
        </div>     
      </nav>
      <div className="w-full flex justify-center items-center">
      <div className={`z-1 flex justify-center items-center h-full w-3/4 absolute  bottom-2 transition-all ease-in-out duration-1000 top-0 ${showSearchBar&&(shrinkHeader?'top-20':'top-24')} sm:hidden `}>
          <SearchBar  />
        </div>
        </div>
    </header>
  );
}

export default Header;
