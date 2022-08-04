import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';
import {Link} from 'react-scroll';
import { HiArrowSmUp } from 'react-icons/hi';

const Footer = () => {
  return (
    <div className='w-full bg-[#0B1C36] flex py-10 px-4 text-gray-300'>
        <div className='grid mx-auto place-items-center'>
            <h1>@2022 Ivan Rezvetsov </h1>
        </div>
        <div className='max-w-[1240px] mx-auto flex-col'>
            <div className='flex text-center justify-between items-center'>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                    {/* <FaFacebook className='icon' src="github.com" /> */}
                    <a className='items-center w-full' href='https://github.com'>
                        <FaLinkedin size={30}/>
                    </a>
                    <a className='items-center w-full'
                    href='/'>
                        <FaFacebook size={30}/>
                    </a>
                    <a className='items-center w-full'
                    href='/'>
                        <FaTwitter size={30}/>
                    </a>
                    <a className='items-center w-full'
                    href='/'>
                        <FaYoutube size={30}/>
                    </a>
                    {/* <FaTwitter className='icon' />
                    <FaYoutube className='icon' />
                    <FaPinterest className='icon' />
                    <FaInstagram className='icon' /> */}
                </div>
                <div>
                    <ul className='hidden md:flex'>
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            <button className='group border-2 rounded-full  px-6 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                                <a href='/' className='group-hover:rotate-45 duration-300'>
                                    Back to home <HiArrowSmUp className='ml-3' />
                                </a>
                            </button>
                        </Link>
                    </li>
                    </ul>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Footer;