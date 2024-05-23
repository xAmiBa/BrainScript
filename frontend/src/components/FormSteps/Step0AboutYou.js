import React from "react";

const Step0AboutYou = ({ formData, setFormData }) => {
  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="author-container form-step-container">
      <p className="description">
        What should I call you? I’d like to make our chats friendly and
        personal. Your privacy is super important to me, so feel free to use
        whatever name you're comfortable with!
      </p>
      <input
        className="input-field"
        type="text"
        id="author"
        name="author"
        value={formData.author}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Step0AboutYou;
