import { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import ChatWidget from '../components/ChatWidget'

const variants = {
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 100,
    },
  },
  in: {
    y: 300,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  out: {
    opacity: 0,
    y: -300,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

const Layout = ({ children }) => {
  const router = useRouter()
  const { asPath } = useRouter()
  const [isHome, setIsHome] = useState()
  useEffect(() => {
    const isDarkTheme = localStorage.getItem('theme') === 'dark'
    document.querySelector('html').style.backgroundColor = `${
      isDarkTheme ? '#0F172A' : '#FAFAFA'
    }`
    router.pathname === '/' ? setIsHome(true) : setIsHome(false)
  }, [router.pathname, isHome])

  return (
    <>
      <ThemeProvider attribute='class'>
        <AnimatePresence initial={false} mode='wait'>
          <motion.div
            key={asPath}
            variants={variants}
            initial='in'
            animate='inactive'
            exit='out'
          >
            <main className='min-h-screen bg-zinc-50 dark:bg-slate-900 z-0'>
              <Navbar />
              {children}
            </main>
            {isHome ? null : <Footer />}
          </motion.div>
          <ChatWidget />
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default Layout
