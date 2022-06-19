import React,{useState}from 'react'
import db from '../firebase-config';
import { useStateValue } from '../Stateprovider';
import firebase from 'firebase';
import Header from '../Homepage/Header';
function Postproject() {
	const[{user},dispatch]=useStateValue();
	const [jopType, setjopType] = useState("");
	const [pay, setpay] = useState(0);
	const [subbmission, setsubmission] = useState('');
	const [reqirement, setrequirement] = useState('');
	const [Description, setDescription] = useState("");
	
  return (
    <div className='Addfreelancing'>
		<Header />
        <div className="wrapper2">
	<div className="registration_form">
		<div className="title">
			Job posting
		</div>
		<form>
			<div className="form_wrap">
				<div className="input_grp">
					<div className="input_wrap">
						<label for="fname">Job Type</label>
						<input type="text" id="fname" onInput={(e)=>{setjopType(e.target.value)}}/>
					</div>
					<div className="input_wrap">
					<label for="pay">Expected pay/hour</label>
					<input id="pay" type="number" onInput={(e)=>{setpay(e.target.value)}}style={{width:'150px',
          height:'40px'}}/>
				</div>
				</div>
				<div className="input_wrap">
					<label for="country">submission</label>
					<input type="text" onInput={(e)=>{setsubmission(e.target.value)}} id="country"/>
				</div>
				<div className="input_wrap">
					<label for="skills">Requirement</label>
					<textarea id='skills' rows="5" cols="50" onInput={(e)=>{setrequirement(e.target.value)}}></textarea>
				</div>
        
				<div className="input_wrap">
					<label for="Description">Description</label>
					<textarea id='Description' rows="5" cols="50" onInput={(e)=>{setDescription(e.target.value)}} ></textarea>
				</div>
				<div className="input_wrap">
					<input type="submit" value="Post" className="submit_btn" style={{backgroundColor:'#c20c58',color:'black'}} onClick={(e)=>{
							e.preventDefault();
		
							db.collection('projects').add(
								{
									ownername:user.displayName,
									email:user.email,
									jobtype:jopType,
									pay:pay,
									subbmission:subbmission,
									reqirement:reqirement,
									Description:Description,
									request:[],
									workerName:{},
									demolish:false,
									timestamp:firebase.firestore.FieldValue.serverTimestamp(),
								});
					}}/>
				</div>
			</div>
		</form>
	</div>
</div>
    </div>
  )
}

export default Postproject;