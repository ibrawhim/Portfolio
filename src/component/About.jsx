import React, { useEffect } from 'react'
import amico from '../images/amico.png'
import Aos from 'aos'
import { TypeAnimation } from 'react-type-animation'
import {Link} from 'react-scroll'


const About = () => {
    useEffect(() => {
      Aos.init({
        duration:3000
      })
    }, [])
    
  return (
    <div id='about'>
        <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-20 gap:10 mx-5'>
            <div className='text-white font-[Quicksand]  lg:px-10 lg:py-10' data-aos="fade-up">
                <h1 className='text-4xl'>Hi, I'm <span className='text-pink-700 font-bold'>Ibrahim</span>, <br /> a <span className='text-pink-700 font-semibold'>fullstack developer</span>.</h1>
                <h2 className='text-3xl mt-2'>
                    An expert in {" "}
                    <TypeAnimation
                        sequence={[
                            "Javascript", 500,
                            "React", 500,
                            "CSS", 500,
                            "Node JS", 500,
                            "HTML", 500,
                            "Firebase", 500,
                            "Express", 500,
                            "Mongo DB", 500,
                            "Tailwind Css", 500,
                        ]}
                        style={{fontSize: "1em"}}
                        repeat={Infinity}
                    />
                </h2>
                <h6 className='my-3 text-xl font-bold'><span className='font-bold me-2'>--------</span>About me:</h6>
                <p className='font-semibold mt-3 mb-5'>I am a passionate fullstack developer with a strong background in creating both dynamic and non-dynamic websites using advanced HTML, CSS, Javascript, Node js, and React. With a relentless commitment to excellence, I do not give up when  tackling challenges and finding innovative solutions. My skill set, joined with a love for continuous learning, allows me to triumph in dynamic environments and contribute to meaningful projects.</p>
                <span>
                    <Link id='portfolio' href="" className='border p-2 rounded bg-pink-700 font-bold  hover:bg-white hover:text-pink-700'>See my work</Link>
                    <a href="https://drive.google.com/file/d/1cnjU4Lq7zw3utvnDbZ7rmb6-5hVffaeN/view?usp=sharing" className='mx-5 border p-2 rounded bg-white text-pink-700  font-bold hover:bg-pink-700 hover:text-white'>Download CV</a>
                </span>
            </div>
            <div className='lg:ms-10 sm:py-10 px-10' data-aos="fade-down">
                <img className='img-fluid' src={amico} width={400} alt="" />
            </div>
        </section>
        <hr/>
    </div>
  )
}

export default About