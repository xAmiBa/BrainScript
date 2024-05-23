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
        
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='font-bold font-mono text-5xl'>
                BrainScript
            </h1>

            <div className='overflow-hidden'>
            <DotLottieReact
                className="w-[400px]"
                src={lottieLogo}
                width={100}
                loop
                autoplay>
            </DotLottieReact>
            </div>
           
           <div className='flex flex-row gap-20'>

            <PrimaryButton
                onClick={navigateToSetup}
                text="Create your own project"
            ></PrimaryButton>

            <PrimaryButton
                onClick={navigateToProjects}
                text="Browse all projects"
            ></PrimaryButton>

           </div>

        </div>
    )
}

export default HomePage