import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{marginTop:'10px'}}>
        <footer class="site-footer">
      <div class="container2" >
        <div class="row2" style={{display:'flex',flexDirection:'row'}}>
          <div class="col-sm-12 col-md-6"style={{width:'60%'}}>
            <h6 style={{paddingLeft:'20px'}}>About</h6>
            <p class="text-justify" style={{padding:'20px'}}>This is the web like fiverr,upworks,like web site to provide freelancing to every
            consumer and the freelancer for their benefits</p>
          </div>

          <div class="col-xs-6 col-md-3"style={{width:'20%'}}>
            <h6>Bulid on</h6>
            <ul class="footer-links">
              <li><a href="https://www.w3schools.com/css/">Css</a></li>
              <li><a href="https://firebase.google.com/docs/firestore">firebase</a></li>
              <li><a href="https://devdocs.io/javascript/">Javascript</a></li>
              <li><a href="https://reactjs.org/docs/getting-started.html">React.js</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3" style={{width:'20%'}}>
            <h6>links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/"><Link to="/blogposts">Blog</Link></a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Storage Saved</a></li>
              <li><a href="http://scanfcode.com/sitemap/"><Link to="/chatbox">Chat</Link></a></li>
            </ul>
          </div>
        </div>
        <br />
        <hr/>
        
      </div>
      <div class="container2">
        <div class="row2">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div>
          </div>
      </div>
      </footer>
  </div>
  )
}

export default Footer