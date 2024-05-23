import React from "react";

const Step2Interests = ({ formData, setFormData }) => {
  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="interests-container form-step-container">
      <p className="description">
        What do you love doing when you're not coding {formData.author}? Whether
        it's gaming, reading, hiking, or anything else, share your passions with
        me. I’ll use these to come up with a project idea that’s as unique and
        exciting as your hobbies!
      </p>
      <textarea
        className="input-field h-16"
        type="text"
        id="interests"
        name="interests"
        placeholder="ex. Scuba diving"
        value={formData.interests}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Step2Interests;
