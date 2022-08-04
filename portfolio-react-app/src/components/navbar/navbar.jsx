import React, { useState } from 'react';

import {FaBars, FaTimes, FaGithub, FaAward, FaYoutube} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import Logo from '../../assets/logo.png';
import Resume from '../../assets/resume.pdf';
import {Link} from 'react-scroll';

const navbar = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] z-50 flex justify-between items-center px-4 bg-[#0B1C36] text-gray-300'>
            <div>
                <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
            </div>

            {/* menu */}
                <ul className='hidden md:flex'>
                    <li className='hover:bg-[#8892b0] duration-500'>
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='hover:bg-[#8892b0] duration-500'>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className='hover:bg-[#8892b0] duration-500'>
                        <Link to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className='hover:bg-[#8892b0] duration-500'>
                        <Link to="tools" smooth={true} duration={500}>
                            Tools
                        </Link>
                    </li>
                    <li className='hover:bg-[#8892b0] duration-500'>
                        <Link to="work" smooth={true} duration={500}>
                            YouTube
                        </Link>
                    </li>
                    <li className='hover:bg-[#8892b0] duration-500'>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Hamb */}
                <div onClick={handleClick} className='md:hidden z-10'>
                    {!nav ? <FaBars />: <FaTimes /> }
                </div>


                {/* Mobile menu */}
                <ul 
                  className={
                    !nav 
                    ? 'hidden'
                    : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                    }
                    >
                    <li className='py-6 text-4xl '><Link onClick={handleClick}  to="home" smooth={true} duration={500}>
                            Home
                        </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick}  to="about" smooth={true} duration={500}>
                            About
                        </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                            Skills
                        </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to="tools" smooth={true} duration={500}>
                            Tools
                        </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
                            YouTube
                        </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                            Contact
                        </Link></li>
                </ul>
                {/* Social icons */}
                <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                    <ul>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                            <a className=' flex justify-between items-center w-full text-gray-300'
                            href='https://habr.com/ru/users/IvanRezv/posts/'>
                                Habr <FaAward size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                            <a className=' flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/IvanRezv'>
                                Github <FaGithub size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF0000]'>
                            <a className=' flex justify-between items-center w-full text-gray-300'
                            href='https://www.youtube.com/channel/UCp9szwN9vMQGj7aFuoIHjhg'>
                                YouTube <FaYoutube size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                            <a className=' flex justify-between items-center w-full text-gray-300'
                            href='mailto:ivanrezv@icloud.com?subject=Want to say smth to you'>
                                Email <HiOutlineMail size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                            <a className=' flex justify-between items-center w-full text-gray-300'
                            href={Resume} download>
                                Resume <BsFillPersonLinesFill size={30}/>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default navbar