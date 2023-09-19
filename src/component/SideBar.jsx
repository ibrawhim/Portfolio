import React, { useState } from 'react'
import { navObj } from './NavContent'
import {AiOutlineClose} from "react-icons/ai"


const SideBar = ({handleClose}) => {

  return (
    <>
      <div className='top-0 my-0 min-h-screen w-2/3 hidden border border-4 py-10'>
        <aside>
            <div><AiOutlineClose onClick={handleClose}/></div>
            {
                navObj.map((items,index)=>( 
                    <div key={index} className='pt-10'>{items.title}</div>
                ))
            }
        </aside>
      </div>
    </>
  )
}

export default SideBar