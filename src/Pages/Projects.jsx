import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import Netflix from '../assets/netflix.png'
import Tee from '../assets/tee-rex.png'
import Admin from '../assets/admin.png'
import Resources from '../assets/resources.png'
import Dice from '../assets/dice.png'
import Book from '../assets/book.png'




const Projects = () => {

  const allProjects = [
    { name: "NetFlix Clone", img:Netflix, tags: ["#React", "#Redux", "#Context API", "#Router", "#FireBase", "#Tailwind"], demo:"https://react-netflix-clone-gd.netlify.app/", code:"https://github.com/GD-R/react-netflix-clone" },
    { name: "GeekTrust Challenge - Tee-Store", img:Tee, tags: ["#React", "#Redux", "#Context API", "#Router", "#Material UI", "#Tailwind"], demo:"https://react-teerex-store.netlify.app/", code:"https://github.com/GD-R/react_teeRex_store" },
    { name: "GeekTrust Challenge - Admin UI", img:Admin, tags: ["#React", "#Context API", "#Material UI", "#Tailwind"], demo:"https://react-admin-ui-gd.netlify.app/", code:"https://github.com/GD-R/react_admin_ui" },
    { name: "React Resources", img:Resources, tags: ["#React", "#API", "#Tailwind"], demo:"https://react-resources.netlify.app/", code:"https://github.com/GD-R/react-resources" },
    { name: "Dice Game", img:Dice, tags: ["#React","#Tailwind", "#Material UI"], demo:"https://react-tenzi.netlify.app/", code:"https://github.com/GD-R/react-dice" },
    { name: "Book Management App", img:Book, tags: ["#React", "#Context API", "#Tailwind", "#Material UI"], demo:"https://react-book-manage.netlify.app/", code:"https://github.com/GD-R/react-book-manage-app" },
  ]
   

  return (
    <>
      <section className='w-[90%] h-full dark:text-green text-blue mx-auto'>
      <div className='container text-center'>
     
       { allProjects.map((project, index) => {
        return(<ProjectCard key={index} project={project} />)
       }) 
        }
 
      </div>
        
      </section>
    </>
  )
}

export default Projects
