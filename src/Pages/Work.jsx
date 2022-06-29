import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useAppContext } from '../Context/ContextProvider';
import Cgi from '../Components/Cgi';
import Accenture from '../Components/Accenture';
import Dxc from '../Components/Dxc';
import Vtu from '../Components/Vtu';


const Work = () => {
 
  const { allStates: { colorTheme } } = useAppContext();

  return (
    <>
  <section className='w-full h-full'>
     <div className='container'>
     <VerticalTimeline lineColor={colorTheme==="dark" ? "#1F4287" : "#278EA5"}>
       
       <VerticalTimelineElement  className="vertical-timeline-element--work" date='2019 - Present' icon={<Cgi/>}  iconStyle={{ backgroundColor:"white"  }}  contentStyle={{background: colorTheme==="dark" ? "#278EA5" : "#1F4287", color:"#EDF5E1"}}  >
            <h3 className='text-3xl text-center'>CGI</h3>
            <h4 className='text-2xl font-bold'>Senior Associate</h4>
            <p>Part of User Access team, responsible to grant DevOps team members access to required Servers and Databases. And <span className='font-extrabold underline'>Developed</span> Python programme to automate user validation</p>
            <p>Creating SLA reports for Clients on monthly bases to keep the issues updated. I was able to <span className='font-extrabold underline'>automate</span> this process using Python Pandas</p>
            <p>Training and Assisting team members to follow the right process </p>
            
       </VerticalTimelineElement>

       <VerticalTimelineElement  className="vertical-timeline-element--work" date='2018 - 2019' icon={<Accenture/>}  iconStyle={{ backgroundColor:"white" }}  contentStyle={{background: colorTheme==="dark" ? "#278EA5" : "#1F4287", color:"#EDF5E1"}} >
       <h3 className='text-3xl text-center'>Accenture</h3>
        <h4 className='text-2xl font-bold'>PMO</h4>
        <p>Creating Metadata and WireFrame to facilitate Development team</p>
        <p>Testing Components of actuals and estimates tools.</p>
        <p>Analyze data to create Estimation and Calibration work sheet to estimate the Project efforts</p>
       </VerticalTimelineElement>

       <VerticalTimelineElement  className="vertical-timeline-element--work" date='2016 - 2018' icon={<Dxc/>}  iconStyle={{ backgroundColor:"white" }}  contentStyle={{background: colorTheme==="dark" ? "#278EA5" : "#1F4287", color:"#EDF5E1"}} >
            <h3 className='text-3xl text-center'>DXC</h3>
            <h4 className='text-2xl font-bold'>PMO</h4>
            <p>Resource allocation for Banking Project (CIBC)</p>
            <p>Successfully proposed and implemented change and Routine Template that reduced hassles in workflows</p>
            <p>Consistently monitored workflow and realign timeline to manage resources and capacity planning for the projects</p>
       </VerticalTimelineElement>


       <VerticalTimelineElement  className="vertical-timeline-element--education" date='2012 - 2016' icon={<Vtu/>}  iconStyle={{ backgroundColor:"white" }}  contentStyle={{background: colorTheme==="dark" ? "#278EA5" : "#1F4287", color:"#EDF5E1"}} >
            <h3 className='text-3xl text-center'>Degree</h3>
            <h4 className='text-xl font-bold'>B.E. – Computer Science Engineering</h4>
            <p>AMC Engineering College under VTU</p>
       </VerticalTimelineElement>



     </VerticalTimeline>
         
     </div>
  </section>
    </>
  )
}

export default Work
