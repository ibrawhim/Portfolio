import { useState } from "react"
import Navbar from "./component/Navbar"
import SideBar from "./component/SideBar"
import {FaBars} from 'react-icons/fa'



function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
    document.querySelector('.mySide').computedStyleMap.display= 'block'
  }
  return (
    <>
    <div>
      <Navbar/>
      <ul className='lg:hidden sm:block'>
          <li className='w-screen'>
              <FaBars onClick={toggleIsOpen}/>
          </li>
      </ul>
      {isOpen && <SideBar handleClose={toggleIsOpen}/>}
    </div>
    </>
  )
}

export default App
