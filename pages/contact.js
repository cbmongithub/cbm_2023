import { useState } from 'react'
import SiteHead from '../components/SiteHead'
import Heading from '../components/Heading'
import { motion } from 'framer-motion'
import { userData } from '../constants'
import * as emailjs from 'emailjs-com'

const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID
const userId = process.env.NEXT_PUBLIC_EMAIL_USER_ID

const Contact = () => {
  const [formData, setFormdata] = useState({
    email: '',
    name: '',
    message: '',
    loading: false,
    success: false,
    alertmessage: '',
    show: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormdata({ loading: true })

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: userData.email,
      message: formData.message,
    }

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (result) => {
        console.log(result.text)
        setFormdata({
          loading: false,
          alertmessage: 'Thanks for your message! Will respond asap :)',
          message: '',
          success: true,
          show: true,
        })
      },
      (error) => {
        console.log(error.text)
        setFormdata({
          alertmessage: `Failed to send!, ${error.text}`,
          success: false,
          show: true,
        })
      }
    )
  }

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <SiteHead
        page='Contact'
        title='Contact'
        description={'Questions or comments? Contact me anytime.'}
        keywords={
          'nextjs, contact page tailwind css, contact page, christian martinez, contact form, react contact form'
        }
      />
      {formData.loading ? <div className='form-loading-bar'></div> : ''}
      <section>
        <Heading title='Contact' paragraph='Get in touch! Contact me anytime' />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 1 }}
          className='container mt-52 md:mt-32 px-6 mx-auto lg:w-2/3'
        >
          <div className='container text-slate-800 px-4 md:px-12 relative top:0 md:top-20'>
            <div className='block rounded-xl mt-[-100px] bg-white dark:bg-slate-800 shadow-xl py-10 md:py-12 px-4 md:px-6'>
              <div className='grid grid-cols-3 mb-12 max-w-[700px] mx-auto'>
                <div className='mb-12 lg:mb-0 text-center mx-auto'>
                  <svg
                    className='w-6 h-6 md:w-8 md:h-8 text-purple-600 mb-6 mx-auto hover:text-pink-500'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 496 512'
                  >
                    <path
                      fill='currentColor'
                      d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
                    />
                  </svg>
                  <h6 className='font-medium text-sm md:text-md text-zinc-800 dark:text-zinc-50'>
                    <a href='mailto:hello@christianbmartinez?subject=Inquiry'>
                      Email Me
                    </a>
                  </h6>
                </div>
                <div className='mb-12 lg:mb-0 text-center mx-auto'>
                  <svg
                    className='w-6 h-6 md:w-8 md:h-8 text-purple-600 mb-6 mx-auto hover:text-pink-500'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                  >
                    <path
                      fill='currentColor'
                      d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'
                    ></path>
                  </svg>
                  <h6 className='font-medium text-sm md:text-md text-zinc-800 dark:text-zinc-50'>
                    SLC, UT
                  </h6>
                </div>
                <div className='mb-6 md:mb-0 text-center mx-auto'>
                  <svg
                    className='w-6 h-6 md:w-8 md:h-8 text-purple-600 mb-6 mx-auto hover:text-pink-500'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'
                    ></path>
                  </svg>
                  <h6 className='font-medium text-sm md:text-md text-zinc-800 dark:text-zinc-50'>
                    <a href='tel:801-645-1924'>Call Me</a>
                  </h6>
                </div>
              </div>
              <div className='max-w-[700px] mx-auto'>
                <form onSubmit={handleSubmit}>
                  <div className='form-group mb-6'>
                    <input
                      className='form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-zinc-700
            dark:text-zinc-200
            bg-white dark:bg-slate-800 bg-clip-padding
            border border-solid border-zinc-300 dark:border-zinc-500
            rounded
            transition
            ease-in-out
            m-0
            focus:text-zinc-700 focus:bg-white focus:border-purple-600 dark:focus:border-purple-600 focus:outline-none'
                      id='name'
                      name='name'
                      placeholder='Name'
                      value={formData.name || ''}
                      type='text'
                      required
                      onChange={handleChange}
                      autoComplete='on'
                    />
                  </div>
                  <div className='form-group mb-6'>
                    <input
                      className='form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-zinc-700
            dark:text-zinc-200
            bg-white dark:bg-slate-800 bg-clip-padding
            border border-solid border-zinc-300 dark:border-zinc-500
            rounded
            transition
            ease-in-out
            m-0
            focus:text-zinc-700 focus:bg-white dark:focus:border-purple-600 focus:border-purple-600 focus:outline-none'
                      id='email'
                      name='email'
                      placeholder='Email'
                      type='email'
                      value={formData.email || ''}
                      required
                      autoComplete='on'
                      onChange={handleChange}
                    />
                  </div>
                  <div className='form-group mb-6'>
                    <textarea
                      className='
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-zinc-700
            dark:text-zinc-200
            bg-white dark:bg-slate-800  bg-clip-padding
            border border-solid border-zinc-300 dark:border-zinc-500
            rounded
            transition
            ease-in-out
            m-0
            focus:text-zinc-700 focus:bg-white dark:focus:border-purple-600 focus:border-purple-600 focus:outline-none
          '
                      id='message'
                      name='message'
                      placeholder='Write message...'
                      rows='5'
                      value={formData.message || ''}
                      autoComplete='off'
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    type='submit'
                    aria-label='Submit form button'
                    className='
          w-full
          px-6
          py-2.5
          bg-purple-600
          rounded-md
          text-zinc-50
          font-medium          
          text-sm leading-snug uppercase
          shadow-md
          hover:bg-pink-500 hover:shadow-lg
          focus:bbg-pink-500  focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-pink-500 active:shadow-lg
          transition
          duration-150
          ease-in-out'
                  >
                    {formData.loading ? 'Sending...' : 'Send'}
                  </button>
                  {formData.show && formData.success ? (
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                      }}
                      className='mt-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md relative'
                      role='alert'
                    >
                      <span className='block sm:inline'>
                        {formData.alertmessage}
                      </span>
                      <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
                        <svg
                          className='fill-current h-6 w-6 text-green-500'
                          role='button'
                          aria-label='Close button'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          onClick={() => setFormdata({ show: false })}
                        >
                          <title>Close</title>
                          <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
                        </svg>
                      </span>
                    </motion.div>
                  ) : formData.show && !formData.success ? (
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                      }}
                      className='mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative'
                      role='alert'
                    >
                      <span className='block sm:inline'>
                        {formData.alertmessage}
                      </span>
                      <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
                        <svg
                          className='fill-current h-6 w-6 text-red-500'
                          role='button'
                          aria-label='Close button'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          onClick={() => setFormdata({ show: false })}
                        >
                          <title>Close</title>
                          <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
                        </svg>
                      </span>
                    </motion.div>
                  ) : (
                    ''
                  )}
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Contact
