import React from 'react'
import Landing from '../components/Landing'
import { words, articles, minifyRecords} from '../utils/airTable'

export default function index({words, articles}) {
  
  return (  
    <div>
      <Landing words={words} articles={articles} />
      </div>
  )
}

 index

export async function getServerSideProps(context) {
  const allWords = await words.select({}).all();
  const allArticles = await articles.select({}).all()
  return {
    props: {
      words: minifyRecords(allWords),
      articles: minifyRecords(allArticles)
    }
  }
}