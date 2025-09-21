"use client"
import React, { useState } from 'react'
import "./gradient.css"
import BGIMG from "../public/images/bg1.png"
import SettingOpenSound from '../public/sounds/pop-up-on.mp3'
import useSound from 'use-sound'
import Setting from './Setting'

/// #121D2B"  0E1620
const HeaderBg = () => {

  let [play] = useSound(SettingOpenSound)

  const [bgGradient,setBgGradinet] = useState("star-night")
  const [isSettingPannel,setIsSettingPannel] = useState(false)

  const handelSettingPannel =()=>{
     play()
     navigator.vibrate(200)
     setIsSettingPannel(true)
  }

  return (
    <div className={`relative h-[60vh] ${bgGradient}`}>

      <div className='w-full absolute bottom-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#121D2B" fillOpacity="1" d="M0,64L15,74.7C30,85,60,107,90,138.7C120,171,150,213,180,197.3C210,181,240,107,270,90.7C300,75,330,117,360,122.7C390,128,420,96,450,90.7C480,85,510,107,540,138.7C570,171,600,213,630,218.7C660,224,690,192,720,170.7C750,149,780,139,810,112C840,85,870,43,900,42.7C930,43,960,85,990,96C1020,107,1050,85,1080,106.7C1110,128,1140,192,1170,186.7C1200,181,1230,107,1260,96C1290,85,1320,139,1350,149.3C1380,160,1410,128,1425,112L1440,96L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg>
      </div>

      <div className='w-full absolute bottom-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0E1620" fillOpacity="1" d="M0,0L30,37.3C60,75,120,149,180,154.7C240,160,300,96,360,96C420,96,480,160,540,160C600,160,660,96,720,112C780,128,840,224,900,229.3C960,235,1020,149,1080,106.7C1140,64,1200,64,1260,90.7C1320,117,1380,171,1410,197.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </div>

      <div className='w-full absolute bottom-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0D0F12" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,224C384,256,480,288,576,261.3C672,235,768,149,864,144C960,139,1056,213,1152,213.3C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

   <div className='w-[200px] h-[300px] absolute left-[20%] cursor-pointer top-[20%]'>
        <img src={BGIMG.src} className='h-full w-full object-cover drop-shadow-xl drop-shadow-gray-950'/>
        <i className="ri-settings-2-line text-white absolute bottom-[20%] right-0 hover:animate-spin" onClick={handelSettingPannel}></i>
    </div>

     {isSettingPannel && <Setting setBgGradinet={setBgGradinet} setIsSettingPannel={setIsSettingPannel}/>}
       
    </div>
  )
}

export default HeaderBg