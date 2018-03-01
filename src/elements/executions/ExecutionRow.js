import React from 'react';
import './Executions.css'

const ExecutionRow = props => {
    // HIGH LEVEL DATA OBJECTS
    let rowData = props.rowData;
    let status = rowData['status'];
    // TO RENDER IN ROW
    let projectName = rowData['projectName'];
    let executionID = rowData['executionID']
    let startTimeObj = new Date(rowData['startTime']);
    let startTime = startTimeObj.getHours() + ":" + startTimeObj.getMinutes();
    let statusIcon = "";

    if (status === "FAILED") {
        statusIcon = "fa fa-times fail-x"
    } else if (status === "SUCCESS") {
        statusIcon = "fa fa-check success-v"
    }

    // <th><i className="fa fa-check success-v" aria-hidden="true"></i></th>
    // <th><i className="fa fa-times fail-x" aria-hidden="true"></i></th>
    // onClick={() => props.handleSelectProject(executionID)}

    console.log(rowData)

    return (
        <tr className="execution-row" onClick={() => props.handleSelectProject(executionID)}>
            <td>{startTime}</td>
            <td>{projectName}</td>
            <td><i className={statusIcon}></i></td>
            <td className="caret-cell"><i className="fas fa-caret-right"></i></td>
        </tr>
    )
}

export default ExecutionRow;