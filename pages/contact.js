import { useState } from 'react'
import * as emailjs from 'emailjs-com'
import { motion } from 'framer-motion'

import { SiteHead, Heading } from '../components'

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

  const handleSubmit = e => {
    e.preventDefault()
    setFormdata({ loading: true })

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: 'hello@christianbmartinez.com',
      message: formData.message,
    }

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      result => {
        setFormdata({
          loading: false,
          alertmessage: 'Thanks! Will respond asap.',
          message: '',
          success: true,
          show: true,
        })
      },
      error => {
        setFormdata({
          alertmessage: `Something went wrong!`,
          success: false,
          show: true,
        })
      }
    )
  }

  const handleChange = e => {
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
        description='Questions or comments? Contact me anytime.'
        keywords='nextjs, contact page tailwind css, contact page, christian martinez, contact form, react contact form'
      />
      {formData.loading ? <div className='form-loading-bar'></div> : ''}
      <section>
        <Heading
          title='Contact'
          paragraph='Get in touch! Contact me anytime'
        />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 30, delay: 1 }}
          className='container mx-auto mt-52 max-w-2xl pb-20 md:mt-32 md:pb-36 lg:w-2/3'>
          <div className='top:0 container relative px-6 text-slate-800 md:top-20 md:px-12'>
            <div className='mt-[-100px] block rounded-xl bg-white px-4 py-10 shadow-xl dark:bg-slate-900 md:px-6 md:py-12'>
              <div className='mx-auto grid max-w-[700px] grid-cols-3'>
                <div className='mx-auto mb-12 text-center'>
                  <svg
                    className='mx-auto mb-6 h-6 w-6 cursor-pointer text-purple-600 hover:text-pink-500 md:h-8 md:w-8'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 496 512'>
                    <path
                      fill='currentColor'
                      d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
                    />
                  </svg>
                  <h6 className='md:text-md text-sm font-medium text-zinc-900 dark:text-zinc-50'>
                    <a href='mailto:hello@christianbmartinez?subject=Inquiry'>
                      Email Me
                    </a>
                  </h6>
                </div>
                <div className='mx-auto mb-12 text-center lg:mb-0'>
                  <svg
                    className='mx-auto mb-6 h-6 w-6 cursor-pointer text-purple-600 hover:text-pink-500 md:h-8 md:w-8'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'>
                    <path
                      fill='currentColor'
                      d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'></path>
                  </svg>
                  <h6 className='md:text-md text-sm font-medium text-zinc-900 dark:text-zinc-50'>
                    SLC, UT
                  </h6>
                </div>
                <div className='mx-auto mb-6 text-center md:mb-0'>
                  <svg
                    className='mx-auto mb-6 h-6 w-6 cursor-pointer text-purple-600 hover:text-pink-500 md:h-8 md:w-8'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'>
                    <path
                      fill='currentColor'
                      d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'></path>
                  </svg>
                  <h6 className='md:text-md text-sm font-medium text-zinc-900 dark:text-zinc-50'>
                    <a href='tel:801-645-1924'>Call Me</a>
                  </h6>
                </div>
              </div>
              <div className='mx-auto max-w-[700px]'>
                <form onSubmit={handleSubmit}>
                  <div className='form-group mb-6'>
                    <input
                      className='form-control m-0
            block
            w-full
            rounded-lg
            border
            border-solid
            border-zinc-300
            bg-white
            bg-clip-padding px-3 py-1.5
            text-sm font-normal text-zinc-700 transition
            ease-in-out
            focus:border-purple-600
            focus:bg-white
            focus:text-zinc-700 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-zinc-200 dark:focus:border-purple-600'
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
                      className='form-control m-0
            block
            w-full
            rounded-lg
            border
            border-solid
            border-zinc-300
            bg-white
            bg-clip-padding px-3 py-1.5
            text-sm font-normal text-zinc-700 transition
            ease-in-out
            focus:border-purple-600
            focus:bg-white            
            focus:text-zinc-700 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-zinc-200 dark:focus:border-purple-600'
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
            m-0
            block
            w-full
            rounded-lg
            border
            border-solid
            border-zinc-300
            bg-white
            bg-clip-padding px-3  py-1.5
            text-sm font-normal text-zinc-700 transition
            ease-in-out
            focus:border-purple-600
            focus:bg-white
            focus:text-zinc-700 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-zinc-200 dark:focus:border-purple-600'
                      name='message'
                      placeholder='Write message...'
                      rows='5'
                      value={formData.message || ''}
                      autoComplete='off'
                      onChange={handleChange}
                      required></textarea>
                  </div>
                  <button
                    type='submit'
                    aria-label='Submit form button'
                    className='w-full rounded-xl bg-purple-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-zinc-50 shadow-xl transition duration-150 ease-in-out hover:border-pink-500 hover:bg-pink-500 hover:text-zinc-50 hover:shadow-2xl focus:border-pink-500 focus:bg-pink-500 focus:text-zinc-50 focus:shadow-2xl focus:outline-none focus:ring-0 active:bg-pink-500 active:shadow-2xl'>
                    {formData.loading ? 'Sending...' : 'Send'}
                  </button>
                  {formData.show && formData.success ? (
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 30,
                      }}
                      className='relative mt-5 rounded-md border border-green-400 bg-green-100 px-4 py-3 text-green-700'
                      role='alert'>
                      <span className='block sm:inline'>
                        {formData.alertmessage}
                      </span>
                      <span className='absolute bottom-0 right-0 top-0 px-4 py-3'>
                        <svg
                          className='h-6 w-6 fill-current text-green-500'
                          role='button'
                          aria-label='Close button'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          onClick={() => setFormdata({ show: false })}>
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
                        stiffness: 30,
                      }}
                      className='relative mt-5 rounded-md border border-red-400 bg-red-100 px-4 py-3 text-red-700'
                      role='alert'>
                      <span className='block sm:inline'>
                        {formData.alertmessage}
                      </span>
                      <span className='absolute bottom-0 right-0 top-0 px-4 py-3'>
                        <svg
                          className='h-6 w-6 fill-current text-red-500'
                          role='button'
                          aria-label='Close button'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          onClick={() => setFormdata({ show: false })}>
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
