import { useEffect, useState } from "react";
import ReactLoading from "react-loading"
// make sure user decides if they want to add name to the project or not

const Project = ({navigate}) => {
    const [project, setProject] = useState(() => JSON.parse(window.localStorage.getItem("project")));

    // const project = JSON.parse(window.localStorage.getItem("project")) // this is response.data
    
    useEffect(() => {
        const handleStorageChange = () => {
            setProject(JSON.parse(window.localStorage.getItem("project")));
        };

        window.addEventListener('storageUpdate', handleStorageChange);
        
        return () => {
            window.removeEventListener('storageUpdate', handleStorageChange);
        };

    }, []);

    if (!project) {
        return  <ReactLoading type="spinningBubbles" color="black" width={200}/>
    } 
    const { title, description, technologies, resources } = project.data;
    const author = project.author
    const technologiesList = Object.keys(technologies).map(key => <li key={key}>{technologies[key]}</li>)
    const resourcesList = Object.keys(resources).map(key => <li key={key}><a href={resources[key]['link']} target='_blank' rel="noreferrer">{project.data.resources[key]["title"]}</a> </li>)
        
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
} 

export default Project