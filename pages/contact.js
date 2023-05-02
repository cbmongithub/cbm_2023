import Background from '../components/Background'
import Heading from '../components/Heading'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <>
      <section>
        <Heading title='Contact' paragraph='Get in touch! Contact me anytime' />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
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
                      <h6 className='font-medium'>+1-801-555-5555</h6>
                    </div>
                  </div>
                  <div className='max-w-[700px] mx-auto'>
                    <form>
                      <div className='form-group mb-6'>
                        <input
                          type='text'
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
                          id='exampleInput7'
                          placeholder='Name'
                        />
                      </div>
                      <div className='form-group mb-6'>
                        <input
                          type='email'
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
                          id='exampleInput8'
                          placeholder='Email address'
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
                          id='exampleFormControlTextarea13'
                          rows='3'
                          placeholder='Message'
                        ></textarea>
                      </div>
                      <button
                        type='submit'
                        className='
          w-full
          px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out'
                      >
                        Send
                      </button>
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
