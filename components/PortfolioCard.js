import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'

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
    <div className='max-w-screen overflow-hidden rounded-lg bg-white shadow-2xl dark:bg-slate-800'>
      <div
        className='h-48 w-full bg-cover bg-center lg:w-96'
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
        alt={alt}>
        <div className='flex h-full w-full items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 opacity-60'></div>
      </div>
      <div className='flex h-full w-full flex-col justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 opacity-60 transition duration-300 ease-in-out hover:opacity-90 hover:shadow-2xl'></div>
      <div className='h-20 px-6 py-4'>
        <div className='mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-50'>
          {title}
        </div>
        <p className='text-base text-zinc-800 dark:text-zinc-300'>
          {description}
        </p>
      </div>
      <div className='mt-10 px-6 pb-3 pt-4'>
        {tags.map((tag, i) => {
          return (
            <span
              key={i}
              className='mb-2 mr-2 inline-flex items-center justify-between rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-800 shadow-md dark:bg-zinc-50'>
              <p>{tag}</p>
            </span>
          )
        })}
      </div>
      <div className='inline-flex px-6 pb-3 pt-4'>
        <p className='my-2 text-base text-zinc-800 dark:text-zinc-50'>
          Project Links:
        </p>
        <Link
          href={repo}
          target='_blank'
          aria-label='Christian B Martinez | Project Repository Link'
          className='text-primary-600 inline-flex items-center font-medium text-zinc-800 transition duration-300 ease-in-out hover:text-purple-600 dark:text-zinc-50 dark:hover:text-purple-600'>
          <FaGithub className='ml-5' />
        </Link>

        <Link
          href={href}
          target={href !== '#' ? '_blank' : null}
          aria-label='Christian B Martinez | Project View Live Link'
          className='text-primary-600 inline-flex items-center font-medium text-zinc-800 transition duration-300 ease-in-out hover:text-purple-600 dark:text-zinc-50 dark:hover:text-purple-600'>
          <FaLink className='ml-5' />
        </Link>
      </div>
    </div>
  )
}

export default PortfolioCard
