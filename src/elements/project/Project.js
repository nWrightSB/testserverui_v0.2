import React from 'react';
import './project.css';

const Project = props => {
  let projectData = props.resultsData['executions'][props.resultsData.projectId];
  let projectName = null;
  let startTime = null;
  let status = null;
  let timeTaken = null;
  let executionID = null;

  if (projectData) {
      projectName = projectData['projectName']
      startTime = projectData['startTime']
      status = projectData['status']
      timeTaken = projectData['timeTaken']
      executionID = projectData['executionID']
      console.log(projectData)
  }

  return (
    <div id="project-container" className="project-container">
        <div className="project-info-container">
            <div className="project-name-container">
                <h2>{projectName}</h2>
                <br/>
                <h3>{executionID}</h3>
            </div>
            <div className="status-container">
                {status}
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            test
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default Project;
