import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ formData }) => {
  // returns custon class name for CSS conditional formatting
  const generateError = (dataFormField) => {
    if (dataFormField.length < 3 || !/[a-zA-Z]/.test(dataFormField)) {
      return "progress-invalid";
    } else {
      return "progress-valid";
    }
  };

  return (
    <div className="progress-bar flex flex-row gap-16 mt-10 text-l">
      <p className={generateError(formData.author)}>About You</p>
      <p className={generateError(formData.skills)}>Your Skills</p>
      <p className={generateError(formData.skills_to_learn)}>Your New Skills</p>
      <p className={generateError(formData.area_of_programming)}>
        Area of programming
      </p>
      <p className={generateError(formData.interests)}>Your Interests</p>
    </div>
  );
};

export default ProgressBar;
