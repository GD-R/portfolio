import React from 'react'
import { Outlet } from 'react-router-dom'
import Buttons from '../Components/Buttons'


const About = () => {
  return (
    <>
    <section className='dark:text-green text-blue w-[90%] h-[100vh] mx-auto p-4'>
     <div className='flex justify-center gap-4 flex-wrap'>
     
      <Buttons name="SKILLS"/>
      <Buttons name="ACHIEVEMENTS" />
      <Buttons name="EXPERIENCE"/>
      


     </div>
    
    
   
          
     <Outlet/>
    </section>
    
    </>
  )
}

export default About
