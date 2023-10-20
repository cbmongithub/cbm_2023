import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

import {
  svgPathOpen,
  svgPathClose,
  ulVariants,
  liVariants,
  navLinks,
} from '../constants'

const useLoaded = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => setLoaded(true), [])
  return loaded
}

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const router = useRouter()
  const [nav, setNav] = useState(false)
  const [animation, setAnimation] = useState('closed')
  const loaded = useLoaded()

  const handleThemeColor = () => {
    currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
  }

  const handleNav = () => {
    setNav(!nav)
    setAnimation('moving')
    setTimeout(() => {
      setAnimation(animation === 'closed' ? 'open' : 'closed')
    }, 750)
  }

  useEffect(() => {
    router.pathname === '/'
      ? (document.querySelector('body').style.overflowY = 'hidden')
      : (document.querySelector('body').style.overflowY = 'auto')
  }, [router.pathname])

  return (
    <nav>
      <div className='mx-auto flex h-20 max-w-screen-xl items-center justify-between overflow-hidden px-6 text-zinc-800 dark:text-zinc-50'>
        <div className='z-50 flex flex-row items-center justify-center py-4'>
          <Link
            href='/'
            role='link'
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
        <div className='z-40 hidden md:flex'>
          <ul className='flex flex-row items-center justify-center p-4'>
            {navLinks.map(link => (
              <motion.li
                className='p-4 transition duration-150 ease-in-out hover:text-purple-600'
                whileHover={{ scale: 0.97 }}
                whileTap={{ scale: 0.97 }}
                key={link.text}>
                <Link
                  href={link.href}
                  role='link'
                  target={link.text === 'Resume' ? '_blank' : '_self'}
                  download={link.text === 'Resume' ? true : false}
                  aria-label={`Christian B Martinez | ${link.text}`}>
                  {link.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className='z-50 flex cursor-pointer flex-row items-center justify-center py-4'>
          <div
            className={`z-40 mb-1 mr-4 flex h-6 w-10 cursor-pointer flex-row items-center md:mr-0 ${
              currentTheme === 'dark' && loaded
                ? 'justify-end'
                : 'justify-start'
            } rounded-3xl bg-purple-600 px-0.5 py-0 transition-all duration-150 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-500`}
            onClick={handleThemeColor}>
            <motion.div
              layout
              className='grid h-6 w-6 items-center justify-items-center overflow-hidden'>
              <AnimatePresence initial={false}>
                <motion.i
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ duration: 0.1 }}>
                  {currentTheme === 'dark' && loaded ? (
                    <FaMoon className='text-zinc-50' />
                  ) : (
                    <FaSun className='text-zinc-50' />
                  )}
                </motion.i>
              </AnimatePresence>
            </motion.div>
          </div>
          <button
            className='md:hidden'
            type='button'
            aria-label='Menu Toggle'
            role='button'
            onClick={handleNav}>
            <svg
              aria-hidden='true'
              width='29'
              height='29'
              viewBox='0 0 29 29'>
              <motion.path
                stroke='currentColor'
                animate={animation}
                variants={svgPathOpen}
              />
              <motion.path
                stroke='currentColor'
                animate={animation}
                variants={svgPathClose}
              />
            </svg>
          </button>
        </div>
        <motion.ul
          className={
            nav
              ? 'fixed right-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-white duration-1000 ease-in-out dark:bg-slate-900'
              : 'fixed right-[-100%] top-0 z-40 flex h-screen w-full flex-col items-center justify-center  bg-zinc-50 duration-1000 ease-in-out dark:bg-slate-950'
          }
          variants={ulVariants}
          animate={nav ? 'open' : 'closed'}>
          {navLinks.map((link, i) => (
            <motion.li
              className='flex flex-row items-center justify-center p-4'
              key={`${link.text}_${i}`}
              variants={liVariants}
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.95 }}>
              <Link
                className='text-2xl font-light text-zinc-900 transition duration-150 ease-in-out hover:text-purple-600 dark:text-zinc-200 dark:hover:text-purple-600'
                href={link.href}
                role='link'
                target={link.text === 'Resume' ? '_blank' : '_self'}
                download={link.text === 'Resume' ? true : false}
                aria-label={`Christian B Martinez | ${link.text}`}>
                {link.text}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  )
}

export default Navbar
