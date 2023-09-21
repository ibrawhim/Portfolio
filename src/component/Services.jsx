import React from 'react'
import {GiLightningFrequency}  from 'react-icons/gi'
import {VscDebug} from 'react-icons/vsc'
import {MdAppSettingsAlt} from 'react-icons/md'
import {PiBracketsAngleFill} from 'react-icons/pi'

const Services = () => {
  return (
    <>
        <div className='my-0' id='services'>
            <section data-aos="fade-left">
                <div className='grid lg:grid-cols-2'>
                    <div className='bg-pink-700 px-8 py-10'>
                        <h1 className='text-2xl text-sky-900 font-bold my-6'><span className='me-2'>--------</span>Services</h1>
                        <div className='my-16'>
                            <h3 className='text-xl font-semibold text-white flex gap-2'><span className='text-sky-900 '><GiLightningFrequency/></span> Web Designing</h3>
                            <p className='text-white font-semibold'>Cater to clients looking for nostalgic or web design styles that evoke the aesthetics of past internet eras.</p>
                        </div>
                        <div className='my-16'>
                            <h3 className='text-xl font-semibold text-white flex gap-2'><span className='text-sky-900'><GiLightningFrequency/></span> Progressive Web Application</h3>
                            <p className='text-white font-semibold'>Create web applications that function like native apps, offering features like offline access, push notifications, and fast loading times.</p>
                        </div>
                        <div className='my-16'>
                            <h3 className='text-xl font-semibold text-white flex gap-2'><span className='text-sky-900'><GiLightningFrequency/></span> Interactive Websites</h3>
                            <p className='text-white font-semibold'>Craft interactive storytelling experiences that blend text, images, animations, and user interactions to engage and captivate visitors.

</p>
                        </div>
                    </div>
                    <div className='bg-white px-8 py-10'>
                        <div className='text-center my-5'>
                            <p className='text-pink-700 text-4xl font-bold flex justify-center'><PiBracketsAngleFill/></p>
                            <h1 className='font-bold text-black text-2xl'>Web Design</h1>
                            <p>Web design is the digital choreography of visual and interactive elements, a harmonious symphony of colors, typography, shapes, and functionality that, when orchestrated with creativity and precision, transforms the blank canvas of a webpage into an immersive, navigable experience.</p>
                        </div>
                        <div className='text-center my-5'>
                            <p className='text-pink-700 text-4xl font-bold flex justify-center'><MdAppSettingsAlt/></p>
                            <h1 className='font-bold text-black text-2xl'>Web App Development</h1>
                            <p>Web app development is the artful fusion of technology and user-centric creativity, its a process where lines of code develops into dynamic, accessible portals that helps individuals to easily engage with services, data, and experiences.</p>
                        </div>
                        <div className='text-center my-5'>
                            <p className='text-pink-700 text-4xl font-bold flex justify-center'><VscDebug/></p>
                            <h1 className='font-bold text-black text-2xl'>Bug Fixing</h1>
                            <p>Bug fixing is the digital detective work of smartly solving the tangled threads of software anomalies, its an endeavor where developers identify, isolate, and mend the quirks and glitches that disrupt the seamless tapestry of a program.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Services