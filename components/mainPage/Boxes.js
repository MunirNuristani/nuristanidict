import React, { useState } from 'react'
import { buttonCSS } from '../CSS/TailwindCSS'
import { FiBook, FiBookOpen } from 'react-icons/fi'
import { HiOutlineDocument, HiOutlineDocumentText } from 'react-icons/hi'
import { AiOutlinePicture, AiFillPicture } from 'react-icons/ai'
import { GiSecretBook, GiSpellBook } from 'react-icons/gi'
import { useRouter } from 'next/router'
import { useAppContext } from '../../context/AppContext'
import carving from '../../public/Nuristani_Carving.png'
import Image from 'next/image'

function Boxes() {
    const router = useRouter();
    const { dispatch } = useAppContext()
    const [showInfo, setShowInfo] = useState({
        books: false,
        articles: false,
        gallery: false,
        dictionary: false,
    })

    const handleRouting = (route) => {
        router.push(route)
        dispatch({type:"LOADINGPAGE", payload: true})
    }

    const handleClick = (selection, state) => {
        if (selection == 'books') {
            setShowInfo({
                books: state,
                articles: false,
                gallery: false,
                dictionary: false,
            })
        } else if (selection == 'articles') {
            setShowInfo({
                books: false,
                articles: state,
                gallery: false,
                dictionary: false,
            })
        } else if (selection == 'gallery') {
            setShowInfo({
                books: false,
                articles: false,
                gallery: state,
                dictionary: false,
            })
        } else if (selection == 'dictionary') {
            setShowInfo({
                books: false,
                articles: false,
                gallery: false,
                dictionary: state,
            })
        }
    }

    return (
        <div className=" min-w-[calc(100vw-100px)]  !md:max-w-1/2 bg-[#3772A6] bg-solid rounded-xl pt-10 pb-20 mt-10 flex flex-col justify-center items-center mb-[350px] md:relative">
            <div className=" items-center justify-center p-8 m-auto">
                <p className=" text-3xl text-[#f0f0f0] mx-auto text-center mb-10">هدف این سایت:
                    أرایه معلومات دقیق از تاریخ و فرهنگ مردم و سرزمین نورستان از گذشته تا امروز می باشد.</p>
            </div>
            <div className="flex flex-row justify-around w-full md:flex-col ">
                <div className="relative flex flex-col  justify-center items-center w-1/4 md:w-full md:items-start md:m-4" onClick={() => handleClick("books", !showInfo.books)}>
                    {!showInfo.books ? <FiBook size={50} className="text-[#f0f0f0]" /> :
                        <FiBookOpen size={50} className="text-[#f0f0f0]" />}
                    <p className="text-2xl text-[#f0f0f0]">کتاب ها</p>
                    <div className="relative w-full md: flex md:flex-row ">
                        {showInfo.books &&
                            <div className="absolute md:w-3/4 md:left-10  md:-top-20 border-2 bg-white !opacity-100 p-4 rounded-lg z-20">
                                <p className=" text-2xl ">در این ویب سایت کوشش شده است تا کتب مختلفی که درافغانستان  و  سایر کشور های جهان با زبان های مختلف در باره نورستان انتشار یافته است، گذاشته شود تا علاقمندان بتوانند معلومات مورد نیاز شان را در مورد نورستان از اینجا به دست آورند.
                                </p>
                                <button className={`${buttonCSS} text-2xl text-center mx-auto`} onClick={()=>{handleRouting('/bookList')}}> کتاب ها</button>
                            </div>}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-1/4 md:w-full md:items-start md:m-4" onClick={() => handleClick("articles", !showInfo.articles)}>
                    {!showInfo.articles ? <HiOutlineDocument size={50} className="text-[#f0f0f0]" /> :
                        <HiOutlineDocumentText size={50} className="text-[#f0f0f0]" />}
                    <p className="text-2xl text-[#f0f0f0]">مقالات</p>
                    <div className="relative w-full  ">
                        {showInfo.articles &&
                            <div className="absolute md:w-3/4 md:left-10   md:-top-20 border-2 bg-white !opacity-100 p-4 rounded-lg z-20">
                                <p className=" text-2xl ">در این ویب سایت آن عده مقالات را  یافته می توانید که در مورد تاریخ و فرهنگ نورستان یا کافرستان قدیم از سوی دانشمندان آگاه با مسایل نورستان نگاشته شده است.
                                </p>
                                <button className={`${buttonCSS} text-2xl text-center mx-auto`} onClick={()=>{handleRouting('/listArticles')}}> مقالات </button>
                            </div>}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center  w-1/4 md:w-full md:items-start md:m-4" onClick={() => handleClick("gallery", !showInfo.gallery)}>
                    {!showInfo.gallery ? <AiOutlinePicture size={50} className="text-[#f0f0f0]" /> :
                        <AiFillPicture size={50} className="text-[#f0f0f0]" />}
                    <p className="text-2xl text-[#f0f0f0]">گالری عکس ها</p>
                    <div className="relative w-full  ">
                        {showInfo.gallery &&
                            <div className="absolute md:w-3/4 md:left-10   md:-top-20 border-2 bg-white !opacity-100 p-4 rounded-lg z-20">
                                <p className=" text-2xl "> در این سایت عکس های مناظر زیبای نورستان و مردم نورستان گنجانیده شده است. </p>
                                <button className={`${buttonCSS} text-2xl text-center mx-auto`} onClick={()=>{handleRouting('/pictureGallery')}}> عکس ها </button>
                            </div>}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-1/4  md:w-full md:items-start md:m-4" onClick={() => handleClick("dictionary", !showInfo.dictionary)}>
                    {!showInfo.dictionary ? <GiSecretBook size={50} className="text-[#f0f0f0]" /> :
                        <GiSpellBook size={50} className="text-[#f0f0f0]" />}
                    <p className="text-2xl text-[#f0f0f0]">فرهنگ لغات</p>
                    <div className="relative w-full  ">
                        {showInfo.dictionary &&
                            <div className="absolute  md:w-3/4 md:left-10 md:-top-20 border-2 bg-white !opacity-100 p-4 rounded-lg z-20">
                                <p className=" text-2xl ">در این سایت سه دکشنری , یکی به نام فرهنگ زبان نورستان (کلښه الا) ترجمه آن با زبان های پشتو و دری , قاموس دری نورستانی (کلښه الا ) و فرهنگ نورستانی (به زبان کته) به دسترس خواننده گان قرار داده است
                                </p>
                                <button className={`${buttonCSS} text-2xl text-center mx-auto`} onClick={()=>{handleRouting('/dictionary/dictionary')}}> فرهنگ لغات </button>
                            </div>}
                    </div>
                </div>
            </div>
            <div className="absolute left-10 bottom-16 sm:block md:block lg:hidden xl:hidden z-0">
            <div style={{width:'100px', height:'50vh', position:'relative'}}>
            <Image src={carving} alt="carving-2" layout="fill" />
            </div>
            </div>
        </div>
    )
}

export default Boxes