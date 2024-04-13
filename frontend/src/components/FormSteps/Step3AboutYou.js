import React from 'react';
import '../Form/Form.css';


const Step3AboutYou = ({formData, setFormData}) => {

  const onChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  };

  return (
      <div className='author-container'>
          <label for="skills">What's your nickname?</label>
          <input 
          type='text' 
          id="author" 
          name="author" 
          placeholder="Sam"
          value={formData.author}
          onChange={onChange}
          ></input>
      </div>
  )
}

export default Step3AboutYou