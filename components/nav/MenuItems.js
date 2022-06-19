import React from 'react'
import { RiBook3Line, RiChat3Line, RiHome3Line, RiInformationLine, RiPenNibLine } from "react-icons/ri"
import { TiSortAlphabetically } from "react-icons/ti"
import { AiOutlinePicture } from "react-icons/ai"
import { useRouter } from 'next/router'
import { useAppContext } from '../../context/AppContext'
function MenuItems() {
    const router = useRouter()
    const {state, dispatch } = useAppContext()
    const { showMenu, shrinkHeader } = state

    const handleRouting = (route)=>{
      router.push(route)
      dispatch({type:"MULTIPLE_ASSIGNMENT", payload:{
        loadingPage: true,
        showMenu: false,
         } 
      })}
    const CSS = "relative text-center after:content-[''] after:absolute after:top-0 after:left-0 after:border-b-2 after:w-full after:h-full  py-2 flex shrink grow items-center  rounded-md after:hover:border-b-4 after:hover:border-[#1B57A6] after:duration-500 after:ease-in-out  after:hover:ease-in-out after:hover:duration-500 after:opacity-0 after:hover:opacity-100 after:active:border-b-4 hover:cursor-pointer"

  return (
    
    <div className={`z-40 h-[calc(100vh-80px)] fixed top-20 right-0 w-1/4 sm:w-full border-2 bg-[#F2F2F2] ease-in-out duration-500 ${!showMenu && "-right-[100%]"} ${!shrinkHeader && "top-44 sm:top-20"} rounded-tl-lg`} dir='rtl'>
         <ul className='flex flex-row justify-center flex-wrap flex-col pt-16 p-5 text-2xl'>
            <li className={CSS}onClick={() => handleRouting({ pathname: '/' })} >
              <span className="hover:bg-gray-500"><RiHome3Line className="ml-2" /></span> <p> صفحه نخست </p></li>
            <li className={CSS} onClick={() => handleRouting({ pathname: '/alphabets' })}>
                <span><TiSortAlphabetically className="ml-2" /></span> <p>الفبای کلښه الا</p></li>
            <li className={CSS} onClick={() => handleRouting({ pathname: '/about' })}><span><RiInformationLine className="ml-2" /></span> <p> گرامر زبان نورستانی کلښه الا </p></li>
            <li className={CSS} onClick={() => handleRouting({ pathname: '/dictionary/dictionary' })}><span><RiBook3Line className="ml-2" /></span> <p> قاموس </p></li>
            <li className={CSS} onClick={() => handleRouting({ pathname: '/listArticles' })}><span><RiPenNibLine className="ml-2" /></span> <p> مقالات </p></li>
            <li className={CSS} onClick={() => handleRouting({ pathname: '/bookList' })}><span><RiBook3Line className="ml-2" /></span> <p> کتب </p></li>
            <li className={CSS} onClick={() => handleRouting({ pathname: '/pictureGallery' })}>
              <span><AiOutlinePicture className="ml-2" /></span> <p> گالری عکس ها </p></li>
            <li className={CSS} onClick={() => handleRouting({ pathname: '/contact' })}>
              <span><RiChat3Line className="ml-2" /></span> <p> تماس </p></li>
          </ul>
    </div>
  )
}

export default MenuItems