import Navbar from './Navbar'
import Footer from './Footer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  in: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  out: {
    opacity: 0,
    y: -100,
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
    router.pathname === '/' ? setIsHome(true) : setIsHome(false)
  }, [router.pathname, isHome])

  return (
    <>
      <AnimatePresence initial={false} mode='wait'>
        <motion.div
          key={asPath}
          variants={variants}
          initial='in'
          animate='inactive'
          exit='out'
        >
          <main className='min-h-screen bg-white z-0'>
            <Navbar />
            {children}
          </main>
        </motion.div>
      </AnimatePresence>
      {isHome ? null : <Footer />}
    </>
  )
}

export default Layout
