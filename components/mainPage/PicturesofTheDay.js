import React from 'react'

import Image from 'next/image'
import firstImage from '../../public/nuristani0101.jpg'
import secondImage from '../../public/25984266-dc95-4dd7-af08-f16824bed092.JPG'
import thirdImage from '../../public/4043271c-1801-4ad4-aa3c-2c4c9994b7ff.JPG'
export default function PicturesofTheDay() {
  
  return (
    <div className='h-full'>
      <div className="">
          <Image src={secondImage} layout="fill"  alt="Musician's Image" />
      </div>
      <div className=''>
        <Image src={firstImage} alt="images" layout="fill" />
      </div>
      <div className=''>

      </div>
    </div>
  )
}
