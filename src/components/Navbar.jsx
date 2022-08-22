import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaFacebook, FaInstagram, } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={logo} alt="logo" style={{ width: '50px' }} />
            </div>
            {/* Menu */}
            <ul className='hidden md:flex'>
                <li className='hover:text-[#44BB88]'>Home</li>
                <li className='hover:text-[#44BB88]'>About</li>
                <li className='hover:text-[#44BB88]'>Skills</li>
                <li className='hover:text-[#44BB88]'>Projects</li>
                <li className='hover:text-[#44BB88]'>Contact</li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-1/2 w-1/2 h-screen bg-[#0a192f] md:hidden flex flex-col  justify-center items-center'}>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>Home</li>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>About</li>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>Skills</li>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>Projects</li>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>Contact</li>
            </ul>

            {/* Social icons */}
            <div className='hidden laptop:flex fixed felx-col top-[30%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 instagram'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Instagram <FaInstagram size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#171515]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar