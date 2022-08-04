import React,{ useCallback} from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";
import './skills.css'

const Progress = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
    <div name='skills' className='w-full h-screen text-gray-300'>
        <Particles  options={particlesOptions} init={particlesInit} />
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-container w-full h-full'>
            <div >
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>These are my experience in Persentage</p>
            </div>
            
            <div className='skills-bar text-black'>
                <div className='bar'>
                    <div className='info'>
                        <span>CI/CD</span>
                    </div>
                    <div className='progress-line cicd'><span></span></div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <span>IaC</span>
                    </div>
                    <div className='progress-line iac'><span></span></div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <span>Unix</span>
                    </div>
                    <div className='progress-line unix'><span></span></div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <span>Python and Tooling</span>
                    </div>
                    <div className='progress-line python'><span></span></div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <span>Web Development</span>
                    </div>
                    <div className='progress-line webdev'><span></span></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Progress