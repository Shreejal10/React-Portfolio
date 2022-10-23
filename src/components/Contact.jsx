import React from 'react'
import 'animate.css';
function Contact() {
    return (
        <div name='contact' className='w-full h-screen  flex justify-center items-center  pt-16 md:pt-10'>
            <form method='POST' action="https://getform.io/f/0cfcd49b-8ca5-494e-befe-b532b57ccecc" className='flex flex-col max-w-[600px] w-full mx-4'>
                <div className='pb-8' >
                    <div className='animate__animated animate__slideInUp'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#44BB88] text-gray-900'>Contact</p>
                    </div>
                    <p className='text-gray-500 py-4'>Submit the form below or send me an email - dshreejal@gmail.com</p>
                </div>
                <input type="text" placeholder='Name' name="name"
                    className='bg-gray-300 p-2' required />
                <input type="email" placeholder='Email' name="email" className='my-4 p-2 bg-gray-300' required />
                <textarea name="message" placeholder='Message' rows="10" className='bg-gray-300 p-2' required></textarea>
                <button className='text-white border-2 = bg-[#56aeff] border-[#56aeff] px-4 py-3 my-8 mx-auto flex items-center hover:scale-105' >Let's Collaborate</button>
            </form >

        </div >
    )
}

export default Contact