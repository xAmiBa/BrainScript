const ProjectCard = (projectData) => {
    const project = projectData.projectData.project
    const author = projectData.projectData.author

    return (
        <div>
            <h3>{project.title}</h3>
            {project.technologies.map((item => {
                return <div className="technology-blob">{item}</div>
            }))}
            <p>by {author}</p>
            <hr/>
        </div>
    )
}

export default ProjectCard;