import logo from '../../static/logo.gif';
import React from 'react'


const HomePage = ({ navigate }) => {
    
    const navigateToSetup = () => {
        navigate("/setup");
      };
    
    return (
        
        <div>
            <button className='next-button' onClick = {navigateToSetup}>NEXT</button>
            <img src={logo} className="app-logo" alt="logo" />
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