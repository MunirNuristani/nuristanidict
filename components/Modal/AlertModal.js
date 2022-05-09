import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useAppContext } from '../../context/AppContext'
import {buttonCSS} from '../CSS/TailWindCSS'
import {useRouter } from 'next/router'

function AlertModal() {
  const { state, dispatch } = useAppContext()
  const { showAlertModal, alertModalMessage } = state
  const router  = useRouter()
  const hideAlertModal = () =>{
       dispatch({ type:'SHOWALERTMODAL', payload: false })
       router.push({
        pathname: '/'
    })
}

  return (
    <div className={`verflow-y-auto overflow-x-hidden z-[99]  w-full md:inset-0 h-modal md:h-full fixed flex justify-center items-center inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${!showAlertModal && 'hidden'}`}>
      <div className='relative w-[600px] mh-[400px]  bg-[white] rounded shadow-lg p-8 pt-16'>
        <AiOutlineCloseCircle className="absolute right-5 text-2xl hover:text-[red] hover:cursor-pointer top-5" onClick={() => hideAlertModal()} />
        <div className="flex flex-col justify-center items-center">
         <div>{alertModalMessage}</div>
          <button className={buttonCSS} onClick={() => hideAlertModal()}>تایید </button>
        </div>
      </div>
    </div>

  )
}

export default AlertModal