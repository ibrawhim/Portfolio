import { useState } from "react"
import Navbar from "./component/Navbar"
import SideBar from "./component/SideBar"
import {FaBars} from 'react-icons/fa'
import About from "./component/About"



function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <div>
      <Navbar/>
      <ul className='lg:hidden sm:block'>
          <li className='w-screen bg-pink-900 p-2'>
              <FaBars onClick={toggleIsOpen}/>
          </li>
      </ul>
      {isOpen && <SideBar handleClose={toggleIsOpen}/>}
      <About/>
    </div>
    </>
  )
}

export default App
