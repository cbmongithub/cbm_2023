import Image from 'next/image'
import { motion } from 'framer-motion'

const Avatar = ({
  className = 'relative flex',
  initial = { x: 100, opacity: 0 },
  animate = { x: 0, opacity: 1 },
  transition = { type: 'spring', stiffness: 100, delay: 1 },
  width = 'w-2/3',
  height = 'h-2/3',
  shadow = 'shadow-2xl',
}) => (
  <motion.div
    className={className}
    initial={initial}
    animate={animate}
    transition={transition}>
    <Image
      src={`${process.env.NEXT_PUBLIC_BASE_URL}/img/me.webp`}
      priority
      alt='Image of Christian B. Martinez'
      width={400}
      height={400}
      className={`mx-auto ${height} ${width} rounded-full object-cover ${shadow}`}
    />
    <div
      className={`absolute inset-0 mx-auto h-full ${width} rounded-full bg-purple-600 opacity-20 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-500 dark:opacity-30`}></div>
  </motion.div>
)
export default Avatar
