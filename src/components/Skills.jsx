import React from 'react'
import 'animate.css';
import HTML from '../assets/technologies/html.png'
import CSS from '../assets/technologies/css.png'
import JavaScript from '../assets/technologies/javascript.png'
import ReactImg from '../assets/technologies/react.png'
import BootStrap from '../assets/technologies/bootstrap.png'
import TailWind from '../assets/technologies/tailwind.png'
import C from '../assets/technologies/c.png'
import CPP from '../assets/technologies/cpp.png'
import GitHub from '../assets/technologies/github.png'
import Python from '../assets/technologies/python.png'
import Node from '../assets/technologies/node.png'
import MongoDB from '../assets/technologies/mongo.png'
import Firebase from '../assets/technologies/firebase.png'
import Git from '../assets/technologies/git.png'


const Skills = () => {
    return (
        <div name='skills' className='w-full md:h-screen  text-gray-300 pt-16 md:pt-0'>
            {/* COntainer */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <div className='animate__animated animate__backInDown'>
                        <p className='text-4xl font-bold text-gray-900 inline border-b-4 border-[#44BB88] '>Skills</p>
                    </div>
                    <p className='py-4 text-gray-500'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 justify-items-center md:grid-cols-6 lg:grid-cols-8 gap-3 text-center'>
                    <a className='w-28 h-28 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#275292] pt-2' href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                        <img className='w-14  md:w-20 mx-auto' src={HTML} alt="Html icon" />
                        <p className=''>HTML</p>
                    </a>
                    <a className='w-28 h-28 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#275292] pt-2' href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                        <img className='w-14 md:w-20 mx-auto' src={CSS} alt="Html icon" />
                        <p className=''>CSS</p>
                    </a>
                    <a className='w-28 h-28 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#275292] pt-2' href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                        <img className='w-14 md:w-20 mx-auto' src={BootStrap} alt="Html icon" />
                        <p className=''>BOTSTRAP</p>
                    </a>
                    <a className='w-28 h-28 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#275292] pt-2' href="https://www.cprogramming.com/" target="_blank" rel="noopener noreferrer">
                        <img className='w-14 md:w-20 mx-auto' src={C} alt="Html icon" />
                        <p className=''>C</p>
                    </a>
                    <a className='w-28 h-28 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#275292] pt-2' href="https://www.cprogramming.com/" target="_blank" rel="noopener noreferrer">
                        <img className='w-14 md:w-20 mx-auto' src={CPP} alt="Html icon" />
                        <p className=''>CPP</p>
                    </a>
                    <a className='w-28 h-28 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#275292] pt-2' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                        <img className='w-14 md:w-20 mx-auto' src={JavaScript} alt="Html icon" />
                        <p className=''>JAVASCRIPT</p>
                    </a>
                    <a className='w-28 h-28 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#275292] pt-2' href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        <img className='w-14 md:w-20 mx-auto' src={ReactImg} alt="Html icon" />
                        <p className=''>REACT</p>
                    </a>
                    <a className='w-28 h-28 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#275292] pt-2' href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                        <img className='w-14 md:w-20 mx-auto' src={TailWind} alt="Html icon" />
                        <p className=''>TAILWIND</p>
                    </a>
                    <a className='w-28 h-28 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#275292] pt-2' href="https://www.python.org" target="_blank" rel="noopener noreferrer">
                        <img className='w-14 md:w-20 mx-auto' src={Python} alt="Html icon" />
                        <p className=''>PYTHON</p>
                    </a>
                    <a className='w-28 h-28 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#275292] pt-2' href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                        <img className='w-14 md:w-20 mx-auto' src={Node} alt="Html icon" />
                        <p className=''>NODE JS</p>
                    </a>
                    <a className='w-28 h-28 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#275292] pt-2' href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">
                        <img className='w-14 md:w-20 mx-auto' src={MongoDB} alt="Html icon" />
                        <p className=''>MONGO DB</p>
                    </a>
                    <a className='w-28 h-28 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#275292] pt-2' href="https://firebase.google.com" target="_blank" rel="noopener noreferrer">
                        <img className='w-14 md:w-20 mx-auto' src={Firebase} alt="Html icon" />
                        <p className=''>FIREBASE</p>
                    </a>
                    <a className='w-28 h-28 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#275292] pt-2' href="https://git-scm.com" target="_blank" rel="noopener noreferrer">
                        <img className='w-14 md:w-20 mx-auto' src={Git} alt="Html icon" />
                        <p className=''>GIT</p>
                    </a>
                    <a className='w-28 h-28 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#275292] pt-2' href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <img className='w-14 md:w-20 mx-auto' src={GitHub} alt="Html icon" />
                        <p className=''>GITHUB</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Skills