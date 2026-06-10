import React, { useEffect, useState } from 'react'

const LETTERS = ['I','b','r','a','h','i','m']

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      const step = Math.floor(Math.random() * 8) + 3
      current = Math.min(current + step, 100)
      setProgress(current)
      if (current >= 100) {
        clearInterval(interval)
        setTimeout(() => setFading(true), 400)
        setTimeout(() => onComplete(), 1100)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#080808',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        opacity: fading ? 0 : 1,
        transform: fading ? 'scale(1.03)' : 'scale(1)',
        pointerEvents: fading ? 'none' : 'all',
        overflow: 'hidden',
      }}
    >
      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '55px 55px',
      }} />

      {/* Corner brackets */}
      {[
        { top: 28, left: 28,  borderTop: '1px solid rgba(232,93,117,0.35)', borderLeft:  '1px solid rgba(232,93,117,0.35)' },
        { top: 28, right: 28, borderTop: '1px solid rgba(232,93,117,0.35)', borderRight: '1px solid rgba(232,93,117,0.35)' },
        { bottom: 28, left: 28,  borderBottom: '1px solid rgba(232,93,117,0.35)', borderLeft:  '1px solid rgba(232,93,117,0.35)' },
        { bottom: 28, right: 28, borderBottom: '1px solid rgba(232,93,117,0.35)', borderRight: '1px solid rgba(232,93,117,0.35)' },
      ].map((s, i) => (
        <div key={i} style={{ position: 'absolute', width: 28, height: 28, ...s, animation: `ldFadeUp 0.5s ${1.3 + i * 0.05}s both` }} />
      ))}

      {/* Name */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 0, marginBottom: 36, position: 'relative', zIndex: 2 }}>
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'Quicksand, sans-serif',
              fontSize: 'clamp(3rem, 12vw, 5rem)',
              fontWeight: 800,
              letterSpacing: '-2px',
              color: i < 2 ? '#e85d75' : 'rgba(255,255,255,0.08)',
              WebkitTextStroke: i < 2 ? '0px' : '1px rgba(255,255,255,0.18)',
              animation: `ldReveal 0.5s ${0.08 + i * 0.1}s cubic-bezier(0.22,1,0.36,1) both`,
            }}
          >
            {letter}
          </span>
        ))}
        {/* Dot */}
        <span style={{
          fontFamily: 'Quicksand, sans-serif',
          fontSize: 'clamp(3rem, 12vw, 5rem)',
          fontWeight: 800,
          color: '#e85d75',
          marginLeft: 4,
          animation: `ldReveal 0.5s 0.85s cubic-bezier(0.22,1,0.36,1) both`,
        }}>.</span>
      </div>

      {/* Role */}
      <p style={{
        fontFamily: 'Quicksand, sans-serif',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.25)',
        marginBottom: 44,
        position: 'relative',
        zIndex: 2,
        animation: 'ldFadeUp 0.5s 0.95s both',
      }}>
        Fullstack Developer
      </p>

      {/* Progress bar */}
      <div style={{
        width: 'min(200px, 60vw)',
        height: 2,
        background: 'rgba(255,255,255,0.07)',
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2,
        animation: 'ldFadeUp 0.4s 1.1s both',
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: '#e85d75',
          borderRadius: 2,
          transition: 'width 0.08s linear',
        }} />
      </div>

      {/* Percentage */}
      <p style={{
        fontFamily: 'Quicksand, sans-serif',
        fontSize: 11,
        color: 'rgba(255,255,255,0.2)',
        marginTop: 10,
        letterSpacing: '0.05em',
        position: 'relative',
        zIndex: 2,
        animation: 'ldFadeUp 0.4s 1.1s both',
      }}>
        {progress < 100 ? `${progress}%` : 'Welcome'}
      </p>

      <style>{`
        @keyframes ldReveal {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ldFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default Loader