import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ title, date, description, author, type, slug }) => {
  return (
    <article className='p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex justify-between items-center mb-5 text-gray-500'>
        {type === 'Tutorial' ? (
          <>
            <span className='bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800'>
              <svg
                className='mr-1 w-3 h-3'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
              </svg>
              <p>Tutorial</p>
            </span>
          </>
        ) : (
          <>
            <span className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800'>
              <svg
                className='mr-1 w-3 h-3'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                  clipRule='evenodd'
                ></path>
                <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
              </svg>
              <p>Article</p>
            </span>
          </>
        )}
        <span className='text-sm'>{date}</span>
      </div>
      <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {title}
      </h2>
      <p className='mb-5 font-light text-gray-800 dark:text-gray-400'>
        {description}
      </p>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <Image
            className='w-7 h-7 rounded-full'
            src='http://localhost:3000/img/me.jpg'
            alt='Jese Leos avatar'
            width={28}
            height={28}
          />
          <span className='font-medium dark:text-white'>{author}</span>
        </div>
        <Link
          href='/[slug]'
          className='inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline'
          as={`/${slug}`}
        >
          Read more
          <svg
            className='ml-2 w-4 h-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </Link>
      </div>
    </article>
  )
}

export default PostCard
