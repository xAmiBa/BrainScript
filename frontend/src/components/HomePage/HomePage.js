import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import lottieLogo from '../../static/logo.lottie'


const HomePage = ({ navigate }) => {
    
    const navigateToSetup = () => {
        navigate("/setup");
      };
    
    return (
        
        <div>
            <DotLottieReact
                className="app-logo"
                src={lottieLogo}
                width={600}
                loop
                autoplay>
            </DotLottieReact>

            <button className='next-button' onClick = {navigateToSetup}>NEXT</button>
           
            
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