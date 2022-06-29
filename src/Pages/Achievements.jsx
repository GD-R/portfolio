import React from 'react'
import Badge1 from '../assets/gt1.png'
import Badge2 from '../assets/gt2.png'


const Achievements = () => {
  return (
    <>
     <section className='w-full h-full p-4 my-8'>
       <div className='container flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start pb-8'>
     
       <div className='box1 w-[80%] lg:w-[45%]'>
            <h2 className='my-4 text-center font-extrabold text-2xl dark:text-green  text-blue'># Badges Earned for submitting GeekTrust Frond End Challenge</h2>
            <div className='badges  flex flex-col justify-center items-center'>
              <img className='w-full rounded-t' src={Badge1} alt="badge one"/>
              <img className='w-full rounded-b' src={Badge2} alt="badge one"/>
            </div>
        </div>

        <div className='box2 w-[80%] my-4 lg:w-[40%]'>
          <h2 className='text-center font-extrabold text-2xl dark:text-green  text-blue'># Python Automation</h2>
          <p className='my-4 text-lg dark:text-green  text-blue'>Having good understating of Python, last year working at CGI, I was able to automate manual tasks. Not just one task but was able to automate two different process using Pandas module. You can visit the code repository</p>
          <a href='https://github.com/GD-R/Python-SLA-Automation' target="_blank" className='dark:text-green  text-blue m-4 text-2xl font-extrabold underline'>SLA Automation</a>
          <a href='https://github.com/GD-R/Python-User-Validation' target="_blank" className='dark:text-green  text-blue text-2xl font-extrabold underline'>User List Automation</a>
        </div>
       </div>
     </section>
    </>
  )
}

export default Achievements
