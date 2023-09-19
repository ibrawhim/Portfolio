import React, { useState } from 'react'
import { navObj } from './NavContent'
import {AiOutlineClose} from "react-icons/ai"


const SideBar = ({handleClose}) => {

  return (
    <>
      <div className='fixed z-[1000000] top-0 bottom-0 my-0 min-h-screen w-2/3 py-5 bg-pink-900 border border-sky-950'>
        <aside>
            <div><AiOutlineClose className='float-right m-5 text-2xl text-sky-950' onClick={handleClose}/></div>
            {
                navObj.map((items,index)=>( 
                    <div key={index} className='pt-20 text-sky-950 text-center font-bold'>{items.title}</div>
                ))
            }
        </aside>
      </div>
    </>
  )
}

export default SideBar