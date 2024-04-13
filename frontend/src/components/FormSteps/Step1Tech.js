import React from 'react';
import '../Form/Form.css';

function Step1Tech({formData, setFormData}) {

  const onChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  };

  return (
    <div className='tech-container'>
      <p className='description'>Thanks {formData.author}! Now, tell me about your current coding skills, any new techniques you're excited to learn, and what areas of programming you love most—whether it's backend, frontend, or something else. This way, I can help craft a project that’s perfect for your skill level and growth ambitions!</p>
      <label for="skills">Your existing skills</label>
      <input
        type='text' 
        id="skills" 
        name="skills" 
        placeholder="ex. HTML, CSS" 
        value={formData.skills}
        onChange={onChange}
        requiired
        >
      </input>

      <label for="skills_to_learn">Skills you want to learn</label>
      <input
        type='text' 
        id="skills_to_learn" 
        name="skills_to_learn" 
        placeholder='ex. JavaScript' 
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
        <option value="full-stack">Full Stack</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
      </select>
    </div>
  )
}

export default Step1Tech