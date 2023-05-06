import { useEffect, useState } from 'react'
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
    router.pathname === '/' ? setIsHome(true) : setIsHome(false)
  }, [router.pathname, isHome])

  return (
    <>
      <AnimatePresence initial={true} mode='wait'>
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
          {isHome ? null : <Footer />}
        </motion.div>
        <ChatWidget />
      </AnimatePresence>
    </>
  )
}

export default Layout
