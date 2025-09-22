"use client"

import React, { useState } from 'react'
import MY_SKILLS from '../utils/Skills'
import HOVERSOUND from "../public/sounds/hover.mp3"
import SettingDownSound from '../public/sounds/pop-down.mp3'
import SwichOnSound from "../public/sounds/switchon.mp3"
import useSound from 'use-sound'
import BGIMG from "../public/images/infobg1.jpeg"


const SkillsModal = ({setIsmodelOpen,info}) => {

    const [closeSound] = useSound(SettingDownSound)

     const handelClose =()=>{
      closeSound()
      navigator.vibrate(200)
      setIsmodelOpen(false)
     }

  return (
    <div className='fixed top-0 left-0 overflow-hidden backdrop-blur-sm  h-screen w-screen flex items-center justify-center'>
      <div className='w-[50vw] h-[40vh] bg-gray-300 rounded-xl relative overflow-hidden'>
        <div className='absolute h-full w-full overflow-hidden'>
           <img src={BGIMG.src} className='h-full w-full object-cover brightness-[0.4]'/>
        </div>
        <span className='absolute top-[2%] right-[2%] cursor-pointer animate-shrink' onClick={handelClose}><i className="ri-close-line text-2xl"></i></span>
      </div>
    </div>
  )
}



const Skills = () => {

  let [playOn] = useSound(HOVERSOUND, { volume: 0.2 });
  let [SwichOnSoundPlay] = useSound(SwichOnSound)
  const [isModelOpen, setIsmodelOpen] = useState(false)
  const [openInfo,setIsOpenInfo] = useState('')



  const runOnHover = () => {
    navigator.vibrate(100)
    playOn()
  }

  const handelModal = (skill) => {
    navigator.vibrate(100)
    SwichOnSoundPlay()
    setIsmodelOpen(true)
    setIsOpenInfo(skill)
  }


  return (
    <div className='min-h-[40vh] w-screen'>
      <div className='w-[95%] md:w-[70%] h-full mx-auto mt-20'>
        <h2 className='text-yellow-500 text-3xl'>My Toolbox</h2>
        <span className='text-gray-400 text-sm mt-4'>“A versatile set of languages, frameworks 🔗, and tools that power ⚡️ my <span className='text-blue-600'>development</span> journey.”</span>

        <div className='flex flex-wrap gap-3 mt-6'>
          {

            MY_SKILLS?.map((skill, i) => (
              <span key={i} className={`border border-gray-400 shrink-0 text-sm text-gray-100 px-2 md:px-6 cursor-pointer py-1 md:py-2 capitalize ${i % 2 == 0 ? 'hover:text-purple-500' : 'hover:text-blue-500'} ${i % 2 == 0 ? 'hover:border-purple-500' : 'hover:border-blue-500'}`} onMouseOver={runOnHover} onClick={() => handelModal(skill)}>{skill.name}</span>
            ))

          }
        </div>
      </div>
      {isModelOpen && <SkillsModal setIsmodelOpen={setIsmodelOpen} info={openInfo}/>}
    </div>
  )
}

export default Skills