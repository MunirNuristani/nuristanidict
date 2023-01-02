import React from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PictureModal({ showPictureModal, hidePictureModal, selectedImage, images }) {

  return (
    <div className={`verflow-y-auto overflow-x-hidden z-[99]  w-full md:inset-0 h-modal md:h-full fixed flex justify-center items-center inset-0 bg-gray-600 bg-opacity-90 overflow-y-auto h-full w-full ${!showPictureModal && 'hidden'}`}>
      <div className='relative w-[600px] h-[400px] md:w-[800px] md:h-[600px] lg:w-[1000px] lg:h-[600px] xl:w-[1200px] xl:h-[700px]  rounded shadow-lg flex justify-center items-center m-auto p-auto '>

        <IoMdCloseCircleOutline className=" z-[99] absolute right-2 text-4xl text-gray-500 text-[red] hover:cursor-pointer top-5" onClick={() => hidePictureModal()} />
        <div className=" absolute top-0 right-0">
          <Carousel 
            showArrows={true} 
            showThumbs={false} 
            autoFocus={true} 
            showIndicators={false} 
            dynamicHeight={true}
            showStatus={false}
            swipeable={true}
            emulateTouch={true}
          >
            <div >
              <img src={selectedImage} alt="selected Image" />
            </div>
            {images && images.map((image, ind) => (
              <div key={ind} className=" absolute top-0 right-0 ">
                <img src={image} alt="images" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>

  )
}

export default PictureModal