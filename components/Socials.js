import { FaGithub, FaTiktok, FaCodepen, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const socialLinks = {
  github: 'https://github.com/christianbmartinez',
  facebook: 'https://facebook.com',
  linkedin: 'https://linkedin.com',
  tiktok: 'https://www.tiktok.com/@coderchris',
  twitter: 'https://twitter.com/_coderchris',
  codepen: 'https://codepen.io/_coderchris',
}

const Socials = ({ style }) => {
  return (
    <div className={style}>
      <li className='px-5'>
        <Link
          href={socialLinks.github}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </Link>
      </li>
      <li className='px-5'>
        <Link
          href={socialLinks.codepen}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaCodepen />
        </Link>
      </li>
      <li className='px-5'>
        <Link
          href={socialLinks.tiktok}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTiktok />
        </Link>
      </li>
      <li className='px-5'>
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
