// DEPENDENCIES
import React, { Component } from 'react';
import base64 from 'base-64';
import { IndexLink } from 'react-router';
// COMPONENTS
import './App.css';
import NavLink from '../../elements/navlink/NavLink.js';
import LoginButton from '../../elements/loginbutton/LoginButton.js';
import Executions from '../../elements/executions/Executions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        currentUser: null,
        currentPass: null,
        error: null
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
    this.handleLogout = this.handleLogout.bind(this)
    this.handleSelectProject = this.handleSelectProject.bind(this)
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
      .catch(error => {
        let userData = {...this.state.userData}
        userData.error = error.toString();
        this.setState({
          userData
        })
    })
  }

  handleLogout() {
    let userData = {...this.state.userData}

    userData.currentUser = null;
    userData.currentPass = null;

    this.setState({
      userData
    })
  }

  handleSelectProject(executionID) {
    let resultsData = {...this.state.resultsData}

    for (let i = 0; i < resultsData['executions'].length; i++) {
      if (resultsData['executions'][i]['executionID'] === executionID) {
        resultsData['project'].push(resultsData['executions'][i])
        this.setState({
          resultsData
        })
      }
    }
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
            handleLogout={this.handleLogout}
          />
        </div>
        {this.props.children && React.cloneElement(this.props.children,{
          resultsData: this.state.resultsData,
          handleSelectProject: this.handleSelectProject
        })}
      </div>
    );
  }
}

export default App;
