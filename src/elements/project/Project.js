import React from 'react';
import './project.css';

const Project = props => {
  let projectData = props.resultsData['project']
  let projectName = null
  let startTime = null;
  let status = null;
  let timeTaken = null;

  if (projectData) {
      projectName = projectData['projectName']
      startTime = projectData['startTime']
      status = projectData['status']
      timeTaken = projectData['timeTaken']
  }

  return (
    <div className="project-container">
        <div className="project-info-container">
            <div className="project-name-container">
                {projectName}
            </div>
            {status}
            <h2>Start Time: {startTime}</h2>
            <h2>Time Taken: {timeTaken} ms</h2>
        </div>
        
    </div>
  )
}

export default Project;
