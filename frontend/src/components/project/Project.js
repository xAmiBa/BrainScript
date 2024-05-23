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

    return (
        <div>
            <div className="columns flex flex-row gap-20 mx-16 my-16">

                <div className="project-column w-1/2">
                    <ProjectPreview currentProject={
                        {"project": {"technologies" : technologies, "resources" : resources, "title" : title, "description" : description, }, "author" : author}}>
                        </ProjectPreview>
                </div>

                <div className="email-column w-1/2 flex flex-col justify-center items-center">
                    <p className="mb-10">Would you like to send the project idea to your email?</p>
                    <input
                    className="input-field"
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
            </div>
        </div>
        
        )
} 

export default Project