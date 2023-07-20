import React, { useEffect } from 'react'
import LoadingPage from '../components/LoadingPage'
import MainLandingPage from '../components/mainPage/MainLandingPage'
import { useAppContext } from '../context/AppContext'



export default function Index( ) {
  const { state, dispatch } = useAppContext()
  const { loadingPage } = state
  
  useEffect(() => {
    if (localStorage.getItem('lan') === null) {
      localStorage.setItem('lan', 'prs')
    }
    dispatch({ type: "LOADINGPAGE", payload: false })
  }, [dispatch])


  return (
    <>
      {loadingPage ?
          <LoadingPage /> :
          <MainLandingPage />
      }
    </>
  )
}
// export async function getServerSideProps() {
//   try {
//     const allArticles = await articles.select().all();
//     return {
//       props: {
//         listOfArticles: minifyRecords(allArticles)
//       }
//     }
//   } catch (error) {
//     return {
//       props: {
//         error: true
//       }
//     }
//   }
// }

