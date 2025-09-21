"use client"
import React from 'react'
import SwichOnSound from "../public/sounds/switchon.mp3"
import useSound from 'use-sound'


const Navbar = () => {

     let [play] = useSound(SwichOnSound)
     
  return (
    <div className='fixed top-0 left-0 h-20 w-full backdrop-blur-lg bg-white/2  z-20 flex items-center justify-evenly'>
         <div>
              <h2 className='text-2xl text-blue-500 font-semibold'>Sarthak Navale</h2>
         </div>
         <div className='w-[40%] items-center gap-9 h-full flex text-gray-100 text-sm capitalize'>
            <span className='cursor-pointer'>About</span>
            <span className='cursor-pointer'>courses</span>
            <span className='cursor-pointer'>Projects</span>
            <span className='cursor-pointer'>Contact</span>
         </div>

          <div className='items-center gap-8 h-full flex text-gray-100'>
             {/* <span className='cursor-pointer animate-shrink' onClick={play}><i className="ri-volume-up-line"></i></span> */}
             <span className='cursor-pointer animate-shrink'><i className="ri-github-line" onClick={play}></i></span>
         </div>
    </div>
  )
}

export default Navbar