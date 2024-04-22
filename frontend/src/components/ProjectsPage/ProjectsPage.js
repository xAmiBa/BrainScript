import ProjectCard from "../ProjectCard/ProjectCard";
import { useEffect, useState } from "react";
import handleGetProjects from "../../services/handleGetProjects";

const ProjectsPage = ({navigate}) => {

    // TODO: current project view as useState from projects page.
    // And when user hover over specific project they can see it in
    // side view which will be new component on the side
    
    const [projectList, setProjectList] = useState([]);
    
    useEffect(() => {
        handleGetProjects(setProjectList)
    }, []);

    return (
        <div>
            <h1>PROJECTS PAGE</h1>

            {projectList.map((projectData) => (
                <ProjectCard projectData={projectData}></ProjectCard>
              ))}
        </div>
    )
}

export default ProjectsPage;