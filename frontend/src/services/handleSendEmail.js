import axiosInstance from "./axiosConfig";
const axios = require('axios').default;

const handleSendEmail = async (apiUrl, email, author, project_data) => {
    let response = await axiosInstance.post("http://localhost:8000/send-email/", {
        subject: `New project for ${author}!`,
        recipient_email: email,
        project_data: project_data
    });

    if (response.status !== 200) {
        console.log("RECIEVED: ",response)
        console.log("Ups! Something went wrong!")
    } else {
        console.log(response.data)
    }
}

export default handleSendEmail;


// {
//     "subject": "test subject",
//     "recipient_email": "aminaba666@gmail.com",
//     "project_data": {
//         "subject": "test subject",
//         "title": "test project title",
//         "author": "test author",
//         "description": "test description",
//         "technologiesList": ["tech 1", "tech 2", "tech 3"],
//         "resourcesList": [
//             {"title": "Django for Beginners", "link": "https://www.djangoproject.com/start/"},
//             {"title": "CSS-Tricks for advanced styling", "link": "https://css-tricks.com/"},
//             {"title": "HTML5 Documentation", "link": "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"}
            
//             ]
//         }
// }