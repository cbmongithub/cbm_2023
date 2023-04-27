const Footer = () => {
  return (
    <footer className='bg-white rounded-lg shadow m-4 dark:bg-gray-800'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex items-center justify-center'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          &copy;&nbsp;Christian B. Martinez {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

export default Footer
