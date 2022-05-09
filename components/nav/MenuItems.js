import React from 'react'
import { RiBook3Line, RiChat3Line, RiHome3Line, RiInformationLine, RiPenNibLine } from "react-icons/ri"
import { TiSortAlphabetically } from "react-icons/ti"
import { useRouter } from 'next/router'
import { useAppContext } from '../../context/AppContext'
function MenuItems() {
    const router = useRouter()
    const {state, dispatch } = useAppContext()
    const { mobileMenu } = state

    const handleRouting = (route)=>{
      router.push(route)
      dispatch({type:"MULTIPLE_ASSIGNMENT", payload:{
        loadingPage: true,
        mobileMenu: false, } 
      })}
    const css = "flex flex-row items-center mx-4 border-2 w-36 backdrop-blur-sm bg-white/60 drop-shadow-xl px-2 rounded-xl hover:cursor-pointer hover:bg-gray-500 hover:text-white my-1"
    const mobileCSS = "flex flex-row items-center mx-4 border-2 w-48 drop-shadow-xl px-2 rounded-xl hover:cursor-pointer hover:bg-gray-500 hover:text-white my-4 text-3xl"
  return (
    
    <div>

         <ul className='flex flex-row justify-center flex-wrap md:flex-col md:w-full'>
            <li className={mobileMenu? mobileCSS: css}onClick={() => handleRouting({ pathname: '/' })} >
              <span className="hover:bg-gray-500"><RiHome3Line className="ml-2" /></span> <p> صفحه نخست </p></li>
            <li className={mobileMenu? mobileCSS: css} onClick={() => handleRouting({ pathname: '/alphabets' })}>
                <span><TiSortAlphabetically className="ml-2" /></span> <p>الفبای کلښه الا</p></li>
            <li className={mobileMenu? mobileCSS: css} onClick={() => handleRouting({ pathname: '/about' })}><span><RiInformationLine className="ml-2" /></span> <p> معلومات </p></li>
            <li className={mobileMenu? mobileCSS: css} onClick={() => handleRouting({ pathname: '/underConstruction' })}><span><RiBook3Line className="ml-2" /></span> <p> قاموس </p></li>
            <li className={mobileMenu? mobileCSS: css} onClick={() => handleRouting({ pathname: '/listArticles' })}><span><RiPenNibLine className="ml-2" /></span> <p> مقالات </p></li>
            <li className={mobileMenu? mobileCSS: css} onClick={() => handleRouting({ pathname: '/underConstruction' })}><span><RiBook3Line className="ml-2" /></span> <p> کتب </p></li>
            <li className={mobileMenu? mobileCSS: css} onClick={() => handleRouting({ pathname: '/contact' })}>
              <span><RiChat3Line className="ml-2" /></span> <p> تماس </p></li>
          </ul>
    </div>
  )
}

export default MenuItems