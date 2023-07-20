import React,{useEffect, useState} from 'react'
import { phrases } from '../utils/i18n'

function FourohFour() {
  const {Msg404} =phrases
  const [dir, setDir] = useState("۴۰۴")
  const [err, setErr] = useState()
  const lan =(typeof window !== "undefined" && localStorage.getItem('lan'))
  useEffect(()=>{
    lan === "en" ? (setDir("ltr"), setErr("404")) : (setDir("rtl"), setErr("۴۰۴"))
  
  },[lan])


  return (
    <div className='flex justify-center items-center mx-2 sm:h-[calc(100vh-316px)] h-[calc(100vh-450px)] bg-white opacity-75 w-[900px] my-10'>
      <div dir={dir} className='text-4xl flex flex-col' >
        <span className="w-full text-center mx-auto"> {err} </span>
        <br/>
        <span className="border-t-2 pt-8 mr-3 pr-3 border-[#000000] text-center"> معذوریم: صفحه مورد نظر تان را نیافتیم. لطفاً دوباره کوشش نماید. </span>
      </div>
    </div>
  )
}

export default FourohFour