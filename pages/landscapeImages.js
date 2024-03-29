import React, { useEffect, useState } from 'react'
import { storage } from '../utils/firebase-config'
import { getDownloadURL, ref, listAll } from "firebase/storage";
import { useAppContext } from '../context/AppContext'
import LoadingPage from '../components/LoadingPage';
import GridGallery from '../components/gallary/GridGallary';
import { phrases } from '../utils/i18n';


function PictureGallery({ imageUrl }) {
  const { landscapeImages, historicalImages } = phrases;
  const { state, dispatch } = useAppContext();
  const { loadingPage } = state
  const [displayUrl, setDisplayUrl] = useState([])
  const [dir, setDir] = useState('')
  const [activeTab, setActiveTab] = useState("nuristanPics")
  const lan = (typeof window !== "undefined" && localStorage.getItem('lan'))

  useEffect(() => {
    setDir(lan === "en" ? "ltr" : "rtl")
  }, [lan])

  const tabCSS = "border-2 border-black rounded-t-lg text-xl w-1/2 h-full flex justify-center items-center sm:my-3 sm:w-full sm:text-xl hover:cursor-pointer sm:rounded-lg"
  const activeTabCSS = `${tabCSS} border-[#306090] border-4 text-2xl bg-[#306090] text-[#f0f0f0]`


  useEffect(() => {
    let displays = []
    imageUrl.forEach(image => {
      getDownloadURL(ref(storage, image))
        .then((url) => displays.push(url))
        .then(() => dispatch({ type: "LOADINGPAGE", payload: false }))
        .catch((error) => console.log(error));
    })
    setDisplayUrl(displays)
  }, [imageUrl, loadingPage, dispatch])

  const changeTab = async (tab) => {
    let displays = []
    await listAll(ref(storage, tab))
      .then((res) => {
        res.items.forEach(image => {
            getDownloadURL(ref(storage, image.fullPath))
              .then((url) => displays.push(url))
              .then(() => dispatch({ type: "LOADINGPAGE", payload: false }))
              .catch((error) => console.log(error));
          })
      })
      .catch(err => console.error(err))
      setDisplayUrl(displays)
      setActiveTab(tab)
  }

  return (
    <>
      {loadingPage ? <LoadingPage /> :
        <div className="container my-10 md:mt-[20px] flex flex-col mx-auto bg-white rounded-xl max-w-[1000px] md:max-w-[700px] sm:max-w-[360px] sm:mt-[20px] text-xl">
          <div className=" w-full mx-auto pb-10  sm:px-6 bg-white/90 rounded-lg sm:py-16 ">
            <div className="flex flex-row w-full justify-around h-[50px] mb-5 wrap sm:flex-col sm:items-center sm:pb-5" dir={dir}>
              
            </div>
            <GridGallery images={displayUrl} />
          </div>
        </div>
      }

    </>
  )
}

export default PictureGallery

export async function getServerSideProps() {
  let imageUrl = []
  await listAll(ref(storage, 'nuristanPics'))
    .then((res) => {
      res.items.forEach((itemRef) => {
        imageUrl.push(JSON.parse(JSON.stringify(itemRef.fullPath)))
      })
    })
  return {
    props: { imageUrl }

  }
}