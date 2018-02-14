import React from 'react';
import './LoginButton.css'

const LoginButton = props => {
  let currentUser = props.userData.currentUser;
  // let currentPass = props.userData.currentPass;
  let buttonText = null;
  let buttonIcon = "fa fa-user-o";
  
  if (!currentUser) {
    buttonText = "Login"
  } else {
    buttonText = "Logout " + currentUser
    buttonIcon = "fa fa-user"
  }

  function handleEvent(event) {
    // SHOULD BRING UP LOGIN MODAL
    // SHOULD INVOKE LOGIN OR LOGOUT FUNCTION DEPENDING ON STATE
    props.handleLogin("testUser", "testPass")
  }
  
  return (
    <div className="login-button-container">
      <div onClick={() => handleEvent()} className="login-button">{buttonText}</div>
      <i className={buttonIcon} aria-hidden="true"></i>
    </div>
  )
}

export default LoginButton;