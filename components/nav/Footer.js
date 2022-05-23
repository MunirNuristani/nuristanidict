import React from "react";
import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi";
import { useAppContext } from "../../context/AppContext";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/logo_original.png";
import Link from "next/link";

function Footer() {
  const router = useRouter();
  const { state, dispatch } = useAppContext();
  const { mobileMenu } = state;
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
      className={`z-30 -bottom-1 flex flex-col justify-around w  mx-auto backdrop-blur-sm bg-[#F2F2F2] drop-shadow-xl p-2 text-[#1B57A6] w-full ${mobileMenu && "hidden"} border-t-2 border-[#1B57A6]`}
      dir="rtl"
    >
     
      <div className=" mx-12 flex flex-row justify-between text-lg">
      <div className='flex flex-row items-center'>
        <Link href={{ pathname: "/" }} passHref>
          <div className={`flex hover:cursor-pointer`}>
            <Image
              src={logo}
              alt="logo"
              width={90}
              height={100}
              className="absolute right-2 top-2 "
            />
          </div>
          </Link>
          <p dir="rtl" className="text-3xl mr-4">نهاد فرهنگی میرزا تازه گل خان  </p> 
      </div>
        <ul className="flex flex-col justify-center flex-wrap md:flex-col md:w-full border-r-2 border-[#121b33] pr-12">
          <li className={CSS} onClick={() => handleRouting({ pathname: "/" })}>
            {" "}<p> صفحه نخست </p>
          </li>
          <li
            className={CSS}
            onClick={() => handleRouting({ pathname: "/alphabets" })}
          >
            {" "}<p>الفبای کلښه الا</p>
          </li>
          <li
            className={CSS}
            onClick={() => handleRouting({ pathname: "/about" })}
          >
            {" "}<p> معلومات </p>
          </li>
          <li
            className={CSS}
            onClick={() => handleRouting({ pathname: "/dictionary/dictionary" })}
          >
            {" "}<p> قاموس </p>
          </li>
        </ul>
        <ul className="flex flex-col justify-center flex-wrap md:flex-col pr-12 md:w-full border-r-2 border-[#121b33]">
          <li
            className={CSS}
            onClick={() => handleRouting({ pathname: "/listArticles" })}
          >
            {" "}<p> مقالات </p>
          </li>
          <li
            className={CSS}
            onClick={() => handleRouting({ pathname: "/underConstruction" })}
          >
            <p> کتب </p>
          </li>
          <li
            className={CSS}
            onClick={() => handleRouting({ pathname: "/pictureGallery" })}
          >
            <p> گالری عکس ها </p>
          </li>
          <li
            className={CSS}
            onClick={() => handleRouting({ pathname: "/contact" })}
          >
            <p> تماس </p>
          </li>
        </ul>
        <div className="flex flex-row-reverse justify-center items-center text-3xl border-r-2 border-[#121b33] pr-6">
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
      <div className="text-center mx-auto text-sm  w-full mt-2">
        <p>
          {" "}حق تکثیر محفوظ است &copy; {year}{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
