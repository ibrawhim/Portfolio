import { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Services from './component/Services'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Loader from './component/Loader'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './index.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Aos.init({ duration: 900, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.6s ease 0.1s',
        }}
        className='font-[Quicksand] overflow-x-hidden bg-[#080808]'
      >
        <Navbar />
        <About />
        <Skills />
        <Project />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App