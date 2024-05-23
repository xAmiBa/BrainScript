import React from 'react'

const ProjectPreview = ({
    currentProject
}) => {

    if (currentProject) {
        const { title, description, technologies, resources } = currentProject.project;
        const author = currentProject.author
        const technologiesList = Object.keys(technologies).map(key => <p key={key} className='border rounded px-5 py-2'>{technologies[key]}</p>)
        const resourcesList = Object.keys(resources).map(key => <li key={key}><a href={resources[key]['link']} target='_blank' rel="noreferrer" className='hover:text-neon underline'>{resources[key]["title"]}</a> </li>)
        

        return (
            <div className="project-container flex flex-col gap-5 rounded-xl px-16 py-16 bg-white bg-opacity-10">

                <h1 className='progress-invalid text-2xl'>{title}</h1>
                <div className="description-container">
                    <p>{description}</p>
                </div>

                <h3 className='text-neon underline'>Technologies:</h3>
                <div className="technologies-container flex flex-wrap gap-5">
                    {technologiesList}
                </div>

                <h3 className='text-neon underline'>Resources:</h3>
                <div className="resources-container">
                    {resourcesList}
                </div>

                <p className='text-right'>by {author}</p>
                
            </div>
          )

    } else {
        return (
            <p>Click on project to preview</p>
        )
    }
  
}

export default ProjectPreview