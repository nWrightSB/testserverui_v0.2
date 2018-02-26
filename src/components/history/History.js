import React from 'react';
import Calendar from '../../elements/calendar/Calendar.js'
import './History.css'

const History = props => {
  let resultsData = props.resultsData;

  return (
    <div className="history-container">
      {/* CALENDER COLUMN SHOWS EXECUTIONS FOR A GIVEN DATE */} 
      <div className="calendar-container">
        <Calendar />
        <Executions />
      </div>
      {/* PROJECT COLUMN SHOWS PROJECT INFO, TESTSUITES AND TESTCASES */}
      <div className="projects-container">
        Projects
      </div>
      <div className="code-container">
        Code
      </div>
      {/* FINAL COLUMN HOUSES CODE VIEWER */}
    </div>
  )
}

export default History;
