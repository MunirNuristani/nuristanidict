import React from 'react'
import { Oval } from 'react-loader-spinner'

function LoadingPage() {
  return (
      <div className='flex justify-center items-center w-full h-screen'>
        <Oval color={'#1B57A6'} />
      </div>
  )
}

export default LoadingPage