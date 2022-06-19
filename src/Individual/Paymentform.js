import React ,{useEffect,useState}from 'react'
import db from '../firebase-config';
function Paymentform() {
  const [name, setname] = useState('');
  const [mail, setmail] = useState('');
  const [acc_no, setacc_no] = useState('');
  const [sendingacc, setsendingacc] = useState('');
  const [amount, setamount] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    db.collection("payment").add({
      name: name,
      mail: mail,
      acc_no:acc_no,
      sending_acc: sendingacc,
      amount: amount
    })
    setname("")
    setmail("")
    setacc_no("")
    setsendingacc("")
    setamount("")
    alert("request sent")
  }
  return (
    <div>
            <div className="container">  
  <form onSubmit={e => handleSubmit(e)} id="contact">
    <h3>Payment</h3>
    <h4>Make payment in this form</h4>
    <fieldset>
      <input placeholder="Name" type="text" tabindex="1" required autofocus onInput={(e)=>{setname(e.target.value)}}/>
    </fieldset>
    <fieldset>
      <input placeholder="receiver  Email Address" type="email" tabindex="2" required onInput={(e)=>{setmail(e.target.value)}}/>
    </fieldset>
    <fieldset>
      <input placeholder="A/c No." type="text" tabindex="3" required onInput={(e)=>{setacc_no(e.target.value)}}/>
    </fieldset>
    <fieldset>
      <input placeholder=" Sending A/c No." type="text" tabindex="4" required onInput={(e)=>{setsendingacc(e.target.value)}}/>
    </fieldset>
    <fieldset>
      <input placeholder="amount" type="text" tabindex="4" required onInput={(e)=>{setamount(e.target.value)}}/>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" 
      >Pay</button>
    </fieldset>
  </form>
 
  
</div>
    </div>
  )
}

export default Paymentform