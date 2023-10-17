import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

import {
  svgPathVariant1,
  svgPathVariant2,
  firstVariant,
  secondVariant,
  thirdVariant,
  fourthVariant,
  fifthVariant,
  sixthVariant,
  seventhVariant,
} from '../constants'
import Socials from './Socials'

const useLoaded = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => setLoaded(true), [])
  return loaded
}

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const router = useRouter()
  const [isOn, setIsOn] = useState(false)
  const [nav, setNav] = useState(false)
  const [animation, setAnimation] = useState('closed')
  const loaded = useLoaded()

  const handleThemeColor = () => {
    currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
    setIsOn(!isOn)
    document.querySelector('html').style.backgroundColor = `${
      currentTheme == 'dark' ? '#FAFAFA' : '#0F172A'
    }`
  }

  const handleNav = () => {
    setNav(!nav)
    setAnimation('moving')
    document.querySelector('body').style.overflowY = nav ? 'auto' : 'hidden'
    setTimeout(() => {
      setAnimation(animation === 'closed' ? 'open' : 'closed')
    }, 500)
  }

  useEffect(() => {
    router.pathname === '/'
      ? (document.querySelector('body').style.overflowY = 'hidden')
      : (document.querySelector('body').style.overflowY = 'auto')
  }, [router.pathname])

  return (
    <>
      <nav>
        <div className='mx-auto flex h-24 items-center justify-between overflow-hidden px-4 text-zinc-800 dark:text-zinc-50'>
          <div className='z-40 flex flex-row items-center justify-center p-4'>
            <Link
              href='/'
              aria-label='Christian B Martinez | Home Page'>
              <svg
                width='50'
                height='50'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 46.07 21.5'>
                <path
                  d='M16,29.93c4.57-1.69,9.77-8.19,6.57-13.15-2.94-4.55-10.18-2.09-13.79.15C4.15,19.8.12,26.1,2.77,31.57,5.91,38.06,15.08,35.68,20,32.89a20.51,20.51,0,0,0,7.46-6.78A14,14,0,0,0,29,15.48l-4.45,1.6a18.39,18.39,0,0,1,5.82,13.26c.08,2.2,3.86,1.46,4.54,0,.52-1.11.81-2.34,1.27-3.48s1-2.5,1.65-3.72a53.15,53.15,0,0,1,4.07-6.86H37.31a27.2,27.2,0,0,0,0,11.64,10.46,10.46,0,0,0,7,7.06,3.31,3.31,0,0,0,3.27-.87A1.19,1.19,0,0,0,47,32,7.86,7.86,0,0,1,41.81,26,26.71,26.71,0,0,1,42,15.84c.2-1-1.08-1.36-1.8-1.36a3.28,3.28,0,0,0-2.74,1.38,53.15,53.15,0,0,0-4.07,6.86c-.57,1.15-1.09,2.32-1.57,3.51s-.8,2.52-1.35,3.69H35c-.18-5.66-2-10.88-6.23-14.8-1.15-1.06-4.94-.49-4.45,1.61a11.62,11.62,0,0,1-4.13,12.16,16.51,16.51,0,0,1-6,3.14c-2,.55-4.39,1-6-.6C5,28.16,7.12,22.73,10.06,20.09A10.91,10.91,0,0,1,14,17.83c1-.33,2.65-.63,3.52,0,1.56,1.16,1.43,3.44.84,5.09A7.24,7.24,0,0,1,14,27.45c-.84.31-1.76,1.35-1.14,2.23s2.27.57,3.12.25Z'
                  transform='translate(-1.92 -14.22)'
                  fill='currentColor'
                  className='z-50 transition duration-150 ease-in-out hover:opacity-75'
                />
              </svg>
            </Link>
          </div>
          <ul className='z-40 hidden md:flex'>
            <li className='p-4 transition duration-150 ease-in-out hover:text-purple-600'>
              <Link
                href='/'
                aria-label='Christian B Martinez | Home Page'>
                Home
              </Link>
            </li>
            <li className='p-4 transition duration-150 ease-in-out hover:text-purple-600'>
              <Link
                href='/about'
                aria-label='Christian B Martinez | About Page'>
                About
              </Link>
            </li>
            <li className='p-4 transition duration-150 ease-in-out hover:text-purple-600'>
              <Link
                href='/portfolio'
                aria-label='Christian B Martinez | Portfolio Page'>
                Portfolio
              </Link>
            </li>

            <li className='p-4 transition duration-150 ease-in-out hover:text-purple-600'>
              <Link
                href='/blog'
                aria-label='Christian B Martinez | Blog Page'>
                Blog
              </Link>
            </li>
            <li className='p-4 transition duration-150 ease-in-out hover:text-purple-600'>
              <Link
                href='/contact'
                aria-label='Christian B Martinez | Contact Page'>
                Contact
              </Link>
            </li>
            <li className='p-4'>
              <div
                className='icon-toggler-container'
                data-darkmode={isOn}
                onClick={handleThemeColor}
                style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}>
                <motion.div
                  layout
                  className='handle'>
                  <motion.i
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                    {currentTheme === 'dark' && loaded ? (
                      <FaMoon className='toggler-icon' />
                    ) : (
                      <FaSun className='toggler-icon' />
                    )}
                  </motion.i>
                </motion.div>
              </div>
            </li>
          </ul>
          <div className='z-50 mr-3 flex cursor-pointer flex-row items-center justify-center md:hidden'>
            {!nav && (
              <div
                className='icon-toggler-container mr-5 p-4'
                data-darkmode={isOn}
                onClick={handleThemeColor}
                style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}>
                <motion.div
                  layout
                  className='handle'>
                  <AnimatePresence initial={false}>
                    <motion.i
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 30, opacity: 0 }}
                      transition={{ duration: 0.2 }}>
                      {currentTheme === 'dark' && loaded ? (
                        <FaMoon className='toggler-icon' />
                      ) : (
                        <FaSun className='toggler-icon' />
                      )}
                    </motion.i>
                  </AnimatePresence>
                </motion.div>
              </div>
            )}
            <div onClick={handleNav}>
              <svg
                width='29'
                height='29'
                viewBox='0 0 29 29'>
                <motion.path
                  stroke='currentColor'
                  animate={animation}
                  variants={svgPathVariant1}
                />
                <motion.path
                  stroke='currentColor'
                  animate={animation}
                  variants={svgPathVariant2}
                />
              </svg>
            </div>
          </div>
          <ul
            className={
              nav
                ? 'fixed left-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-white duration-500 ease-in-out dark:bg-slate-900'
                : 'fixed left-[-100%] top-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-white duration-500 ease-in-out dark:bg-slate-900'
            }>
            <motion.li
              animate={nav ? 'open' : 'closed'}
              variants={firstVariant}
              className='fixed top-20 inline-flex p-4'>
              <Link
                href='/'
                aria-label='Christian B Martinez | Home Page'
                onClick={handleNav}>
                <svg
                  width='60'
                  height='60'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 46.07 21.5'>
                  <path
                    d='M16,29.93c4.57-1.69,9.77-8.19,6.57-13.15-2.94-4.55-10.18-2.09-13.79.15C4.15,19.8.12,26.1,2.77,31.57,5.91,38.06,15.08,35.68,20,32.89a20.51,20.51,0,0,0,7.46-6.78A14,14,0,0,0,29,15.48l-4.45,1.6a18.39,18.39,0,0,1,5.82,13.26c.08,2.2,3.86,1.46,4.54,0,.52-1.11.81-2.34,1.27-3.48s1-2.5,1.65-3.72a53.15,53.15,0,0,1,4.07-6.86H37.31a27.2,27.2,0,0,0,0,11.64,10.46,10.46,0,0,0,7,7.06,3.31,3.31,0,0,0,3.27-.87A1.19,1.19,0,0,0,47,32,7.86,7.86,0,0,1,41.81,26,26.71,26.71,0,0,1,42,15.84c.2-1-1.08-1.36-1.8-1.36a3.28,3.28,0,0,0-2.74,1.38,53.15,53.15,0,0,0-4.07,6.86c-.57,1.15-1.09,2.32-1.57,3.51s-.8,2.52-1.35,3.69H35c-.18-5.66-2-10.88-6.23-14.8-1.15-1.06-4.94-.49-4.45,1.61a11.62,11.62,0,0,1-4.13,12.16,16.51,16.51,0,0,1-6,3.14c-2,.55-4.39,1-6-.6C5,28.16,7.12,22.73,10.06,20.09A10.91,10.91,0,0,1,14,17.83c1-.33,2.65-.63,3.52,0,1.56,1.16,1.43,3.44.84,5.09A7.24,7.24,0,0,1,14,27.45c-.84.31-1.76,1.35-1.14,2.23s2.27.57,3.12.25Z'
                    transform='translate(-1.92 -14.22)'
                    className='hover:opacity-75'
                    fill='currentColor'
                  />
                </svg>
              </Link>
            </motion.li>
            <li className='w-full p-4 text-center text-2xl text-zinc-900 hover:text-purple-600 dark:text-zinc-200'>
              <motion.div
                animate={nav ? 'open' : 'closed'}
                variants={secondVariant}>
                <Link
                  className='font-light transition duration-150 ease-in-out dark:hover:text-purple-600'
                  href='/'
                  aria-label='Christian B Martinez | Home Page'
                  onClick={handleNav}>
                  Home
                </Link>
              </motion.div>
            </li>
            <li className='w-full p-4 text-center text-2xl text-zinc-900 hover:text-purple-600 dark:text-zinc-200'>
              <motion.div
                animate={nav ? 'open' : 'closed'}
                variants={thirdVariant}>
                <Link
                  className='font-light transition duration-150 ease-in-out dark:hover:text-purple-600'
                  href='/about'
                  aria-label='Christian B Martinez | About Page'
                  onClick={handleNav}>
                  About
                </Link>
              </motion.div>
            </li>
            <li className='w-full p-4 text-center text-2xl text-zinc-900 hover:text-purple-600 dark:text-zinc-200'>
              <motion.div
                animate={nav ? 'open' : 'closed'}
                variants={fourthVariant}>
                <Link
                  className='font-light transition duration-150 ease-in-out dark:hover:text-purple-600'
                  href='/portfolio'
                  aria-label='Christian B Martinez | Portfolio Page'
                  onClick={handleNav}>
                  Portfolio
                </Link>
              </motion.div>
            </li>
            <li className='w-full p-4 text-center text-2xl text-zinc-900 hover:text-purple-600 dark:text-zinc-200'>
              <motion.div
                animate={nav ? 'open' : 'closed'}
                variants={fifthVariant}>
                <Link
                  className='font-light transition duration-150 ease-in-out dark:hover:text-purple-600'
                  href='/blog'
                  onClick={handleNav}
                  aria-label='Christian B Martinez | Blog Page'>
                  Blog
                </Link>
              </motion.div>
            </li>
            <li className='w-full p-4 text-center text-2xl text-zinc-900 hover:text-purple-600 dark:text-zinc-200'>
              <motion.div
                animate={nav ? 'open' : 'closed'}
                variants={sixthVariant}>
                <Link
                  className='font-light transition duration-150 ease-in-out dark:hover:text-purple-600'
                  href='/contact'
                  aria-label='Christian B Martinez | Contact Page'
                  onClick={handleNav}>
                  Contact
                </Link>
              </motion.div>
            </li>
            <div className='fixed bottom-20 flex flex-col items-center justify-center p-4'>
              <motion.div
                animate={nav ? 'open' : 'closed'}
                variants={seventhVariant}>
                <Socials />
              </motion.div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
