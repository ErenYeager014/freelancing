import React,{useState,useEffect} from 'react'
import db from '../firebase-config';
import { auth } from '../firebase-config';
import firebase from 'firebase'
function Sendmessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
  return (
    <div>
        <div> 
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    
                    <input type="text" style={{ width: '85%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px',
                 }} placeholder="message..." onChange={e => setMsg(e.target.value)} />
                    <button type="submit" style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px',
                border: '1px solid #2962ff',
                padding: '8px 16px',
                borderRadius: '2px',
                textDecoration:' none',
                margin: '0 10px',
                fontWeight: 'bold',
                backgroundColor:' #2962ff',
                color:'white',
                cursor:' pointer',
                
                }}>Send</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Sendmessage