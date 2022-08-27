import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import BootStrap from '../assets/bootstrap.png'
import TailWind from '../assets/tailwind.png'
import C from '../assets/c.png'
import CPP from '../assets/cpp.png'
import GitHub from '../assets/github.png'
import Python from '../assets/python.png'


const Skills = () => {
    return (
        <div name='skills' className='w-full h-full md:h-screen bg-[#0a192f] text-gray-300'>
            {/* COntainer */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#44BB88] '>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center py-8'>
                    <div className='shadow-md shado-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-14  md:w-20 mx-auto' src={HTML} alt="Html icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shado-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-14 md:w-20 mx-auto' src={CSS} alt="Html icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shado-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-14 md:w-20 mx-auto' src={JavaScript} alt="Html icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shado-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-14 md:w-20 mx-auto' src={ReactImg} alt="Html icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shado-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-14 md:w-20 mx-auto' src={TailWind} alt="Html icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shado-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-14 md:w-20 mx-auto' src={BootStrap} alt="Html icon" />
                        <p className='my-4'>BOTSTRAP</p>
                    </div>
                    <div className='shadow-md shado-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-14 md:w-20 mx-auto' src={C} alt="Html icon" />
                        <p className='my-4'>C</p>
                    </div>
                    <div className='shadow-md shado-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-14 md:w-20 mx-auto' src={CPP} alt="Html icon" />
                        <p className='my-4'>CPP</p>
                    </div>
                    <div className='shadow-md shado-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-14 md:w-20 mx-auto' src={Python} alt="Html icon" />
                        <p className='my-4'>PYTHON</p>
                    </div>
                    <div className='shadow-md shado-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-14 md:w-20 mx-auto' src={GitHub} alt="Html icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills