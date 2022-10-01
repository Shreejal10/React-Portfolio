import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaFacebook, FaInstagram, } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <NavLink to="/" end>
                    <img src={logo} alt="logo" style={{ width: '50px' }} />
                </NavLink>
            </div>
            {/* Menu */}
            <ul className='hidden md:flex'>
                <li className='hover:text-[#44BB88]'>
                    <NavLink to="/" end  >
                        Home
                    </NavLink>
                </li>
                <li className='hover:text-[#44BB88]'>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
                <li className='hover:text-[#44BB88]'>
                    <NavLink to="/skills">
                        Skills
                    </NavLink>
                </li>
                <li className='hover:text-[#44BB88]'>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                </li>
                <li className='hover:text-[#44BB88]'>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-1/2 w-1/2 h-screen bg-[#0a192f] md:hidden flex flex-col  justify-center items-center'}>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>
                    <NavLink onClick={handleClick} to="/" end>
                        Home
                    </NavLink>
                </li>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>
                    <NavLink onClick={handleClick} to="/about">
                        About
                    </NavLink>
                </li>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>
                    <NavLink onClick={handleClick} to="/skills">
                        Skills
                    </NavLink>
                </li>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>
                    <NavLink onClick={handleClick} to="/projects">
                        Projects
                    </NavLink>
                </li>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>
                    <NavLink onClick={handleClick} to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed felx-col top-[30%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.facebook.com/Shreejal.Dhungana10" target="_blank" rel="noopener noreferrer">
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 instagram'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.instagram.com/shreejal_dhungana/" target="_blank" rel="noopener noreferrer">
                            Instagram <FaInstagram size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#171515]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/shreejal10" target="_blank" rel="noopener noreferrer">
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