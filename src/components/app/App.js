import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import './App.css';
import NavLink from '../../elements/navlink/NavLink.js';
import LoginButton from '../../elements/loginbutton/LoginButton.js';

class App extends Component {
  // WILL CONTAIN STATE
  // SHOULD BE ABLE TO ABSTRACT THE NAVLINK OBJECTS INTO THE NAVLINK MODULE!
  render() {
    return (
      <div>
        <div id="nav-bar">
          {/*INDEX LINK AND LOGO*/}
          <IndexLink to="/">
            <div className="nav-logo-container">
              <img src={"./ts_crop.jpg"} alt="Testserver_UI"/>
            </div>
          </IndexLink>
          {/*NAVBAR LINKS*/}
          <NavLink
            to={"/history"}
            text={"History"}
          />
          <NavLink 
            to={"/run"}
            text={"Run"}
          />
          <NavLink 
            to={"/analyze"}
            text={"Analyze"} 
          />
          {/*LOGIN BUTTON*/}
          <LoginButton
            text={"Login"} 
            userdata={userdata}
          />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
