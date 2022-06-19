import React, { useState } from 'react'

import {auth,provider} from './firebase-config'
import { useStateValue } from './Stateprovider';
import { actionTypes } from './Reducer';
function Login() {
  const[state,dispatch]=useStateValue();

  const signIn=()=>{
      auth.signInWithPopup(provider)
      .then((result)=>{
        console.log(result.user)
        dispatch({
          type:actionTypes.SET_USER,
          user:result.user,
        })
      }).catch((err)=>{
        console.log(err);
      })
  }
  return (
    <div>
        <div className="navbar">
            <div className="logo">
                <h1>Login</h1>
            </div>
        </div>
        <div className='wrapper'>
        <div id="window">
          
          <button id="LoginBtn" onClick={signIn} type="submit"> Login with Google </button>
          <br />
          <br />
          <br />
  
        </div>
        </div>
   
      </div>

  )
}

export default Login;