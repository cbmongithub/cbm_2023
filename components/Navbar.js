import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <nav>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
          <div className='flex flex-row items-center justify-center p-4'>
            <Link href='/'>
              <svg
                width='60'
                height='60'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 46.07 21.5'
              >
                <path
                  d='M16,29.93c4.57-1.69,9.77-8.19,6.57-13.15-2.94-4.55-10.18-2.09-13.79.15C4.15,19.8.12,26.1,2.77,31.57,5.91,38.06,15.08,35.68,20,32.89a20.51,20.51,0,0,0,7.46-6.78A14,14,0,0,0,29,15.48l-4.45,1.6a18.39,18.39,0,0,1,5.82,13.26c.08,2.2,3.86,1.46,4.54,0,.52-1.11.81-2.34,1.27-3.48s1-2.5,1.65-3.72a53.15,53.15,0,0,1,4.07-6.86H37.31a27.2,27.2,0,0,0,0,11.64,10.46,10.46,0,0,0,7,7.06,3.31,3.31,0,0,0,3.27-.87A1.19,1.19,0,0,0,47,32,7.86,7.86,0,0,1,41.81,26,26.71,26.71,0,0,1,42,15.84c.2-1-1.08-1.36-1.8-1.36a3.28,3.28,0,0,0-2.74,1.38,53.15,53.15,0,0,0-4.07,6.86c-.57,1.15-1.09,2.32-1.57,3.51s-.8,2.52-1.35,3.69H35c-.18-5.66-2-10.88-6.23-14.8-1.15-1.06-4.94-.49-4.45,1.61a11.62,11.62,0,0,1-4.13,12.16,16.51,16.51,0,0,1-6,3.14c-2,.55-4.39,1-6-.6C5,28.16,7.12,22.73,10.06,20.09A10.91,10.91,0,0,1,14,17.83c1-.33,2.65-.63,3.52,0,1.56,1.16,1.43,3.44.84,5.09A7.24,7.24,0,0,1,14,27.45c-.84.31-1.76,1.35-1.14,2.23s2.27.57,3.12.25Z'
                  transform='translate(-1.92 -14.22)'
                  className='text-black hover:opacity-75 z-50'
                />
              </svg>
            </Link>
          </div>
          <ul className='hidden md:flex'>
            <li className='p-4'>
              <Link href='/'>Home</Link>
            </li>
            <li className='p-4'>
              <Link href='/about'>About</Link>
            </li>
            <li className='p-4'>
              <Link href='/portfolio'>Portfolio</Link>
            </li>
            <li className='p-4'>
              <Link href='/blog'>Blog</Link>
            </li>
            <li className='p-4'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className='block md:hidden z-50'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <ul
            className={
              nav
                ? 'fixed flex flex-col justify-center items-center left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'
                : 'fixed flex flex-col justify-center items-center left-[-100%] top-0 w-[100%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'
            }
          >
            <div className='flex flex-row items-center justify-center p-4'>
              <Link href='/'>
                <svg
                  width='60'
                  height='60'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 46.07 21.5'
                >
                  <path
                    d='M16,29.93c4.57-1.69,9.77-8.19,6.57-13.15-2.94-4.55-10.18-2.09-13.79.15C4.15,19.8.12,26.1,2.77,31.57,5.91,38.06,15.08,35.68,20,32.89a20.51,20.51,0,0,0,7.46-6.78A14,14,0,0,0,29,15.48l-4.45,1.6a18.39,18.39,0,0,1,5.82,13.26c.08,2.2,3.86,1.46,4.54,0,.52-1.11.81-2.34,1.27-3.48s1-2.5,1.65-3.72a53.15,53.15,0,0,1,4.07-6.86H37.31a27.2,27.2,0,0,0,0,11.64,10.46,10.46,0,0,0,7,7.06,3.31,3.31,0,0,0,3.27-.87A1.19,1.19,0,0,0,47,32,7.86,7.86,0,0,1,41.81,26,26.71,26.71,0,0,1,42,15.84c.2-1-1.08-1.36-1.8-1.36a3.28,3.28,0,0,0-2.74,1.38,53.15,53.15,0,0,0-4.07,6.86c-.57,1.15-1.09,2.32-1.57,3.51s-.8,2.52-1.35,3.69H35c-.18-5.66-2-10.88-6.23-14.8-1.15-1.06-4.94-.49-4.45,1.61a11.62,11.62,0,0,1-4.13,12.16,16.51,16.51,0,0,1-6,3.14c-2,.55-4.39,1-6-.6C5,28.16,7.12,22.73,10.06,20.09A10.91,10.91,0,0,1,14,17.83c1-.33,2.65-.63,3.52,0,1.56,1.16,1.43,3.44.84,5.09A7.24,7.24,0,0,1,14,27.45c-.84.31-1.76,1.35-1.14,2.23s2.27.57,3.12.25Z'
                    transform='translate(-1.92 -14.22)'
                    className='text-black hover:opacity-75'
                  />
                </svg>
              </Link>
            </div>
            <li className='p-4 border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='p-4 border-b'>
              <Link href='/about'>About</Link>
            </li>
            <li className='p-4 border-b'>
              <Link href='/portfolio'>Portfolio</Link>
            </li>
            <li className='p-4 border-b'>
              <Link href='/blog'>Blog</Link>
            </li>
            <li className='p-4 border-b'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar