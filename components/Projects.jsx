"use client"
import React, { useState } from 'react'
import PROJECTS from '../utils/Projects'


const ProjectModal = () => {
  return (
    <div className='fixed z-[100000] top-0 left-0 overflow-hidden backdrop-blur-sm  h-screen w-screen flex items-center justify-center'>
      <div className='w-[95vw] md:w-[70vw] h-[70vh] md:h-[56vh] bg-gray-300 rounded-xl relative overflow-hidden p-3'>

      </div>
    </div>
  )
}



const ProjectCard = ({ project, rotate }) => {
  const [isProjectModal, setIsProjectModal] = useState(false)

  const transforms = [
    "rotate-2 scale-100",
    "-rotate-4 scale-105",
    "rotate-3 scale-95",
    "-rotate-6 scale-110",
    "rotate-8 scale-100"
  ];

  return (

    <div className={`h-[190px] w-[300px] bg-gray-700 text-white rounded-xl transition-transform duration-300 hover:scale-110 cursor-pointer shrink-0   shadow-2xl overflow-hidden ${transforms[Math.floor(Math.random() * transforms.length)]}`}>
      <img src={project.image_url} className='h-full w-full object-cover' />
    </div>
  )
}



const Projects = () => {



  return (
    <div className='h-screen w-screen relative z-10'>
      <div className='w-[95%] md:w-[90%] mx-auto mt-20 '>
        <h2 className='text-pink-600 text-2xl '>Work Showcase</h2>
        <p className='text-sm text-gray-400'>“Here’s a glimpse of the projects I’ve crafted with creativity, precision, and passion for problem-solving.”</p>

        <div className='flex whitespace-nowrap mx-auto mt-20 '>
          {


            PROJECTS?.map((project, index) => {
              return <ProjectCard key={index} project={project} index={index} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projects