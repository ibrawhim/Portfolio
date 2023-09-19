import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
import {RiTwitterXFill} from 'react-icons/ri'
import {SiLinkedin} from 'react-icons/si'

const Contact = () => {
  return (
    <>
        <div>
            <section>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                    <form action="" className='bg-sky-900 p-5'>
                        <div className='flex flex-col'>
                            <label htmlFor="name">Name:</label>
                            <input type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email">Email:</label>
                            <input type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="company">Company:</label>
                            <input type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="message">Message:</label>
                            <textarea name="" id="" cols="30" rows="5"></textarea>
                        </div>
                        <div className='flex flex-col'>
                            <button>Send Message</button>
                        </div>
                    </form>
                    <div className='flex justify-center items-center gap-5 bg-white px-5'>
                        <a href="" className='text-4xl'><AiOutlineGithub/></a>
                        <a href="" className='text-4xl'><RiTwitterXFill/></a>
                        <a href="" className='text-4xl'><SiLinkedin/></a>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Contact