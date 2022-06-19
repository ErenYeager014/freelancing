import React,{useEffect,useState} from 'react'
import db from '../firebase-config';
function Listblog() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    db.collection('blogpost').onSnapshot(
      snapshot =>{
        setdata(snapshot.docs.map(doc => ({id:doc.id,data:doc.data()})))
      }
    );
  }, [])
  console.log(data,'outer');
  return (
    <div>
      <div style={{
        width: '100%',
        height: '100vh',
        padding: '0px',
        margin: '0px',
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        
      }}>
        {  data && data?.length>0 ? (
        
        data.map((value)=>{
          return (
            <div class="card2">
            <div class="card-left">
                <div class="card-img"><img src={value.data.imageUrl}/></div>
            </div>
            <div class="card-right">
                <div class="card-title fw-7">{value.data.blogtitle}</div>
                <div class="card-text fw-5">{value.data.blogcontent}</div>
                <div class="card-right-body">
                    <div class="card-rb-1">
                        <img src={value.data.photo} alt="" />
                    </div>
                    <div class="card-rb-2">
                        <div class="card-rb-2-title fw-7" >{value.data.name}</div>
                        <div class="card-rb-2-text fw-5">{value.data.email}</div>
                    </div>
                  </div>
            </div>  
            </div>
          )
        })
       ):(
         <h2>data is not yet comes</h2>
       )}
          </div>
          <br />
          <br />
    </div>
  )
}

export default Listblog