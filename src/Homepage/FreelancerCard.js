import React,{useEffect,useState} from 'react'
import db from '../firebase-config'
import {Link} from 'react-router-dom';
function FreelancerCard() {
      const [data, setdata] = useState([]);
      useEffect(() => {
        db.collection('freelancers').onSnapshot(
          snapshot =>{
            setdata(snapshot.docs.map(doc => ({id:doc.id,data:doc.data()})))
          }
        );
          
        
      }, [])
      console.log(data);
  return (
    <>
    <div className='card-main' >
      <div className="profile-container">
      {data.map((data)=>(

        <>
        
                <div className="profile-card">
                    
                <img src={data.data.photo} alt="image1" className="profile-icon" />
                <div className="profile-name" style={{fontSize:'15px'}}>{data.data.name}</div>
                    <div className="profile-position">{data.data.jobtype}</div>
                    <br />
                    <Link to={`/freelancingprofile/${data.id}`}>
                      <a href="#" className="button1">View</a>
                      </Link>
                     
                </div>
            
  
    </>
      ))
      
      
    }
    </div>
    </div>
    <br />
    </>
  )
}

export default FreelancerCard