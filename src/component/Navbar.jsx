import React, { useState, useEffect } from 'react'
import { navObj } from './NavContent'
import { Link } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <nav className='max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between'>
          {/* Logo */}
          <div className='text-white font-bold text-xl tracking-tight'>
            <span className='text-[#e85d75]'>IB</span>
            <span className='text-white/30'>.</span>
          </div>

          {/* Desktop links */}
          <ul className='hidden lg:flex items-center gap-1'>
            {navObj.map((item, index) => (
              <li key={index}>
                <Link
                  smooth
                  to={item.link}
                  offset={-80}
                  spy={true}
                  activeClass='!text-white'
                  className='cursor-pointer relative px-4 py-2 text-sm font-medium text-white/50 hover:text-white transition-colors duration-200 group'
                >
                  {item.title}
                  <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#e85d75] group-hover:w-4 transition-all duration-300 rounded-full' />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href='https://drive.google.com/file/d/1cnjU4Lq7zw3utvnDbZ7rmb6-5hVffaeN/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
            className='hidden lg:block text-sm font-semibold px-5 py-2 rounded-full border border-[#e85d75] text-[#e85d75] hover:bg-[#e85d75] hover:text-white transition-all duration-300'
          >
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className='lg:hidden text-white/60 hover:text-white text-xl p-1'
            aria-label='Open menu'
          >
            <FaBars />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className='fixed inset-0 z-[100000] flex lg:hidden'>
          <div
            className='absolute inset-0 bg-black/70 backdrop-blur-sm'
            onClick={() => setMobileOpen(false)}
          />
          <aside className='relative z-10 w-72 min-h-screen bg-[#0d0d0d] border-r border-white/10 flex flex-col py-8 px-6'>
            <div className='flex items-center justify-between mb-12'>
              <span className='text-white font-bold text-xl'>
                <span className='text-[#e85d75]'>IB</span>
                <span className='text-white/25'>.</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className='text-white/40 hover:text-white transition-colors p-1'
                aria-label='Close menu'
              >
                <AiOutlineClose className='text-xl' />
              </button>
            </div>

            <nav className='flex flex-col gap-1'>
              {navObj.map((item, index) => (
                <Link
                  key={index}
                  smooth
                  to={item.link}
                  offset={-80}
                  onClick={() => setMobileOpen(false)}
                  className='group flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer'
                >
                  <span className='text-[#e85d75] text-lg'>{item.icon}</span>
                  <span className='font-medium text-sm tracking-wide'>{item.title}</span>
                </Link>
              ))}
            </nav>

            <div className='mt-auto pt-8 border-t border-white/10'>
              <a
                href='https://drive.google.com/file/d/1cnjU4Lq7zw3utvnDbZ7rmb6-5hVffaeN/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
                className='block text-center text-sm font-semibold px-5 py-2.5 rounded-full border border-[#e85d75] text-[#e85d75] hover:bg-[#e85d75] hover:text-white transition-all duration-300 mb-4'
              >
                Download Resume
              </a>
              <p className='text-white/20 text-xs text-center'>Ibrahim © {new Date().getFullYear()}</p>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}

export default Navbar