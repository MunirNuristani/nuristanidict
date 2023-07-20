import React, { useState, useEffect } from 'react'
import { RiBook3Line, RiChat3Line, RiHome3Line, RiPenNibLine } from "react-icons/ri"
import { TiSortAlphabetically } from "react-icons/ti"
import { AiOutlinePicture } from "react-icons/ai"
import { useRouter } from 'next/router'
import { useAppContext } from '../../context/AppContext'
import { phrases } from '../../utils/i18n'
import { buttonCSS } from "../CSS/TailwindCSS";

function MenuItems() {
  const router = useRouter()
  const [dir, setDir] = useState("")
  const lan = (typeof window !== "undefined" && localStorage.getItem('lan'))
  const { state, dispatch } = useAppContext()
  const { showMenu } = state
  const { homePage, alphabet, dictionary, articles, books, pictures, contact } = phrases
  const Css = lan === "en" ? "mr-2" : "ml-2"
  const handleRouting = (route) => {
    router.push(route)
    dispatch({
      type: "MULTIPLE_ASSIGNMENT", payload: {
        loadingPage: true,
        showMenu: false,
      }
    })
  }

  const showLanguageModal = () => {
    dispatch({ type: "SHOWLANGUAGEMODAL", payload: true })
  }

  const CSS = "relative text-center after:content-[''] after:absolute after:top-0 after:left-0 after:border-b-2 after:w-full after:h-full  py-2 flex shrink grow items-center  rounded-md after:hover:border-b-4 after:hover:border-[#1B57A6] after:duration-500 after:ease-in-out  after:hover:ease-in-out after:hover:duration-500 after:opacity-0 after:hover:opacity-100 after:active:border-b-4 hover:cursor-pointer"

  useEffect(() => {
    setDir(lan === "en" ? "ltr" : "rtl")
  }, [lan])
  return (

    <div className={`z-40 h-[calc(100vh-120px)] md:h-[calc(100vh-120px)] fixed right-0 w-full border-2 bg-[#F2F2F2] ease-in-out duration-500 ${!showMenu && "-right-[100%]"} top-32  sm:top-32 overflow-auto `} dir={dir}>
      <div className='relatvie h-full w-full'>
        <ul className='flex flex-row justify-center flex-wrap flex-col sm:pt-8 md:pt-4 p-5 text-2xl overflow-scroll'>

          <li className={CSS} onClick={() => handleRouting({ pathname: '/' })} >
            <span className="hover:bg-gray-500"><RiHome3Line className={Css} /></span> <p> {homePage[lan]}</p></li>
          <li className={CSS} onClick={() => handleRouting({ pathname: '/alphabets' })}>
            <span><TiSortAlphabetically className={Css} /></span> <p> {alphabet[lan]} </p></li>
          <li className={CSS} onClick={() => handleRouting({ pathname: '/dictionary/dictionary' })}><span><RiBook3Line className={Css} /></span> <p> {dictionary[lan]} </p></li>
          <li className={CSS} onClick={() => handleRouting({ pathname: '/listArticles' })}><span><RiPenNibLine className={Css} /></span> <p> {articles[lan]} </p></li>
          <li className={CSS} onClick={() => handleRouting({ pathname: '/bookList' })}><span><RiBook3Line className={Css} /></span> <p> {books[lan]} </p></li>
          <li className={CSS} onClick={() => handleRouting({ pathname: '/pictureGallery' })}>
            <span><AiOutlinePicture className={Css} /></span> <p> {pictures[lan]} </p></li>
          <li className={CSS} onClick={() => handleRouting({ pathname: '/contact' })}>
            <span><RiChat3Line className={Css} /></span> <p> {contact[lan]} </p></li>
        </ul>
        <div className={`absolute bottom-3 flex w-full justify-center `}>
          <button
            className={buttonCSS}
            onClick={showLanguageModal}
          >
            الا / لسان / ژبه <br />
            Language
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuItems