import React, { useEffect, useState } from 'react'
import { storage } from '../utils/firebase-config'
import { getDownloadURL, ref, listAll } from "firebase/storage";
import { useAppContext } from '../context/AppContext'
import LoadingPage from '../components/LoadingPage';
import GridGallery from '../components/gallary/GridGallary';

function PictureGallery({ imageUrl }) {
  const { state, dispatch } = useAppContext();
  const { loadingPage } = state
  const [displayUrl, setDisplayUrl] = useState([])
  const [activeTab, setActiveTab] = useState("nuristanPics")
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
  }, [imageUrl, loadingPage])

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
        <div>
          <div className="w-[1000px] mx-auto pb-10 mx-4 sm:px-6 bg-white/90 my-10 rounded-lg sm:py-16 md:w-auto">
            <div className="flex flex-row w-full justify-around h-[50px] mb-5 wrap sm:flex-col sm:items-center sm:pb-5" dir="rtl">
              <div className={activeTab == "nuristanPics" ? activeTabCSS : tabCSS} onClick={() => changeTab("nuristanPics")}> تصاویر مناظر نورستان </div>
              <div className={activeTab == "culturalPics" ? activeTabCSS : tabCSS} onClick={() => changeTab("culturalPics")} > تصاویر تاریخی و فرهنگی نورستان</div>
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