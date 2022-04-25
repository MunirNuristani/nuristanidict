import React from 'react'
import Landing from '../components/Landing'
import SomethingWentWrong from '../components/SomethingWentWrong'
import { words, articles, minifyRecords, abbriviations} from '../utils/airTable'

export default function index({words, articles,abbrs, error}) {
  
  return (  
    <div>
      {error? <SomethingWentWrong />:
      <Landing words={words} articles={articles} abbrs={abbrs} />}
      </div>
  )
}

 index

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


