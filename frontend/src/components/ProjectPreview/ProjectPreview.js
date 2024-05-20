import React, { useState } from 'react'

const ProjectPreview = ({
    currentProject
}) => {

    if (currentProject) {
        const { title, description, technologies, resources } = currentProject.project;
        const author = currentProject.author
        const technologiesList = Object.keys(technologies).map(key => <li key={key}>{technologies[key]}</li>)
        const resourcesList = Object.keys(resources).map(key => <li key={key}><a href={resources[key]['link']} target='_blank' rel="noreferrer">{resources[key]["title"]}</a> </li>)
        

        return (
            <div className="project-container">

            <h1>{title}</h1>
            <div className="description-container">
                <p>{description}</p>
            </div>

            <h3>Technologies:</h3>
            <div className="technologies-container">
                {technologiesList}
            </div>

            <h3>Resources:</h3>
            <div className="resources-container">
                {resourcesList}
            </div>

            <p>by {author}</p>
            
        </div>
          )

    } else {
        return (
            <p>Click on project to preview</p>
        )
    }
  
}

export default ProjectPreview