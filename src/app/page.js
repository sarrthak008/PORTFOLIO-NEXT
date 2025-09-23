import React from 'react'
import HeaderBg from '../../components/HeaderBg'
import Navbar from '../../components/Navbar'
import MyStory from '../../components/MyStory'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'

const Page = () => {
  return (
    <>
       <Navbar/>
       <HeaderBg/>
       <MyStory/>
       <Skills/>
       <Projects/>
    </>
  )
}

export default Page