import React from 'react'
import { navObj } from './NavContent'
import {FaBars} from 'react-icons/fa'

const Navbar = ({handleClose}) => {
  return (
    <>
        <div>
            <nav className='flex justify-around'>
                <ul className='lg:hidden sm:block'>
                    <li className='w-screen'>
                        <FaBars/>
                    </li>
                </ul>
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