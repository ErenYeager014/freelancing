import React,{useEffect, useState}from 'react'
import db from '../firebase-config';
import { useStateValue } from '../Stateprovider';
import firebase from 'firebase';
import Header from '../Homepage/Header';
function Addfreelancer() {
	const[{user},dispatch]=useStateValue();
	const [jopType, setjopType] = useState("");
	const [pay, setpay] = useState(0);
	const [country, setcountry] = useState('');
	const [extraskills, setextraskills] = useState('');
	const [Description, setDescription] = useState("");
	const [userinfo, setuserinfo] = useState({
		name:user.displayName,
		email:user.email,
	});
	const [freelacingvalue, setfreelacingvalue] = useState('')
	useEffect(() => {
		db.collection('freelancers').onSnapshot(
			snapshot =>{
			  var testData=snapshot.docs.map(doc => ({id:doc.id,data:doc.data()}))
			  setfreelacingvalue(testData.filter((value)=>{
				  return (value.data.email===user.email)
			  }))
			}
		  );
	}, [])
  return (
    <div className='Addfreelancing'>
		<Header />
        <div className="wrapper2">
	<div className="registration_form">
		<div className="title">
			Add freeLancer
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
					<label for="country">country</label>
					<input type="text" onInput={(e)=>{setcountry(e.target.value)}} id="country"/>
				</div>
				<div className="input_wrap">
					<label for="skills">Add on skills</label>
					<textarea id='skills' rows="5" cols="50" onInput={(e)=>{setextraskills(e.target.value)}}></textarea>
				</div>
        
				<div className="input_wrap">
					<label for="Description">Description about you</label>
					<textarea id='Description' rows="5" cols="50" onInput={(e)=>{setDescription(e.target.value)}} ></textarea>
				</div>
				<div className="input_wrap">
					<input type="submit" value="Post" className="submit_btn" style={{backgroundColor:'#c20c58',color:'black'}} onClick={(e)=>{
						e.preventDefault();
						if(freelacingvalue.length == 0){
						db.collection('freelancers').add(
							{
								name:user.displayName,
								email:user.email,
								jobtype:jopType,
								pay_per_hr:pay,
								country:country,
								add_on_skills:extraskills,
								photo:user.photoURL,
								DESCRIPTION_about_you:Description,
								timestamp:firebase.firestore.FieldValue.serverTimestamp(),
							});
						}else{
							alert('you are already developer');
						}
					}}/>
				</div>
			</div>
		</form>
	</div>
</div>
    </div>
  )
}

export default Addfreelancer