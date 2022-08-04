import React,{ useCallback} from 'react';
import WorkImg from '../../assets/rudevops.jpg';
import realEstate from '../../assets/rudevops.jpg';

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";


const YouTube = () => {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <div name='youtube' className='w-full md:h-screen py-40 flex justify-center items-center p-4 text-gray-300'>
      <Particles  options={particlesOptions} init={particlesInit} />
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            YouTube
          </p>
          <p className='py-6'>// Check out some of my youtube videos</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
        {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1.5xl font-bold text-white tracking-wider'>
                Gitlab Pipelines Exporter
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.youtube.com/watch?v=cc833YuhI5s&t=2s'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Video
                  </button>
                </a>
                <a href='https://github.com/IvanRezv/GitlabCI-exporter'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1.5xl font-bold text-white tracking-wider'>
                Sonarqube tutorial and inst
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.youtube.com/watch?v=JZ5uSsIjSlo&t=6s'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Video
                  </button>
                </a>
                <a href='https://github.com/IvanRezv/sonarqube8.9-docker-compose'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1.5xl font-bold text-white tracking-wider'>
                Sonarqube Multiple projects
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.youtube.com/watch?v=aBZrYaxWhB4&t=14s'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://gitlab.com/you13tube/sonarqube-tutorial'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTube;