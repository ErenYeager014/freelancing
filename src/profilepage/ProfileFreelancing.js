import React, { useEffect ,useState} from 'react'
import Header from '../Homepage/Header';
import db from '../firebase-config';
import './profile.css';
function ProfileFreelancing({match}) {
    const [datastore, setdatastore] = useState(false);
  useEffect(() => {
          console.log(match.params.id);
          db.collection("freelancers").doc(match.params.id).get().then(doc => {
            if(doc.exists){
              console.log(doc.data())
              setdatastore(doc.data())
            }
          })
  }, [])
  return (
    <div>
        <Header />
        <div className="sidenav">
        <div className="profile">
            <img src={datastore.photo} alt="" width="100" height="100" />

            <div className="name">
                {datastore.name}
            </div>
            <div className="job">
                {datastore.jobtype}
            </div>
            <br />
            <hr />
            
        </div>
    </div>  
    <div className="main" >
        <h2>profile</h2>
        <div className="card1">
            <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>
                <table>
                    <tbody>
                        <tr>
                            <td>owner</td>
                            <td>:</td>
                            <td>{datastore.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>{datastore.email}</td>
                        </tr>
                        <tr>
                            <td>Expected pay</td>
                            <td>:</td>
                            <td>{datastore.pay_per_hr}/hr in inr</td>
                        </tr>
                        <tr>
                            <td>country</td>
                            <td>:</td>
                            <td>{datastore.country}</td>
                        </tr>
                        <tr>
                            <td>job Type</td>
                            <td>:</td>
                            <td>{datastore.jobtype}</td>
                        </tr>
                        <tr>
                            <td>Add on skills</td>
                            <td>:</td>
                            <td>{datastore.add_on_skills}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
        <div className='description'>
        <h2>Description</h2>
        <div className="card1">
            <div className="card-body">
            <h3>Description:</h3>
            <p style={{fontSize:'medium',}}>{datastore.DESCRIPTION_about_you}</p>
            </div>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default ProfileFreelancing