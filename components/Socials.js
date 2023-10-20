import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

import { socialLinks } from '../constants'

const Socials = ({ style = 'inline-flex' }) => {
  return (
    <ul className={`${style} text-purple-600`}>
      <li className='px-5 text-purple-600 transition duration-150 ease-in-out hover:text-pink-500'>
        <Link
          href={socialLinks.github}
          target='_blank'
          role='link'
          rel='noopener noreferrer'
          aria-label='Christian B Martinez | Github Link'>
          <FaGithub />
        </Link>
      </li>
      <li className='px-5 text-purple-600 transition duration-150 ease-in-out hover:text-pink-500'>
        <Link
          href={socialLinks.twitter}
          target='_blank'
          role='link'
          rel='noopener noreferrer'
          aria-label='Christian B Martinez | Twitter Link'>
          <FaSquareXTwitter />
        </Link>
      </li>
      <li className='px-5 text-purple-600 transition duration-150 ease-in-out hover:text-pink-500'>
        <Link
          href={socialLinks.linkedin}
          target='_blank'
          role='link'
          rel='noopener noreferrer'
          aria-label='Christian B Martinez | Github Link'>
          <FaLinkedin />
        </Link>
      </li>
    </ul>
  )
}

export default Socials
