import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { storage } from '../utils/firebase-config'
import { getDownloadURL, ref, listAll,  } from "firebase/storage";
import { useAppContext } from '../context/AppContext'
import PictureModal from '../components/Modal/PictureModal';
import LoadingPage from '../components/LoadingPage';

function PictureGallery() {
  const {state, dispatch} = useAppContext();
  const {loadingPage} =state
  const [ displayUrl, setDisplayUrl ] = useState([])
  const [ showPictureModal, setShowPictureModal ] = useState(false)
  const [modalUrl, setModalUrl] = useState('/logo_original.png')
  const hidePictureModal = ()=> setShowPictureModal(false)

  useEffect(()=>{
    const imageUrl= []
    listAll(ref(storage, 'nuristanPics'))
      .then((res) => {
        res.items.map((itemRef) => {
          getDownloadURL(ref(storage, itemRef._location.path)).then(
          url => imageUrl.push( url))})})
      .then(()=>setDisplayUrl(imageUrl))
      .then(()=>dispatch({type:"LOADINGPAGE", payload:false}))
      .catch((error) => console.log(error));
    },[setShowPictureModal])
    
const showImageinModal= (link) =>{
  setShowPictureModal(true)
  setModalUrl(link)
}

  return (
    <>
    {loadingPage ? <LoadingPage />:
    <div className="max-w-[1000px] mx-auto flex flex-wrap justify-center items-center">
    {displayUrl.map((img)=>(
      <div key={img.index} className="m-1 p-1 hover:cursor-pointer" >
      <Image  src={img} alt={img} height={200} width={240} onClick={()=>showImageinModal(img)}/>
      </div>
    ))}
    </div>}
    <PictureModal showPictureModal={showPictureModal} hidePictureModal={hidePictureModal} linkurl={modalUrl} />
    </>
  )
}

export default PictureGallery