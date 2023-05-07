import { useState } from 'react'
import SiteHead from '../components/SiteHead'
import Heading from '../components/Heading'
import { motion } from 'framer-motion'
import { userData } from '../constants'
import * as emailjs from 'emailjs-com'

const Alert = ({ variant, children }) => {
  return (
    <div className='flex flex-row justify-center items-center mt-2'>
      <div
        className={`bg-${variant}-100 border border-${variant}-400 text-${variant}-700 px-4 py-3 rounded relative`}
        role='alert'
      >
        <span className='block sm:inline'>{children}</span>
        <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
          <svg
            className='fill-current h-6 w-6 text-red-500'
            role='button'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <title>Close</title>
            <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
          </svg>
        </span>
      </div>
    </div>
  )
}

const Contact = () => {
  const [formData, setFormdata] = useState({
    email: '',
    name: '',
    message: '',
    loading: false,
    show: false,
    alertmessage: '',
    variant: '',
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

    emailjs
      .send(
        'service_kq06veu',
        'template_x5oo4ci',
        templateParams,
        'user_ZqTkxH9x7lpssb7A9r9hM'
      )
      .then(
        (result) => {
          console.log(result.text)
          setFormdata({
            loading: false,
            alertmessage: 'Thanks for your message! Will respond asap :)',
            message: '',
            variant: 'green',
            show: true,
          })
        },
        (error) => {
          console.log(error.text)
          setFormdata({
            alertmessage: `Failed to send!, ${error.text}`,
            variant: 'red',
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
      <section>
        <Heading title='Contact' paragraph='Get in touch! Contact me anytime' />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 1 }}
        >
          <div className='container mt-52 md:mt-32 px-6 mx-auto lg:w-2/3'>
            <div className='mb-20 text-gray-800'>
              <div className='container text-gray-800 px-4 md:px-12 relative top:0 md:top-20'>
                <div
                  className='block rounded-lg shadow-xl py-10 md:py-12 px-4 md:px-6'
                  style={{
                    marginTop: '-100px',
                    background: `hsla(0, 0%, 100%, 0.8)`,
                    backdropFilter: 'blur(30px)',
                  }}
                >
                  <div className='grid md:grid-cols-3 lg:grid-cols-3 mb-12'>
                    <div className='mb-12 lg:mb-0 text-center mx-auto'>
                      <svg
                        className='w-8 h-8 text-purple-600 mb-6 mx-auto'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 496 512'
                      >
                        <path
                          fill='currentColor'
                          d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
                        />
                      </svg>
                      <h6 className='font-medium'>Email Me</h6>
                    </div>
                    <div className='mb-12 lg:mb-0 text-center mx-auto'>
                      <svg
                        className='w-8 h-8 text-purple-600 mb-6 mx-auto'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 384 512'
                      >
                        <path
                          fill='currentColor'
                          d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'
                        ></path>
                      </svg>
                      <h6 className='font-medium'>Salt Lake City, UT</h6>
                    </div>
                    <div className='mb-6 md:mb-0 text-center mx-auto'>
                      <svg
                        className='w-8 h-8 text-purple-600 mb-6 mx-auto'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path
                          fill='currentColor'
                          d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'
                        ></path>
                      </svg>
                      <h6 className='font-medium'>+1-801-645-1924</h6>
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
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none'
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
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none'
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
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none
          '
                          id='message'
                          name='message'
                          placeholder='Write message...'
                          rows='5'
                          value={formData.message}
                          autoComplete='off'
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <button
                        type='submit'
                        className='
          w-full
          px-6
          py-2.5
          bg-purple-600
          rounded-md
          text-white
          font-medium          
          text-sm leading-snug uppercase
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out'
                      >
                        {formData.loading ? 'Sending...' : 'Send'}
                      </button>
                      <div
                        className={formData.loading ? 'loading-bar' : 'hidden'}
                      ></div>
                      {formData.show ? (
                        <Alert
                          variant={formData.variant}
                          onClick={setFormdata({ show: false })}
                        >
                          {formData.alertmessage}
                        </Alert>
                      ) : (
                        'Nothing to show here'
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Contact
