import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import 'animate.css';
function Home() {
    return (
        <div name='home' className=' w-full h-screen'>

            {/* container */}
            <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#44BB88] animate__animated animate__flash animate__infinite'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900'>Shreejal Dhungana</h1>
                <h2 className='text-4xl sm:text-6xl md:text-7xl font-bold text-gray-500'>I'm a Front End Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a front-end developer specializing in building exceptional digital experience. Currently, I'm foccused on building responsive front-end web application</p>
                <div>
                    <NavLink to="/projects" className='flex items-center justify-between animate__animated animate__jackInTheBox '>
                        <button className='group border-2 px-6 py-3 my-2 flex items-center  bg-[#56aeff] border-[#56aeff] hover:scale-105 '>
                            View Work
                            <span>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Home