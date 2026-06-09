import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'
import { SiLinkedin } from 'react-icons/si'
import { Link } from 'react-scroll'
import { HiArrowUpRight } from 'react-icons/hi2'

const navLinks = ['about', 'skills', 'portfolio', 'services', 'contact']

const projects = [
  { name: 'Movie App',       href: 'https://ibrahim-movie-app.netlify.app/' },
  { name: 'Real Estate App', href: 'https://yemreality.netlify.app/' },
  { name: 'School Portal',   href: 'https://timely-conkies-c49131.netlify.app/' },
  { name: 'Dictionary',      href: 'https://aesthetic-starship-78fcc7.netlify.app/' },
  { name: 'Game Plan',       href: 'https://game-plan.netlify.app/' },
]

const contactLinks = [
  { label: 'GitHub',      href: 'https://github.com/ibrawhim',                                 icon: <AiOutlineGithub /> },
  { label: 'LinkedIn',    href: 'https://www.linkedin.com/in/adeniyi-ibrahim-7853b9202/',      icon: <SiLinkedin /> },
  { label: 'Twitter / X', href: 'https://twitter.com/Yemi_artss',                             icon: <RiTwitterXFill /> },
  { label: 'Download CV', href: 'https://drive.google.com/file/d/1cnjU4Lq7zw3utvnDbZ7rmb6-5hVffaeN/view?usp=sharing', icon: <HiArrowUpRight /> },
]

const linkStyle = {
  display: 'block',
  color: 'rgba(255,255,255,0.4)',
  fontSize: '13px',
  marginBottom: '10px',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'color 0.2s',
}

const Footer = () => {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.08)', fontFamily: 'Quicksand, sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '56px 24px 32px' }}>

        {/* ── Top grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>

          {/* Brand col */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '14px' }}>
              <span style={{ color: '#e85d75' }}>IB</span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>.</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', lineHeight: 1.75, maxWidth: '210px', marginBottom: '20px' }}>
              Building fast, beautiful, and purposeful web experiences. Open to freelance and full-time roles.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { href: 'https://github.com/ibrawhim',                               icon: <AiOutlineGithub />,  label: 'GitHub' },
                { href: 'https://twitter.com/Yemi_artss',                            icon: <RiTwitterXFill />,   label: 'Twitter' },
                { href: 'https://www.linkedin.com/in/adeniyi-ibrahim-7853b9202/',    icon: <SiLinkedin />,       label: 'LinkedIn' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={s.label}
                  style={{
                    width: '34px', height: '34px', borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.35)', fontSize: '15px',
                    textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#e85d75'; e.currentTarget.style.color = '#e85d75' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation col */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Navigation
            </p>
            {navLinks.map(item => (
              <Link
                key={item}
                smooth to={item} offset={-80}
                style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#e85d75'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          {/* Projects col */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Projects
            </p>
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.href}
                target='_blank'
                rel='noreferrer'
                style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#e85d75'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              >
                {p.name}
              </a>
            ))}
          </div>

          {/* Contact col */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Connect
            </p>
            {contactLinks.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target='_blank'
                rel='noreferrer'
                style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '7px' }}
                onMouseEnter={e => e.currentTarget.style.color = '#e85d75'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              >
                <span style={{ fontSize: '13px' }}>{c.icon}</span>
                {c.label}
              </a>
            ))}
          </div>

        </div>

        {/* ── Divider ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginBottom: '24px' }} />

        {/* ── Bottom bar ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: '12px', margin: 0 }}>
            © {new Date().getFullYear()} <span style={{ color: '#e85d75' }}>Ibrahim</span> — Your favourite fullstack developer
          </p>

          {/* Open to work badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '5px 12px', borderRadius: '999px',
            background: 'rgba(232,93,117,0.1)',
            border: '1px solid rgba(232,93,117,0.2)',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%', background: '#e85d75',
              animation: 'ftPulse 2s ease-in-out infinite', display: 'inline-block',
            }} />
            <span style={{ color: '#e85d75', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Open to work
            </span>
          </div>
        </div>

      </div>

      <style>{`@keyframes ftPulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </footer>
  )
}

export default Footer