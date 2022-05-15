import React from 'react'
import { buttonCSS } from './CSS/TailwindCSS' 

export default function SearchBar({searchValue, setSearchValue, route}) {
    
  return (
      <div className='w-full flex flex-row-reverse md:flex-col justify-center items-center px-2  text-2xl border-b-2 border-r-2  border-l-2 border-[#1B57A6] rounded-b-lg'>
        <input className='w-full border-b-2 border-[#1B57A6] mx-3 px-2 text-right' placeholder="جستجو لغت جدید" />
        <button className={buttonCSS}> جستجو</button>
      </div>
  )
}
