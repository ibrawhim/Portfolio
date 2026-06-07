import React, { useState } from 'react'
import { project } from './ProjectList'
import { HiArrowUpRight } from 'react-icons/hi2'

const tagColors = {
  Frontend: 'bg-[#e85d75]/10 text-[#e85d75] border-[#e85d75]/20',
  Fullstack: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
}

const ProjectCard = ({ item, index }) => (
  <div
    data-aos='fade-up'
    data-aos-delay={index * 70}
    className='group bg-[#111] border border-white/10 rounded-3xl overflow-hidden hover:border-[#e85d75]/30 transition-all duration-500 hover:-translate-y-2 flex flex-col'
  >
    {/* Image */}
    <div className='relative h-44 sm:h-48 overflow-hidden bg-[#0a0a0a]'>
      <img
        src={item.img}
        alt={item.name}
        className='w-full h-full object-cover opacity-55 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent' />
      <span className={`absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full border ${tagColors[item.tag]}`}>
        {item.tag}
      </span>
    </div>

    {/* Body */}
    <div className='p-5 sm:p-6 flex flex-col flex-1'>
      <h3 className='text-white font-bold text-lg sm:text-xl mb-2 group-hover:text-[#e85d75] transition-colors duration-300'>
        {item.name}
      </h3>
      <p className='text-white/40 text-sm leading-relaxed mb-4 flex-1'>{item.info}</p>

      <div className='flex flex-wrap gap-1.5 mb-5'>
        {item.tools.map((tool, i) => (
          <span key={i} className='text-[11px] text-white/35 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full'>
            {tool}
          </span>
        ))}
      </div>

      <a
        href={item.link}
        target='_blank'
        rel='noreferrer'
        className='inline-flex items-center gap-2 text-sm font-semibold text-[#e85d75] hover:gap-3 transition-all duration-200'
      >
        View project <HiArrowUpRight className='text-base' />
      </a>
    </div>
  </div>
)

const Project = () => {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Frontend', 'Fullstack']
  const filtered = filter === 'All' ? project : project.filter(p => p.tag === filter)

  return (
    <section id='portfolio' className='bg-[#0a0a0a] py-20 sm:py-24 px-5 sm:px-6'>
      <div className='max-w-6xl mx-auto'>

        <div className='mb-10 sm:mb-12' data-aos='fade-up'>
          <p className='text-[#e85d75] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3'>
            Things I've built
          </p>
          <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5'>
            <div>
              <h2 className='text-3xl sm:text-4xl font-bold text-white'>My Projects</h2>
              <div className='w-10 h-[2px] bg-[#e85d75] mt-4' />
            </div>

            {/* Filter */}
            <div className='flex gap-2 p-1 bg-white/5 border border-white/10 rounded-full w-fit'>
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    filter === f ? 'bg-[#e85d75] text-white' : 'text-white/40 hover:text-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6'>
          {filtered.map((item, index) => (
            <ProjectCard key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Project