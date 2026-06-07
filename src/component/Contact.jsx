import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'
import { SiLinkedin } from 'react-icons/si'
import * as Yup from 'yup'
import { HiArrowUpRight } from 'react-icons/hi2'

const socials = [
  {
    href: 'https://github.com/ibrawhim',
    icon: <AiOutlineGithub />,
    label: 'GitHub',
    handle: '@ibrawhim',
  },
  {
    href: 'https://twitter.com/Yemi_artss',
    icon: <RiTwitterXFill />,
    label: 'Twitter / X',
    handle: '@Yemi_artss',
  },
  {
    href: 'https://www.linkedin.com/in/adeniyi-ibrahim-7853b9202/',
    icon: <SiLinkedin />,
    label: 'LinkedIn',
    handle: 'Adeniyi Ibrahim',
  },
]

const Contact = () => {
  const [sent, setSent] = useState('')
  const [loading, setLoading] = useState(false)
  const endpoint = 'https://portfolio-back-wecq.onrender.com/contact'

  const formik = useFormik({
    initialValues: { name: '', email: '', company: '', message: '' },
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      try {
        const result = await axios.post(endpoint, values)
        setSent(result.data.message)
        resetForm()
      } catch {
        setSent('Something went wrong. Please try again.')
      } finally {
        setLoading(false)
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().required('Email is required').email('Enter a valid email'),
      company: Yup.string().required('Company / Project is required'),
      message: Yup.string().required('Message is required'),
    }),
  })

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#e85d75]/60 transition-colors duration-200'

  return (
    <section id='contact' className='bg-[#0a0a0a] py-20 sm:py-24 px-5 sm:px-6 relative overflow-hidden'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#e85d75]/4 rounded-full blur-[110px] pointer-events-none' />

      <div className='max-w-6xl mx-auto relative'>

        <div className='mb-12 sm:mb-16' data-aos='fade-up'>
          <p className='text-[#e85d75] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3'>
            Don't be a stranger
          </p>
          <h2 className='text-3xl sm:text-4xl font-bold text-white'>Get in Touch</h2>
          <div className='w-10 h-[2px] bg-[#e85d75] mt-4' />
        </div>

        <div className='grid lg:grid-cols-2 gap-10 lg:gap-14 items-start'>

          {/* Form */}
          <div data-aos='fade-right'>
            {sent && (
              <div className='mb-5 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm'>
                {sent}
              </div>
            )}

            <form onSubmit={formik.handleSubmit} className='space-y-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <input
                    name='name'
                    placeholder='Your name'
                    type='text'
                    className={inputClass}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className='text-[#e85d75] text-xs mt-1 ml-1'>{formik.errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    name='email'
                    placeholder='Email address'
                    type='email'
                    className={inputClass}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className='text-[#e85d75] text-xs mt-1 ml-1'>{formik.errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  name='company'
                  placeholder='Company / Project name'
                  type='text'
                  className={inputClass}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.company}
                />
                {formik.touched.company && formik.errors.company && (
                  <p className='text-[#e85d75] text-xs mt-1 ml-1'>{formik.errors.company}</p>
                )}
              </div>

              <div>
                <textarea
                  name='message'
                  placeholder='Tell me about your project...'
                  rows={5}
                  className={`${inputClass} resize-none`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className='text-[#e85d75] text-xs mt-1 ml-1'>{formik.errors.message}</p>
                )}
              </div>

              <button
                type='submit'
                disabled={loading}
                className='w-full flex items-center justify-center gap-2 bg-[#e85d75] hover:bg-[#d44d65] text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_28px_rgba(232,93,117,0.35)] disabled:opacity-50 disabled:cursor-not-allowed text-sm'
              >
                {loading ? 'Sending...' : <><span>Send Message</span><HiArrowUpRight /></>}
              </button>
            </form>
          </div>

          {/* Social links */}
          <div data-aos='fade-left' data-aos-delay='150' className='space-y-5'>
            <p className='text-white/45 text-sm sm:text-base leading-relaxed'>
              I'm open to freelance, full-time, and collaborative projects. Reach out through
              the form or find me on any of these platforms.
            </p>

            <div className='space-y-3'>
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target='_blank'
                  rel='noreferrer'
                  className='group flex items-center gap-4 p-4 bg-[#111] border border-white/10 rounded-2xl hover:border-[#e85d75]/30 transition-all duration-300'
                >
                  <span className='text-[#e85d75] text-2xl group-hover:scale-110 transition-transform duration-200'>
                    {s.icon}
                  </span>
                  <div className='flex-1'>
                    <p className='text-white/65 text-sm font-medium'>{s.label}</p>
                    <p className='text-white/25 text-xs'>{s.handle}</p>
                  </div>
                  <HiArrowUpRight className='text-white/20 group-hover:text-[#e85d75] transition-colors duration-200' />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact