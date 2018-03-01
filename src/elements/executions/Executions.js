import React from 'react';
import './Executions.css'

const Executions = props => {
  let resultsData = props.resultsData;

  return (
    <div className="history-table-container">
        <table className="history-table">
            <tbody>
                <tr className="history-table-heading">
                    <th id="project-header">Project</th>
                    <th><i className="fa fa-check success-v" aria-hidden="true"></i></th>
                    <th><i className="fa fa-times fail-x" aria-hidde="true"></i></th>
                    <th><i className="far fa-clock" aria-hidde="true"></i></th>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Executions;
