import React from 'react'
import './profile.css'
function Sidenavbar() {
  return (
    <div>
        <div className="sidenav">
        <div className="profile">
            <img src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png" alt="" width="100" height="100" />

            <div className="name">
                ImDezCode
            </div>
            <div className="job">
                Web Developer
            </div>
        </div>

        <div className="sidenav-url">
            <div className="url">
                <a href="#profile" className="active">Profile</a>
                <hr align="center" />
            </div>
            <div className="url">
                <a href="#settings">Settings</a>
                <hr align="center" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Sidenavbar