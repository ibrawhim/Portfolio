import React, { useState } from 'react'
import { navObj } from './NavContent'
import {AiOutlineClose} from "react-icons/ai"
import {Link} from 'react-scroll'


const SideBar = ({handleClose}) => {

  return (
    <>
      <div className='fixed z-[1000000] top-0 bottom-0 my-0 min-h-screen w-2/3 py-5 bg-pink-900 border border-sky-950'>
        <aside>
            <div><AiOutlineClose className='float-right m-5 text-2xl text-white' onClick={handleClose}/></div>
            {
                navObj.map((items,index)=>( 
                  <Link smooth key={index} to={items.link} onClick={handleClose}>
                          <div  className='pt-16 pb-4 cursor-pointer text-white text-center font-bold'>{items.title} <hr /></div>
                        </Link>
                ))
            }
        </aside>
      </div>
    </>
  )
}

export default SideBar