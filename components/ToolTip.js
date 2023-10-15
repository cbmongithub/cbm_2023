const ToolTip = ({ children, text, align = '-left-1', top = '-top-8' }) => (
  <div className='group relative cursor-pointer'>
    {children}
    <span
      className={`pointer-events-none absolute font-normal after:absolute after:left-[50%] after:top-[80%] after:ml-[-5px] after:h-[7px] after:w-[7px] after:rotate-45 after:border-4 after:border-solid after:border-slate-800 dark:after:border-zinc-50 ${align} ${top} w-max rounded-md bg-slate-800 px-2 py-1 text-sm font-medium text-zinc-50 opacity-0 shadow-xl transition-opacity ease-in-out group-hover:opacity-100 dark:bg-zinc-50 dark:text-zinc-900`}>
      {text}
    </span>
  </div>
)

export default ToolTip
