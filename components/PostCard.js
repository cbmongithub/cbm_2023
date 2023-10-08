import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ title, date, description, author, type, slug }) => {
  return (
    <article className='rounded-lg bg-white p-6 shadow-2xl dark:bg-slate-800'>
      <div className='mb-5 flex items-center justify-between'>
        {type === 'Tutorial' ? (
          <>
            <span className='inline-flex items-center rounded bg-gradient-to-r from-purple-600 to-pink-500 px-2.5 py-0.5 text-xs font-medium text-zinc-50'>
              <svg
                className='mr-1 h-3 w-3'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
              </svg>
              <p>Tutorial</p>
            </span>
          </>
        ) : (
          <>
            <span className='inline-flex items-center rounded bg-gradient-to-r from-cyan-500 to-purple-600 px-2.5 py-0.5 text-xs font-medium text-white'>
              <svg
                className='mr-1 h-3 w-3'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                  clipRule='evenodd'></path>
                <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
              </svg>
              <p>Article</p>
            </span>
          </>
        )}
        <span className='text-sm'>{date}</span>
      </div>
      <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50'>
        {title}
      </h2>
      <p className='mb-5 font-light text-zinc-900 dark:text-zinc-300'>
        {description}
      </p>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <Image
            className='h-7 w-7 rounded-full'
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/img/me.webp`}
            alt='Christian Martinez Avatar'
            width={28}
            height={28}
          />
          <span className='font-medium text-zinc-800 dark:text-zinc-50'>
            {author}
          </span>
        </div>
        <Link
          href='/blog/[slug]'
          aria-label='Christian B Martinez | Blog Article Link'
          className='inline-flex items-center font-medium text-zinc-800 hover:underline dark:text-zinc-50'
          as={`/blog/${slug}`}>
          Read more
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
    </article>
  )
}

export default PostCard
