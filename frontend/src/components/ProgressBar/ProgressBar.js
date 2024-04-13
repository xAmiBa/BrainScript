import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({formData}) => {

    // returns custon id for CSS coditional formatting
    const generateError = (dataFormField) => {
        // console.log("FORM DATA: ", dataFormField)
        if (dataFormField.length < 3 || !(/[a-zA-Z]/.test(dataFormField))) {
            return 'progress-invalid'
        } else {
            return 'progress-valid'
        }
    }

    return (
        <div className='progress-bar'>
            <p className='progress-point' id={generateError(formData.author)}>About You</p>
            <p className='progress-point' id={generateError(formData.skills)}>Your Skills</p>
            <p className='progress-point' id={generateError(formData.skills_to_learn)}>Your New Skills</p>
            <p className='progress-point' id={generateError(formData.area_of_programming)}>Area of programming</p>
            <p className='progress-point' id={generateError(formData.interests)}>Your Interests</p>
        </div>
    )
}

export default ProgressBar