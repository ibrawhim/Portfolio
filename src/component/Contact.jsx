import axios from 'axios'
import { ErrorMessage, Field, Form, useFormik } from 'formik'
import React, { useState } from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
import {RiTwitterXFill} from 'react-icons/ri'
import {SiLinkedin} from 'react-icons/si'
import * as Yup from 'yup'





const Contact = () => {
    const [sent, setSent] = useState('')
//  let endpoint = 'http://localhost:4444/contact/'
 let endpoint = 'https://portfolio-back-wecq.onrender.com/contact'
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            company: '',
            message: ''
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values.name);
            axios.post(endpoint,values)
            .then((result)=>{
                console.log(result);
                setSent(result.data.message)
            })
            .catch((error)=>{
                console.log(error);
            })
            resetForm({values: ''})
        },
        validationSchema: Yup.object({
            name: Yup.string().required('This field is empty'),
            email: Yup.string().required('This Field is empty').email('Kindly enter a valid  email address'),
            company: Yup.string().required('This field is empty'),
            message: Yup.string().required('This field is empty')
        })

    })
    
   
  return (
    <>
        <div className='px-8' id='contact' data-aos="flip-up">
            <h1 className='mx-5 mt-5 text-xl text-white font-bold'><span className='me-2'>--------</span>Contact me</h1>
            <section  data-aos-anchor-placement="center-bottom">
                <div className='text-2xl text-center font-bold text-pink-600'>{sent}</div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
                    <form action='' onSubmit={formik.handleSubmit}  className='bg-sky-900 p-5'>
                        <div className='flex flex-col'>
                            <label htmlFor="name" className='text-white font-bold'>Name:</label>
                            <input className='py-1 rounded' name='name' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
                            <small className="text-red-500 font-bold">{formik.touched.name && formik.errors.name}</small>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='text-white font-bold'>Email:</label>
                            <input className='py-1 rounded' name='email' type="text" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.email}/>
                            <small className="text-red-500 font-bold">{formik.touched.email && formik.errors.email}</small>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="company" className='text-white font-bold'>Company:</label>
                            <input className='py-1 rounded' name='company' type="text" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.company}/>
                            <small className="text-red-500 font-bold">{formik.touched.company && formik.errors.company}</small>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="message" className='text-white font-bold'>Message:</label>
                            <textarea className='rounded' name="message" id="" cols="30" rows="5" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} ></textarea>
                            <small className="text-red-500 font-bold">{formik.touched.message && formik.errors.message}</small>
                        </div>
                        <div className='flex flex-col my-2'>
                            <button type='submit' className='bg-pink-700 text-white py-1 rounded'>Send Message</button>
                        </div>
                    </form>
                    <div className='flex justify-center items-center gap-5 px-5 sm:my-10'>
                        <a href="https://github.com/ibrawhim" className='text-4xl text-white hover:scale-150 hover:text-pink-700'><AiOutlineGithub/></a>
                        <a href="https://twitter.com/Yemi_artss" className='text-4xl text-white hover:scale-150 hover:text-pink-700'><RiTwitterXFill/></a>
                        <a href="https://www.linkedin.com/in/adeniyi-ibrahim-7853b9202/" className='text-4xl text-white hover:scale-150 hover:text-pink-700'><SiLinkedin/></a>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Contact