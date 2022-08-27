import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaFacebook, FaInstagram, } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll'
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
                <li className='hover:text-[#44BB88]'>
                    <Link to="home" smooth={true} duration={300}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-[#44BB88]'>
                    <Link to="about" smooth={true} duration={300}>
                        About
                    </Link>
                </li>
                <li className='hover:text-[#44BB88]'>
                    <Link to="skills" smooth={true} duration={300}>
                        Skills
                    </Link>
                </li>
                <li className='hover:text-[#44BB88]'>
                    <Link to="work" smooth={true} duration={300}>
                        Projects
                    </Link>
                </li>
                <li className='hover:text-[#44BB88]'>
                    <Link to="contact" smooth={true} duration={300}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-1/2 w-1/2 h-screen bg-[#0a192f] md:hidden flex flex-col  justify-center items-center'}>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={300}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={300}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={300}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={300}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-3xl hover:text-[#44BB88]'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={300}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed felx-col top-[30%] left-0'>
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