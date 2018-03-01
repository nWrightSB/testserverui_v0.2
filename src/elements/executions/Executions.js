import React from 'react';
import './Executions.css'

const Executions = props => {
  let resultsData = props.resultsData;

  return (
    <div>
        <table>
            <th>
                <td>Project</td>
                <td>Pass</td>
                <td>Fail</td>
                <td>Time</td>
            </th>
        </table>
    </div>
  )
}

export default Executions;
