import React from 'react'
import Step1Tech from './Step1Tech'
import Step2Interests from './Step2Interests'
import Step3AboutYou from './Step3AboutYou'

describe('Steps components', () => {
  it('renders all step components', () => {
    const initialFormData = {
      interests: "",
      skills: "",
      skills_to_learn: "",
      area_of_programming: "",
      author: ""
    }

    const setMockFormData = (newMockData) => {
      mockFormData = { ...mockFormData, ...newMockData };
    };

    let mockFormData = initialFormData;

    cy.mount(<Step1Tech formData={mockFormData} setFormData={setMockFormData}/>)
    cy.mount(<Step2Interests formData={mockFormData} setFormData={setMockFormData}/>)
    cy.mount(<Step3AboutYou formData={mockFormData} setFormData={setMockFormData}/>)
  })
  
})