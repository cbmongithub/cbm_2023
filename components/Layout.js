import Navbar from './Navbar'
import Footer from './Footer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Layout = ({ children }) => {
  const router = useRouter()
  const [isHome, setIsHome] = useState()
  useEffect(() => {
    router.pathname === '/' ? setIsHome(true) : setIsHome(false)
  }, [router.pathname, isHome])

  return (
    <>
      <main className='min-h-screen bg-white z-0'>
        <Navbar />
        {children}
      </main>
      {isHome ? null : <Footer />}
    </>
  )
}

export default Layout
