import Navbar from "./component/Navbar"
import React, { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import { navObj } from "./component/NavContent"


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
        <div className='top-0 my-0 min-h-screen w-2/3 hidden border border-4 py-10'>
        <aside>
            <div><AiOutlineClose onClick={toggleIsOpen}/></div>
            {
                navObj.map((items,index)=>(
                    <div key={index} className='pt-10'>{items.title}</div>
                ))
            }
        </aside>
      </div>
      {isOpen && <Navbar handleClose={toggleIsOpen}/>}
    </>
  )
}

export default App
