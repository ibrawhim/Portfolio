import React from 'react'
import { navObj } from './NavContent'
import {Link} from 'react-scroll'


const Navbar = () => {
  return (
    <>
        <div className='bg-pink-700 border border-pink-900 fixed w-full top-0 z-[10]'>
            <nav className='flex justify-around'>
                <ul className='hidden lg:block'>
                    <li className='flex justify-between border-sky-700 border-2 py-3'>
                {
                    navObj.map((items,index)=>(
                    <Link smooth to={items.link} key={index} className='cursor-pointer px-2 mx-4 text-white font-bold hover:bg-white hover:text-pink-700 hover:rounded'>
                        <div>{items.title}</div>
                    </Link>  
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