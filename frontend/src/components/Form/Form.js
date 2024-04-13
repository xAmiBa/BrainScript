import React, { useState } from "react";
import Step1Tech from "../FormSteps/Step1Tech";
import Step2Interests from "../FormSteps/Step2Interests";
import Step3AboutYou from "../FormSteps/Step3AboutYou";
import '../FormSteps/Step.css'

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
    const FormTitles = ["Your Tech Stack", "Your Interests", "About You"]

    // determine which form to display
    const StepDispaly = () => {
        if (step === 0) {
            return <Step1Tech formData={formData} setFormData={setFormData}/>
        } else if (step === 1) {
            return <Step2Interests formData={formData} setFormData={setFormData}/>
        } else if (step === 2) {
            return <Step3AboutYou formData={formData} setFormData={setFormData}/>
        }
    }

    const isDisabled = Object.values(formData).some(value => value === "")


    return (
        <div className="form">
            <h1>Form</h1>
            <div className="progress-bar">
                {/* TODO: progress bar div is white rectangle, this div is filling colour. Adjnust CSS percentages to manipulate progress bar */}
                <div style={{width: step === 0 ? "33.3%" : step === 1 ? "66.6%" : "100%"}}>
                </div>
            </div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[step]}</h1>
                </div>
                <div className="body">{ StepDispaly() }</div>
                <div className="footer">
                    <button
                    disabled={step === 0}
                    onClick={() => {
                        setStep((currentPage) => currentPage - 1)
                        }}
                        >Prev</button>
                    <button 
                    onClick={() => {
                        if (step === 2) {
                            // TODO: API CALL TO SEND THE DATA TO BACKEND
                            alert("FORM SUBMITTED: ")
                            console.log(formData)
                        } else {
                            setStep((currentPage) => currentPage + 1)
                        }
                        }}
                        >{step === 2 ? "Submit" : "Next"}</button>
                </div>
            </div>
        </div>
    )
}

export default Form