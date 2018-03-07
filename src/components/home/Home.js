import React from 'react';
import './home.css'

const Home = props => {
  let loginMessage = "Please login above to begin"
  let userData = props.userData
  
  if (userData.currentUser && userData.currentPass) {
    loginMessage = "Select a module from the navigation bar"
  }

  return (
    <div className="home-container">
      <div className="logo-container">
        <img src="/large-logo.png" alt="Testserver_UI"/>
      </div>
      <div className="title-container">
        <h3>Welcome to TestServerUI</h3>
        <h4>{loginMessage}</h4>
      </div>
    </div>
  )
}

export default Home;
