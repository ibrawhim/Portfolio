import React, { useEffect, useRef, useState } from 'react'
import { skills } from './SkillList'

const SkillCard = ({ skill, index }) => {
  const [filled, setFilled] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFilled(true) },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-aos='fade-up'
      data-aos-delay={index * 40}
      className='group bg-[#111] border border-white/10 rounded-2xl p-4 sm:p-5 hover:border-[#e85d75]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col'
    >
      <div className='text-2xl sm:text-3xl text-[#e85d75] mb-3 group-hover:scale-110 transition-transform duration-300'>
        {skill.icon}
      </div>
      <p className='text-white/75 font-semibold text-xs sm:text-sm mb-3'>{skill.title}</p>
      <div className='relative h-[3px] bg-white/10 rounded-full overflow-hidden mt-auto'>
        <div
          className='absolute top-0 left-0 h-full bg-gradient-to-r from-[#e85d75] to-[#f4a0b0] rounded-full transition-all duration-1000 ease-out'
          style={{ width: filled ? `${skill.level}%` : '0%', transitionDelay: `${index * 55}ms` }}
        />
      </div>
      <p className='text-white/20 text-[10px] mt-1.5 text-right'>{skill.level}%</p>
    </div>
  )
}

const Skills = () => {
  return (
    <section id='skills' className='bg-[#080808] py-20 sm:py-24 px-5 sm:px-6'>
      <div className='max-w-6xl mx-auto'>

        <div className='mb-12 sm:mb-16' data-aos='fade-up'>
          <p className='text-[#e85d75] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3'>
            What I work with
          </p>
          <h2 className='text-3xl sm:text-4xl font-bold text-white'>Skills & Tools</h2>
          <div className='w-10 h-[2px] bg-[#e85d75] mt-4' />
        </div>

        <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4'>
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills