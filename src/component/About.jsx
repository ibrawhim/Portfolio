import React, { useEffect } from 'react'
import Aos from 'aos'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { AiOutlineGithub } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'
import { SiLinkedin } from 'react-icons/si'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 900, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    <section
      id='about'
      style={{ minHeight: '100vh' }}
      className='relative flex items-center overflow-hidden bg-[#080808]'
    >
      {/* Grid background */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          opacity: 0.04,
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '55px 55px',
        }}
      />

      {/* Ambient glow */}
      <div
        className='absolute pointer-events-none'
        style={{
          top: '50%',
          left: '33%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(232,93,117,0.06)',
          filter: 'blur(110px)',
        }}
      />

      <div className='relative w-full max-w-6xl mx-auto px-5 sm:px-6' style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>

          {/* ── Text ── */}
          <div data-aos='fade-right' className='order-2 lg:order-1'>

            {/* Badge */}
            <div
              className='inline-flex items-center gap-2 mb-6'
              style={{
                padding: '5px 14px',
                borderRadius: '999px',
                border: '1px solid rgba(232,93,117,0.3)',
                background: 'rgba(232,93,117,0.1)',
              }}
            >
              <span
                style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#e85d75', display: 'inline-block',
                  animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
                }}
              />
              <span style={{ color: '#e85d75', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Available for work
              </span>
            </div>

            {/* Name */}
            <h1 className='text-white font-bold leading-tight mb-3' style={{ fontSize: 'clamp(2.4rem, 6vw, 3.8rem)' }}>
              Hi, I'm <br />
              <span style={{ color: '#e85d75' }}>Ibrahim</span>
            </h1>

            {/* Type animation */}
            <div className='mb-6' style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: 500, minHeight: '2rem' }}>
              <TypeAnimation
                sequence={[
                  'Fullstack Developer', 1500,
                  'React Specialist', 1200,
                  'Node.js Engineer', 1200,
                  'UI Craftsman', 1200,
                ]}
                repeat={Infinity}
              />
            </div>

            {/* Bio */}
            <p className='mb-8 leading-relaxed' style={{ color: 'rgba(255,255,255,0.42)', fontSize: '0.95rem', maxWidth: '460px' }}>
              A passionate fullstack developer with a strong background in creating dynamic
              web experiences using React, Node.js, and modern tooling. I thrive on solving
              hard problems and building things that genuinely matter.
            </p>

            {/* Socials */}
            <div className='flex items-center gap-5 mb-8'>
              {[
                { href: 'https://github.com/ibrawhim', icon: <AiOutlineGithub /> },
                { href: 'https://twitter.com/Yemi_artss', icon: <RiTwitterXFill /> },
                { href: 'https://www.linkedin.com/in/adeniyi-ibrahim-7853b9202/', icon: <SiLinkedin /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target='_blank' rel='noreferrer'
                  style={{ color: 'rgba(255,255,255,0.28)', fontSize: '1.25rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className='flex flex-wrap gap-3'>
              <Link
                smooth to='portfolio' offset={-80}
                className='cursor-pointer'
                style={{
                  padding: '12px 28px', borderRadius: '999px',
                  background: '#e85d75', color: '#fff',
                  fontWeight: 700, fontSize: '0.875rem',
                  display: 'inline-block',
                }}
              >
                View my work
              </Link>
              <a
                href='https://drive.google.com/file/d/1cnjU4Lq7zw3utvnDbZ7rmb6-5hVffaeN/view?usp=sharing'
                target='_blank' rel='noreferrer'
                style={{
                  padding: '12px 28px', borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.6)',
                  fontWeight: 600, fontSize: '0.875rem',
                  display: 'inline-block',
                }}
              >
                Download CV
              </a>
            </div>
          </div>

          {/* ── Image / Avatar ── */}
          <div
            data-aos='fade-left'
            data-aos-delay='150'
            className='order-1 lg:order-2 flex justify-center items-center'
          >
            <div style={{ position: 'relative', display: 'inline-block' }}>

              {/* Dashed spinning ring */}
              <div style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '50%',
                border: '1px dashed rgba(232,93,117,0.22)',
                animation: 'spin 22s linear infinite',
              }} />

              {/* Avatar circle */}
              <div style={{
                width: 'clamp(200px, 30vw, 300px)',
                height: 'clamp(200px, 30vw, 300px)',
                borderRadius: '50%',
                border: '2px solid rgba(232,93,117,0.25)',
                background: 'linear-gradient(135deg, #1a1a1a, #0d0d0d)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {/* Try image first — falls back gracefully if missing */}
                <img
                  src='/amico.png'
                  alt='Ibrahim'
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
                <span style={{ color: '#e85d75', fontSize: '5rem', fontWeight: 800, opacity: 0.5, position: 'absolute' }}>IB</span>
              </div>

              {/* Stat — projects */}
              <div style={{
                position: 'absolute', bottom: '-12px', right: '-12px',
                background: '#111', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '14px', padding: '10px 14px',
              }}>
                <p style={{ color: '#e85d75', fontWeight: 800, fontSize: '1.15rem', lineHeight: 1, margin: 0 }}>12+</p>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', marginTop: 4, marginBottom: 0 }}>Projects</p>
              </div>

              {/* Stat — experience */}
              <div style={{
                position: 'absolute', top: '-12px', left: '-12px',
                background: '#111', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '14px', padding: '10px 14px',
              }}>
                <p style={{ color: '#e85d75', fontWeight: 800, fontSize: '1.15rem', lineHeight: 1, margin: 0 }}>3+</p>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', marginTop: 4, marginBottom: 0 }}>Years exp.</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}

export default About