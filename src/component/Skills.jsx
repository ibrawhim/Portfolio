import React from 'react'
import { skills } from './SkillList'

const Skills = () => {
  return (
    <>
        <div className='py-10 px-10'>
            <h1 className='my-5 mx-5 text-pink-700 font-bold'><span className='me-2'>--------</span>Skills and Tools</h1>
            <div className='grid lg:grid-cols-6 justify-center items-center grid-cols-3 mx-2 gap-5 lg:ms-5'>
        {
            skills.map((item, index)=>(
                <div key={index} className={`${item.bg} grid justify-center items-center py-4 rounded hover:scale-110`}>
                    <div className={`${item.color} text-3xl mx-3`}>{item.icon}</div>
                    <div className={`${item.color} ${item.mx}`}>{item.title}</div>
                </div>
            ))
        }

            </div>
        
         </div>
         <hr />
    </>
  )
}

export default Skills