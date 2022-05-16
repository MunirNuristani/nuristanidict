import React from 'react'
import WordofTheDay from './WordofTheDay'
import BookRecommendation from './BookRecommendation'
import Image from 'next/image'
import firstImage from '../../public/nuristani0101.jpg'
import secondImage from '../../public/25984266-dc95-4dd7-af08-f16824bed092.JPG'
import Dictionary from '../../public/big-dictionary.png'
import Gallary from '../../public/gallery.png'
import Articles from '../../public/copywriting.png'
import { useRouter } from 'next/router'
import Books from '../../public/open-book.png'
import { useAppContext } from '../../context/AppContext'
import { articles } from '../../utils/airTable'

export default function MainLandingPage({ listOfArticles }) {
  const {dispatch} = useAppContext();
  const router = useRouter()
  const iconCSS = "group relative min-w-[100px] w-[50px] h-[50px] flex justify-center after:content-[''] after:absolute after:top-0 after:left-0 after:border-2 after:border-blue-400 after:w-full after:h-full items-center px-4 after:duration-500 after:ease-in-out after:hover:ease-in-out after:hover:duration-500 hover:h-[60px] hover:w-[60px] after:opacity-0 after:hover:w-60px hover:cursor-pointer"
  console.log("listof articles from static props: ", listOfArticles)
  const icons = [
    {
      item: Books,
      text: "کتاب های مختطف در مورد نورستان",
      route:'/UnderConstruction'  
    },
    {
      item: Articles,
      text: "بیش از ۱۰۰ مقاله مختلف ",
      route:'/listArticles'  
    },
    {
      item: Gallary,
      text: "گالری عکس ها زیبای نورستان",
      route:'/UnderConstruction'  
    },
    {
      item: Dictionary,
      text: "بیش از ۱۶۰۰۰ لغت دری و ترجمه ان به زبان کلښه الا",
      route:'/UnderConstruction'  
    },
  ]


  const handleRouting = (route)=>{
    router.push({
      pathname: route
    })
    dispatch({type:"LOADINGPAGE", payload:true})
  }
  return (
    <>
      <div dir='rtl' className="mt-10 mx-5 flex flex-col justify-center mx-auto backdrop-blur-sm drop-shadow-xl px-16 p-5 rounded-xl text-xl" >
        <div className="w-full min-h-[calc(100vh-200px)] flex flex-col items-center justify-center z-50 bg-[#3772A6] text-[#F2F2F2]">
          <h1 className=" text-5xl justify-center text-center w-1/3 ml-0 "> هدف ما زنده نگهداشتن زبان و فرهنگ ما است. </h1>
          <p className="mt-10 text-2xl text-justify p-8">ویب سایت انترنیتی نهاد فرهنگی میرزا تازه گل خان یک وسیله سهل و آسان برای استفاده، دقیق و قابل اعتماد برای دوستداران زبان نورستانی کلښه الا است. در ایجا معلومات در مورد تاریخ، زبان و فرهنگ نورستان را نیز دیزاین گردیده است. در این سایت انترنیتی جهت معلومات خوانندگان محترم موضوعات متنوع راجع به زوایای مختلف حیات تاریخی، اجتماعی و اقتصادی مردم نورستان از گذشته تا حال ارایه گردیده است. بر علاوه این سایت انرنتی شامل کتب و مقالات مختلف مربوط زبان نورستانی کلښه الا میباشد.</p>
          <div className='flex flex-row w-full justify-around h-[70px]'>
          {icons.map( item =>{return(
          <div className={iconCSS} key={item.index} onClick={()=>handleRouting(item.route)}>
            <div onClick={()=>handleRouting()}><Image src={item.item} alt="dictionary-icon" /></div>
            <div className="absolute hidden items-center justify-center text-center  top-16 w-[200px] h-[100px] p-2 rounded bg-[#F2F2F2] text-[black] z-[99]  duration-500 ease-in-out group-hover:flex"> <p>{item.text}</p></div>
          </div>)})}
  
        </div>
        </div>
        <div className="w-full flex flex">
          <div className="h-1/3 w-1/2  mt-10  ml-4 cursor-pointer" onClick={()=>router.push({pathname:"/ImageGalary"})}>
            <Image className="rounded-xl drop-shadow-3xl " src={secondImage} alt="newImage" />
          </div>
          <div className="h-1/3 w-1/2 mt-10 mr-4 hover:cursor-pointer" onClick={()=>router.push({pathname:"/ImageGalary"})}>
            <Image className="rounded-xl drop-shadow-3xl " src={firstImage} alt="newImage" />
          </div>
        </div>
      </div>


      <WordofTheDay />
      <BookRecommendation />
    </>

  )
}
export async function getServerSideProps(context) {
  
  try{
      const allArticles = await articles.select({
        filterByFormula: fIND(10, No),
         }).all();
      return {
        props: {
          listOfArticles: minifyRecords(allArticles)
        }
      }
      }catch (error){
          return {
              props: {
                error: "Error"
              }
          }
      }
  }