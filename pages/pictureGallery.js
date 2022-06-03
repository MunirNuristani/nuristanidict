import React, { useEffect, useState } from 'react'
import Images from '../components/ImageGallery/Images'
import { storage } from '../utils/firebase-config'
import { getDownloadURL, ref, listAll,  } from "firebase/storage";
import { useAppContext } from '../context/AppContext'
import PictureModal from '../components/Modal/PictureModal';
import LoadingPage from '../components/LoadingPage';

function PictureGallery({imageUrl}) {
  const {state, dispatch} = useAppContext();
  const {loadingPage} =state
  const [ displayUrl, setDisplayUrl ] = useState([])
  const [ showPictureModal, setShowPictureModal ] = useState(false)
  const [modalUrl, setModalUrl] = useState('/logo_original.png')
  const hidePictureModal = ()=> setShowPictureModal(false)

  
  useEffect(()=>{
    let displays =[]
    imageUrl.forEach(image=>{
    getDownloadURL(ref(storage, image))
      .then((url)=>displays.push(url))
      .then(()=> dispatch({type:"LOADINGPAGE", payload:false}))
      .catch((error) => console.log(error));
    })
    setDisplayUrl(displays) 
  },[imageUrl, loadingPage])
    
const showImageinModal= (link) =>{
  setShowPictureModal(true)
  setModalUrl(link)
}

  return (
    <>
    {loadingPage ? <LoadingPage />:
    <div className="xl:max-w-[1000px] mx-auto py-16 px-4 sm:py-24 sm:px-6">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 hover:cursor-pointer" >
      {displayUrl.map((img)=>(
        <div key={img.index} className="aspect-w-3 aspect-h-2" onClick={()=>showImageinModal(img)}>
          <Images 
            link={img}
            alt="images"
            placeholder='blur' />
        </div>
        ))}
      </div>
    </div>}
    <PictureModal showPictureModal={showPictureModal} hidePictureModal={hidePictureModal} linkurl={modalUrl} />
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