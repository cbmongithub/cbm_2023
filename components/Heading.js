const Heading = ({ title, paragraph }) => {
  return (
    <div className='mx-auto max-w-screen-sm text-center lg:mb-16 mb-8'>
      <h1 className='mb-12 text-6xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        {title}
      </h1>
      <p className='font-light text-gray-800 sm:text-xl dark:text-gray-400'>
        {paragraph ? paragraph : ''}
      </p>
    </div>
  )
}

export default Heading
