import { FaRegFileCode } from 'react-icons/fa'
import Link from 'next/link'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import { ToolTip } from '../components'

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className='rounded-xl bg-white p-5 shadow-2xl dark:bg-slate-800'>
      <div className='flex items-stretch justify-between'>
        <h2 className='inline-flex items-center text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50'>
          {latestRepo.name}
        </h2>
        <ToolTip
          text={`Created ${dayjs(latestRepo.created_at).format('MM/DD/YYYY')}`}
          align='-right-5'
          top='-top-12'>
          <span className='inline-flex items-center rounded-lg bg-purple-600 px-2.5 pb-2 pt-1.5 text-xs font-medium text-zinc-50 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-500'>
            <svg
              className='mr-1.5 h-2.5 w-2.5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'>
              <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z' />
            </svg>
            {`${dayjs(latestRepo.pushed_at).fromNow(true)} ago`}
          </span>
        </ToolTip>
      </div>
      <p className='my-6 font-light text-zinc-800 dark:text-zinc-100'>
        {latestRepo.description}
      </p>
      <div className='flex items-center justify-between'>
        <span className='mr-2 inline-flex items-center text-sm'>
          <FaRegFileCode />
          &nbsp;
          {latestRepo.size / 1000} MB
        </span>
        <Link
          href={latestRepo.clone_url}
          target='_blank'
          aria-label={`Christian B Martinez | Repo Link for ${latestRepo.name}`}
          className='inline-flex items-center font-medium text-zinc-800 hover:underline dark:text-zinc-50'>
          View Repo
          <svg
            className='ml-2 h-4 w-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default GithubRepoCard
