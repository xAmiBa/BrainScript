import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import lottieLogo from '../../static/logo.lottie'
import PrimaryButton from '../PrimaryButton/PrimaryButton';


const HomePage = ({ navigate }) => {
    
    const navigateToSetup = () => {
        navigate("/setup");
      };
    
    const navigateToProjects = () => {
        navigate("/browse-projects")
    }
    
    return (
        
        <div>
            <p>
                Welcome to BrainScript
            </p>

            <DotLottieReact
                className="app-logo"
                src={lottieLogo}
                width={600}
                loop
                autoplay>
            </DotLottieReact>
           
            <PrimaryButton
                onClick={navigateToSetup}
                text="Create your own project"
            ></PrimaryButton>

            <PrimaryButton
                onClick={navigateToProjects}
                text="Browse all projects"
            ></PrimaryButton>

        </div>
    )
}

export default HomePage