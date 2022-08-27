import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
function Home() {
    return (
        <div name='home' className='bg-[#0a192f] w-full h-screen'>

            {/* container */}
            <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#44BB88]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold text-[#ccd6f6]'>Shreejal Dhungana</h1>
                <h2 className='text-4xl sm:text-6xl md:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a front-end developer specializing in building (and occasionally designing) exceptional digital experience. Currently, I'm foccused on building responsive front-end web application</p>
                <div>
                    <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#44BB88] hover:border-[#44BB88]'>
                        <Link to="work" smooth={true} duration={300}>
                            View Work
                        </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home