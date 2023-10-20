import { motion } from 'framer-motion'

import MenuItem from './MenuItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/portfolio', text: 'Portfolio' },
  { href: '/blog', text: 'Blog' },
  { href: '/contact', text: 'Contact' },
]

const Navigation = () => (
  <motion.ul
    className='absolute right-[28px] top-[100px] w-[230px]'
    variants={variants}>
    {links.map(link => (
      <MenuItem
        href={link.href}
        text={link.text}
        key={link.text}
      />
    ))}
  </motion.ul>
)

export default Navigation
