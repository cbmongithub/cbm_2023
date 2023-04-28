import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <main className='min-h-screen bg-white'>
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
