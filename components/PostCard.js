import Link from 'next/link'

const PostCard = ({ title, date, description, slug }) => {
  return (
    <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {title}
      </h5>
      <div>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
      </div>
      <button className=' mt-10 px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow'>
        <Link href='/[slug]' as={`/${slug}`}>
          <p>Read More</p>
        </Link>
      </button>
    </div>
  )
}

export default PostCard
