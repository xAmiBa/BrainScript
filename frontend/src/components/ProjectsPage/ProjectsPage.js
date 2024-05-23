import ProjectCard from "../ProjectCard/ProjectCard";
import { useEffect, useState } from "react";
import handleGetProjects from "../../services/handleGetProjects";
import ProjectPreview from "../ProjectPreview/ProjectPreview";

const ProjectsPage = ({navigate}) => {

    // TODO: filter projects by tech
    
    const [projectList, setProjectList] = useState([]);
    const [currentProjectPreview, setProjectPreview] = useState(null);
    
    useEffect(() => {
        handleGetProjects(setProjectList)
    }, []);

    return (
        <div className="flex flex-row px-10">
            <div className="scroll-container project-list w-3/5 flex flex-col gap-4 mr-10">
                {projectList.map((projectData) => (
                    <ProjectCard projectData={projectData} setProjectPreview={setProjectPreview} currentProjectPreview={currentProjectPreview}></ProjectCard>
                ))}
            </div>
            <div className="project-preview w-2/5">
                <ProjectPreview currentProject={currentProjectPreview}></ProjectPreview>
            </div>
        </div>
    )
}

export default ProjectsPage;