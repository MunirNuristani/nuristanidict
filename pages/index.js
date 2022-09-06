import React, { useEffect } from 'react'
import LoadingPage from '../components/LoadingPage'
import MainLandingPage from '../components/mainPage/MainLandingPage'
import { useAppContext } from '../context/AppContext'
import SomethingWentWrong from '../components/SomethingWentWrong'
import { articles, minifyRecords } from '../utils/airTable'

export default function Index({listOfArticles, error }) {
  const randomArticle = Math.floor(Math.random() * listOfArticles.length)

  const { state, dispatch } = useAppContext()
  const { loadingPage } = state
  useEffect(() => {
    dispatch({ type: "LOADINGPAGE", payload: false })
  }, [])


  return (
    <div>
      {error? <SomethingWentWrong />:(
        loadingPage ? 
          <LoadingPage /> :
          <MainLandingPage />)
      }
    </div>
  )
}
export async function getServerSideProps() {
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
        error: true
      }
    }
  }
}

