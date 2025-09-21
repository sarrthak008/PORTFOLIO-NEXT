import React from 'react'
import SettingDownSound from '../public/sounds/pop-down.mp3'
import SwichOnSound from "../public/sounds/switchon.mp3"
import useSound from 'use-sound'


const Setting = ({ setBgGradinet, setIsSettingPannel }) => {

  let [closeSound] = useSound(SettingDownSound)
  let [clickSound] = useSound(SwichOnSound)



  const handelGradinet = (gradine_name) => {
    clickSound()
    navigator.vibrate(200)
    setBgGradinet(gradine_name)
  }

  const handelClose = () => {
    closeSound()
    navigator.vibrate(200)
    setIsSettingPannel(false)
  }

  return (
    <div className='w-[40%] h-[33vh] bg-gray-300/99 overflow-hidden absolute right-[20%] bottom-[0%] rounded-xl p-4'>
      <h3 className='text-sm'>Set Climate.</h3>
      <div className='flex gap-4 mt-4'>
        <div className='h-[60px] w-[60px] cursor-pointer star-night' onClick={() => handelGradinet('star-night')}></div>
        <div className='h-[60px] w-[60px] cursor-pointer north-pole' onClick={() => handelGradinet('north-pole')}></div>
        <div className='h-[60px] w-[60px] cursor-pointer pinkish-sky' onClick={() => handelGradinet('pinkish-sky')}></div>
        <div className='h-[60px] w-[60px] cursor-pointer morning' onClick={() => handelGradinet('morning')}></div>
      </div>
      <p className='mt-6 text-sm text-gray-500'>set your favourite climate then enjoy work.</p>
      <button className='absolute bottom-[5%] right-[5%] red-btn-gradient border-1 py-1 px-8 cursor-pointer animate-shrink shadow-xl shadow-gray-600 text-gray-200 rounded-md'>Apply</button>
      <span className='absolute top-[2%] right-[2%] cursor-pointer animate-shrink' onClick={handelClose}><i className="ri-close-line text-2xl"></i></span>
    </div>
  )
}

export default Setting