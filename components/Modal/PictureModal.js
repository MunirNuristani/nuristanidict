import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Image from 'next/image' 


function PictureModal({showPictureModal, hidePictureModal, linkurl}) {
  


  return (
    <div className={`verflow-y-auto overflow-x-hidden z-[99]  w-full md:inset-0 h-modal md:h-full fixed flex justify-center items-center inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${!showPictureModal && 'hidden'}`}>
      <div className='relative w-[600px] mh-[400px]  bg-[white] rounded shadow-lg p-8 pt-16'>
        <AiOutlineCloseCircle className="absolute right-5 text-2xl hover:text-[red] hover:cursor-pointer top-5" onClick={() => hidePictureModal()} />
        <div className={` aspect-w-4 aspect-h-3 relative flex justify-center items-center `}>
          <Image src={linkurl} alt={linkurl} layout='fill' />
        </div>
      </div>
    </div>

  )
}

export default PictureModal