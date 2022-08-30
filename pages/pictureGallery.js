import React, { useEffect, useState } from 'react'
import { storage } from '../utils/firebase-config'
import { getDownloadURL, ref, listAll } from "firebase/storage";
import { useAppContext } from '../context/AppContext'
import LoadingPage from '../components/LoadingPage';
import GridGallery from '../components/gallary/GridGallary';

function PictureGallery({imageUrl}) {
  const {state, dispatch} = useAppContext();
  const {loadingPage} =state
  const [ displayUrl, setDisplayUrl ] = useState([])

console.log("gallary: ", imageUrl)
  
  useEffect(()=>{
    let displays =[]
    imageUrl.forEach(image=>{
    getDownloadURL(ref(storage, image))
      .then((url)=>displays.push(url))  
      .then(()=> dispatch({type:"LOADINGPAGE", payload:false}))
      .catch((error) => console.log(error));
    })
    setDisplayUrl(displays)
    console.log("displayURL: ", displays)
  },[imageUrl, loadingPage])
    


  return (
    <>
    {loadingPage ? <LoadingPage />:
    <div className="xl:max-w-[1000px] mx-auto py-16 px-4 sm:py-24 sm:px-6 bg-gray-200 my-10 rounded-lg ">
      <GridGallery images={displayUrl} />
    </div>}
    
    </>
  )
}

export default PictureGallery

export async function getServerSideProps(){
  let imageUrl = []
    await listAll(ref(storage, 'nuristanPics'))
      .then((res) => {
        res.items.forEach((itemRef) => {
          imageUrl.push(JSON.parse(JSON.stringify(itemRef.fullPath)))
        })
        })
      return{
        props: {imageUrl}
        
  }
}