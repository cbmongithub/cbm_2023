import { motion } from 'framer-motion'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

import { SiteHead, Background, Avatar } from '../components'

const Index = () => {
  return (
    <>
      <SiteHead
        page='Home'
        title='Home'
        description='Portfolio site of full stack web developer Christian B. Martinez'
        keywords='next js, tailwind css, blog, javascript, tech site, portfolio site, chatgpt app, react'
      />
      <section>
        <div className='absolute top-0 z-30 flex h-full w-full flex-row items-center justify-center bg-transparent px-6 py-12 text-center md:px-12 lg:text-left'>
          <div className='container max-w-screen-xl'>
            <div className='grid items-center gap-12 text-center xl:grid-cols-2 xl:text-left'>
              <Avatar
                className='relative flex-col items-center justify-center xl:hidden'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 30, delay: 0.5 }}
              />
              <div className='mt-0'>
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 30 }}>
                  <h1 className='mb-12 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-6xl xl:text-7xl'>
                    I&apos;m Christian
                    <br />I build
                    <span className='text-purple-600 transition duration-150 ease-in-out hover:text-pink-500'>
                      <TypeAnimation
                        sequence={['sites', 2000, 'apps', 2000, 'tools', 2000]}
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
                  transition={{ type: 'spring', stiffness: 30, delay: 0.5 }}>
                  <Link
                    className='mr-2 rounded-xl bg-purple-600 px-7 py-3.5 text-sm font-medium uppercase leading-snug text-zinc-50 shadow-xl transition duration-150 ease-in-out hover:border-pink-500 hover:bg-pink-500 hover:shadow-2xl focus:border-pink-500 focus:bg-pink-500 focus:text-zinc-50 focus:shadow-2xl focus:outline-none focus:ring-0 active:bg-pink-500 active:shadow-2xl'
                    href='/about'
                    role='button'
                    aria-label='About link button'
                    rel='noopener noreferrer'>
                    ABOUT
                  </Link>
                  <Link
                    className='mr-2 rounded-xl bg-pink-500 px-7 py-3.5 text-sm font-medium uppercase leading-snug text-zinc-50 shadow-xl transition duration-150 ease-in-out hover:border-purple-600 hover:bg-purple-600 hover:shadow-2xl focus:border-purple-600 focus:bg-purple-600 focus:text-zinc-50 focus:shadow-2xl focus:outline-none focus:ring-0 active:bg-purple-600 active:shadow-2xl'
                    href='/portfolio'
                    role='button'
                    aria-label='Portfolio link button'>
                    PORTFOLIO
                  </Link>
                </motion.div>
              </div>
              <Avatar
                className='relative mr-[-50px] hidden flex-col justify-self-end xl:flex xl:w-3/4'
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 30, delay: 1 }}
              />
            </div>
          </div>
        </div>
        <Background />
      </section>
    </>
  )
}

export default Index
