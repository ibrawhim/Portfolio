import React from 'react'
import { GiLightningFrequency } from 'react-icons/gi'
import { VscDebug } from 'react-icons/vsc'
import { MdAppSettingsAlt } from 'react-icons/md'
import { PiBracketsAngleFill } from 'react-icons/pi'
import { HiArrowUpRight } from 'react-icons/hi2'
import { Link } from 'react-scroll'

const services = [
  {
    icon: <PiBracketsAngleFill />,
    title: 'Web Design',
    desc: 'Pixel-perfect interfaces with thoughtful UX — from wireframe to polished product.',
  },
  {
    icon: <MdAppSettingsAlt />,
    title: 'Web App Development',
    desc: 'Scalable, production-ready apps built with React and Node.js.',
  },
  {
    icon: <GiLightningFrequency />,
    title: 'Progressive Web Apps',
    desc: 'Apps that feel native — offline support, push notifications, and fast load times.',
  },
  {
    icon: <VscDebug />,
    title: 'Bug Fixing & Optimization',
    desc: 'Systematic debugging and performance audits. Root cause, not just symptoms.',
  },
]

const Services = () => {
  return (
    <section id='services' className='bg-[#080808] py-20 sm:py-24 px-5 sm:px-6 relative overflow-hidden'>
      {/* BG glow */}
      <div className='absolute bottom-0 right-0 w-80 sm:w-[500px] h-72 sm:h-[400px] bg-[#e85d75]/4 blur-[90px] pointer-events-none' />

      <div className='max-w-6xl mx-auto relative'>

        <div className='mb-12 sm:mb-16' data-aos='fade-up'>
          <p className='text-[#e85d75] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3'>
            What I offer
          </p>
          <h2 className='text-3xl sm:text-4xl font-bold text-white'>Services</h2>
          <div className='w-10 h-[2px] bg-[#e85d75] mt-4' />
        </div>

        <div className='grid lg:grid-cols-2 gap-8 lg:gap-10 items-start'>

          {/* Service cards grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {services.map((s, i) => (
              <div
                key={i}
                data-aos='fade-up'
                data-aos-delay={i * 80}
                className='group bg-[#111] border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-[#e85d75]/30 transition-all duration-300 hover:-translate-y-1'
              >
                <div className='text-[#e85d75] text-2xl sm:text-3xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {s.icon}
                </div>
                <h3 className='text-white font-bold mb-2 text-sm sm:text-base'>{s.title}</h3>
                <p className='text-white/38 text-xs sm:text-sm leading-relaxed'>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div data-aos='fade-left' data-aos-delay='200'>
            <div className='bg-[#e85d75] rounded-3xl p-8 sm:p-10 relative overflow-hidden'>
              <div className='absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/10' />
              <div className='absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-white/5' />

              <div className='relative'>
                <h3 className='text-white text-2xl sm:text-3xl font-bold mb-4 leading-snug'>
                  Let's build something <em>great</em> together.
                </h3>
                <p className='text-white/65 text-sm leading-relaxed mb-8'>
                  I'm currently open to freelance projects and full-time opportunities. If you have
                  a project in mind or just want to say hi, I'd love to hear from you.
                </p>
                <Link
                  smooth to='contact' offset={-80}
                  className='cursor-pointer inline-flex items-center gap-2 bg-white text-[#e85d75] font-bold px-6 py-3 rounded-full text-sm hover:bg-white/90 transition-all duration-200'
                >
                  Get in touch <HiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services