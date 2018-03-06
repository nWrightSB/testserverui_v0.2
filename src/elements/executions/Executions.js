import React from 'react';
import ExecutionRow from './ExecutionRow'
import './Executions.css';

const Executions = props => {
  let executionData = props.resultsData['executions']
  let projectsRowArray = [];

  if (executionData) {
    for (let i = 0; i < executionData.length; i++) {
        projectsRowArray.push(
            <ExecutionRow 
                key={i}
                id={i}
                rowData={executionData[i]}
                handleSelectProject={props.handleSelectProject}
            />
        )
    }
  }

  return (
    <div className="history-table-container">
        <table className="history-table">
            <tbody>
                <tr className="history-table-heading">
                    <th><i className="far fa-clock" aria-hidden="true"></i></th>
                    <th>Project</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                {projectsRowArray}
            </tbody>
        </table>
    </div>
  )
}

export default Executions;
