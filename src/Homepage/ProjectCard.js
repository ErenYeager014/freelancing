import React,{useEffect,useState}from 'react'
import db from '../firebase-config'
import {Link} from 'react-router-dom';
function ProjectCard() {
  const [projectData, setprojectData] = useState([]);
      useEffect(() => {
        db.collection('projects').onSnapshot(
          snapshot =>{
            setprojectData(snapshot.docs.map(doc => ({id:doc.id,data:doc.data()})))
          }
        );
          
        
      }, [])
      console.log(projectData);
  return (
    <div>
      <div className="profile-container">
      {projectData.map((data)=>(
        
        <div className="profile-card">
            
            <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/11/jujutsu-kaisen-satoru-gojo.jpg"
             alt="image1" className="profile-icon" />
        <div className="profile-name"style={{fontSize:'15px'}} >{data.data.ownername}</div>
            <div className="profile-position">{data.data.jobtype}</div>
            <br />
            <Link to={`/projectprofile/${data.id}`} > 
            <a href="#" className="button1">View</a>
            </Link>
        </div>
   
      
  
    
    
  
          
        
       
  ))
    }
     </div>
    </div>
  )
}

export default ProjectCard