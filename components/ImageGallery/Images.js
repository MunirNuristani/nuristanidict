import React from 'react'
import Image from 'next/image'

export default function Images({link}) {
  return ( 
     
        <Image
          src={link}
          alt= "Images of Nuristani"
          layout='fill'
          objectFit='cover'
          className="hover:opacity-75"
          />
     
  )
}
