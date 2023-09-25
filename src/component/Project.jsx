import React from 'react'
import { project } from './ProjectList'

const Project = () => {
  return (
    <>
        <div>
            <section id='portfolio'>
                <div className='pt-5 text-2xl text-white font-bold mx-12'>
                    <h1><span className='me-2'>--------</span>My Projects</h1>
                </div>
                <div className=' lg:grid-cols-1 text-white' data-aos="zoom-in">
                    {
                        project.map((items, index)=>(
                            <div key={index} className='lg:flex justify-between  shadow'  data-aos="zoom-in">
                            <div className='lg:w-1/2 m-10'>
                               <div className='text-white text-2xl font-bold'>{items.name}</div>
                               <div>{items.info}</div>
                               <div className='my-4'>{items.tools}</div>
                               <a href={items.link} className={`${items.color} ${items.bg} p-2 font-semibold rounded`}>Check here</a>
                            </div>
                            <div className='m-10'>
                                <img src={items.img} width={200} height={10} alt="" />
                            </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    </>
  )
}

export default Project