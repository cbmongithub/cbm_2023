import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'
import { motion } from 'framer-motion'

const PortfolioCard = ({ imageUrl, title, description, href, repo }) => {
  return (
    <div
      className='bg-cover my-12 bg-center rounded-lg cursor-pointer w-full h-96 group shadow-md'
      style={{
        backgroundImage: `url('${imageUrl}')`,
      }}
    >
      <div className='flex flex-col rounded-lg justify-center w-full h-full hover:shadow-2xl bg-gradient-to-r from-purple-600 to-pink-500 opacity-60 transition duration-300 ease-in-out hover:opacity-90'>
        <div className='w-full h-full flex flex-row justify-evenly items-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out'>
          <Link
            className='text-white font-medium text-md tracking-wider hover:opacity-80 transition duration-150 ease-in-out'
            href={href}
            role='button'
          >
            <span className='inline-flex justify-center items-center'>
              LIVE&nbsp; <FaLink />
            </span>
          </Link>
          <Link
            className='text-white font-medium text-md tracking-wider hover:opacity-80 transition duration-150 ease-in-out'
            href={repo}
            role='button'
          >
            <span className='inline-flex justify-center items-center'>
              REPO&nbsp; <FaGithub />
            </span>
          </Link>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
        >
          <h2 className='mt-8 text-2xl font-semibold text-gray-800 capitalize dark:text-white'>
            {title}
          </h2>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 1 }}
        >
          <p className='mt-2 text-center font-light text-gray-800 text-lg dark:text-gray-400'>
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default PortfolioCard
