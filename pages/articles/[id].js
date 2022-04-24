import React from 'react'
import {useRouter } from 'next/router'
import {articles, minifyRecords} from '../../utils/airTable'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function AricleDetail({listOfArticles}) {
    const router = useRouter();
    const articleId = router && router.query.id
    const articleToDisplay = (
        listOfArticles.filter(el=> el.id=== articleId)
    )
    console.log(articleToDisplay)
  return (
    <div dir='rtl' className="container mt-10  flex flex-col justify-center mx-auto backdrop-blur-sm bg-white/90 drop-shadow-xl px-16 py-5 rounded-xl w-[900px] text-xl relative">
        <button className="absolute top-5 left-5" onClick={()=>{
            router.push({
                pathname: '/listArticles'
            })
        }}> برگشت به صفحه مقالات</button>
        <h1>{articleToDisplay[0]?.fields.Article_Name}</h1>
        <h2>{articleToDisplay[0]?.fields.Author_Name}</h2>
        <div
        dangerouslySetInnerHTML={{__html: articleToDisplay[0]?.fields.Article_body}}
        />
        
    </div>
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