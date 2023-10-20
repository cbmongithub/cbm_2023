import Image from 'next/image'
import { motion } from 'framer-motion'

const Avatar = ({
  className = 'relative flex',
  initial = { x: 100, opacity: 0 },
  animate = { x: 0, opacity: 1 },
  whileInView,
  transition = { type: 'spring', stiffness: 30, delay: 1 },
  width = 'w-1/2 md:w-1/3 lg:w-1/4 xl:w-3/4',
  height = 'h-1/2 md:h-1/3 lg:h-1/4 xl:h-3/4',
  shadow = 'shadow-2xl',
}) => (
  <motion.div
    className={className}
    initial={initial}
    animate={animate}
    whileInView={whileInView}
    transition={transition}>
    <Image
      src={`${process.env.NEXT_PUBLIC_BASE_URL}/img/me.webp`}
      priority
      loading='eager'
      alt='Image of Christian B. Martinez'
      width={400}
      height={400}
      className={`mx-auto ${height} ${width} rounded-full object-cover ${shadow}`}
    />
    <div
      className={`absolute inset-0 mx-auto h-full ${width} rounded-full bg-purple-600 opacity-25 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-500 dark:opacity-35`}></div>
  </motion.div>
)

export default Avatar
