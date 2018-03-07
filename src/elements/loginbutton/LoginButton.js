import React from 'react';
import './LoginButton.css'

const LoginButton = props => {
  let currentUser = props.userData.currentUser;
  // let currentPass = props.userData.currentPass;
  let buttonText = null;
  let buttonIcon = "";
  
  if (!currentUser) {
    buttonText = "Login"
  } else {
    buttonText = "Logout " + currentUser
    buttonIcon = ""
    // buttonIcon = "fa fa-user"
  }

  function handleEvent(event) {
    let loginFieldsContainer = document.getElementById('login-fields-container')
    let loginFieldUsername = document.getElementById('login-field-username').value
    let loginFieldPassword = document.getElementById('login-field-password').value
    
    if (currentUser) {
      document.getElementById('login-field-username').value = ""
      document.getElementById('login-field-password').value = ""
      props.handleLogout();
    }

    if (!currentUser) {
      loginFieldsContainer.style.display = "block"
      document.getElementsByClassName("login-button")[0].style.paddingBottom = "10px";
      // document.getElementsByClassName("login-button-container")[0].style.borderBottom = "5px solid #2f54eb";
    }

    if (!currentUser && loginFieldUsername && loginFieldPassword) {
      loginFieldsContainer.style.display = null
      document.getElementsByClassName("login-button")[0].style.paddingBottom = null;
      document.getElementsByClassName("login-button-container")[0].style.borderBottom = null;
      props.handleLogin(loginFieldUsername, loginFieldPassword)
    }
  }

  function handleClose(event) {
    let loginFieldsContainer = document.getElementById('login-fields-container')

    if (loginFieldsContainer.style.display) {
      document.getElementsByClassName("login-button")[0].style.paddingBottom = null;
      document.getElementsByClassName("login-button-container")[0].style.borderBottom = null;
      loginFieldsContainer.style.display = null;
    }
  }
  
  return (
    <div className="login-element-container">
      <div className="login-fields-container" id="login-fields-container">
        <div className="close-button-container">
          <i className="fa fa-caret-up close-button" aria-hidden="true" onClick={() => handleClose()}></i>
        </div>
        <form className="login-fields">
          <input type="text" name="username" id="login-field-username" placeholder="username" className="login-field" />
          <input type="password" name="password" id="login-field-password" placeholder="password" className="login-field" />
        </form>
      </div>
      <div onClick={() => handleEvent()} className="login-button-container">
        <div className="login-button">{buttonText}</div>
        <i className={buttonIcon} aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default LoginButton;