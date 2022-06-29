import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactInfo = () => {

 const formRef = useRef();

 const sendEmail = async(event) => {
    event.preventDefault();
    try {
       await emailjs.sendForm("service_1ejbsbp", "template_ur75r72", formRef.current, "46_HIhdFF6Izw25PL");
       formRef.current.reset();
       alert("Message sent successfully")
      
    }
    catch(error) {
        alert("Failed, Please try again OR contact via Phone/Gmail/Linkedin")
        console.log(error.message);
        formRef.current.reset();
    }
 }

  return (
    <>
      {/* <!-- component --> */}
<section id="contact">



{/* <!-- wrapper --> */}
<div className="relative p-5 flex flex-col md:flex-row justify-around items-center">

  
    
    {/* <!-- Contact Me --> */}
    
    <form onSubmit={sendEmail} ref={formRef} className=" border border-wite p-6 bg-light dark:bg-dark">
    <h3 className="text-2xl pb-3 font-semibold text-center">
        Get In Touch
    </h3>
    <div className='contact my-4 flex flex-col md:flex-row justify-between gap-4'>
        <h5 className='dark:text-green  text-blue'>Call/WhatsApp: <span className='font-extrabold'>9632180999</span></h5>
        <h5 className='dark:text-green  text-blue'>Gmail: <span className='font-extrabold'>grgandharvar@gmail.com</span></h5>
    </div>
    <h5 className='dark:text-green text-blue font-bold text-center'>OR</h5>
    <div>
        <div className="flex flex-col mb-3">
        <label for="name">Name</label>
        <input 
            required
            type="text" name="name" 
            className="px-3 py-2 bg-blue dark:bg-green text-wite focus:outline-none"
            autocomplete="off"
        />
        </div>
        <div className="flex flex-col mb-3">
        <label for="email">Your Email</label>
        <input 
            required
            type="email" name="email" 
            className="px-3 py-2 bg-blue dark:bg-green text-wite focus:outline-none"
            autocomplete="off"
        />
        </div>
        <div className="flex flex-col mb-3">
        <label for="message">Message</label>
        <textarea 
            required
            rows="4" name="message" 
            className="px-3 py-2 bg-blue dark:bg-green text-wite focus:outline-none"
        ></textarea>
        </div>
    </div>
    <div className="w-full pt-3">
        <button type="submit" className="w-full  bg-blue dark:bg-green text-wite px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-wite dark:hover:bg-wite hover:text-dark text-xl cursor-pointer">
        Send
        </button>
    </div>
    
    </form>

      {/* <!-- Social Media --> */}

      <div className="  p-5 ">
    <div className="bg-light dark:bg-dark border border-wite  h-full p-5">
        <h3 className="text-2xl font-semibold mb-5 dark:text-green  text-blue">
        My Social Media
        </h3>
        {/* <!-- list --> */}
        <div className="flex flex-col gap-3">
        <a href="https://github.com/GD-R" target="_blank" className="flex items-center dark:text-green  text-blue hover:bg-wite p-2">
            <svg fill="currentColor" className="w-6 h-6 m-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Github
        </a>
        <a href="https://www.linkedin.com/in/gandharva-ravi-913a6b221/" target="_blank" className="flex items-center dark:text-green  text-blue hover:bg-wite p-2">
            <svg fill="currentColor" className="w-6 h-6 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
            <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"/>
            </svg>
            Linkedin
        </a>
        
        
       
        </div>
    </div>
    </div>


</div>
</section>
    </>
  )
}

export default ContactInfo
