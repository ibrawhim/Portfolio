import React from 'react'
import { navObj } from './NavContent'


const Navbar = () => {
  return (
    <>
        <div>
            <nav className='flex justify-around'>
                <ul className='hidden lg:block'>
                    <li className='flex justify-between border'>
                {
                    navObj.map((items,index)=>(
                    <div key={index} className='mx-10'>
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