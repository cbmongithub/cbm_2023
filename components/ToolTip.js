const ToolTip = ({ children, text, align = '-left-1' }) => (
  <div className='group relative cursor-pointer'>
    {children}
    <span
      className={`pointer-events-none absolute ${align} -top-8 w-max rounded-md bg-zinc-800 px-2 py-1 text-sm font-medium text-zinc-50 opacity-0 shadow-xl transition-opacity ease-in-out group-hover:opacity-100 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-500`}>
      {text}
    </span>
  </div>
)

export default ToolTip
