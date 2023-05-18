import { useState } from 'react'
import SiteHead from '../components/SiteHead'
import Heading from '../components/Heading'
import dayjs from 'dayjs'
import { GiphyFetch } from '@giphy/js-fetch-api'
import {
  Carousel,
  SearchBar,
  SearchContext,
  SearchContextManager,
} from '@giphy/react-components'
import { useContext } from 'react'

const giphyFetch = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_API_KEY)

const fetchGifs = (offset) => giphyFetch.trending({ offset, limit: 10 })

const GiphyComponent = ({ onGifClick }) => {
  const { fetchGifs, term, channelSearch, activeChannel } =
    useContext(SearchContext)

  return (
    <>
      <SearchBar className='w-full mb-5' />
      <Carousel
        onGifClick={(gif, e) => {
          e.preventDefault()
          console.log(gif, e)
        }}
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
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [showGifs, setShowGifs] = useState(false)

  const handleGifs = (e) => {
    e.preventDefault()
    setShowGifs(!showGifs)
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
      <section>
        <Heading
          title='Guest Book'
          paragraph='Leave a comment in my guestbook'
        />
        <div className='pb-20 py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6'>
          <div className='flex flex-col space-y-10'>
            {allPosts.map((data) => {
              return (
                <div
                  key={data._id}
                  className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl'
                >
                  <h3 className='mb-2 font-bold tracking-tight text-zinc-900 dark:text-zinc-50'>
                    {data.name}
                  </h3>
                  <p className='font-light text-zinc-900 dark:text-zinc-300 text-sm mb-2'>
                    {`Posted on ${dayjs(data.timestamp).format('M/D/YYYY')}`}
                  </p>
                  <p className='text-zinc-900 dark:text-zinc-300'>
                    {data.message}
                  </p>
                </div>
              )
            })}
            <form
              action='/api/addPost'
              method='POST'
              className='bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6'
            >
              <h3 className='font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4'>
                Add a comment
              </h3>
              <div className='mb-4'>
                <label
                  className='block text-zinc-900 dark:text-zinc-300  font-bold mb-2'
                  htmlFor='name'
                >
                  Name
                </label>
                <input type='hidden' value={new Date()} name='timestamp' />
                <input
                  className='text-base w-full font-normal text-zinc-700 dark:text-zinc-200 bg-zinc-50 dark:bg-slate-800 bg-clip-padding border border-solid border-zinc-300 dark:border-zinc-500 transition ease-in-out m-0 focus:border-purple-600 dark:focus:border-purple-600 focus:outline-none py-5 px-4 rounded-xl'
                  type='text'
                  value={name}
                  placeholder='Enter your name'
                  required
                  name='name'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-zinc-900 dark:text-zinc-300 font-bold mb-2'
                  htmlFor='comment'
                >
                  Comment
                </label>
                <textarea
                  className='text-base w-full font-normal text-zinc-700 dark:text-zinc-200 bg-zinc-50 dark:bg-slate-800 bg-clip-padding border border-solid border-zinc-300 dark:border-zinc-500 transition ease-in-out m-0 focus:border-purple-600 dark:focus:border-purple-600 focus:outline-none py-5 px-4 rounded-xl'
                  rows='3'
                  placeholder='Enter your comment'
                  required
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className='flex flex-row justify-between'>
                <button onClick={handleGifs}>
                  <svg
                    aria-hidden='true'
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
                <button className='inline-block px-7 py-3 mr-2 border-2 border-purple-600 bg-purple-600 text-zinc-50 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-zinc-50 hover:text-pink-500 hover:shadow-lg hover:border-pink-500 focus:bg-zinc-50 focus:text-pink-500 focus:border-pink-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-50 active:shadow-lg transition duration-150 ease-in-out'>
                  Submit
                </button>
              </div>
            </form>
            {showGifs && gifs ? (
              <>
                <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                  <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                    <div className='border-0 rounded-lg shadow-lg relative flex flex-col bg-white dark:bg-slate-800 outline-none focus:outline-none'>
                      <button
                        className='p-3 ml-auto bg-transparent border-0 text-zinc-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                        onClick={() => setShowGifs(!showGifs)}
                      >
                        <span className='bg-transparent text-slate-900 dark:text-zinc-50 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                          ×
                        </span>
                      </button>
                      <div className='relative p-6 flex-auto'>
                        <SearchContextManager
                          apiKey={process.env.NEXT_PUBLIC_GIPHY_API_KEY}
                        >
                          <GiphyComponent />
                        </SearchContextManager>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ''
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
