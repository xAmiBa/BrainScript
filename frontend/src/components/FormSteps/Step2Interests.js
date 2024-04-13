import React from 'react';
import '../Form/Form.css';


const Step2Interests = ({formData, setFormData}) => {

    const onChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
      };

  return (
      <div className='interests-container'>
          <h3>description</h3>
          <label for="skills">What excites you?</label>
          <input 
            type='text' 
            id="interests" 
            name="interests" 
            placeholder="ex. Scuba diving"
            value={formData.interests}
            onChange={onChange}
            >
            </input>
      </div>
  )
}

export default Step2Interests