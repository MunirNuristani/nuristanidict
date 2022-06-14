import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useAppContext } from '../../context/AppContext'
import {buttonCSS} from '../CSS/TailwindCSS'

function AlertModal() {
  const { state, dispatch } = useAppContext()
  const { showAlertModal, alertModalMessage, alertButton } = state
  const hideAlertModal = () =>{
       dispatch({ type:'SHOWALERTMODAL', payload: false })
}

  return (
    <div className={`verflow-y-auto overflow-x-hidden z-[99]  w-full md:inset-0 h-modal md:h-full fixed flex justify-center items-center inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${!showAlertModal && 'hidden'}`}>
      <div className='relative w-[600px] mh-[400px]  bg-[white] rounded shadow-lg p-8 pt-16'>
        <AiOutlineCloseCircle className="absolute left-5 text-2xl hover:text-[red] hover:cursor-pointer top-5" onClick={() => hideAlertModal()} />
        <div className="flex flex-col justify-center items-center">
         <div dir="rtl" className="text-2xl">{alertModalMessage}</div>
          <button className={`${buttonCSS} text-3xl mt-10`} onClick={() => hideAlertModal()}> {alertButton}</button>
        </div>
      </div>
    </div>

  )
}

export default AlertModal