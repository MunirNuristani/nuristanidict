"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo_original.png";
import Link from "next/link";
import { Turn as Hamburger } from "hamburger-react";
import { useAppContext } from "../../context/AppContext";
import { useRouter } from "next/router";
import { buttonCSS } from "../CSS/TailwindCSS";
import { phrases } from "../../utils/i18n";
import MenuItemsDiv from "./MenuItemsDiv";
import { litratureMenuItems, imageMenuItem } from "../../resources/data";
import { BiCaretDown } from "react-icons/bi";

function Header() {
  const { state, dispatch } = useAppContext();
  const { showMenu } = state;
  const [dir, setDir] = useState("");
  const { homePage, pictures, contact, mainH1, statementTitle, litrature } =
    phrases;
  const router = useRouter();
  const lan = typeof window !== "undefined" && localStorage.getItem("lan");

  useEffect(() => {
    setDir(lan === "en" ? "ltr" : "rtl");
  }, [lan]);

  const iconCSS = dir === "rtl" ? "ml-2" : "mr-2";
  const aCSS = `py-6 md:p-0 px-2 lg:p-6 ${
    lan === "en" ? "text-xl" : "text-2xl"
  } md:text-xl font-bold  cursor-pointer`;

  const liCSS =
    " flex justify-center items-center hover:bg-[#306090] hover:text-white md:min-w-[70px] min-w-[100px] h-1/2 rounded align-center m-auto";

  const toggleMenu = () => {
    dispatch({ type: "SHOWMENU", payload: !showMenu });
  };
  const showLanguageModal = () => {
    dispatch({ type: "SHOWLANGUAGEMODAL", payload: true });
  };

  const handleRouting = (route) => {
    dispatch({
      type: "LOADINGPAGE",
      payload: true,
    });
    router.push(route);
  };

  return (
    <header
      className={`${
        lan === "en" ? "font-['Poppins'] text-base" : ""
      } sticky top-0 z-10`}
    >
      <nav
        dir={dir}
        className="relative bg-white border-b-2 border-gray-300 text-gray-900 sm:hidden"
      >
        <div className="container mx-auto flex justify-between">
          <div
            dir={dir}
            className="relative flex p-4 lg:p-6 text-xl  font-bold"
          >
            <Link href="/" passHref>
              <div>
                <Image
                  src={logo}
                  alt="logo"
                  width={90}
                  height={100}
                  className="absolute right-2 top-2 "
                />
              </div>
            </Link>
            <div className="flex flex-col justify-center items-center">
              <h1
                dir={dir}
                className={`${
                  lan === "en" ? "text-2xl" : "text-3xl"
                } md:text-xl  ${dir === "rtl" ? "mr-4" : "ml-4"}`}
              >
                {mainH1[lan]}
              </h1>
            </div>
          </div>
          <div className="flex">
            <ul className="flex justify-center items-center">
              <li className={liCSS}>
                <a onClick={() => handleRouting("/")} className={aCSS}>
                  {homePage[lan]}
                </a>
              </li>

              <li className="hoverable hover:bg-[#306090] hover:text-white md:min-w-[70px] min-w-[100px] rounded m-auto justify-center items-center h-1/2 flex">
                <a className={`${aCSS} flex justify-center items-center`}>
                  {litrature[lan]}{" "}
                  <span>
                    <BiCaretDown />
                  </span>
                </a>
                <div
                  id="mega-menu"
                  className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-[#306090] mt-6 md:top-[80px]"
                >
                  <div className="container mx-auto w-full flex flex-wrap justify-between">
                    <div className="w-full text-white mb-8">
                      <h2
                        className={`font-bold ${
                          lan === "en" ? "text-2xl" : "text-4xl"
                        } md:hidden`}
                      >
                        {mainH1[lan]}
                      </h2>
                      <p
                        className={`${
                          lan === "en" ? "text-lg" : "text-2xl"
                        } md:hidden`}
                      >
                        {statementTitle[lan]}
                      </p>
                    </div>
                    <div
                      className={`flex flex-row w-full divide-x ${
                        lan === "en" ? "divide-x" : "divide-x-reverse"
                      }  `}
                    >
                      {litratureMenuItems(lan, iconCSS).map((item, index) => (
                        <div className="w-1/4" key={index}>
                          <MenuItemsDiv
                            item={item}
                            dir={dir}
                            lan={lan}
                            handleRouting={handleRouting}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              <li className="hoverable hover:bg-[#306090] hover:text-white md:min-w-[70px] min-w-[100px] rounded m-auto justify-center items-center h-1/2">
                <a className={`${aCSS} flex justify-center items-center`}>
                  {pictures[lan]}{" "}
                  <span>
                    <BiCaretDown />
                  </span>{" "}
                </a>
                <div
                  id="mega-menu"
                  className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-[#306090] mt-6 md:top-[80px]"
                >
                  <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                    <div className="w-full text-white mb-8">
                      <h2
                        className={`font-bold ${
                          lan === "en" ? "text-2xl" : "text-4xl"
                        } md:hidden`}
                      >
                        {mainH1[lan]}
                      </h2>
                      <p
                        className={`${
                          lan === "en" ? "text-lg" : "text-2xl"
                        } md:hidden`}
                      >
                        {statementTitle[lan]}
                      </p>
                    </div>
                    <div
                      className={`flex flex-row w-full divide-x ${
                        lan === "en" ? "divide-x" : "divide-x-reverse"
                      }  `}
                    >
                      {imageMenuItem(lan, iconCSS).map((item, index) => (
                        <div className="w-1/2" key={index}>
                          <MenuItemsDiv
                            item={item}
                            dir={dir}
                            lan={lan}
                            handleRouting={handleRouting}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li className={liCSS}>
                <a onClick={() => handleRouting("/contact")} className={aCSS}>
                  {contact[lan]}
                </a>
              </li>
            </ul>
            <div
              className={`flex  hover:cursor-pointer transition-all ease-in-out duration-1000 sm:hidden h-full justify-bottom items-center `}
            >
              <button
                className={`${buttonCSS} text-xs`}
                onClick={showLanguageModal}
              >
                الا / لسان / ژبه <br />
                Language
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav
        className={`z-50 sm:flex w-full wrap h-[130px] transition-all border-b-2 border-[#1B57A6] ease-in-out duration-1000  bg-[#F2F2F2] p-2 relative justify-center items-center xl:hidden lg:hidden md:hidden`}
        dir={dir}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 dir={dir} className="text-5xl md:text-3xl">
            نهاد فرهنگی میرزا تازه گل خان
          </h1>
          <h1
            dir={dir}
            className="text-2xl md:text-xl w-3/4 text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Mirza Taza Gul Khan Cultural Foundation
          </h1>
        </div>

        <div
          className={`z-40 flex justify-center items-center h-full -mt-2 absolute right-2 top-2 transition-all ease-in-out duration-1000 sm:top-2 xl:hidden lg:flex `}
        >
          <Hamburger
            toggled={showMenu}
            toggle={toggleMenu}
            direction="left"
            className={`z-40`}
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
