import React,{ useCallback} from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";

import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Node from '../../assets/node.png';
import AWS from '../../assets/aws.png';
import GitHub from '../../assets/github.png';
import Mongo from '../../assets/mongo.png';


const Tools = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div name='tools' className='w-full h-screen  text-gray-300'>
            <Particles  options={particlesOptions} init={particlesInit} />
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-container w-full h-full'>
                <div >
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Tools</p>
                    <p className='py-4'>These are tech I've workded with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                        <p className='my-4'>Github</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                        <p className='my-4'>NodeJS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                        <p className='my-4'>MongoDb</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                        <p className='my-4'>AWS</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tools