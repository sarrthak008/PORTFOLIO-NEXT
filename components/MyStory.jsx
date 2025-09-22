import React from 'react'
import KEY from "../public/images/key1.png"

const MyStory = () => {

  
  return (
    <div className='w-screen min-h-[40vh] px-4 relative overflow-hidden'>

      <div className='w-[95%] md:w-[70%] mx-auto mt-20 '>
        <h2 className='text-pink-600 text-2xl '>My Story</h2>
        <p className='text-sm text-gray-400'>I am not that you think!</p>
        <p className='text-gray-400 text-sm md:text-xl mt-4 font-extralight'>Hii 👋 , My name is <span className='text-yellow-500 text-md md:text-2xl'>Sarthak Navale </span>. I m fullStack webdeveloper from India 🇮🇳 . I enjoy learning new skills and keeping up with the latest trends in technology to deliver great projects</p>
      </div>

      <div className='w-[95%] md:w-[70%] mx-auto mt-10 mb-4'>
        <h2 className='text-pink-600 text-2xl '>My Interest</h2>
        <p className='text-sm text-gray-400'>I am not that you think!</p>
        <p className='text-gray-400 text-sm md:text-xl mt-4 font-extralight'>I started my web development journey in 12th using just my mobile phone. I learned the basics of coding with HTML, CSS, and JavaScript. Now, I am comfortable working with Node.js, React, tailwind, and MongoDB & lot of allowing me to build dynamic and responsive applications. I enjoy tackling new challenges and continuing to grow as a developer.</p>
      </div>

      <div className='w-[100%] md:w-[50%] h-[100%]  absolute bottom-0 right-[0%] -z-10'>
          <img src={KEY.src} className='h-full w-full object-cover img-low'/>
      </div>

    </div>
  )
}

export default MyStory