import { motion } from 'framer-motion'

const Heading = ({ title, paragraph }) => {
  return (
    <div className='mx-auto text-center my-20'>
      <motion.div
        initial={{ x: 100, opacity: 0, duration: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <h1 className='mb-12 text-5xl md:text-6xl font-extrabold leading-none tracking-tight text-gray-900'>
          {title}
        </h1>
      </motion.div>
      {paragraph ? (
        <motion.div
          initial={{ x: -100, opacity: 0, duration: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
        >
          <p className='font-light text-gray-800 text-xl dark:text-gray-400'>
            {paragraph}
          </p>
        </motion.div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Heading
