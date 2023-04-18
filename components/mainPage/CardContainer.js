import React, { useState } from 'react'
import { buttonCSS } from '../CSS/TailwindCSS'
import { FiBook, FiBookOpen } from 'react-icons/fi'
import { HiOutlineDocument, HiOutlineDocumentText } from 'react-icons/hi'
import { AiOutlinePicture, AiFillPicture } from 'react-icons/ai'
import { GiSecretBook, GiSpellBook } from 'react-icons/gi'
import { useRouter } from 'next/router'
import { useAppContext } from '../../context/AppContext'

function CardContainer() {
  const [change, setChange] = useState({
    book: false,
    document: false,
    pic: false,
    dic: false
  })
  const router = useRouter();
  const { dispatch } = useAppContext()

  const handleRouting = (route) => {
    router.push(route)
    dispatch({ type: "LOADINGPAGE", payload: true })
  }

  const cardInfo = [
    {
      title: "کتاب ها",
      text: "در این ویب سایت کوشش شده است تا کتب مختلفی که درافغانستان  و  سایر کشور های جهان با زبان های مختلف در باره نورستان انتشار یافته است، گذاشته شود تا علاقمندان بتوانند معلومات مورد نیاز شان را در مورد نورستان از اینجا به دست آورند.",
      icon: <FiBook size={50} className="text-[#f0f0f0]" />,
      alterIcon: <FiBookOpen size={50} className="text-[#f0f0f0]" />,
      type: 'book',
      route: '/bookList'
    },
    {
      title: "مقالات",
      text: "در این ویب سایت آن عده مقالات را  یافته می توانید که در مورد تاریخ و فرهنگ نورستان یا کافرستان قدیم از سوی دانشمندان آگاه با مسایل نورستان نگاشته شده است.",
      icon: <HiOutlineDocument size={50} className="text-[#f0f0f0]" />,
      alterIcon: <HiOutlineDocumentText size={50} className="text-[#f0f0f0]" />,
      type: 'document',
      route: '/listArticles'
    },
    {
      title: "گالری عکس ها",
      text: "در این سایت عکس های مناظر زیبای نورستان و مردم نورستان گنجانیده شده است.",
      icon: <AiOutlinePicture size={50} className="text-[#f0f0f0]" />,
      alterIcon: <AiFillPicture size={50} className="text-[#f0f0f0]" />,
      type: 'pic',
      route: '/pictureGallery'
    },
    {
      title: "فرهنگ لغات",
      text: "در این سایت سه دکشنری, یکی به نام فرهنگ زبان نورستان(کلښه الا) ترجمه آن با زبان های پشتو و دری, قاموس دری نورستانی(کلښه الا) و فرهنگ نورستانی(به زبان کته) به دسترس خواننده گان قرار داده است",
      icon: <GiSecretBook size={50} className="text-[#f0f0f0]" />,
      alterIcon: <GiSpellBook size={50} className="text-[#f0f0f0]" />,
      type: 'dic',
      route: '/dictionary/dictionary'
    },
  ]

  return (
    <div className=" min-w-full bg-[#306090] bg-solid rounded-xl pt-10 my-10 flex flex-col justify-center items-center  md:relative">
      <div className=" items-center justify-center p-8 m-auto">
        <p className=" text-2xl text-[#f0f0f0] mx-auto text-center mb-10">هدف این صفحه
          أرایه معلومات دقیق از تاریخ و فرهنگ مردم و سرزمین نورستان از گذشته تا امروز می باشد.</p>
      </div>

      <div className="flex flex-row justify-around w-full md:flex-col md:justify-center ">
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
                <h2 className=" text-[#f0f0f0] "> {card.title} </h2>
                <p className=" text-xl text-[#f0f0f0] px-3 text-justify ">{card.text}</p>
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