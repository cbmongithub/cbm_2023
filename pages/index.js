import SiteHead from '../components/SiteHead'
import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Background from '../components/Background'
import { motion } from 'framer-motion'

const Index = () => {
  return (
    <>
      <SiteHead
        page='Home'
        title='Home'
        description={
          'Portfolio site of full stack web developer Christian B. Martinez'
        }
        keywords={
          'next js, tailwind css, blog, javascript, tech site, portfolio site, chatgpt app, react'
        }
      />
      <section>
        <div className='absolute top-0 z-30 flex h-full w-full flex-row items-center justify-center bg-transparent px-6 py-12 text-center md:px-12 lg:text-left'>
          <div className='container mx-auto xl:px-32'>
            <div className='grid items-center gap-12 lg:grid-cols-2'>
              <div className='mt-12 lg:mt-0'>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100 }}>
                  <h1 className='mb-12 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-6xl xl:text-7xl'>
                    I&apos;m Christian
                    <br />I build
                    <span className='text-purple-600 transition duration-150 ease-in-out hover:text-pink-500'>
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
                        className='ml-3 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl'
                      />
                    </span>
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}>
                  <Link
                    className='mr-2 inline-block rounded border-2 border-purple-600 bg-purple-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-zinc-50 shadow-md transition duration-150 ease-in-out hover:border-pink-500 hover:bg-zinc-50 hover:text-pink-500 hover:shadow-lg focus:border-pink-500 focus:bg-zinc-50 focus:text-pink-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-50 active:shadow-lg'
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/christians-resume.pdf`}
                    role='button'
                    aria-label='Resume view button'
                    locale={false}
                    target='_blank'
                    rel='noopener noreferrer'>
                    RESUME
                  </Link>
                  <Link
                    className='mr-2 inline-block rounded border-2 border-purple-600 bg-transparent bg-zinc-50 px-7 py-3 text-sm font-medium uppercase leading-snug text-purple-600 shadow-md transition duration-150 ease-in-out hover:border-pink-500 hover:bg-pink-500 hover:text-zinc-50 hover:shadow-lg focus:border-pink-500 focus:bg-pink-500 focus:text-zinc-50 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-500 active:shadow-lg'
                    href='/portfolio'
                    role='button'
                    aria-label='Portfolio link button'>
                    PORTFOLIO
                  </Link>
                </motion.div>
              </div>
              <div className='mb-12 flex flex-col items-center justify-center lg:mb-0'>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100, delay: 1 }}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/img/me.webp`}
                    priority
                    alt='Image of Christian B. Martinez'
                    width={400}
                    height={400}
                    className='mx-auto h-1/2 w-1/2 rounded-full shadow-2xl dark:grayscale md:h-2/3 md:w-2/3'
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <Background />
      </section>
    </>
  )
}

export default Index
