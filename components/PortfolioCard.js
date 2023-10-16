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
    <div className='max-w-screen overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-slate-800'>
      <div
        className='h-48 w-full bg-cover bg-center lg:w-96'
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
        alt={alt}>
        <div className='flex h-full w-full items-center justify-center bg-purple-600 opacity-50 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-500'></div>
      </div>
      <div className='flex h-full w-full flex-col justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 opacity-60 transition duration-300 ease-in-out hover:opacity-90 hover:shadow-2xl'></div>
      <div className='p-6'>
        <h1 className='text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50'>
          {title}
        </h1>
        <p className='py-4 text-zinc-500 dark:text-zinc-400'>{description}</p>
        {tags.map((tag, i) => {
          return (
            <span
              key={i}
              className='mb-4 mr-2 mt-3 inline-flex items-center justify-between rounded-xl bg-purple-600 px-3 py-1 text-sm font-semibold text-zinc-50 shadow-xl dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-500'>
              {tag}
            </span>
          )
        })}
        <div className='flex'>
          <p className='pt-4 font-medium text-zinc-900 dark:text-zinc-50'>
            Project Links:
          </p>
          <Link
            href={repo}
            target='_blank'
            aria-label='Christian B Martinez | Project Repository Link'
            className='inline-flex items-center font-medium text-zinc-800 transition duration-100 ease-in-out hover:text-purple-600 dark:text-zinc-50 dark:hover:text-purple-600'>
            <FaGithub className='ml-5 mt-4' />
          </Link>

          <Link
            href={href}
            target={href !== '#' ? '_blank' : null}
            aria-label='Christian B Martinez | Project View Live Link'
            className='inline-flex items-center font-medium text-zinc-800 transition duration-100 ease-in-out hover:text-purple-600 dark:text-zinc-50 dark:hover:text-purple-600'>
            <FaLink className='ml-5 mt-4' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
