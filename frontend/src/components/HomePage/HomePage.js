import logo from '../../static/logo.gif';
import React from 'react'
import NextButton from '../NextButton/NextButton';


const HomePage = ({ navigate }) => {
    
    const navigateToSetup = () => {
        navigate("/setup");
      };
    
    return (
        
        <div>
            <NextButton onClick = {navigateToSetup}/>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to
            </p>
            <p>
                BrainScript
            </p>
        </div>
    )
}

export default HomePage