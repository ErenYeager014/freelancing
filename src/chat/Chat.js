import React,{useEffect,useState,useRef} from 'react'
import db from '../firebase-config';
import { auth } from '../firebase-config';
import Header from '../Homepage/Header';
import Sendmessage from './Sendmessage';
function Chat() {
    const scroll = useRef();
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, []);
  return (
    <div>
        <Header />
        <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} className="imagechat"alt="" />
                            <p className='paragraph'>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Sendmessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
  )
}

export default Chat