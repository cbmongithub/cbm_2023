import { motion } from 'framer-motion'

const Path = props => (
  <motion.path
    fill='transparent'
    strokeWidth='2'
    stroke='#170206'
    strokeLinecap='round'
    {...props}
  />
)

const MenuToggle = ({ toggle }) => (
  <button
    className='absolute right-[15px] top-[18px] z-40 h-[30px] w-[30px] cursor-pointer select-none rounded-xl border-none bg-transparent outline-none'
    onClick={toggle}>
    <svg
      width='23'
      height='23'
      viewBox='0 0 23 23'>
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d='M 2 9.423 L 20 9.423'
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
)

export default MenuToggle
