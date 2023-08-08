import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/l2.png'
import Logo2 from '../assets/l1.png'
import Menu from '../assets/menu.svg'
import MoonLight from '../assets/light.svg'
import MoonDark from '../assets/dark.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Drawer } from '@mantine/core';
import { useAppContext } from '../Context/ContextProvider'


 

const Navbar = (props) => {
 
   
    const { allStates: { colorTheme,setTheme } } = useAppContext();

    const [drawer, setDrawer] = useState(false);
    
    const navigate = useNavigate();

  return (
    <div className='navbar w-full flex justify-around items-center h-28'>
      
    <div className='navbar_left'>
       <div className='mobile_left md:hidden cursor-pointer' onClick={() => setDrawer(true)}>
          {/* <FontAwesomeIcon icon={faBars} size="2x"   /> */}
          <img src={Menu} alt="img" className='w-full rounded-lg'/>
       </div>

       <div className='left hidden md:block w-28 cursor-pointer' onClick={() => navigate('/')}>
          <img src={colorTheme === "dark"? Logo2 : Logo} alt="img" className='w-full rounded-lg'/>
       </div>
    </div>

    <div className='navbar_center'>

       <div className='mobile_center py-2 w-36 md:hidden cursor-pointer' onClick={() => navigate('/')}>
          <img src={colorTheme === "dark"? Logo2 : Logo} alt="img" className='w-full rounded-lg'/>
       </div>
       
       <div className='cen_ter hidden md:flex md:gap-12 flex-1'>
        <div className='w-full'> <NavLink to={"/about"}><button className='  w-full py-6 px-5 text-lg font-extrabold font-Philosopher dark:text-green  text-blue'>ABOUT</button></NavLink></div> 
         <div className='w-full'><NavLink to={"/projects"}><button className=' w-full py-6 px-5 text-lg font-extrabold font-Philosopher dark:text-green  text-blue ' >PROJECTS</button></NavLink></div> 
         <div className='w-full'><NavLink to={"/contact"}><button className='  w-full py-6 px-5 text-lg font-extrabold font-Philosopher dark:text-green  text-blue' >CONTACT</button></NavLink></div> 
       </div>

    </div>


    <div className='navbar_right'>

      
      

    </div>

    <Drawer opened={drawer} onClose={() => setDrawer(false)} position="top" >
            <div className='bg-light dark:bg-dark h-full flex flex-col items-center w-full'>
            <div className='w-full'><NavLink to={"/about"}><button className=' py-6 px-5 w-full text-lg font-Philosopher hover:bg-dark dark:hover:bg-light hover:text-green dark:hover:text-blue  dark:text-green text-blue'>ABOUT</button></NavLink></div>
            <div className='w-full'><NavLink to={"/projects"}><button className=' py-6 px-5 w-full text-lg font-Philosopher hover:bg-dark dark:hover:bg-light hover:text-green dark:hover:text-blue  dark:text-green text-blue' >PROJECTS</button></NavLink></div>
            <div className='w-full'><NavLink to={"/contact"}><button className=' py-6 px-5 w-full text-lg font-Philosopher hover:bg-dark dark:hover:bg-light hover:text-green dark:hover:text-blue  dark:text-green text-blue' >CONTACT</button></NavLink></div>
            </div>
          </Drawer>
    </div>
  )
}

export default Navbar
