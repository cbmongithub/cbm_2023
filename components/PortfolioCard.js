import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'
import Image from 'next/image'

const PortfolioCard = ({
  title,
  imageUrl,
  alt,
  description,
  repo,
  href,
  tags,
}) => {
  return (
    <div className='max-w-sm overflow-hidden rounded-lg shadow-lg'>
      <Image
        className='object-cover object-center h-48 w-96'
        src={imageUrl}
        alt={alt}
        width={500}
        height={500}
      />
      <div className='px-6 py-4 h-40'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{description}</p>
        <div className='flex justify-start items-left my-5'>
          <p className='text-gray-700 text-base my-2'>Project Links:</p>
          <Link
            href={repo}
            className='text-gray-700 inline-flex items-center font-medium text-primary-600 hover:text-purple-600 transition duration-300 ease-in-out'
          >
            <FaGithub className='ml-3' />
          </Link>

          <Link
            href={href}
            className='text-gray-700 inline-flex items-center font-medium text-primary-600 hover:text-purple-600 transition duration-300 ease-in-out'
          >
            <FaLink className='ml-2' />
          </Link>
        </div>
      </div>

      <div className='px-6 pt-4 pb-3'>
        {tags.map((tag, i) => {
          return (
            <span
              key={i}
              className='inline-flex justify-between items-center bg-gray-100 shadow-md rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
            >
              <p>{tag}</p>
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default PortfolioCard
