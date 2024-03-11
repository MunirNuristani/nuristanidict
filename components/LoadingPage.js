import React from 'react'
import { Watch } from 'react-loader-spinner'

function LoadingPage() {
  return (
    <div className='flex justify-center items-center m-auto sm:h-[calc(100vh-300px)] sm:mx-4 rounded md:h-[calc(100vh-205px)] h-[calc(100vh-316px)] bg-[rgba(255,255,255,.5)]  w-[900px] my-10'>

      <Watch
        height="120"
        width="120"
        radius="48"
        color="#1B57A6AA"
        ariaLabel="watch-loading"
        visible={true}

      />
    </div>
  )
}

export default LoadingPage