// DEPENDENCIES
import React, { Component } from 'react';
import base64 from 'base-64';
import { IndexLink } from 'react-router';
// COMPONENTS
import './App.css';
import NavLink from '../../elements/navlink/NavLink.js';
import LoginButton from '../../elements/loginbutton/LoginButton.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        currentUser: null,
        currentPass: null
      },
      resultsData: {
        executions: [],
        project: [],
        testSuites: [],
        testCases: [],
        testSteps: [],
        transactionDetails: []
      }
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(username, password) {
    let reqObj = {
      url: '/v1/readyapi/executions',
      config: {
        method: "GET",
        headers: {
          'Authorization': 'Basic ' + base64.encode(username + ':' + password)
        }
      }
    };

    fetch(reqObj.url, reqObj.config)
      .then(response => {
        return response.json()
      }).then(json => {
        let userData = {...this.state.userData}
        let resultsData = {...this.state.resultsData}

        userData.currentUser = username;
        userData.currentPass = password;
        resultsData.executions = json.projectResultReports;

        //SET STATE W/RESULTS
        this.setState({
          userData,
          resultsData
        })
      })
      .catch(function(error){
        console.log('ERROR: ' + error)
    })
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
            userData={this.state.userData}
            handleLogin={this.handleLogin}
          />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
