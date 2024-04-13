import React, { useState } from "react";
import Step1Tech from "../FormSteps/Step1Tech";
import Step2Interests from "../FormSteps/Step2Interests";
import Step0AboutYou from "../FormSteps/Step0AboutYou";
import '../FormSteps/Step.css'
import ProgressBar from '../ProgressBar/ProgressBar'

function Form() {

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

    return (
        <div className="form">
            {/* <h1>Form</h1> */}
            <div className="progress-bar-container">
                <ProgressBar formData={formData}/>
            </div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[step]}</h1>
                </div>
                <div className="body">
                    { StepDispaly() }
                </div>
                <div className="footer">
                    <button
                    disabled={step === 0}
                    onClick={() => {
                        setStep((currentPage) => currentPage - 1)
                        }}
                    >Prev</button>
                    <button
                    disabled={step === 2}
                    onClick={() => {
                        setStep((currentPage) => currentPage + 1)
                        }}
                    >Next</button>
                    <button
                    disabled={isInvalid}
                    style={{display: isInvalid ? 'none' : 'block'}}
                    //TODO: API CALL onClick={}
                    > Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Form