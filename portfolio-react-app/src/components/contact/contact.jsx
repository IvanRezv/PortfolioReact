import React,{ useCallback, useRef, useState} from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('', '', form.current, '')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
      <Particles  options={particlesOptions} init={particlesInit} />
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder="Name" name="name" />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name="email" />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder="Message"></textarea>
            <button type='submit' className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'> Let's Collaborate </button>
            <span className='text-gray-300 py-3  text-center' >{done && "Thanks for contacting me!"}</span>
        </form>
    </div>
  );
}

export default Contact