import React from 'react'
import FreelancerCard from './FreelancerCard'
import ProjectCard from './ProjectCard'
import {Link} from 'react-router-dom'
function Cards() {
  
  return (
    <div>
        <Link to="/freelancing">
        <h1 style={{padding:'20px',color:'black'}} >Freelancer</h1></Link>
        <FreelancerCard />
        <Link to='/project'>
        <h1 style={{padding:'20px',color:'black'}}>Projects</h1></Link>
        <ProjectCard />
    </div>
  )
}

export default Cards