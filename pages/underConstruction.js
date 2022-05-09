import React from 'react'
import Image from 'next/image'
import underconstruction from '../public/underconstruction.png'
function underConstruction() {
  return (
    <div>
         <div className="container m-10 md:mt-[120px] flex flex-col justify-center mx-auto backdrop-blur-sm bg-white/90 drop-shadow-xl p-5 rounded-xl max-w-[900px] sm:max-w-[360px] md:max-w-[700px] py-20 max-h-[500px] sm:max-h-[650px]">
             <div dir='rtl' className="text-3xl text-center my-20">
                 <p>دوستان گرامی! <br />  این صفحه فعلاً زیر کار میباشد. امیدوار هستیم به زود ترین فرصت این صفحه را تکمیل و در خدمت شما قرار دهیم. <br/> لطفاً معذرت ما را بپذیرید.</p>
             </div>
      <div className='flex justify-center items-center w- h-full'>
        <Image src={underconstruction} alt="underConstruction"/>
      </div>
    </div>
    </div>
  )
}

export default underConstruction