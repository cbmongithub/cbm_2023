import { useState, useContext } from 'react'
import SiteHead from '../components/SiteHead'
import Heading from '../components/Heading'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
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
  const [chosenFormat, setChosenFormat] = useState('')
  const [loading, setLoading] = useState(false)

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
          paragraph='Leave a comment in my guestbook'
        />
        <div className='pb-20 py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6'>
          <div className='flex flex-col space-y-10'>
            {allPosts &&
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
                    <div
                      className={`flex flex-row font-light text-zinc-900 dark:text-zinc-300 text-sm mb-2`}
                    >
                      <p>{`Posted ${dayjs(data.timestamp).fromNow(
                        true
                      )} ago`}</p>
                    </div>
                    <div
                      className={`flex flex-col w-full h-auto ${
                        data.format.includes('text-center')
                          ? data.format + ' justify-center items-center'
                          : data.format
                      } text-zinc-900 dark:text-zinc-300 py-5`}
                    >
                      <p>{data.formattedText}</p>

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
              })}
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
