import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import request from 'request'
import './App.css';
import NavLink from '../../elements/navlink/NavLink.js';
import LoginButton from '../../elements/loginbutton/LoginButton.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testserver: 'http://10.0.30.175:8080',
      userdata: {
        current_user: null,
        current_pw: null
      }
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(username, password) {
    let reqObj = {
      url: this.state.testserver + '/v1/readyapi/executions',
      auth: {
        'user': username,
        'pw': password
      }
    };

    request(reqObj, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        this.setState({
            userdata: {
              current_user: reqObj.auth.user,
              current_pw: reqObj.auth.pass
            }
          })
      }
    }.bind(this));
  }

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
            userdata={this.state.userdata}
            handleLogin={this.handleLogin}
          />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
