import React from 'react'
import { Watch } from 'react-loader-spinner'

function LoadingPage() {
  return (
    <div className='flex justify-center items-center m-auto h-[calc(100vh-316px)] bg-white opacity-75'>
      <Watch
        height="120"
        width="120"
        radius="48"
        color="#1B57A6"
        ariaLabel="watch-loading"
        visible={true}
      />
    </div>
  )
}

export default LoadingPage