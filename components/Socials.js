import { socialLinks } from '../constants'
import { FaGithub, FaTiktok, FaCodepen, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import Link from 'next/link'

const Socials = ({ style }) => {
  return (
    <ul className={`${style} text-purple-600`}>
      <li className='px-5 text-purple-600 hover:text-pink-500 transition duration-150 ease-in-out'>
        <Link
          href={socialLinks.github}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Christian B Martinez | Github Link'
        >
          <FaGithub />
        </Link>
      </li>
      <li className='px-5 text-purple-600 hover:text-pink-500 transition duration-150 ease-in-out'>
        <Link
          href={socialLinks.codepen}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Christian B Martinez | Codepen Link'
        >
          <FaCodepen />
        </Link>
      </li>
      <li className='px-5 text-purple-600 hover:text-pink-500 transition duration-150 ease-in-out'>
        <Link
          href={socialLinks.tiktok}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Christian B Martinez | Tiktok Link'
        >
          <FaTiktok />
        </Link>
      </li>
      <li className='px-5 text-purple-600 hover:text-pink-500 transition duration-150 ease-in-out'>
        <Link
          href={socialLinks.twitter}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Christian B Martinez | Twitter Link'
        >
          <FaSquareXTwitter />
        </Link>
      </li>
      <li className='px-5 text-purple-600 hover:text-pink-500 transition duration-150 ease-in-out'>
        <Link
          href={socialLinks.linkedin}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Christian B Martinez | Github Link'
        >
          <FaLinkedin />
        </Link>
      </li>
    </ul>
  )
}

export default Socials
