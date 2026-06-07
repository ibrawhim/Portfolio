import { useEffect } from 'react'
import Navbar from './component/Navbar'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Services from './component/Services'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './index.css'

function App() {
  useEffect(() => {
    Aos.init({ duration: 900, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    <div className='font-[Quicksand] overflow-x-hidden bg-[#080808]'>
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App