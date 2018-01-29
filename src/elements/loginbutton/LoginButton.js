import React from 'react';
import './LoginButton.css'

const LoginButton = props => {
  let current_user = props.userdata.current_user;
  let current_pw = props.userdata.current_user;
  let buttonText = null;
  let buttonIcon = "fa fa-user-o";
  
  if (!current_user) {
    buttonText = "Login"
  } else {
    buttonText = "Logout " + current_user
    buttonIcon = "fa fa-user"
  }

  function handleEvent(event) {
    // SHOULD BRING UP LOGIN MODAL
    // SHOULD INVOKE LOGIN OR LOGOUT FUNCTION DEPENDING ON STATE
    props.handleLogin("defaultUser", "newPass")
  }
  
  return (
    <div className="login-button-container">
      <div onClick={() => handleEvent()} className="login-button">{buttonText}</div>
      <i className={buttonIcon} aria-hidden="true"></i>
    </div>
  )
}

export default LoginButton;