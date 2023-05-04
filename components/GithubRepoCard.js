import { FaGithub } from 'react-icons/fa'

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className='flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-600 shadow-xl rounded-lg to-pink-500 p-10'>
      <h1 className='font-semibold text-xl dark:text-gray-200 text-white'>
        {latestRepo.name}
      </h1>
      <p className='text-base font-normal my-4 text-white'>
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        className='text-white font-medium text-md hover:opacity-80 transition duration-150 ease-in-out'
      >
        <div className='text-white font-bold py-2 px-4 rounded inline-flex items-center'>
          <FaGithub className='mr-2' />
          <span>View Repo</span>
        </div>
      </a>
    </div>
  )
}

export default GithubRepoCard
