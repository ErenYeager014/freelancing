import React,{useState,useEffect} from 'react'
import db from '../firebase-config';
import Header from '../Homepage/Header';
import { useStateValue } from '../Stateprovider';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
function Profileproject({match}) {
    const[{user},dispatch]=useStateValue();
    const [data, setdata] = useState();
    const [freelancer, setfreelancer] = useState([]);
    useEffect(() => {
        db.collection('projects').onSnapshot(
            snapshot =>{
                var testData=snapshot.docs.map(doc => ({id:doc.id,data:doc.data()}))
              setdata(testData.filter((data)=>{
                return (match.params.id==data.id)
            }))
            }
          );
          db.collection('freelancers').onSnapshot(
            snapshot =>{
                var testData=snapshot.docs.map(doc => ({id:doc.id,data:doc.data()}))
                  
                  setfreelancer(testData.filter((data)=>{
                    return (user.email== data.data.email)
                }))
            }
          );
        
    }, [])


    
  return (
      
    <div>
        <Header />
        <div className="sidenav">
        <div className="profile">
            <img  src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/11/jujutsu-kaisen-satoru-gojo.jpg" alt="" width="100" height="100" />
        <div>
{
(data && data?.length>0)  ? <><div className="name">{data[0]?.data?.ownername}</div> 
        <div className="job">
        <div className="job">
                {data[0]?.data?.jobtype}
            </div>    
            </div>
             {!data[0]?.data?.demolish && (!data[0].data.worker) ? (

                 (user?.email===data[0]?.data?.email)? (
                    <div class="url">
                    <a href="#settings" onClick={(e)=>{
                        db.collection('projects').doc(match.params.id).update(
                            {
                                demolish:true 
                            }
                        ).then((result)=>{
                            console.log('document send successfuly');
                        })
   
                }}>Demolish</a>
                    <hr align="center" />
                </div>
                
            ):(
                <div class="sidenav-url">
                    <div class="url">
            
                <a href="#profile" class="" onClick={(e)=>{
                        if(freelancer.length>0){
                            let checkedvalue=data[0]?.data?.request.filter((value)=>{
                                return (freelancer[0]?.data?.email===value?.data?.email);
                            })
                           if(checkedvalue.length==0){
                               db.collection('projects').doc(match.params.id).update({
                                request:firebase.firestore.FieldValue.arrayUnion(freelancer[0]?.data)
                               }).then(()=>{
                                   console.log("value updated");
                               })
                           } 
                        }
                }}>Apply</a>
                <hr align="center" />
                </div>
                </div>
            )
             ):(
                <>
                    <div>This project is already taken or demolish</div>
                    <div class="url">
                    {(user?.email===data[0]?.data?.email)? (
                    <a href="#settings"><Link to="/payment">Payment</Link></a>
                    ):(null)}
                    <hr align="center" />
                    </div>
                </>
                
            
            )
             }
            </>  : <div>----</div>
            }
           
</div>
     
        </div>
    </div>  
    <div className="main" >
        <h2>profile</h2>
        <div className="card1">
            <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>
                <table>
                {
                data && data?.length>0 ? (
                    <tbody>
                        <tr>
                            <td>owner</td>
                            <td>:</td>
                            <td>{data[0]?.data?.ownername}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>{data[0]?.data?.email}</td>
                        </tr>
                        <tr>
                            <td>Expected pay</td>
                            <td>:</td>
                            <td>{data[0]?.data?.pay}/hr in inr</td>
                        </tr>
                        <tr>
                            <td>submission</td>
                            <td>:</td>
                            <td>{data[0]?.data?.subbmission}</td>
                        </tr>
                        
                    </tbody>
                ):(
                    <div>----</div>
                )}
                </table>
            </div>
        </div>
        <div className='description'>
        <h2>Description and Requirement</h2>
        {
                data && data?.length>0 ? (
                    <>
        <div className="card1">
            <div className="card-body">
            <h3>Description:</h3>
            <p style={{fontSize:'medium',}}>{data[0]?.data?.Description}</p>
            </div>
            </div>
            <div className="card1">
            <div className="card-body">
            <h3>Requirement:</h3>
            <p style={{fontSize:'medium',}}>{data[0]?.data?.reqirement}</p>
            </div>
            </div>
            </>):(
                <>
                <div>----</div>
                </>
            )}
            {  data && data?.length>0 ?(

                ((user?.email===data[0]?.data?.email) && (!data[0]?.data?.demolish && (!data[0].data.worker)))?(
                <>
            <h3>request</h3>
            <br />
            
                    {(data[0]?.data?.request.length > 0) ? (
                        
                        (data[0]?.data?.request.map((value)=>{
                            
                            return (
            <div className="profile-container">
                <div className="profile-card">
                    <img src={value.photo} alt="image1" className="profile-icon" />
                <div className="profile-name">{value.name}</div>
                    <div className="profile-position">{value.jobtype}</div>
                    <div className="profile-position">{value.pay}</div>
                <a href="#" className="button1" 
                onClick={(e)=>{
                        db.collection('projects').doc(match.params.id).update({
                                    worker:value
                        })
                }}>Accept</a>
                
            </div>
            </div>)
            
            }))
            ):(
                <div>Request not yet comes</div>
            )}
            <br />
            
            </>
                ):(
                <>
            <h3>worker</h3>
            <br />
            {!data[0].data.worker ? (<><div>Worker is not assigned</div></>):(
            <div className="profile-container">
                <div className="profile-card">
                    
                    <img src={data[0].data.worker.photo} alt="image1" className="profile-icon" />
                <div className="profile-name">{data[0].data.worker.name}</div>
                    <div className="profile-position">{data[0].data.worker.jobtype}</div>
                    <div className="profile-position">pay:{data[0].data.worker.pay_per_hr}</div>
                </div>
            </div>
            )}
            </>
            )):(
                <div>not found</div>
            )
            }           
            <br />
            </div>
            </div>
    </div>
  )
}

export default Profileproject;