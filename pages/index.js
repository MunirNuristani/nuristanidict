import React from 'react'
import LoadingPage from '../components/LoadingPage'
import SomethingWentWrong from '../components/SomethingWentWrong'
import MainLandingPage from '../components/mainPage/MainLandingPage'
import {useAppContext } from '../context/AppContext'

export default function Index({words, articles,abbrs, error}) {
const {state, dispatch} = useAppContext()  
const{ loadingPage } = state
const today= new Date().getDate



  return (  
    <div>
      {error? <SomethingWentWrong />:(
      loadingPage? <LoadingPage />:
      <MainLandingPage />)}
      </div>
  )
}


