import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useAppContext } from '../../context/AppContext'
import { buttonCSS } from '../CSS/TailwindCSS'


function LanguageModal() {
  const [lan, setLan] = useState('')
  const { state, dispatch } = useAppContext()
  const { showLanguageModal } = state

  const hideLanguageModal = () => {
    dispatch({ type: 'SHOWLANGUAGEMODAL', payload: false })
  }

  const setLanguageSelection = (e) => {
    localStorage.setItem('lan', lan)
    hideLanguageModal()
  }
  return (
    <div className={`verflow-y-auto overflow-x-hidden z-[99]  w-full md:inset-0 h-modal md:h-full fixed flex justify-center items-center inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${!showLanguageModal && 'hidden'}`}>
      <div className='relative w-[600px] mh-[400px]  bg-[white] rounded shadow-lg p-8 pt-16'>
        <AiOutlineCloseCircle className="absolute left-5 text-2xl hover:text-[red] hover:cursor-pointer top-5" onClick={() => hideLanguageModal()} />
        <div className="flex flex-col justify-center items-center">
          <div dir="rtl" className="text-2xl">
            <div dir="rtl " className="w-[400px] md:w-[250px]">
              <label htmlFor="my-select" className="text-2xl font-semibold mb-2 block w-full">
                زبان مورد نظر تان را انتخاب کنید. <br />
                دخپل خوښې ژبه غوړه کری.<br />
                <div dir="ltr" className="text-left w-full" >Please select desired Language.</div>
              </label>
              <select id="my-select" defaultValue={lan ?? "prs"} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setLan(e.target.value)}>
                <option value="nr">نورستانی (کلښه الا)</option>
                <option value="prs" > دری </option>
                <option value="ps"> پښتو </option>
                <option value="en" dir="ltr"> English </option>
              </select>
            </div>


          </div>
          <button dir="ltr" className={`${buttonCSS} text-2xl mt-10`} onClick={() => {
            setLanguageSelection()
          }}
          > Accept / تایید </button>
        </div>
      </div>
    </div>

  )
}

export default LanguageModal