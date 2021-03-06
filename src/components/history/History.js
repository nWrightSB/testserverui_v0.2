import React from 'react';
import Calendar from '../../elements/calendar/Calendar.js'
import Executions from '../../elements/executions/Executions.js'
import Project from '../../elements/project/Project.js'
import './History.css'

const History = props => {
  let resultsData = props.resultsData;

  return (
    <div className="history-container">
      {/* CALENDER COLUMN SHOWS EXECUTIONS FOR A GIVEN DATE */} 
      <div className="first-column">
        <div className="calendar-element-container">
          <Calendar />
        </div>
        <div className="executions-container">
          <Executions
            resultsData={resultsData}
            handleSelectProject={props.handleSelectProject}
          />
        </div>
      </div>
      {/* PROJECT COLUMN SHOWS PROJECT INFO, TESTSUITES AND TESTCASES */}
      <div className="projects-container">
        <Project
          resultsData={resultsData}
        />
      </div>
      <div className="code-container">
        Code
      </div>
      {/* FINAL COLUMN HOUSES CODE VIEWER */}
    </div>
  )
}

export default History;
