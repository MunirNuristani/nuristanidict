import React, { useEffect } from 'react'
import LandingPage from '../components/Landing'
import LoadingPage from '../components/LoadingPage'
import SomethingWentWrong from '../components/SomethingWentWrong'
import { words, articles, minifyRecords, abbriviations} from '../utils/airTable'
import {useAppContext } from '../context/AppContext'

export default function Index({words, articles,abbrs, error}) {
const {state, dispatch} = useAppContext()  
const{ loadingPage, mobileMenu } = state

useEffect(()=>{
  dispatch({type:"LOADINGPAGE", payload: false})
},[words, articles, abbrs])

  return (  
    <div className={`md:mt-[120px]`}>
      {error? <SomethingWentWrong />:(
      loadingPage? <LoadingPage />:
      <LandingPage words={words} articles={articles} abbrs={abbrs} />)}
      </div>
  )
}


export async function getServerSideProps(context) {
  try{
  const allAbbrs  = await abbriviations.select({}).all();
  const allWords = await words.select({}).all();
  const allArticles = await articles.select({}).all()
  return {
    props: {
      abbrs: minifyRecords(allAbbrs),
      words: minifyRecords(allWords),
      articles: minifyRecords(allArticles)
    }
  }
  }catch (error)
  {
      return {
          props: {
            error: "Error"
          }
      }
  }
}


