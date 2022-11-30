import React, { useState } from 'react';
import logo from '../assets/logo/logo.png';
import { FaBars, FaTimes, FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }
    return (
        <div className='md:fixed w-full  md:h-[80px] flex justify-between items-center px-4 '>
            <div>
                <NavLink to="/" end>
                    <img src={logo} alt="logo" style={{ width: '50px' }} />
                </NavLink>
            </div>
            {/* Menu */}
            <ul className='hidden lg:flex text-xl'>
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
            <div onClick={handleClick} className='lg:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-1/2 w-1/2 md:left-2/3 md:w-1/3 h-screen bg-[#BDE0FE] lg:hidden flex flex-col  justify-center items-center'}>
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
                <div className='flex gap-6 pt-20'>
                    <a href="https://www.facebook.com/Shreejal.Dhungana10" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={25} />
                    </a>
                    <a href="https://www.instagram.com/shreejal_dhungana/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={25} />
                    </a>
                    <a href="https://github.com/shreejal10" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/shreejal-dhungana/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed felx-col top-[30%] left-0'>
                <ul>
                    <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-1px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300 gap-2' href="https://www.facebook.com/Shreejal.Dhungana10" target="_blank" rel="noopener noreferrer">
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-1px] duration-300 instagram'>
                        <a className='flex justify-between items-center w-full text-gray-300 gap-2' href="https://www.instagram.com/shreejal_dhungana/" target="_blank" rel="noopener noreferrer">
                            Instagram <FaInstagram size={30} />
                        </a>
                    </li>
                    <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-1px] duration-300 bg-[#171515]'>
                        <a className='flex justify-between items-center w-full text-gray-300 gap-2' href="https://github.com/shreejal10" target="_blank" rel="noopener noreferrer">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-1px] duration-300 bg-[#0366C3]'>
                        <a className='flex justify-between items-center w-full text-gray-300 gap-2' href="https://www.linkedin.com/in/shreejal-dhungana/" target="_blank" rel="noopener noreferrer">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-1px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300 gap-2' href="https://user-images.githubusercontent.com/111437057/204592994-b22d547d-c704-4090-a672-592bc71e336f.png" target="_blank" rel="noopener noreferrer">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar