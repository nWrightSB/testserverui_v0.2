import React from 'react';
import './LoginButton.css'

const LoginButton = props => {
  let buttonText = props.text;
  
  function handleEvent(event) {
    console.log('login please!')
    // decides whether or not to call API to login (does username/pass exist?), returns to be rendered either a user display object, or
    // a login module
  }
  
  return (
    <div className="login-button-container">
      <div onClick={() => handleEvent()} className="login-button">{buttonText}</div>
      <i className="fa fa-user-o" aria-hidden="true"></i>
    </div>
  )
}

export default LoginButton;