import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'
import { SiLinkedin } from 'react-icons/si'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className='bg-[#080808] border-t border-white/10'>
      <div className='max-w-6xl mx-auto px-5 sm:px-6 py-10'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>

          {/* Logo */}
          <div className='text-white font-bold text-xl tracking-tight'>
            <span className='text-[#e85d75]'>IB</span>
            <span className='text-white/25'>.</span>
          </div>

          {/* Nav */}
          <div className='flex items-center flex-wrap justify-center gap-4 sm:gap-6'>
            {['about', 'skills', 'portfolio', 'services', 'contact'].map(item => (
              <Link
                key={item}
                smooth to={item} offset={-80}
                className='cursor-pointer text-white/30 text-sm capitalize hover:text-white transition-colors duration-200'
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className='flex items-center gap-4'>
            <a href='https://github.com/ibrawhim' target='_blank' rel='noreferrer'
              className='text-white/25 hover:text-white transition-colors text-lg'>
              <AiOutlineGithub />
            </a>
            <a href='https://twitter.com/Yemi_artss' target='_blank' rel='noreferrer'
              className='text-white/25 hover:text-white transition-colors text-lg'>
              <RiTwitterXFill />
            </a>
            <a href='https://www.linkedin.com/in/adeniyi-ibrahim-7853b9202/' target='_blank' rel='noreferrer'
              className='text-white/25 hover:text-white transition-colors text-lg'>
              <SiLinkedin />
            </a>
          </div>

        </div>

        <div className='mt-8 pt-6 border-t border-white/5 text-center'>
          <p className='text-white/18 text-xs'>
            Ibrahim © {new Date().getFullYear()} — Your favourite fullstack developer
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer