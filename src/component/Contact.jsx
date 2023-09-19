import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
import {RiTwitterXFill} from 'react-icons/ri'
import {SiLinkedin} from 'react-icons/si'

const Contact = () => {
  return (
    <>
        <div className='px-8'>
            <h1 className='mx-5 mt-5 text-xl text-white font-bold'><span className='me-2'>--------</span>Contact me</h1>
            <section >
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
                    <form action="" className='bg-sky-900 p-5'>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="name" className='text-pink-700 font-bold'>Name:</label>
                            <input className='py-1 rounded' type="text" />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="email" className='text-pink-700 font-bold'>Email:</label>
                            <input className='py-1 rounded' type="text" />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="company" className='text-pink-700 font-bold'>Company:</label>
                            <input className='py-1 rounded' type="text" />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="message" className='text-pink-700 font-bold'>Message:</label>
                            <textarea className='rounded' name="" id="" cols="30" rows="5"></textarea>
                        </div>
                        <div className='flex flex-col my-2'>
                            <button className='bg-pink-700 text-white py-1 rounded'>Send Message</button>
                        </div>
                    </form>
                    <div className='flex justify-center items-center gap-5 px-5 sm:my-10'>
                        <a href="https://github.com/ibrawhim" className='text-4xl text-white hover:scale-150 hover:text-pink-700'><AiOutlineGithub/></a>
                        <a href="https://twitter.com/Yemi_artss" className='text-4xl text-white hover:scale-150 hover:text-pink-700'><RiTwitterXFill/></a>
                        <a href="https://www.linkedin.com/in/adeniyi-ibrahim-7853b9202/" className='text-4xl text-white hover:scale-150 hover:text-pink-700'><SiLinkedin/></a>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Contact