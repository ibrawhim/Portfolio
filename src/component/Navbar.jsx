import React from 'react'
import { navObj } from './NavContent'


const Navbar = () => {
  return (
    <>
        <div className='bg-pink-700 border border-pink-900'>
            <nav className='flex justify-around'>
                <ul className='hidden lg:block'>
                    <li className='flex justify-between border border-sky-700 border-2 py-3'>
                {
                    navObj.map((items,index)=>(
                    <div key={index} className='mx-10 text-sky-900 font-bold'>
                        {items.title}
                    </div>  
                    ))
                }
                    </li>

                </ul>
            </nav>
        </div>
    </>
  )
}

export default Navbar