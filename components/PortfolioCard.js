import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'
import { motion } from 'framer-motion'

const PortfolioCard = ({ imageUrl, href, repo, children }) => {
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
      <div className='flex flex-col justify-center items-center cursor-default'>
        {children}
      </div>
    </div>
  )
}

export default PortfolioCard
