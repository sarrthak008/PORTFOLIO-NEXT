"use client";
import React from "react";
import SCOIAL from "../public/images/social.png"
import SOCIAL_MEDIA_ACCOUNTS from "../utils/SocialMedia";


const SocialMedia = () => {
  return (
    <div className='w-screen min-h-[50vh] px-4 relative overflow-hidden'>

      <div className="w-[90%] md:w-[70%] mx-auto mt-5">
        <h2 className='text-pink-600 text-2xl'>Connect With Me</h2>
        <p className='text-sm text-gray-400'>
          “Follow me on social media to stay updated on my latest projects, insights, and creative work”
        </p>
      </div>

      <div className="flex w-[100%] md:w-[70%] flex-wrap mx-auto gap-5 mt-10">
         {
          SOCIAL_MEDIA_ACCOUNTS.map((media,index)=>(
            <div className=" border-gray-300  text-white border px-6 py-1 cursor-pointer" key={index} >
              <a href={media.url} target="_blank" rel="noopener noreferrer"><span> <i className={media.logo}></i>{media.name}</span></a>
            </div>
          ))
         }
      </div>

      <div className='w-[100%] h-[100%]  absolute bottom-0 right-[0%] -z-10'>
        <img src={SCOIAL.src} className='h-full w-full object-cover img-low' />
      </div>

    </div>
  )
};

export default SocialMedia;
