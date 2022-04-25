import React from 'react'
import {useRouter } from 'next/router'
import {articles, minifyRecords} from '../../utils/airTable'
import Image from 'next/image'
import SomethingWentWrong from '../../components/SomethingWentWrong';

function AricleDetail({listOfArticles, error}) {
    const router = useRouter();
    const articleId = router && router.query.id
    const articleToDisplay = (
        listOfArticles.filter(el=> el.id=== articleId)
    )
    console.log(articleToDisplay)
  return (
    <>
    {error? <SomethingWentWrong />:<div dir='rtl' className="container mt-10  flex flex-col justify-center mx-auto backdrop-blur-sm bg-white/90 drop-shadow-xl p-12 rounded-xl w-[900px] text-xl relative">
        {/* <button className="absolute top-5 left-5" onClick={()=>{
            router.push({
                pathname: '/listArticles'
            })
        }}> برگشت</button> */}
        <h1 className="text-4xl mt-8"> {articleToDisplay[0]?.fields.Article_Name}</h1>
        <h2 className='text-2xl text-gray-500'>نویسنده: {articleToDisplay[0]?.fields.Author_Name}</h2>
        
        {articleToDisplay[0]?.fields.Pictures && (
          <div className="flex flex-row wrap  justify-center m-2">
         <Image src={articleToDisplay[0]?.fields.Pictures[0].url} width={250} height={250} alt='article-image' objectFit="none"
          quality={100}/>
        </div>)}
        <div className='text-justify my-10'
        dangerouslySetInnerHTML={{__html: articleToDisplay[0]?.fields.Article_body}}
        />
        
    </div>}
    </>
  )
}

export default AricleDetail

export async function getServerSideProps(context) {
    try{
        const allArticles = await articles.select().all();
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