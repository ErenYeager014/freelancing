import React,{useEffect,useState}from 'react'
import Header from '../Homepage/Header'
import db from '../firebase-config';
import { useStateValue } from '../Stateprovider';
import Listblog from './Listblog';
function Blog() {
  const [title, settitle] = useState('');
  const [image_url, setimage_url] = useState('');
  const [tags, settags] = useState('');
  const [content, setcontent] = useState('');
  const[{user},dispatch]=useStateValue();
  return (
    <div >
      <Header />
      <div className='blog-form'>
        <form>
        <div className="col-3">
        	<input className="effect-10" type="text" placeholder="Title" required onInput={(e)=>{settitle(e.target.value)}} />
            <span className="focus-bg"></span>
        </div>
        <div className="col-3">
        	<input className="effect-10" type="text" placeholder="Image Url" required onInput={(e)=>{setimage_url(e.target.value)}}/>
            <span className="focus-bg"></span>
        </div>

        <div className="col-3">
        	<input className="effect-10" type="text" placeholder="tag" required onInput={(e)=>{settags(e.target.value)}}/>
            <span className="focus-bg"></span>
        </div>
        
        <textarea id="textarea-1" className="js-character-count" maxlength="100" aria-describedby="textarea-info-1" required placeholder='content' 
        onInput={(e)=>{
          setcontent(e.target.value)
        }}>

        </textarea>
        <button class="btn2" type='submit' onClick={
          (e)=>{
            e.preventDefault();
            db.collection('blogpost').add({
                name:user.displayName,
								email:user.email,
                photo:user.photoURL,
                imageUrl:image_url,
                blogcontent:content,
                blogtitle:title,
                tag:tags,
            }).then((reult)=>{
              alert("blog post");
            })
          }
        }>post</button>
        </form>
      </div>
      <Listblog />
    </div>
  )
}

export default Blog