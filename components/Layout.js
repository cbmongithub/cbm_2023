import { AnimatePresence, motion } from 'framer-motion'
import Cookie from 'js-cookie'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { layoutVariants } from '../constants'

import ChatWidget from './ChatWidget'
import Footer from './Footer'
import Loader from './Loader'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  const router = useRouter()
  const { asPath } = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true)
    }

    const handleRouteChangeComplete = () => {
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
        initial='false'
        mode='wait'>
        <motion.main
          className='z-0 min-h-screen bg-zinc-50 dark:bg-slate-950'
          key={asPath}
          variants={layoutVariants}
          initial='in'
          animate='inactive'
          exit='out'>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Navbar />
              {children}
              <ChatWidget />
              {router.pathname === '/' ? null : <Footer />}
            </>
          )}
        </motion.main>
        <Cookie />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default Layout
