import React from 'react';
import '../Form/Form.css';


const Step2Interests = ({formData, setFormData}) => {

    const onChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
      };

  return (
      <div className='interests-container'>
          <p className='description'>What do you love doing when you're not coding {formData.author}? Whether it's gaming, reading, hiking, or anything else, share your passions with me. I’ll use these to come up with a project idea that’s as unique and exciting as your hobbies!</p>
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