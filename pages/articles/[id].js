import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { articles, minifyRecords } from '../../utils/airTable'
import Image from 'next/image'
import SomethingWentWrong from '../../components/SomethingWentWrong';
import LoadingPage from '../../components/LoadingPage';
import { useAppContext } from '../../context/AppContext'

function AricleDetail({ listOfArticles, error }) {
  const router = useRouter();
  const { state, dispatch } = useAppContext()
  const { loadingPage } = state
  const articleId = router && router.query.id
  const articleToDisplay = (listOfArticles.filter(el => el.id === articleId))
  const [sortedImages, setSortedImages] = useState([])
  useEffect(() => {
    dispatch({ type: "LOADINGPAGE", payload: false })
    setSortedImages(articleToDisplay[0]?.fields.Pictures?.sort((a,b)=> a.filename>b.filename?1:(a.filename<b.filename?-1:0)))
  }, [listOfArticles])
  console.log(sortedImages)
  return (
    <>
      {error ? <SomethingWentWrong /> :
        loadingPage ? <LoadingPage /> : (
          <div dir='rtl' className="container mt-10 md:mt-[120px] flex flex-col justify-center mx-auto backdrop-blur-sm bg-white/90 drop-shadow-xl p-12 rounded-xl max-w-[900px] md:max-w-[700px] sm:max-w-[360px] text-xl relative">
            <button className="absolute top-5 left-5" onClick={() => {
              router.back()
              dispatch({ type: "LOADINGPAGE", payload: true })
            }}> برگشت</button>
            <h1 className="text-4xl mt-8"> {articleToDisplay[0]?.fields.Article_Name}</h1>
            <h2 className='text-2xl text-gray-500'>نویسنده: {articleToDisplay[0]?.fields.Author_Name}</h2>

            {articleToDisplay[0]?.fields.Pictures && (
              <div className="flex flex-row wrap relative justify-center m-2" style={{ width: '100%', height: '50vh', position: 'relative' }}>
                <Image src={articleToDisplay[0]?.fields.Pictures[0].url} alt='article-images' width={100} height={100} layout="fill" objectFit="contain" />
              </div>)}
            <div className='text-justify my-10 text-2xl'
              dangerouslySetInnerHTML={{ __html: articleToDisplay[0]?.fields.Article_body }}
            />
            <>
              {articleToDisplay[0]?.fields.Pictures?.slice(1, articleToDisplay[0]?.fields.Pictures.length).map((img, idx) => (
                
                <div key={idx} className="flex flex-column justify-center m-2" style={{ width: "100%", height: '50vh', position: 'relative' }}>
                  <Image src={img.url} l alt='article-image' width={100} height={100} layout="fill" objectFit="contain" />
                </div>))}
            </>
          </div>)}
    </>
  )
}

export default AricleDetail

export async function getServerSideProps(context) {
  try {
    const allArticles = await articles.select().all();
    return {
      props: {
        listOfArticles: minifyRecords(allArticles)
      }
    }
  } catch (error) {
    return {
      props: {
        error: "Error"
      }
    }
  }
}