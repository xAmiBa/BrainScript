import axiosInstance from "./axiosConfig";


const handleGetProjects = async (setProjects) => {
    let response = await axiosInstance.get("http://localhost:8000/project/", {});

    if (response.status !== 200) {
        console.log("Ups! Something went wrong!")
    } else {
        setProjects(response.data.data.projects)
    }
}

export default handleGetProjects;