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
        
        <div className='flex flex-row items-center justify-center min-h-screen gap-20 mx-20'>

            <div className='about w-2/3 flex flex-col justify-between h-full p-16 gap-10'>

                <div className='relative flex items-center justify-center mb-10'>
                    <span className='text-center font-mono text-6xl overflow-hidden transform -translate-x-[40px]'>
                        BrainScript
                    </span>
                    <div className='absolute w-[350px] overflow-hidden pb-20 transform translate-x-[250px] -translate-y-[30px]'>
                    <DotLottieReact
                        className='overflow-hidden'
                        src={lottieLogo}
                        width={100}
                        loop
                        autoplay>
                    </DotLottieReact>
                    </div>
                </div>

                <div className='description overflow-hidden mb-10'>
                    <p className='text-center'>
                    BrainScript is your AI-powered assistant for generating innovative project ideas tailored to your interests and skills. Whether you're looking to expand your tech stack, dive into new technologies, or create something related to your hobbies and passions, BrainScript is here to inspire and guide you.
                    </p>
                </div>

                <p className='text-xl text-center underline text-neon text-2xl'>How it works?</p>
                <ol className=''>
                    <li>💡 <b className='text-neon'>Input the technologies</b>  you're already familiar with.</li>
                    <li>💡 <b className='text-neon'>Explore New Technologies:</b> Specify the tech you want to learn next.</li>
                    <li>💡 <b className='text-neon'>Incorporate Your Interests:</b> Share your hobbies or any topics you're passionate about.</li>
                    <li>💡 <b className='text-neon'>Generate Ideas:</b> Let BrainScript ideate and generate unique coding project ideas just for you, complete with resources to get started.</li>
                </ol>
            </div>

            <div className='fearures flex flex-col gap-10 w-1/3'>
               <div className='feature-box'>
                    <p className='progress-invalid text-center text-2xl pb-5'>Ideate</p>
                    <p className='font-bold text-center'>Spark creativity with personalized project ideas.</p>
                </div>
               <div className='feature-box'>
                    <p className='progress-invalid text-center text-2xl pb-5'>Generate</p>
                    <p className='font-bold text-center'>Get detailed project concepts tailored to your skills and interests.</p>
                </div>
               <div className='feature-box'>
                    <p className='progress-invalid text-center text-2xl pb-5'>Learn</p>
                    <p className='font-bold text-center'>Access curated resources to help you learn and implement new technologies.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage