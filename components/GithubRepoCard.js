import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className='p-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-xl '>
      <h2 className='mb-2 text-2xl font-bold tracking-tight text-white'>
        {latestRepo.name}
      </h2>
      <p className='mb-5 font-light text-gray-100 dark:text-gray-100'>
        {latestRepo.description}
      </p>
      <div className='flex justify-between items-center'>
        <Link
          href={latestRepo.clone_url}
          className='text-white inline-flex items-center font-medium text-primary-600 hover:text-gray-200 transition duration-300 ease-in-out'
        >
          View Repo
          <FaGithub className='ml-2' />
        </Link>
      </div>
    </div>
  )
}

export default GithubRepoCard
