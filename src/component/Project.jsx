import React from 'react'
import { project } from './ProjectList'

const Project = () => {
  return (
    <>
        <div>
            <section>
                <div className='border border-red-500'>
                    {
                        project.map((items, index)=>(
                            <div key={index}>
                               <div>{items.name}</div>
                               <div>{items.info}</div>
                               <div>{items.tools}</div>
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