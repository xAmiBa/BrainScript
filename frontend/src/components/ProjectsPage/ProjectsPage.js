import ProjectCard from "../ProjectCard/ProjectCard";
import { useEffect, useState } from "react";
import handleGetProjects from "../../services/handleGetProjects";
import ProjectPreview from "../ProjectPreview/ProjectPreview";

const ProjectsPage = ({navigate}) => {

    // TODO: current project view as useState from projects page.
    // And when user hover over specific project they can see it in
    // side view which will be new component on the side
    
    const [projectList, setProjectList] = useState([]);
    const [currentProjectPreview, setProjectPreview] = useState(null);
    
    useEffect(() => {
        handleGetProjects(setProjectList)
    }, []);

    return (
        <div>
            <div className="project-preview">
                <ProjectPreview currentProject={currentProjectPreview}></ProjectPreview>
            </div>
            <div className="project-list">
                <h1>PROJECTS PAGE</h1>
                {projectList.map((projectData) => (
                    <ProjectCard projectData={projectData} setProjectPreview={setProjectPreview} currentProjectPreview={currentProjectPreview}></ProjectCard>
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage;