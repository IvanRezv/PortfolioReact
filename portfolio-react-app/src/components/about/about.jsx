import React,{ useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";


const About = () => {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <div name='about' className='w-full h-screen text-gray-300'>
      <Particles  options={particlesOptions} init={particlesInit} />
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Ivan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>For my young age, I'm switched a lot of jobs - from statups to enterprize coporates.
              I was imbued with the culture of working in the IT industry, adopting the methods of 
              different people and teams in which I worked. I am specialize in CI/CD processes building(my faviorite),
              IaC, base linux-administration and web development a bit.</p> 
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;