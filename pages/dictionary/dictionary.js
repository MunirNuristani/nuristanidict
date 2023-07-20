import React, { useState, useEffect } from "react";
import { buttonCSS } from '../../components/CSS/TailwindCSS'
import data from '../../WordBank.json'
import AlertModal from "../../components/Modal/AlertModal";
import { useAppContext } from '../../context/AppContext'
import LoadingPage from "../../components/LoadingPage";
import { phrases } from "../../utils/i18n";

function Dictionary() {
  const {} = phrases
  const [searchValue, setSearchValue] = useState('')
  const [displayWords, setDisplayWords] = useState([])
  const [displaySelectedWord, setDisplaySelectedWord] = useState([])
  const { state, dispatch } = useAppContext();
  const { loadingPage } = state
  const [dir, setDir] = useState('')
  const lan = (typeof window !== 'undefined' && localStorage.getItem('lan'))

  useEffect(() => {
    setDir(lan === "en" ? "ltr" : "rtl")
  }, [lan])

  useEffect(() => {
    dispatch({ type: "LOADINGPAGE", payload: false })
  }, [dispatch])

  const handleSearch = (e, wd = searchValue) => {
    e.preventDefault();
    setDisplayWords([])
    setDisplaySelectedWord('')
    if (searchValue.length > 0) {
      const words = []
      const displayWords = []
      for (let i = 0; i < data.length; i++) {
        if (data[i].Word.trim().includes(wd.trim())) {
          words.push(data[i].Word)
        }
        if (data[i].Word.trim() == wd.trim()) {
          displayWords.push(data[i])
        }
      }
      if (words.length == 0) {
        dispatch({
          type: "MULTIPLE_ASSIGNMENT", payload: {
            alertButton: "تایید",
            alertModalMessage: " لغت مورد نظر شما در ارشیف ما موجود نیست. لطفاً با ما تماس گرفته لغت مورد نظر تان را شریک سازید تا آنرا در ارشیف علاوه کنیم. تشکر از همکاری شما.",
            showAlertModal: true
          }
        })
      }
      const newListOfWords = words.filter(word => word.Word !== wd)
      setDisplayWords(newListOfWords)
      setDisplaySelectedWord(displayWords)
      setSearchValue('')
    } else {
      dispatch({
        type: "MULTIPLE_ASSIGNMENT", payload: {
          alertButton: "تایید",
          alertModalMessage: "لطفاً لغت مورد نظر تان را در چوکات وارد کنید.",
          showAlertModal: true
        }
      })
    }
  }

  const setWord = (e, wd) => {
    setSearchValue(wd)
    const words = []
    const displayWords = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].Word.trim().includes(wd.trim())) {
        words.push(data[i].Word)
      }
      if (data[i].Word.trim() == wd.trim()) {
        displayWords.push(data[i])
      }
    }
    const newListOfWords = words.filter(word => word.Word !== wd)
    setDisplayWords(newListOfWords)
    setDisplaySelectedWord(displayWords)
    setSearchValue('')
  }

  return (
    <>{loadingPage ? <LoadingPage /> :
      <div dir={dir} className="container my-10 md:mt-[120px]  flex flex-col justify-center mx-auto bg-white p-5 rounded-xl max-w-[1000px] md:max-w-[700px] sm:max-w-[360px] sm:mt-[20px] text-4xl">
        <div dir={dir} className="flex justify-center">
          <h2 className="p-auto">قاموس دری – نورستانی (کلښه الا)</h2>
        </div>
        <form className="flex flex-row sm:flex-col justify-between items-center w-full p-4" onSubmit={(e) => handleSearch(e)}>
          <label htmlFor="word" className="px-4 md:text-5xl sm:text-2xl "> لغت: </label>
          <input className="w-full border-b-2 border-[#1B57A6] mx-3 px-2 text-right md:text-5xl sm:text-2xl" value={searchValue} placeholder="جستجو لغت جدید" onChange={(e) => setSearchValue(e.target.value)} />
          <button type='submit' className={`${buttonCSS} sm:text-2xl mt-4`}
            onClick={(e) => handleSearch(e)}> جستجو</button>
        </form>
        <div className='mx-10 my-5'>
          <div dir={dir} className={!displaySelectedWord ? "hidden" : undefined}>
            {displaySelectedWord && displaySelectedWord.map(displayWord => (
              <div key={displayWord.index}>
                <span className='text-3xl'>{displayWord.Word}</span><span className={`${!displayWord.pronunciation? 'hidden' : undefined} text-2xl `}> {`[${displayWord.pronunciation?.trim()}]`}</span> <span className={!displayWord.Meaning ? 'hidden' : undefined}>:</span>  <span className={`${!displayWord.ABBR ? 'hidden' : undefined} text-2xl `}> ({displayWord.ABBR?.trim()}) </span> <span className="text-2xl"> {displayWord.Meaning}</span></div>))}
          </div>
          <div className={`${displayWords.length===0 ? "hidden" : undefined} mt-10`}>
            <p>لغات دیگر: </p>
            {displayWords.map(wrds => (
              <> <span key={wrds.index} className="text-xl hover:cursor-pointer hover:text-[#1B57A6]" onClick={(e) => { setWord(e, wrds) }}>{wrds}</span><span className="text-xl">،</span></>
            ))}
          </div>
        </div>
      </div>
    }
      <AlertModal />
    </>
  )
}

export default Dictionary;
