import React, { useState, useEffect } from "react";
import { RiChat3Line, RiHome3Line } from "react-icons/ri";
import { TiSortAlphabetically } from "react-icons/ti";
import {
  AiOutlinePicture,
  AiOutlineCaretLeft,
  AiOutlineCaretDown,
  AiOutlineCaretRight,
} from "react-icons/ai";
import { useRouter } from "next/router";
import { useAppContext } from "../../context/AppContext";
import { phrases } from "../../utils/i18n";
import { buttonCSS } from "../CSS/TailwindCSS";
import { litratureMenuItems, imageMenuItem } from "../../resources/data";

function MenuItems() {
  const router = useRouter();
  const [dir, setDir] = useState("");
  const lan = typeof window !== "undefined" && localStorage.getItem("lan");
  const { state, dispatch } = useAppContext();
  const { showMenu } = state;
  const { homePage, pictures, contact, litrature } = phrases;
  const [litMenuOpen, setLitMenuOpen] = useState(false);
  const [picMenuOpen, setPicMenuOpen] = useState(false);
  const iconCSS = lan === "en" ? "mr-2" : "ml-2";
  const handleRouting = (route) => {
    dispatch({
      type: "MULTIPLE_ASSIGNMENT",
      payload: {
        loadingPage: true,
        showMenu: false,
      },
    });
    router.push(route);
  };

  const showLanguageModal = () => {
    dispatch({ type: "SHOWLANGUAGEMODAL", payload: true });
  };

  const CSS =
    "relative text-center after:content-[''] after:absolute after:top-0 after:left-0 after:border-b-2 after:w-full after:h-full  py-2 flex shrink grow  items-center  rounded-md after:hover:border-b-4 after:hover:border-[#1B57A6] after:duration-500 after:ease-in-out  after:hover:ease-in-out after:hover:duration-500 after:opacity-0 after:hover:opacity-100 after:active:border-b-4 hover:cursor-pointer";

  useEffect(() => {
    setDir(lan === "en" ? "ltr" : "rtl");
  }, [lan]);
  useEffect(() => {
    setLitMenuOpen(false), setPicMenuOpen(false);
  }, [showMenu]);

  const itemsInMenu = (index, item) => {
    return (
      <li className={lan === "en" ? "ml-8" : "mr-8"} key={index}>
        <a className={`${CSS}`} onClick={() => handleRouting(item.pathName)}>
          <span className={iconCSS}>{item.icon}</span>
          {item.name}
        </a>
      </li>
    );
  };
  const toggleLit = () => {
    setLitMenuOpen((prev) => !prev);
  };
  const togglePic = () => {
    setPicMenuOpen((prev) => !prev);
  };
  return (
    <div
      className={` z-40 h-[calc(100vh-120px)] md:h-[calc(100vh-120px)] fixed right-0 w-full bg-[#F2F2F2] ease-in-out duration-500 ${
        !showMenu && "-right-[100%]"
      } top-32  sm:top-32 overflow-auto `}
      dir={dir}
    >
      <div className="relatvie h-full w-full">
        <div className="h-full w-full">
          <ul className="flex flex-col justify-center flex-wrap  sm:pt-8 md:pt-4 p-5 text-2xl ">
            <li
              className={CSS}
              onClick={() => handleRouting({ pathname: "/" })}
            >
              <span className="hover:bg-gray-500">
                <RiHome3Line className={iconCSS} />
              </span>{" "}
              <p> {homePage[lan]}</p>
            </li>
            <li className={CSS} onClick={toggleLit}>
              <span>
                <TiSortAlphabetically className={iconCSS} />
              </span>{" "}
              <p> {litrature[lan]} </p>{" "}
              <span>
                {litMenuOpen ? (
                  <AiOutlineCaretDown size={16} />
                ) : lan === "en" ? (
                  <AiOutlineCaretRight size={16} />
                ) : (
                  <AiOutlineCaretLeft size={16} />
                )}{" "}
              </span>
            </li>
            <div
              className={` flex-col w-full ease-in-out duration-500 ${
                litMenuOpen ? "max-h-full" : "max-h-[0] hidden"
              }`}
            >
              {litratureMenuItems(lan, iconCSS).map((item, index) =>
                itemsInMenu(index, item)
              )}
            </div>
            <li className={CSS} onClick={togglePic}>
              <span>
                <AiOutlinePicture className={iconCSS} />
              </span>{" "}
              <p> {pictures[lan]} </p>
              <span>
                {picMenuOpen ? (
                  <AiOutlineCaretDown size={16} />
                ) : lan === "en" ? (
                  <AiOutlineCaretRight size={16} />
                ) : (
                  <AiOutlineCaretLeft size={16} />
                )}{" "}
              </span>
            </li>
            <div
              className={` flex-col w-full ease-in-out duration-500 ${
                picMenuOpen ? "max-h-full" : "max-h-[0] hidden"
              }`}
            >
              {imageMenuItem(lan, iconCSS).map((item, index) =>
                itemsInMenu(index, item)
              )}
            </div>

            <li
              className={CSS}
              onClick={() => handleRouting({ pathname: "/contact" })}
            >
              <span>
                <RiChat3Line className={iconCSS} />
              </span>{" "}
              <p> {contact[lan]} </p>
            </li>
          </ul>
          <div className={`absolute bottom-3 flex w-full justify-center `}>
            <button className={buttonCSS} onClick={showLanguageModal}>
              الا / لسان / ژبه <br />
              Language
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
