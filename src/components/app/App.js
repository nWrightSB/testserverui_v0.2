import React, { Component } from 'react';
import './App.css';
import NavLink from '../../modules/navlink/NavLink.js'

class App extends Component {
  // WILL CONTAIN STATE
  
  render() {
    return (
      <div>
        <h1>TS_UI</h1>
        <ul role="nav">
          <li><NavLink to="/history">History</NavLink></li>
          <li><NavLink to="/run">Run</NavLink></li>
          <li><NavLink to="/analyze">Analyze</NavLink></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default App;
