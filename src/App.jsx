import { useEffect, useState } from "react"
import Navbar from "./component/Navbar"
import SideBar from "./component/SideBar"
import {FaBars} from 'react-icons/fa'
import About from "./component/About"
import './index.css'
import Skills from "./component/Skills"
import Contact from "./component/Contact"
import Project from "./component/Project"
import Aos from "aos"
import 'aos/dist/aos.css'
import Services from "./component/Services"
import Footer from "./component/Footer"


function App() {
    
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <div className="font-[Quicksand]  overflow-x-hidden">
      <Navbar/>
      <ul className='lg:hidden sm:block fixed top-0 z-[10000] '>
          <li className='w-screen text-white bg-pink-900 p-3'>
              <FaBars onClick={toggleIsOpen}/>
          </li>
      </ul>
      {isOpen && <SideBar handleClose={toggleIsOpen}/>}
      <About/>
      <Skills/>
      <Project/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
