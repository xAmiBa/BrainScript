import { useEffect, useState } from "react";
import ReactLoading from "react-loading"
import handleSendEmail from "../../services/handleSendEmail";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ProjectPreview from "../ProjectPreview/ProjectPreview";
var validator = require("email-validator");


const Project = ({navigate}) => {
    const [project, setProject] = useState(() => JSON.parse(window.localStorage.getItem("project")));
    const [email, setEmail] = useState()

    const navigateToProjects = () => {
        navigate("/browse-projects")
    }

    const onChange = (event) => {
        setEmail(event.target.value)
    }

    const onClick = async (event) => {
        event.preventDefault();
        const apiSendEmailUrl = process.env.REACT_APP_SEND_EMAIL_API_URL;
        handleSendEmail(
            `${apiSendEmailUrl}`,
            email,
            author,
            project
        )
        alert("Email sent! Check your inbox.")
    }

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
        return  <ReactLoading type="spinningBubbles" color="white" width={200}/>
    } 
    const { title, description, technologies, resources } = project.data;
    const author = project.author

    const technologiesList = Object.keys(technologies).map(key => <li key={key}>{technologies[key]}</li>)
    const resourcesList = Object.keys(resources).map(key => <li key={key}><a href={resources[key]['link']} target='_blank' rel="noreferrer">{resources[key]["title"]}</a> </li>)
        
    return (
        <div>
            <div className="TEST">
                <ProjectPreview currentProject={
                    {"project": {"technologies" : technologies, "resources" : resources, "title" : title, "description" : description, }, "author" : author}}>
                    </ProjectPreview>
                <hr></hr>

            </div>

        <div className="send-email-container">
            <p>Would you like to send the project idea to your email?</p>
            <input
            type='email'
            id='email'
            name='email'
            placeholder='your_email@email.com'
            value={email}
            onChange={onChange}
            >
            </input>

            <PrimaryButton
                text="Send in email"
                disabled={!validator.validate(email)}
                onClick={onClick}
            ></PrimaryButton>

        </div>

        <PrimaryButton
                text="Browse all projects"
                onClick={navigateToProjects}
        ></PrimaryButton>

        </div>
        
        )
} 

export default Project