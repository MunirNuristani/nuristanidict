import React from 'react'
import WordofTheDay from './WordofTheDay'
import BookRecommendation from './BookRecommendation'
import Image from 'next/image'
import firstImage from '../../public/nuristani0101.JPG'
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
      route:'/pictureGallery'  
    },
    {
      item: Dictionary,
      text: "بیش از ۱۶۰۰۰ لغت دری و ترجمه ان به زبان کلښه الا",
      route:'/dictionary/dictionary'  
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
      <div dir='rtl' className="mt-10 mx-5 flex flex-col justify-center items-center mx-auto backdrop-blur-sm drop-shadow-xl px-16 p-5 rounded-xl text-xl" >
        <div className="w-full min-h-[calc(100vh-200px)] max-w-[1000px] flex flex-col items-center justify-center z-50 bg-[#3772A6] text-[#F2F2F2] rounded-xl">
          <h1 className=" text-5xl justify-center text-center w-1/3 ml-0 "> هدف ما زنده نگهداشتن زبان و فرهنگ نورستان است. </h1>
          <p className="w-full mt-10 text-2xl text-right pt-8 max-w-[900px]">هدف این سایت:</p>
          <p className="text-2xl text-justify px-8 max-w-[900px]" >
أرایه معلومات دقیق از تاریخ و فرهنگ مردم و سرزمین نورستان از گذشته تا امروز می باشد. شما در این سایت معلوماتی علاوه بر معلومات در مورد زبان، ادبیات،تاریخ و رسوم وعنعنات نورستان سه دکشنری ؛یکی به نام فرهنګ زبان نورستانی (کلښه الا) ترجمه با زبان های پشتو و دری ،قاموس دری - نورستانی (کلښه الا) و فرهنگ نورستانی ( به زبان کته) را نیز در دسترس دارید.</p>
<p className="mb-10 text-2xl text-justify px-8 max-w-[900px]" >
در این سایت کوشش شده است تا کتب مختلفی که چه درافغانستان انتشار یافته است و نیز کتاب های مختلفی که در سایر کشور های جهان با زبان های مختلف انتشار یافته است، ګذاشته شود تا علاقمندان بتوانند معلومات مورد نیاز شان را در مورد نورستان از اینجا به دست آورند.
همچنان آن عده مقالات را نیز در این سایت یافته می توانید که در مورد تاریخ و فرهنګ نورستان یا کافرستان قدیم از سوی دانشمندان آګاه با مسایل نورستان نګاشته شده است.
سایت نهاد فرهنګی میرزا تازه ګل خان افتخار دارد که با دانشمندان مطرح که از زبان، تاریخ وفرهنګ نورستان آګاهی دارند؛ در ارتباط بوده واز نظریات نیک و علمی شان مستفید شده و می شود.</p>
          <div className='flex flex-row w-full justify-around h-[70px] max-w-[900px]'>
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
