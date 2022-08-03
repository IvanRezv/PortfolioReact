import React,{ useCallback} from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";


const Contact = () => {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
      <Particles  options={particlesOptions} init={particlesInit} />
        <form action='' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the for below or shoot me an email</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder="Name" name="name" />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="email" name="email" />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder="Message"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'> Let's Collaborate </button>
        </form>
    </div>
  );
}

export default Contact