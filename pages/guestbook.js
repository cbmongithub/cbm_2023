import { useState, useContext } from 'react'
import SiteHead from '../components/SiteHead'
import Heading from '../components/Heading'
import dayjs from 'dayjs'
import { BsTypeBold, BsTypeItalic, BsTypeUnderline } from 'react-icons/bs'
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

  const handleGifs = (e) => {
    e.preventDefault()
    setShowGifs(!showGifs)
  }

  const handleFormat = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const format = e.target.attributes[0].value
    const inputEl = document.getElementById('format').classList
    inputEl.value.includes(format)
      ? inputEl.remove(format)
      : inputEl.add(format)
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
            {allPosts.map((data, i) => {
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
                    delay: 0.5 * i,
                  }}
                >
                  <p className='font-light text-zinc-900 dark:text-zinc-300 text-sm mb-2'>
                    {`Posted on ${dayjs(data.timestamp).format('M/D/YYYY')}`}
                  </p>
                  <p className='text-zinc-900 dark:text-zinc-300'>
                    {data.formattedText}
                    {data.gifUrl && (
                      <Image
                        className='mt-3 rounded-lg'
                        src={data.gifUrl}
                        height={200}
                        width={200}
                        alt='Giphy image'
                      />
                    )}
                  </p>
                </motion.div>
              )
            })}
            <form action='/api/addPost' method='POST'>
              <div className='w-full max-w-screen-md mx-auto rounded-lg bg-white dark:bg-slate-800 shadow-xl p-5 text-slate-800'>
                <div className='border border-zinc-300 dark:border-zinc-500 rounded-lg'>
                  <div className='flex flex-row border-b border-zinc-300 dark:border-zinc-500 bg-zinc-50 dark:bg-slate-900 text-xl text-zinc-400 justify-around rounded-t-lg'>
                    <button
                      onClick={handleFormat}
                      data-format='font-bold'
                      className='mb-1 text-center outline:none focus:outline-none  w-10 h-10 p-3 hover:text-purple-600 active:bg-transparent'
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
                      data-format='items-center'
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
                  <input
                    type='hidden'
                    value='We will come back to this'
                    name='format'
                  />
                  <div
                    id='format'
                    data-text='Enter your message...'
                    contentEditable
                    suppressContentEditableWarning={true}
                    className='flex flex-col text-zinc-700 dark:text-zinc-300 min-h-[100px] w-full h-auto p-3 cursor-auto active:outline-none focus:outline-none'
                  >
                    <input
                      required
                      type='text'
                      value={formattedText}
                      onChange={(e) => setFormattedText(e.target.value)}
                      name='formattedText'
                      placeholder='Enter your message...'
                      className='w-full bg-transparent outline-none focus:outline:none'
                      autoComplete='off'
                    />

                    <input type='hidden' value={chosenGifUrl} name='gifUrl' />

                    {chosenGifUrl && (
                      <Image
                        className='mt-3 rounded-lg'
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
                            console.log(gif, e)
                            setChosenGifUrl(gif.images.downsized.url)
                            setShowGifs(!showGifs)
                          }}
                        />
                      </SearchContextManager>
                    </div>
                  )}
                </div>
                <div className='flex flex-row justify-left items-center mt-5'>
                  <button className='px-7 py-3 mr-2 border-2 border-purple-600 bg-purple-600 text-zinc-50 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-zinc-50 hover:text-pink-500 hover:shadow-lg hover:border-pink-500 focus:bg-zinc-50 focus:text-pink-500 focus:border-pink-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-50 active:shadow-lg transition duration-150 ease-in-out'>
                    Submit
                  </button>
                </div>
              </div>
            </form>
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
