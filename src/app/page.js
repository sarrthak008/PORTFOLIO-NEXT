import React from 'react'
import HeaderBg from '../../components/HeaderBg'
import Navbar from '../../components/Navbar'
import MyStory from '../../components/MyStory'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import SocialMedia from '../../components/SocialMedia'

const Page = () => {
  return (
    <>
       <Navbar/>
       <HeaderBg/>
       <MyStory/>
       <Skills/>
       <Projects/>
       <SocialMedia/>
    </>
  )
}

export default Page