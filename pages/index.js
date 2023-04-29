import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Background from '../components/Background'
import { motion } from 'framer-motion'

const Index = () => {
  return (
    <>
      <Head>
        <title>Home | Christian B. Martinez</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <div className='absolute top-0 flex flex-row justify-center items-center w-full h-full bg-transparent z-30 px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left'>
          <div className='container mx-auto xl:px-32'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div className='mt-12 lg:mt-0'>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                >
                  <h1 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12'>
                    I&apos;m Christian
                    <br />I build
                    <span className='text-purple-600'>
                      <TypeAnimation
                        sequence={[
                          'websites',
                          2000,
                          'apps',
                          2000,
                          'tools',
                          2000,
                        ]}
                        wrapper='span'
                        cursor={false}
                        repeat={Infinity}
                        className='ml-3 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight'
                      />
                    </span>
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
                >
                  <Link
                    className='inline-block px-7 py-3 mr-2 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                    href='/about'
                    role='button'
                  >
                    ABOUT ME
                  </Link>
                  <Link
                    className='inline-block px-7 py-3 bg-transparent text-purple-600 font-medium text-sm leading-snug uppercase rounded hover:text-purple-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                    href='/portfolio'
                    role='button'
                  >
                    PORTFOLIO
                  </Link>
                </motion.div>
              </div>
              <div className='mb-12 lg:mb-0 flex flex-col justify-center items-center'>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100, delay: 1 }}
                >
                  <Image
                    src='http://localhost:3000/img/me.jpg'
                    priority
                    alt='Image of Christian B. Martinez'
                    width={400}
                    height={400}
                    className='border-solid border-4 opacity-95 border-purple-600 rounded-full mx-auto w-1/2 h-1/2 md:w-2/3 md:h-2/3 shadow-md hover:shadow-2xl transition duration-150 ease-in-out'
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Background />
        </motion.div>
      </section>
    </>
  )
}

export default Index
