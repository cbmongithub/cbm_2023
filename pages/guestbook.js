import { useState, useContext } from 'react'
import SiteHead from '../components/SiteHead'
import Heading from '../components/Heading'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import {
  BsTypeBold,
  BsGithub,
  BsTypeItalic,
  BsTypeUnderline,
} from 'react-icons/bs'
import { AiOutlineGif } from 'react-icons/ai'
import { MdFormatAlignCenter } from 'react-icons/md'
import { GiphyFetch } from '@giphy/js-fetch-api'
import {
  Carousel,
  SearchBar,
  SearchContext,
  SearchContextManager,
} from '@giphy/react-components'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Filter from 'bad-words'
import { useSession, signIn, signOut } from 'next-auth/react'

const filter = new Filter()

const giphyFetch = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_API_KEY)

const fetchGifs = (offset) => giphyFetch.trending({ offset, limit: 10 })

const GiphyComponent = ({ onGifClick }) => {
  const { fetchGifs, term, channelSearch, activeChannel } =
    useContext(SearchContext)

  return (
    <>
      <SearchBar className='w-full mb-5' />
      <Carousel
        className='cursor-pointer'
        onGifClick={onGifClick}
        gifHeight={200}
        borderRadius={12}
        noLink={true}
        fetchGifs={fetchGifs}
        key={`${channelSearch} ${term} ${activeChannel?.user.username}`}
      />
    </>
  )
}

const GuestBook = ({ allPosts, gifs }) => {
  const [formattedText, setFormattedText] = useState('')
  const [showGifs, setShowGifs] = useState(false)
  const [chosenGifUrl, setChosenGifUrl] = useState('')
  const [chosenFormat, setChosenFormat] = useState('')
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()

  const handleGifs = (e) => {
    e.preventDefault()
    setShowGifs(!showGifs)
  }

  const handleChosenFormat = () => {
    setChosenFormat(document.getElementById('userFormat').classList.value)
  }

  const handleFormat = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.target.tagName === 'svg') {
      return
    } else if (e.target.tagName === 'BUTTON') {
      const format = e.target.attributes[0].value
      const inputEl = document.getElementById('userFormat').classList
      inputEl.value.includes(format)
        ? inputEl.remove(format)
        : inputEl.add(format)
    } else {
      return
    }
  }

  return (
    <>
      <SiteHead
        page={'GuestBook'}
        title={'Guest Book'}
        description={'A guestbook page for visitors to christianbmartinez.com'}
        keywords={
          'nextjs, guestbook, javascript, tech, articles, mongodb, react, js, api'
        }
      />
      {loading ? <div className='form-loading-bar'></div> : ''}
      <section>
        <Heading
          title='Guest Book'
          paragraph={`${
            session
              ? `Leave a comment in my guestbook, ${session.user.name
                  .split(' ')
                  .slice(0, -1)
                  .join(' ')}`
              : 'Leave a comment in my guestbook'
          }`}
        />
        <div className='pb-20 py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6'>
          <div className='flex flex-col space-y-10'>
            {allPosts[0] !== undefined ? (
              allPosts.map((data, i) => {
                return (
                  <motion.div
                    key={data._id}
                    className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl'
                    initial={{
                      opacity: 0,
                      translateY: -100,
                    }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      duration: 1.5,
                      delay: 0.25 * i,
                    }}
                  >
                    <div className='flex justify-around items-center mt-3'>
                      <div className='flex items-center space-x-4'>
                        <Image
                          className='w-7 h-7 rounded-full'
                          src={data.userImage}
                          alt={`Github avatar image for ${data.userName}`}
                          width={28}
                          height={28}
                        />
                        <span className='font-light text-zinc-800 dark:text-zinc-50'>
                          {`${dayjs(data.timestamp).fromNow(true)} ago by ${
                            data.userName
                          }`}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`flex flex-col w-full mt-10 h-auto ${
                        data.format.includes('text-center')
                          ? data.format + ' justify-center items-center'
                          : data.format
                      } text-zinc-900 dark:text-zinc-300 py-5`}
                    >
                      <p>{filter.clean(data.formattedText)}</p>

                      {data.gifUrl && (
                        <Image
                          className='mt-5 rounded-lg w-auto h-auto'
                          src={data.gifUrl}
                          height={200}
                          width={200}
                          alt='Giphy image'
                        />
                      )}
                    </div>
                  </motion.div>
                )
              })
            ) : (
              <div className='text-zinc-900 dark:text-zinc-400 py-20 text-center'>
                <p>
                  No posts yet 😔
                  <br /> Be the first to comment!
                </p>
              </div>
            )}
            {session ? (
              <form
                action='/api/addPost'
                method='POST'
                onSubmit={() => {
                  setLoading(!loading)
                  handleChosenFormat()
                }}
              >
                <div className='w-full max-w-screen-md mx-auto rounded-lg bg-white dark:bg-slate-800 shadow-xl p-5 text-slate-800'>
                  <div className='border border-zinc-300 dark:border-zinc-500 rounded-lg'>
                    <div className='flex flex-row border-b border-zinc-300 dark:border-zinc-500 bg-zinc-50 dark:bg-slate-900 text-xl text-zinc-400 justify-around rounded-t-lg'>
                      <button
                        onClick={handleFormat}
                        data-format='font-bold'
                        className='mb-1 text-center outline:none focus:outline-none w-10 h-10 p-3 hover:text-purple-600 active:bg-transparent'
                      >
                        <BsTypeBold />
                      </button>
                      <button
                        onClick={handleFormat}
                        data-format='italic'
                        className='mb-1 outline:none focus:outline-none w-10 h-10 p-3 hover:text-purple-600 active:bg-transparent'
                      >
                        <BsTypeItalic />
                      </button>
                      <button
                        onClick={handleFormat}
                        data-format='underline'
                        className='mb-1 outline:none focus:outline-none w-10 h-10 p-3 hover:text-purple-600 active:bg-transparent'
                      >
                        <BsTypeUnderline />
                      </button>
                      <button
                        onClick={handleFormat}
                        data-format='text-center'
                        className='mb-1 outline:none focus:outline-none w-10 h-10 p-3 hover:text-purple-600 active:bg-transparent'
                      >
                        <MdFormatAlignCenter />
                      </button>
                      <button
                        onClick={handleGifs}
                        className='mb-1 outline:none focus:outline-none w-10 h-10 p-3 hover:text-purple-600 active:bg-transparent'
                      >
                        <AiOutlineGif />
                      </button>
                    </div>
                    <input type='hidden' value={new Date()} name='timestamp' />
                    <input type='hidden' value={chosenFormat} name='format' />
                    <input
                      type='hidden'
                      value={session.user.name}
                      name='userName'
                    />
                    <input
                      type='hidden'
                      value={session.user.image}
                      name='userImage'
                    />
                    <div className='flex flex-col text-zinc-700 dark:text-zinc-300 w-full h-auto p-3 cursor-auto active:outline-none focus:outline-none'>
                      <input
                        required
                        id='userFormat'
                        type='text'
                        value={formattedText}
                        onChange={(e) => setFormattedText(e.target.value)}
                        name='formattedText'
                        placeholder='Enter your message...'
                        className='flex flex-row break-words h-auto w-full bg-transparent outline-none focus:outline:none'
                        autoComplete='off'
                      />

                      <input type='hidden' value={chosenGifUrl} name='gifUrl' />

                      {chosenGifUrl && (
                        <Image
                          className='mt-3 rounded-lg w-auto h-auto'
                          src={chosenGifUrl}
                          height={200}
                          width={200}
                          alt='Giphy image'
                        />
                      )}
                    </div>
                    {showGifs && gifs && (
                      <div className='relative p-6 flex-auto'>
                        <SearchContextManager
                          apiKey={process.env.NEXT_PUBLIC_GIPHY_API_KEY}
                        >
                          <GiphyComponent
                            onGifClick={(gif, e) => {
                              e.preventDefault()
                              setChosenGifUrl(gif.images.downsized.url)
                              setShowGifs(!showGifs)
                            }}
                          />
                        </SearchContextManager>
                      </div>
                    )}
                  </div>
                  <div className='flex flex-row justify-between items-center mt-5'>
                    <button
                      type='submit'
                      class='text-zinc-50 w-auto bg-gradient-to-r from-purple-600 to-pink-500 focus:ring-0 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center'
                    >
                      {loading ? 'SENDING...' : 'SUBMIT'}
                    </button>
                    <button
                      className='px-7 py-3 mr-2 text-zinc-300 font-medium text-sm leading-snug uppercase hover:text-purple-600 focus:bg-none focus:text-purple-600 focus:outline-none focus:ring-0 active:bg-none transition duration-150 ease-in-out'
                      type='button'
                      onClick={() => signOut()}
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className='flex flex-row justify-center items-center w-1/2 mx-auto'>
                <button
                  onClick={() => signIn('github')}
                  type='button'
                  class='text-zinc-50 mt-10 w-auto bg-gradient-to-r from-purple-600 to-pink-500 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'
                >
                  <svg
                    class='w-4 h-4 mr-2 -ml-1'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='github'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 496 512'
                  >
                    <path
                      fill='currentColor'
                      d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                    ></path>
                  </svg>
                  Sign in to comment
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default GuestBook

export async function getServerSideProps() {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPosts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  let allPosts = await res.json()
  const { data } = await fetchGifs(0)
  return {
    props: { allPosts, gifs: data },
  }
}
