import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import './home.css'
import {  faReact, faHtml5, faCss3, faJsSquare, faGitAlt, faPython } from '@fortawesome/free-brands-svg-icons'



const Home = () => {

  
  const typeRef = useRef(null)
  
  useEffect(() => {
   const type = new Typed(typeRef.current, {
    strings: ['Gandharva R', 'Front End Developer'],
    startDelay: 250,
    typeSpeed: 250,
    backDelay: 250,
    backSpeed: 250,
    smartBackspace: true,
    showCursor: false,
    loop: true,
   })
  })

  return (
    <>
        <main className='dark:text-green text-blue w-[95%] h-[100vh] mx-auto flex flex-col gap-4 lg:flex-row lg:gap-1 my-8'>
        
        <div className='left_box  px-6 sm:px-9 md:px-12 lg:px-16 lg:py-10 py-5 m-2 lg:w-[70%]'>
             <h5 className='text-wite text-3xl sm:text-3xl md:text-4xl'>Hi,</h5>
             <h1 className='text-wite text-4xl sm:text-5xl md:text-6xl'>I'm <span ref={typeRef} id="myElement" className='dark:text-green  text-blue text-4xl sm:text-5xl md:text-6xl'></span></h1>
            <p className='lg:text-2xl animate-bounce animation dark:text-green  text-blue my-3'>I am Web Developer and tech-obsessed currently looking for Front End position to work with the latest technologies and diverse projects</p>
            <p className='lg:text-2xl animate-bounce animation dark:text-green  text-blue' >I believe in CODE, ready to apply my passion for coding to a talented engineering team to develop quality solutions </p>
        </div>

        <div className='right m-2 p-8 lg:p-20'>
          <div className='cube relative'>
             <div className='face1 icon'>
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
             </div>
             <div className='face2 icon'>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
             </div>
             <div className='face3 icon'>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
             </div>
             <div className='face4 icon'>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
             </div>
             <div className='face5 icon'>
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
             </div>
             <div className='face6 icon'>
                <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
             </div>
          </div>
        </div>

        </main>
    </>
  )
}

export default Home
