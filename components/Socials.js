import { socialLinks } from '../constants'
import { FaGithub, FaTiktok, FaCodepen, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const Socials = ({ style }) => {
  return (
    <div className={`${style} text-purple-600`}>
      <li className='px-5 text-purple-600 hover:text-pink-500 transition duration-150 ease-in-out'>
        <Link
          href={socialLinks.github}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </Link>
      </li>
      <li className='px-5 text-purple-600 hover:text-pink-500 transition duration-150 ease-in-out'>
        <Link
          href={socialLinks.codepen}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaCodepen />
        </Link>
      </li>
      <li className='px-5 text-purple-600 hover:text-pink-500 transition duration-150 ease-in-out'>
        <Link
          href={socialLinks.tiktok}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTiktok />
        </Link>
      </li>
      <li className='px-5 text-purple-600 hover:text-pink-500 transition duration-150 ease-in-out'>
        <Link
          href={socialLinks.twitter}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTwitter />
        </Link>
      </li>
    </div>
  )
}

export default Socials
