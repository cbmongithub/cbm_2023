import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from '../hooks/useDimensions'

import MenuToggle from './MenuToggle'
import Navigation from './Navigation'

const background = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 466px 33px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(22px at 466px 33px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const height = useDimensions(containerRef)

  return (
    <>
      <Link
        href='/dashboard'
        className='flex items-center pl-[15px] pt-[18px]'>
        <div className='relative mr-3 h-8 w-8'>
          <Image
            width={30}
            height={30}
            alt='Logo'
            src='/logo.png'
          />
        </div>
        <h1 className='text-2xl font-bold text-zinc-100'>Linkbot</h1>
      </Link>
      <motion.nav
        className='absolute bottom-0 right-0 top-0 z-40 h-24 w-screen'
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}>
        <motion.div
          className='absolute bottom-0 right-0 top-0 z-0 h-screen w-screen bg-red-500'
          variants={background}
        />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  )
}

export default Menu
