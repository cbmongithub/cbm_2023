import Background from '../components/Background'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className='w-full flex items-center justify-center'>
          <div className='relative z-50 top-40 bg-white rounded-lg shadow-md py-12 px-8 lg:px-28 '>
            <p className='md:text-3xl text-xl font-bold leading-7 text-center text-gray-700'>
              Contact me and let&apos;s chat!
            </p>
            <div className='md:flex items-center mt-12'>
              <div className='md:w-72 flex flex-col'>
                <label className='text-base font-semibold leading-none text-gray-800'>
                  Name
                </label>
                <input
                  tabIndex={0}
                  arial-label='Please input name'
                  type='name'
                  className='text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-purple-600 mt-4 bg-gray-100 border rounded border-gray-200'
                />
              </div>
              <div className='md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4'>
                <label className='text-base font-semibold leading-none text-gray-800'>
                  Email Address
                </label>
                <input
                  tabIndex={0}
                  arial-label='Please input email address'
                  type='name'
                  className='text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-purple-600 mt-4 bg-gray-100 border rounded border-gray-200'
                />
              </div>
            </div>
            <div className='md:flex items-center mt-8'>
              <div className='md:w-72 flex flex-col'>
                <label className='text-base font-semibold leading-none text-gray-800'>
                  Company name
                </label>
                <input
                  tabIndex={0}
                  role='input'
                  arial-label='Please input company name'
                  type='name'
                  className='text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-purple-600 mt-4 bg-gray-100 border rounded border-gray-200'
                />
              </div>
              <div className='md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4'>
                <label className='text-base font-semibold leading-none text-gray-800'>
                  Country
                </label>
                <input
                  tabIndex={0}
                  arial-label='Please input country name'
                  type='name'
                  className='text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-purple-600 mt-4 bg-gray-100 border rounded border-gray-200'
                />
              </div>
            </div>
            <div>
              <div className='w-full flex flex-col mt-8'>
                <label className='text-base font-semibold leading-none text-gray-800'>
                  Message
                </label>
                <textarea
                  tabIndex={0}
                  aria-label='leave a message'
                  role='textbox'
                  type='name'
                  className='h-36 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-purple-600 mt-4 bg-gray-100 border rounded border-gray-200 resize-none'
                  defaultValue={''}
                />
              </div>
            </div>
            <div className='flex items-center justify-center w-full'>
              <button className='mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-purple-600 rounded hover:bg-purple-700 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 focus:outline-none'>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
      >
        <Background />
      </motion.div>
    </>
  )
}

export default Contact
