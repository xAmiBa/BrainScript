import { useEffect, useState } from "react";
import ReactLoading from "react-loading"
import handleSendEmail from "../../services/handleSendEmail";
var validator = require("email-validator");

const Project = ({navigate}) => {
    const [project, setProject] = useState(() => JSON.parse(window.localStorage.getItem("project")));
    const [email, setEmail] = useState()

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
        // document.getElementById("email").reset()
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
        return  <ReactLoading type="spinningBubbles" color="black" width={200}/>
    } 
    const { title, description, technologies, resources } = project.data;
    const author = project.author
    const technologiesList = Object.keys(technologies).map(key => <li key={key}>{technologies[key]}</li>)
    const resourcesList = Object.keys(resources).map(key => <li key={key}><a href={resources[key]['link']} target='_blank' rel="noreferrer">{project.data.resources[key]["title"]}</a> </li>)
        
    return (
        <div>

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
            <button
            disabled={!validator.validate(email)}
            onClick={onClick}>SEND</button>
        </div>
        </div>
        
        )
} 

export default Project