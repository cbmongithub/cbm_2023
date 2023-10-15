import Image from 'next/image'

const ExperienceCard = ({
  src,
  company,
  type,
  role,
  from,
  to,
  accomplishments,
}) => (
  <div className='rounded-xl bg-white p-5 shadow-2xl dark:bg-slate-800'>
    <ol className='space-y-4'>
      <li className='flex gap-4'>
        <div className='flex h-10 w-10 items-center justify-center rounded-full'>
          <Image
            alt={`Logo image for ${company}`}
            loading='lazy'
            width={25}
            height={25}
            className='h-7 w-7 rounded-full bg-white'
            src={src}
          />
        </div>
        <dl className='flex flex-auto flex-wrap gap-x-2'>
          <dt className='sr-only'>{company}</dt>
          <div className='flex w-full justify-between'>
            <dd className='text-sm font-medium text-zinc-800 dark:text-zinc-50'>
              {company}
            </dd>
            <dt className='sr-only'>{type}</dt>
            <dd className='text-xs font-medium text-zinc-500 dark:text-zinc-400'>
              {type}
            </dd>
          </div>
          <dt className='sr-only'>{role}</dt>
          <dd className='text-xs text-zinc-500 dark:text-zinc-400'>{role}</dd>
          <dt className='sr-only'>Date</dt>
          <dd
            className='ml-auto text-xs text-zinc-500 dark:text-zinc-400'
            aria-label={`${from} until ${to}`}>
            <time dateTime={from}>{from}</time>
            <span aria-hidden='true'>—</span>
            <time dateTime={to}>{to}</time>
          </dd>
        </dl>
      </li>
      <li className='justify-left flex items-start align-middle md:h-44 md:items-center md:justify-center lg:h-48'>
        <dt className='sr-only'>Accomplishments</dt>
        <dd className='text-xs leading-5 text-zinc-500 dark:text-zinc-400'>
          {accomplishments.map(accomplishment => (
            <p key={accomplishment}>• {accomplishment}</p>
          ))}
        </dd>
      </li>
    </ol>
  </div>
)

export default ExperienceCard
