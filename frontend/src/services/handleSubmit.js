import axiosInstance from './axiosConfig';
// const axios = require('axios').default;


const handleProjectGeneration = async (
    navigate,
    apiUrl,
    skills,
    skills_to_learn,
    author,
    interests,
    area_of_programming
    ) => {
        window.localStorage.clear();
        navigate('/your-project')

        let response = await axiosInstance.post("http://localhost:8000/generate/", {
            skills: skills, 
            skills_to_learn: skills_to_learn,
            author: author,
            interests: interests,
            area_of_programming: area_of_programming
          });
          

          if (response.status !== 200) {
            console.log("Ups! Something went wrong!")
          } else {
            console.log(response.data)
            window.localStorage.setItem("project", JSON.stringify(response.data));
            window.dispatchEvent(new CustomEvent("storageUpdate"));
          }
          console.log("API URL: ", apiUrl)

}

export default handleProjectGeneration