import React, { useEffect } from 'react'
import LandingPage from '../components/SearchBar'
import LoadingPage from '../components/LoadingPage'
import SomethingWentWrong from '../components/SomethingWentWrong'
import { words, articles, minifyRecords, abbriviations} from '../utils/airTable'
import {useAppContext } from '../context/AppContext'

export default function Index({words, articles,abbrs, error}) {
const {state, dispatch} = useAppContext()  
const{ loadingPage } = state
const today= new Date().getDate
console.log(today)

  return (  
    <div className={`md:mt-[120px]`}>
      {error? <SomethingWentWrong />:(
      loadingPage? <LoadingPage />:
      <div>Hi </div>)}
      </div>
  )
}


