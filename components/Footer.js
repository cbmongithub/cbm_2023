import Socials from './Socials'

const Footer = () => {
  return (
    <footer className='bg-zinc-50 py-4 pt-12 dark:bg-slate-950'>
      <Socials style='flex flex-row justify-center items-center py-4' />
      <div className='relative z-0 mx-auto flex w-full items-center justify-center p-4'>
        <span className='text-md text-zinc-400 sm:text-center'>
          &copy;&nbsp;Christian B. Martinez {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

export default Footer
