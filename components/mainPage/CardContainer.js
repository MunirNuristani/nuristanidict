import React, { useState, useEffect } from 'react'
import { buttonCSS } from '../CSS/TailwindCSS'
import { FiBook, FiBookOpen } from 'react-icons/fi'
import { HiOutlineDocument, HiOutlineDocumentText } from 'react-icons/hi'
import { AiOutlinePicture, AiFillPicture } from 'react-icons/ai'
import { GiSecretBook, GiSpellBook } from 'react-icons/gi'
import { useRouter } from 'next/router'
import { useAppContext } from '../../context/AppContext'
import { phrases } from '../../utils/i18n'

function CardContainer() {
  const {books, booksInfo, articles, articleInfo, pictures, picInfo, dictionary, dicInfo, missionStatement } = phrases
  const [change, setChange] = useState({
    book: false,
    document: false,
    pic: false,
    dic: false
  })
  const [dir, setDir] = useState("")
  const lan = (typeof window !== "undefined" && localStorage.getItem('lan'))

  useEffect(() => {
    setDir(lan === "en" ? "ltr" : "rtl")
  }, [lan])
  
  const router = useRouter();
  const { dispatch } = useAppContext()

  const handleRouting = (route) => {
    router.push(route)
    dispatch({ type: "LOADINGPAGE", payload: true })
  }

  const cardInfo = [
    {
      title: books[lan],
      text: booksInfo[lan],
      icon: <FiBook size={50} className="text-[#f0f0f0]" />,
      alterIcon: <FiBookOpen size={50} className="text-[#f0f0f0]" />,
      type: 'book',
      route: '/bookList'
    },
    {
      title: articles[lan],
      text: articleInfo[lan],
      icon: <HiOutlineDocument size={50} className="text-[#f0f0f0]" />,
      alterIcon: <HiOutlineDocumentText size={50} className="text-[#f0f0f0]" />,
      type: 'document',
      route: '/listArticles'
    },
    {
      title: pictures[lan],
      text: picInfo[lan],
      icon: <AiOutlinePicture size={50} className="text-[#f0f0f0]" />,
      alterIcon: <AiFillPicture size={50} className="text-[#f0f0f0]" />,
      type: 'pic',
      route: '/gallery'
    },
    {
      title: dictionary[lan],
      text: dicInfo[lan],
      icon: <GiSecretBook size={50} className="text-[#f0f0f0]" />,
      alterIcon: <GiSpellBook size={50} className="text-[#f0f0f0]" />,
      type: 'dic',
      route: '/dictionary/dictionary'
    },
  ]

  return (
    <div className=" min-w-full bg-[#306090] bg-solid rounded-xl pt-10 my-10 flex flex-col justify-center items-center  md:relative">
      <div className=" items-center justify-center p-8 m-auto">
        <p className=" text-2xl text-[#f0f0f0] mx-auto text-center mb-10"> {missionStatement[lan]} </p>
      </div>

      <div className="flex flex-row flex-wrap justify-around w-full md:flex-col md:justify-center ">
        {cardInfo.map((card, ind) => (
          <div
            key={ind}
            className='relative flex flex-col justify-center flex-wrap w-[300px] h-[400px] border-2 border-[#f0f0f0] rounded-xl m-3  md:mx-auto'
            onMouseEnter={() => setChange({ ...change, [card.type]: true })}
            onMouseLeave={() => setChange({ ...change, [card.type]: false })}
          >
            <div className='absolute top-4 flex flex-col justify-center items-center flex-wrap bg-[#306090] ' >
              <div className="flex flex-col justify-center items-center" >
                {!change[card.type] ? card.icon : card.alterIcon}
                <h2 dir={dir} className=" text-[#f0f0f0] "> {card.title} </h2>
                <p dir={dir} className=" text-xl text-[#f0f0f0] px-3 text-justify ">{card.text}</p>
              </div>
            </div>
            <div className="absolute flex justify-center bottom-0 w-full">
              <button
                onClick={() => handleRouting(card.route)}
                className="relative min-w-[110px] h-[50px] flex justify-center after:content-[''] after:absolute after:top-0 after:left-0 after:border-2 after:rounded-md after:border-[#f0f0f0] after:w-full after:h-full  m-2 flex items-center px-4 rounded-md after:hover:border-4 after:hover:border-[#f0f0f0] after:duration-500 after:ease-in-out  after:hover:ease-in-out after:hover:duration-500 text-[#f0f0f0] border-[#f0f0f0] self-center justify-self-center"> {card.title}</button>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default CardContainer