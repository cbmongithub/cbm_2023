import { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

import Loader from './Loader'
//import Navbar from './Navbar'
import Menu from './Menu'
import Footer from './Footer'
import ChatWidget from './ChatWidget'

const variants = {
  inactive: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 30,
    },
  },
  in: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

const Layout = ({ children }) => {
  const router = useRouter()
  const { asPath } = useRouter()
  const [isDisabled, setIsDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const isDarkTheme = localStorage.getItem('theme') === 'dark'
    document.querySelector('html').style.backgroundColor = `${
      isDarkTheme ? '#020617' : '#FAFAFA'
    }`
    router.pathname === '/'
      ? setIsDisabled(true)
      : router.pathname === '/404'
      ? setIsDisabled(true)
      : setIsDisabled(false)
  }, [router.pathname, isDisabled])

  useEffect(() => {
    const handleRouteChange = e => {
      setLoading(true)
    }

    const handleRouteChangeComplete = e => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])

  return (
    <ThemeProvider attribute='class'>
      <AnimatePresence
        initial={true}
        mode='wait'>
        <motion.div
          key={asPath}
          variants={variants}
          initial='in'
          animate='inactive'
          exit='out'>
          {loading ? (
            <Loader />
          ) : (
            <>
              <main className='z-0 min-h-screen bg-zinc-50 dark:bg-slate-950'>
                <Menu />
                {children}
              </main>
              {isDisabled ? null : <Footer />}
            </>
          )}
        </motion.div>
        <ChatWidget />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default Layout
