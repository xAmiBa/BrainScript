const ProjectCard = ({projectData, currentProjectPreview, setProjectPreview}) => {
    const project = projectData.project
    const author = projectData.author


    const handleClick = (event) => {
        setProjectPreview(projectData)
    }

    return (
        <div>
            <h3>{project.title}</h3>
            {project.technologies.map((item => {
                return <div className="technology-blob">{item}</div>
            }))}
            <p>by {author}</p>
            <button type="button" onClick={handleClick}>PREVIEW</button>
            <hr/>
        </div>
    )
}

export default ProjectCard;