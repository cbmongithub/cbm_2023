import { motion } from 'framer-motion'

const Heading = ({ title, paragraph }) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
      className='px-6 mx-auto text-center my-20 relative z-30'
    >
      <h1 className='mb-12 text-5xl md:text-6xl font-extrabold leading-none tracking-tight text-gray-900'>
        {title}
      </h1>
      {paragraph ? (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 1 }}
        >
          <p className='font-light text-gray-800 text-xl dark:text-gray-400'>
            {paragraph}
          </p>
        </motion.div>
      ) : (
        ''
      )}
    </motion.div>
  )
}

export default Heading
