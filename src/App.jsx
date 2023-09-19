import { useState } from "react"
import Navbar from "./component/Navbar"
import SideBar from "./component/SideBar"
import {FaBars} from 'react-icons/fa'
import About from "./component/About"
import './index.css'
import Skills from "./component/Skills"
import Contact from "./component/Contact"




function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <div className="font-[Quicksand]">
      <Navbar/>
      <ul className='lg:hidden sm:block'>
          <li className='w-screen bg-pink-900 p-2'>
              <FaBars onClick={toggleIsOpen}/>
          </li>
      </ul>
      {isOpen && <SideBar handleClose={toggleIsOpen}/>}
      <About/>
      <Skills/>
      <Contact/>
    </div>
    </>
  )
}

export default App
