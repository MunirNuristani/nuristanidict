import React from 'react'
import { Oval } from 'react-loader-spinner'

function LoadingPage() {
  console.log('Display this message')
  return (
    <div className="container m-10 md:mt-[120px] flex flex-col justify-center mx-auto backdrop-blur-sm bg-white/90 drop-shadow-xl p-5 rounded-xl max-w-[900px] sm:max-w-[360px] md:max-w-[700px] py-20 max-h-[500px] sm:max-h-[650px]">
      <div className='flex justify-center items-center w- h-full'>
        <Oval color={'#000'} />
      </div>
    </div>
  )
}

export default LoadingPage