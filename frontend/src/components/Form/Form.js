import React, { useState } from "react";
import Step1Tech from "../FormSteps/Step1Tech.js";
import Step2Interests from "../FormSteps/Step2Interests.js";
import Step0AboutYou from "../FormSteps/Step0AboutYou.js";
import '../FormSteps/Step.css'
import ProgressBar from '../ProgressBar/ProgressBar'
import handleProjectGeneration from "../../services/handleSubmit";
import PrimaryButton from "../PrimaryButton/PrimaryButton.js";

const Form = ({ navigate }) => {

    console.log("ENV VARIABLE TEST: ", process.env.REACT_APP_GENERATE_PROJECT_API_URL)
    // determine which step we're in
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        interests: "",
        skills: "",
        skills_to_learn: "",
        area_of_programming: "",
        author: ""
    })

    // determine which title we display
    const FormTitles = ["About You", "Your Tech Stack", "Your Interests"]

    // determine which form to display
    const StepDispaly = () => {
        if (step === 0) {
            return <Step0AboutYou formData={formData} setFormData={setFormData}/>
        } else if (step === 1) {
            return <Step1Tech formData={formData} setFormData={setFormData}/>
        } else if (step === 2) {
            return <Step2Interests formData={formData} setFormData={setFormData}/>
        }
    }
    const isInvalid = Object.values(formData).some(value => value.length < 3)
    // const [authError, setAuthError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const apiGenerateUrl = process.env.REACT_APP_GENERATE_PROJECT_API_URL;
        handleProjectGeneration(
            navigate,
            `${apiGenerateUrl}`,
            formData.skills,
            formData.skills_to_learn,
            formData.author,
            formData.interests,
            formData.area_of_programming
        )
    }

    return (
        <div className="form font-mono flex flex-col items-center pt-15">
            <div className="progress-bar-container pb-20">
                <ProgressBar formData={formData}/>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 w-1/2 form-container bg-white bg-opacity-10 shadow-xl rounded px-10 pt-8 pb-8 mb-4">
                <div className="header text-2xl">
                    <h1>{FormTitles[step]}</h1>
                </div>
                <div className="body">
                    { StepDispaly() }
                </div>
                <div className="footer flex gap-16">
                    <div className="justify-start">
                        <PrimaryButton
                            text="<"
                            disabled={step === 0}
                            onClick={() => {
                                setStep((currentPage) => currentPage - 1)
                                }}
                        ></PrimaryButton>
                    </div>

                    <div className="ml-auto">
                        <PrimaryButton
                            text=">"
                            disabled={step === 2}
                            onClick={() => {
                                setStep((currentPage) => currentPage + 1)
                                }}
                        ></PrimaryButton>
                    </div>

                    <PrimaryButton
                        text="Submit"
                        disabled={isInvalid}
                        style={{display: isInvalid ? 'none' : 'block'}}
                        onClick={ handleSubmit }
                    ></PrimaryButton>
                    
                </div>
            </div>
        </div>
    )
}

export default Form