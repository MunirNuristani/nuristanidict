import React, { useState } from "react";
import {buttonCSS} from '../../components/CSS/TailwindCSS'
import data from '../../WordBank.json'
import AlertModal  from "../../components/Modal/AlertModal";
import { useAppContext } from '../../context/AppContext'
function Dictionary() {
  const [ searchValue, setSearchValue ]  = useState('')
  const [ displayWords, setDisplayWords] = useState([])
  const [ displaySelectedWord, setDisplaySelectedWord] = useState([])
  const { dispatch} = useAppContext();

  const handleSearch=(e, wd=searchValue)=>{
    e.preventDefault();
    setDisplayWords([])
    setDisplaySelectedWord('')
    if(searchValue.length>0){
      const words = []
      const displayWords=[]
      for (let i = 0; i < data.length; i++){
        if(data[i].Word.trim().includes(wd.trim())){
          words.push(data[i].Word)
        }
        if(data[i].Word.trim() == wd.trim()){
          displayWords.push(data[i])
        }   
      }
      if(words.length==0 ){ 
          dispatch({type: "MULTIPLE_ASSIGNMENT", payload:{
            alertButton: "تایید",
            alertModalMessage: " لغت مورد نظر شما در ارشیف ما موجود نیست. لطفاً با ما تماس گرفته لغت مورد نظر تان را شریک سازید تا آنرا در ارشیف علاوه کنیم. تشکر از همکاری شما.",
            showAlertModal: true
          }})
      }
      const newListOfWords= words.filter(word=> word.Word!==wd)
      setDisplayWords(newListOfWords)
      setDisplaySelectedWord(displayWords)
      setSearchValue('')
    }else{
      dispatch({type: "MULTIPLE_ASSIGNMENT", payload:{
        alertButton: "تایید",
        alertModalMessage: "لطفاً لغت مورد نظر تان را در چوکات وارد کنید.",
        showAlertModal: true
      }})
    }
  }
  
  const setWord = (e, wd) =>{
    setSearchValue(wd)
    const words = []
      const displayWords=[]
      for (let i = 0; i < data.length; i++){
        if(data[i].Word.trim().includes(wd.trim())){
          words.push(data[i].Word)
        }
        if(data[i].Word.trim() == wd.trim()){
          displayWords.push(data[i])
        }
      }
      const newListOfWords= words.filter(word=> word.Word!==wd)
      setDisplayWords(newListOfWords)
      setDisplaySelectedWord(displayWords)
      setSearchValue('')
  }
  

  // setDisplaySelectedWord({Word:" "})

  return (
    <>
          <div className=" my-auto mx-10 mx-auto bg-white rounded-2xl py-10  text-4xl  flex flex-col justify-center max-w-[900px] md:max-w-[700px] sm:max-w-[360px] sm:mt-[20px]"  dir="rtl" >
            <div dir="rtl" className="flex justify-center">
              <h2 className="p-auto">قاموس دری – نورستانی (کلښه الا)</h2>
            </div>
            <form className="flex flex-row sm:flex-col justify-between items-center w-full p-4" onSubmit={(e)=>handleSearch(e)}>
              <label htmlFor="word" className="px-4 md:text-5xl sm:text-2xl "> لغت: </label>
             <input className="w-full border-b-2 border-[#1B57A6] mx-3 px-2 text-right md:text-5xl sm:text-2xl" value={searchValue} placeholder="جستجو لغت جدید" onChange={(e)=>setSearchValue(e.target.value)}/>
              <button type='submit' className={`${buttonCSS} sm:text-2xl mt-4`}
              onClick={(e)=>handleSearch(e)}> جستجو</button>
            </form>  
            <div className='mx-10 my-5'>  
              <div dir='rtl' className={!displaySelectedWord && "hidden"}>
                {displaySelectedWord && displaySelectedWord.map(displayWord=>(
                  <div key={displayWord.index}>
                <span className='text-3xl'>{displayWord.Word}</span><span className={`${!displayWord.pronunciation && 'hidden'} text-2xl `}> {`[${displayWord.pronunciation?.trim()}]`}</span> <span className={!displayWord.Meaning && 'hidden'}>:</span>  <span className={`${!displayWord.ABBR && 'hidden'} text-2xl `}> ({displayWord.ABBR?.trim()}) </span> <span className="text-2xl"> { displayWord.Meaning}</span></div>))}
              </div>
              <div className={`${displayWords===[] && "hidden"} mt-10`}>  
                <p>لغات دیگر: </p>
                {displayWords.map(wrds=>(
                  <> <span key={wrds.index} className="text-xl hover:cursor-pointer hover:text-[#1B57A6]" onClick={(e)=>{setWord(e,wrds)}}>{wrds}</span><span className="text-xl">،</span></>
                  ))}
                </div>
              </div>
              
          </div>
          <AlertModal />
          </>
  )}

export default Dictionary;
