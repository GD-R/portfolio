import React from 'react'
import Badge1 from '../assets/gt1.png'
import Badge2 from '../assets/gt2.png'


const Achievements = () => {
  return (
    <>
     <section className='w-full h-full p-4 my-8'>
       <div className='container flex flex-col justify-center items-center lg:flex-row lg:justify-between  pb-8'>
     
       <div className='box1 w-[80%] lg:w-[45%]'>
            <h2 className='my-4 text-center font-extrabold text-2xl dark:text-green  text-blue'># Badges Earned for submitting GeekTrust Frond End Challenge</h2>
            <div className='badges  flex flex-col justify-center items-center'>
              <img className='w-full rounded-t' src={Badge1} alt="badge one"/>
              <img className='w-full rounded-b' src={Badge2} alt="badge one"/>
            </div>
        </div>

        <div className='box2 w-[80%] my-4 lg:w-[40%]'>
          <h2 className='text-center font-extrabold text-2xl dark:text-green  text-blue'># Python Automation</h2>
          <p className='my-4 text-lg dark:text-green  text-blue'>Using Python pandas I was able to automate Validating list of user having access to the Server and Database at CGI</p>
         </div>
       </div>
     </section>
    </>
  )
}

export default Achievements
