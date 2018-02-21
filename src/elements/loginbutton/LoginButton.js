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
    if (!currentUser) {
      let loginFieldsContainer = document.getElementById('login-fields-container')
      loginFieldsContainer.style.display = "block"
      props.handleLogin("testUser", "testPass")
    } else {
      props.handleLogout()
    }
  }
  
  return (
    <div className="login-element-container">
      <div className="login-fields-container" id="login-fields-container">
        <form className="login-fields">
          <input type="text" name="username" id="login-field-username" placeholder="username" className="login-field" />
          <input type="text" name="password" id="login-field-username" placeholder="password" className="login-field" />
        </form>
      </div>
      <div className="login-button-container">
        <div onClick={() => handleEvent()} className="login-button">{buttonText}</div>
        <i className={buttonIcon} aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default LoginButton;