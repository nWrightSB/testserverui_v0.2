import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import './App.css';
import NavLink from '../../modules/navlink/NavLink.js'

class App extends Component {
  // WILL CONTAIN STATE
  // SHOULD BE ABLE TO ABSTRACT THE NAVLINK OBJECTS INTO THE NAVLINK MODULE!
  render() {
    return (
      <div>
        <div id="nav-bar">
          <IndexLink to="/">
            <div className="nav-logo-container">
              <img src={"./ts_crop.jpg"} alt="Testserver_UI"/>
            </div>
          </IndexLink>
          <NavLink to="/history">
            <div className="nav-link-container">
              History
            </div>
          </NavLink>
          <NavLink to="/run">
            <div className="nav-link-container">
              Run
            </div>
          </NavLink>
          <NavLink to="/analyze">
            <div className="nav-link-container">
              Analyze
            </div>
          </NavLink>
          {/* LOGIN BUTTON/COMPONENT SHOULD GO HERE IN REMAINING 10PX, SIMILAR TO HOW IT WAS IN 0.1 WHERE IT CONTAINS ITS OWN LOGIC TO VERIFY IF USER DATA IS BEING PASSED DOWN */}
        </div>

        {this.props.children}

      </div>
    );
  }
}

export default App;
