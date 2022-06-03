import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Image from 'next/image' 


function PictureModal({showPictureModal, hidePictureModal, linkurl}) {
  
  return (
    <div className={`verflow-y-auto overflow-x-hidden z-[99]  w-full md:inset-0 h-modal md:h-full fixed flex justify-center items-center inset-0 bg-gray-600 bg-opacity-90 overflow-y-auto h-full w-full ${!showPictureModal && 'hidden'}`} onClick={() => hidePictureModal()}>
      <div className='relative w-[600px] h-[400px] md:w-[800px] md:h-[600px] lg:w-[1000px] lg:h-[600px] xl:w-[1200px] xl:h-[700px]  rounded bg-[white] shadow-lg'>
        <AiOutlineCloseCircle className=" z-[99] absolute right-5 text-6xl hover:text-[red] hover:cursor-pointer top-5" onClick={() => hidePictureModal()} />
        <div className={`aspect-w-5 aspect-h-3 relative flex justify-center items-center `}>
          <Image src={linkurl} alt={linkurl} layout='fill' placeholder='blur' />
        </div>
      </div>
    </div>

  )
}

export default PictureModal