"use client"
import React, { useState, useEffect } from 'react'
import PROJECTS from '../utils/Projects'
import HOVERSOUND from "../public/sounds/hover.mp3"
import SettingDownSound from '../public/sounds/pop-down.mp3'
import SwichOnSound from "../public/sounds/switchon.mp3"
import useSound from 'use-sound'
import gsap from 'gsap'

const ProjectModal = ({ setIsModalOpen, data }) => {

  const [closeSound] = useSound(SettingDownSound)

  const handelClose = () => {
    closeSound()
    navigator.vibrate(200)
    setIsModalOpen(false)
  }


  return (
    <div className='fixed z-[100] top-0 left-0 overflow-hidden backdrop-blur-sm  h-screen w-screen flex items-center justify-center'>
      <div className='w-[95vw]  md:w-[80vw] h-[70vh] md:h-[62vh] bg-gray-300 rounded-4xl relative overflow-hidden p-3 modal'>
       
        <div className='w-[95%] h-full flex flex-col md:flex-row  gap-3'>
          <div className='w-[100%] md:w-[55%] h-[30%] md:h-[100%]'>
            <div className=' bg-red-300 rounded-3xl overflow-hidden'>
              <img src={data.image_url} className='w-full h-full object-cover' />
            </div>
            <div className='  flex-wrap pt-0 md:flex hidden'>
              {
                data.technology?.map((tech, i) => (
                  <span key={i} className='border-[0.1px] bg-yellow-300 px-2 md:px-6 py-0 md:py-1 text-sm m-2 rounded-4xl'>{tech}</span>
                ))
              }
            </div>
          </div>

          <div className='w-[100%] md:w-[40%] h-[70%] md:h-full  p-2 border-l-[1px] bordrr-l-gray-400 pl-3'>
            <div className='flex items-center'>
              {
                data.type == "web" ? <i className="ri-earth-line text-xl text-blue-600 "></i> : <i className="ri-android-line text-xl text-blue-600"></i>
              }
              <span className='text-2xl ml-2 text-blue-600'>{data.name}</span>
            </div>

            <div className='w-full text-sm md:text-md text-gray-700 text-wrap mt-3'>{data.info}</div>

            <div className='mt-7 gap-3 flex '>
              <button className='bg-pink-500 px-1 md:px-6 py-1 cursor-pointer shadow-2xl font-extralight'>Source Code <i className="ri-github-line"></i></button>
              <button className='bg-blue-500 px-1 md:px-6 py-1 cursor-pointer shadow-2xl font-extralight'>Live Here <i className="ri-links-line"></i></button>
            </div>

          </div>

        </div>

        <span className='absolute z-[40] top-[2%] right-[2%] cursor-pointer animate-shrink' onClick={handelClose}><i className="ri-close-line text-2xl"></i></span>
      </div>
    </div>
  )
}





const ProjectCard = ({ project, index }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [transform, setTransform] = useState("");
  const transforms = [
    "rotate-2 scale-100",
    "-rotate-4 scale-105",
    "rotate-3 scale-95",
    "-rotate-6 scale-110",
    "rotate-8 scale-100"
  ];


  useEffect(() => {
    setTransform(transforms[Math.floor(Math.random() * transforms.length)]);
  }, []);


  const handelOpen = () => {
    setIsModalOpen(true)
  }


  return (
    <>
      <div className={`h-[190px] w-[300px] bg-gray-700 text-white rounded-xl transition-transform duration-300 hover:scale-110 cursor-pointer shrink-0 shadow-2xl overflow-hidden ${transform}`} onClick={() => { handelOpen() }}>
        <img src={project.image_url} className='h-full w-full object-cover' />
      </div>
      {isModalOpen && <ProjectModal setIsModalOpen={setIsModalOpen} data={project} />}
    </>
  )
}


const Projects = () => {
  return (
    <div className='min-h-[60vh] w-screen relative z-10'>
      <div className='w-[95%] md:w-[90%] mx-auto mt-20 '>
        <h2 className='text-pink-600 text-2xl'>Work Showcase</h2>
        <p className='text-sm text-gray-400'>
          “Here’s a glimpse of the projects I’ve crafted with creativity, precision, and passion for problem-solving.”
        </p>

        <div className='flex flex-wrap mx-auto mt-20 justify-center'>
          {PROJECTS?.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
