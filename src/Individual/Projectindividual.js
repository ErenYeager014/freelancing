import React,{useState,useEffect} from 'react'
import db from '../firebase-config'
import Header from '../Homepage/Header';
import {Link} from 'react-router-dom';
function Projectindividual() {
    const [data, setdata] = useState([]);
        const [search, setsearch] = useState("");
      useEffect(() => {
        db.collection('projects').onSnapshot(
          snapshot =>{
            var testData=snapshot.docs.map(doc => ({id:doc.id,data:doc.data()}))
            setdata(testData)
          }
        );
      }, [])
      console.log(data,'datavalue');
  return (
    <div>
        <div className='Filter'>
            <Header />
            <div class="nav-bottom">
            
            <div class="col-3">
        	<input class="effect-10" type="text" placeholder="search owner name" onInput={(e)=>{setsearch(e.target.value)}}  />
            <span class="focus-bg"></span>
            </div>
            </div>
            </div>
            <div className="profile-container" style={{marginTop:'10px'}}>
            {
                data.map((res,index)=>( 

                         (res.data.ownername.toLowerCase().includes(search)) ? (
                            <>
                             <div className="profile-card">
                    
                    <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/11/jujutsu-kaisen-satoru-gojo.jpg" alt="image1" className="profile-icon" />
                <div className="profile-name" style={{fontSize:'15px'}}>{res.data.ownername}</div>
                    <div className="profile-position" >{res.data.jobtype}</div>
                    <br />
                    <Link to={`/projectprofile/${res.id}`} >
                <a href="#" className="button1">View</a></Link>
                </div>
                          
                </>
                  ):(index==0) ? (
                    <>
                    <h2 style={{textAlign:'center'}}>Not Found</h2>
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

export default Projectindividual