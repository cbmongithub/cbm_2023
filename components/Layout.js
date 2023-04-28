import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <main className='min-h-screen bg-white z-0'>
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
