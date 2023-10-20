import Link from 'next/link'
import { motion } from 'framer-motion'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const MenuItem = ({ href, text }) => {
  return (
    <motion.li
      className='mb-5 flex cursor-pointer list-none flex-row items-end justify-end'
      variants={variants}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.95 }}>
      <Link
        className='z-40 text-lg font-normal text-zinc-900 hover:text-zinc-950'
        href={href}>
        {text}
      </Link>
    </motion.li>
  )
}

export default MenuItem
