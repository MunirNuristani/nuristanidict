import React from 'react'


function Landing({words, articles}) {
  console.log()
  return (
    <div className="container my-10  flex flex-col justify-center mx-auto backdrop-blur-sm bg-white/60 drop-shadow-xl p-5 rounded-xl w-[900px]">
      <div className='w-full flex flex-row-reverse px-2  text-2xl '>
        <input className='w-full rounded-lg mx-3 px-2 text-right' placeholder="جستجو لغت جدید"></input>
        <button className=""> جستجو</button>
      </div>
      <div className='w-full mt-5'>
        <div className='flex flex-row-reverse items-center'>
        <h1 className="flex justify-end text-2xl items-center"> &nbsp;  :لغت روز </h1>
        <h2 className="flex flex-row-reverse text-2xl  justify-end items-center" dir='rtl'>{words[0].fields.Word}{words[0].fields.Abbr}</h2>
        </div>
        <p className="text-right text-2xl my-2">{words[0].fields.Description}</p>
        <div className ='w-full flex justify-center mt-10'>
          <button className='text-2xl items-center'>...بیشتر</button>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-right text-3xl   " >
          {articles[0].fields.Article_Name}
        </h2>
        <p className="text-right text-lg" dir='rtl'>
          {articles[0].fields.Article_body.slice(0, articles[0].fields.Article_body.length/40)} ...
        </p>
        <div className ='w-full flex justify-center'>
          <button className='text-2xl items-center '>...بیشتر</button>
        </div>
      </div>
    </div>
  )
}

export default Landing