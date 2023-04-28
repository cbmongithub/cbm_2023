const Footer = () => {
  return (
    <footer className='bg-white dark:bg-gray-800 p-4'>
      <div className='w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          &copy;&nbsp;Christian B. Martinez {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

export default Footer
