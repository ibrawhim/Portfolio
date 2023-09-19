import React from 'react'
import amico from '../images/amico.png'

const About = () => {
  return (
    <div>
        <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-10 gap:10 mx-5'>
            <div className='text-white font-[Quicksand]  lg:px-10 lg:py-10 '>
                <h1 className='text-4xl'>Hi, I'm <span className='text-pink-700 font-bold'>Ibrahim</span>, <br /> a <span className='text-pink-700 font-semibold'>fullstack developer</span>.</h1>
                <h6 className='my-3'>About me:</h6>
                <p className='font-semibold mt-3 mb-5'>I am a passionate fullstack developer with a strong background in creating both dynamic and non-dynamic websites using advanced HTML, CSS and Javascript. With a relentless commitment to excellence, I do not give up when  tackling challenges and finding innovative solutions. My skill set, joined with a love for continuous learning, allows me to triumph in dynamic environments and contribute to meaningful projects.</p>
                <span>
                    <a href="" className='border p-2 rounded bg-pink-700 font-bold'>See my work</a>
                    <a href="" className='mx-5 border p-2 rounded bg-white text-pink-700 font-bold'>Download CV</a>
                </span>
            </div>
            <div className='lg:ms-10 px-10'>
                <img src={amico} width={400} alt="" />
            </div>
        </section>
    </div>
  )
}

export default About