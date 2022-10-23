import React from 'react';
import photo from '../assets/profile/photo.jpg';
import 'animate.css';
const About = () => {
    return (
        <div name='about' className='w-full h-screen  '>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4 animate__animated animate__rollIn '>
                        <p className='text-4xl font-bold inline border-b-4 border-[#44BB88] text-gray-900 '>About</p>
                    </div>
                    <div></div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='flex items-center justify-center sm:justify-end'>
                        <p>
                            <img src={photo} alt="" className='h-56 w-56 rounded-[200%]' />
                        </p>
                    </div>
                    <div className='text-[#8892b0] flex items-center justify-center'>
                        <p>I am a passionate, enthusiastic web developer and computer science student. I love learning new programming languages and technologies. I am passionate about building excellent software that improves the lives of those around me.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About