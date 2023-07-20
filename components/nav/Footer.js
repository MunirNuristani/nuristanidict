import React, { useState, useEffect } from "react";
import { FiFacebook, FiInstagram, FiMail, FiHeart } from "react-icons/fi";
import { MdOutlineBuildCircle } from 'react-icons/md'
import { useAppContext } from "../../context/AppContext";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/logo_original.png";
import Link from "next/link";
import { phrases } from "../../utils/i18n";

function Footer() {
  const [dir , setDir] = useState("")
  const router = useRouter();
  const { state, dispatch } = useAppContext();
  const { homePage, alphabet, dictionary, articles, books, pictures, contact, mainH1, copyWrite } = phrases
  const lan = (typeof window !== "undefined" && localStorage.getItem('lan'))
  

  useEffect(()=>{
    setDir(lan === "en" ? "ltr" : "rtl")
  },[lan])
  
  const handleRouting = route => {
    router.push(route);
    dispatch({
      type: "MULTIPLE_ASSIGNMENT",
      payload: {
        loadingPage: true,
        mobileMenu: false
      }
    });
  };

  const year = new Date().getFullYear() - 621;
  const CSS =
    "hover:cursor-pointer relative text-center after:content-[''] after:absolute after:top-0 after:left-0 after:border-b-2 after:w-full after:h-full  flex shrink grow items-center  rounded-md after:hover:border-b-2 after:hover:border-[#121b33] after:duration-1000 after:ease-in-out  after:hover:ease-in-out after:hover:duration-500 after:opacity-0 after:hover:opacity-100 after:active:border-b-4";

  return (
    <footer
      className={`z-30 -bottom-1 flex flex-col justify-around mx-auto bg-[#F2F2F2] p-2 text-[#1B57A6] w-full border-t-2 border-[#1B57A6]`}
      dir={dir}
    >

      <div className=" mx-12 flex flex-row justify-between text-lg sm:hidden">
        <div className='flex flex-row items-center'>
          <Link href={{ pathname: "/" }} passHref>
            <div className={`flex hover:cursor-pointer md:hidden`}>
              <Image
                src={logo}
                alt="logo"
                width={90}
                height={100}
                className="absolute right-2 top-2 "
              />
            </div>
          </Link>
          <p dir={dir} className={`text-3xl lg:hidden  ${dir === "rtl" ? "mr-4" : "ml-4"}`}>{mainH1[lan]} </p>
        </div>
        <ul className={`flex flex-col justify-center flex-wrap md:flex-col md:w-full ${dir === "rtl" ? "border-r-2 lg:pr-4 xl:pr-12" : "border-l-2 lg:pl-4 xl:pl-12"}  border-[#121b33] `}>
          <li className={CSS} onClick={() => handleRouting("/")}>
            <p> {homePage[lan]} </p>
          </li>
          <li
            className={CSS}
            onClick={() => handleRouting("/alphabets")}
          >
            <p> {alphabet[lan]} </p>
          </li>
          <li
            className={CSS}
            onClick={() => handleRouting("/dictionary/dictionary")}
          >
            <p> {dictionary[lan]} </p>
          </li>
        </ul>
        <ul className={`flex flex-col justify-center flex-wrap  md:flex-col  lg:pr-4 xl:pr-12 md:w-full ${dir === "rtl" ? "border-r-2 lg:pr-4 xl:pr-12" : "border-l-2 lg:pl-4 xl:pl-12"} border-[#121b33]`}>
          <li
            className={CSS}
            onClick={() => handleRouting("/listArticles")}
          >
            <p> {articles[lan]}</p>
          </li>
          <li
            className={CSS}
            onClick={() => handleRouting("/bookList")}
          >
            <p> {books[lan]}</p>
          </li>
          <li
            className={CSS}
            onClick={() => handleRouting("/pictureGallery")}
          >
            <p> {pictures[lan]}</p>
          </li>
          <li
            className={CSS}
            onClick={() => handleRouting("/contact")}
          >
            <p> {contact[lan]} </p>
          </li>
        </ul>
        <div className={`flex flex-row-reverse justify-center items-center text-3xl ${dir === "rtl" ? "border-r-2 pr-6" : "border-l-2 pl-6"} border-[#121b33] `}>
          <a
            href="https://www.facebook.com/MTGCF/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook className="mx-4 hover:animate-[spin_linear_1s]" />
          </a>
          <a
            href="https://www.instagram.com/mtgkfoundation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram className="mx-4 hover:animate-[spin_linear_1s]" />
          </a>
          <a href="mailto:mtkgfoundation@gmail.com,nuristani.munir@gmail.com">
            <FiMail className="mx-4 hover:animate-[spin_linear_1s]" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-centertext-sm  w-full mt-2">
        <p>
          {" "} {copyWrite[lan]} &copy; {lan==="en"? (year+621) : year}{" "}
        </p>
        <a className="flex flex-row justify-center items-center" dir='ltr' href="https://nuristani.dev" target="_blank" rel="noreferrer">
          {<MdOutlineBuildCircle />}&nbsp;nuristani.dev{" "}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
