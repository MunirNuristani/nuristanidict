import React, { useEffect, useState } from 'react'
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
  }, [])


  return (
    <>
      {loadingPage ?
          <LoadingPage /> :
          <MainLandingPage />
      }
    </>
  )
}


