import React,{useState,useEffect} from 'react'
import db from '../firebase-config'
import Header from '../Homepage/Header';
import {Link} from 'react-router-dom';
function FreelancerIndividual() {
  
    const [data, setdata] = useState([]);
    const [search, setsearch] = useState("");
      useEffect(() => {
        db.collection('freelancers').onSnapshot(
          snapshot =>{
            var testData=snapshot.docs.map(doc => ({id:doc.id,data:doc.data()}))
            setdata(testData)
            
          }
        );
      }, [])
  return (
    <div>
        <div className='Filter'>
            <Header />
            <div class="nav-bottom">
            
            <div class="col-3">
        	  <input class="effect-10" type="text" placeholder="search a freelancer" onInput={(e)=>{setsearch(e.target.value)}}  />
            <span class="focus-bg"></span>
            </div>
            </div>
            </div>
            <div className="profile-container" style={{marginTop:'17px'}}>
            {
                data.map((data,index)=>( 

                         (data.data.name.toLowerCase().includes(search)) ? (
                            <>
                            
                <div className="profile-card">
                    
                    <img src={data.data.photo} alt="image1" className="profile-icon" />
                <div className="profile-name" style={{fontSize:'15px'}}>{data.data.name}</div>
                    <div className="profile-position" >{data.data.jobtype}</div>
                    <br />
                    <Link to={`/freelancingprofile/${data.id}`}>
                <a href="#" className="button1">View</a></Link>
                </div>
            
                    
                    
                </>
                  ):(index==0) ? (
                        <>
                        <h2 style={{textAlign:'center',}}>Not Found</h2>
                        </>
                  ):(
                    null
                  )
                  
                  )
                  
                )
            }
            </div>
    </div>
  )
}

export default FreelancerIndividual