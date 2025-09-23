"use client"

import React, { useState } from 'react'
import MY_SKILLS from '../utils/Skills'
import HOVERSOUND from "../public/sounds/hover.mp3"
import SettingDownSound from '../public/sounds/pop-down.mp3'
import SwichOnSound from "../public/sounds/switchon.mp3"
import useSound from 'use-sound'
import BGIMG from "../public/images/key2.png"


const SkillsModal = ({ setIsmodelOpen, info }) => {

  const [closeSound] = useSound(SettingDownSound)

  const handelClose = () => {
    closeSound()
    navigator.vibrate(200)
    setIsmodelOpen(false)
  }

  return (
    <div className='fixed z-[100000] top-0 left-0 overflow-hidden backdrop-blur-sm  h-screen w-screen flex items-center justify-center'>
      <div className='w-[95vw] md:w-[50vw] h-[40vh] md:h-[33vh] bg-gray-300 rounded-xl relative overflow-hidden p-3'>

        <div className='relative z-10 h-full w-full backdrop-blur-[1px]'>
          <h2 className='text-2xl text-pink-500'>{info.name}</h2>
          <p className='text-gray-900 text-base mt-4'>{info.info}</p>
          <a className='mt-5 block text-blue-600' href={info.website} target='_blank'>get more info <i className="ri-arrow-right-line"></i></a>
        </div>

        <div className='w-[80%] h-full absolute top-0 left-0 flex items-center justify-center drop-shadow-2xl'>
          <img src={BGIMG.src} className='h-full w-full object-cover brightness-90' />
        </div>
        <span className='absolute z-[40] top-[2%] right-[2%] cursor-pointer animate-shrink' onClick={handelClose}><i className="ri-close-line text-2xl"></i></span>
      </div>
    </div>
  )
}



const Skills = () => {

  let [playOn] = useSound(HOVERSOUND, { volume: 0.2 });
  let [SwichOnSoundPlay] = useSound(SwichOnSound)
  const [isModelOpen, setIsmodelOpen] = useState(false)
  const [openInfo, setIsOpenInfo] = useState('')



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
      {isModelOpen && <SkillsModal setIsmodelOpen={setIsmodelOpen} info={openInfo} />}
    </div>
  )
}

export default Skills