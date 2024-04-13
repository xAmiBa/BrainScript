import React from 'react';
import '../Form/Form.css';

function Step1Tech({formData, setFormData}) {

  const onChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  };

  return (
    <div className='tech-container'>
      <h3>description</h3>
      <label for="skills">Skills</label>
      <input
        type='text' 
        id="skills" 
        name="skills" 
        placeholder="ex. Python beginner" 
        value={formData.skills}
        onChange={onChange}
        >
      </input>

      <label for="skills_to_learn">Skills to learn</label>
      <input
        type='text' 
        id="skills_to_learn" 
        name="skills_to_learn" 
        placeholder='ex. Intermediate Python, HTML, CSS' 
        value={formData.skills_to_learn}
        onChange={onChange}
        >
      </input>

      <label for="area_of_programming">Area of programming</label>
      <select 
        name="area_of_programming" 
        id="area_of_programming" 
        value={formData.area_of_programming}
        onChange={onChange}
      >
        <option value="frontend">front-end</option>
        <option value="backend">back-end</option>
        <option value="full-stack">full-stack</option>
      </select>
    </div>
  )
}

export default Step1Tech