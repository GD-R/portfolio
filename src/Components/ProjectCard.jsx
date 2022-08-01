import React from 'react'


const ProjectCard = (props) => {
     
  const { project } = props


 
  return (
    <>
     
    <div className="p-4 w-[30rem]">
        <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-light dark:bg-dark rounded-lg shadow-2xl hover:scale-105 border border-wite">
            <img className="h-44 rounded-t-lg" alt="article image"
                src={project.img}/>
            <div className="px-6 pt-4 mb-2 text-xl font-bold">
                <span>{project?.name}</span>
            </div>

            <div className="px-6 py-2">
                {
                    project?.tags?.map((tag, index) => {
                            return(<p key={index} className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold dark:text-green text-blue bg-wite rounded-full">{tag}</p>)
                    })
                }
                
            </div>


            <div className="px-6 py-2 text-center">
            <a href={project.demo} target="_blank" className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold bg-blue dark:bg-green text-wite hover:bg-wite dark:hover:bg-wite hover:text-dark rounded-full">DEMO</a>
            <a href={project.code} target="_blank" className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold bg-blue dark:bg-green text-wite hover:bg-wite dark:hover:bg-wite hover:text-dark rounded-full">CODE</a>
            </div>
          
        </div>
    </div>
    


    </>
  )
}

export default ProjectCard
