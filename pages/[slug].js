import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'
import getPost from '../helpers/getPost'
import getPosts from '../helpers/getPosts'
import SiteHead from '../components/SiteHead'
import Heading from '../components/Heading'
import Socials from '../components/Socials'

const Post = ({ data, content }) => {
  const [show, setShow] = useState(false)
  const handleToggle = () => {
    setShow(!show)
  }
  const isBrowser = () => typeof window !== 'undefined'

  useEffect(() => {
    if (!isBrowser()) return
    document.querySelector('body').scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!isBrowser()) return
    console.log(window.getSelection().toString())
  }, [])

  return (
    <>
      <SiteHead
        page={data.title}
        title={data.title}
        description={data.description}
        keywords={`nextjs, blog, javascript, tech blogs, chatgpt, react js, ${data.title}`}
      />
      <section>
        <Heading title={data.title} />
        <motion.div
          initial={{ x: -100, opacity: 0, duration: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
        >
          <div className='w-full mx-auto max-w-screen-xl p-4 flex items-center text-center justify-center'>
            <div className='flex space-x-3'>
              <Image
                className='w-7 h-7 rounded-full'
                src='/img/me.jpg'
                alt='Christian B. Martinez Avatar'
                width={28}
                height={28}
              />
              <span className='font-medium'>{data.author}</span>
            </div>
            <div className='hidden md:inline-flex px-20'>
              <Socials style={'list-none inline-flex'} />
            </div>
            <div className='hidden md:ml-0 md:flex'>
              <span className='font-medium'>{data.date}</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0, duration: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
        >
          <div className='ml-0 md:hidden mx-auto w-screen p-4 flex items-center text-center justify-center'>
            <p className='font-medium'>{data.date}</p>
          </div>
          <Socials
            style={
              'list-none inline-flex md:hidden mx-auto w-screen pt-10 flex items-center text-center justify-center'
            }
          />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0, duration: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 1 }}
        >
          <div className='w-full flex flex-row justify-center items-center my-20'>
            <div className='flex flex-col prose p-6'>
              <MDXRemote {...content} />
            </div>
          </div>
          <div className='flex flex-row justify-center items-center mb-20 pb-10 text-center'>
            <div className='inline-block bg-white py-3 px-4 dark:bg-gray-800'>
              <div className='flex items-center gap-x-1.5'>
                <div className='inline-block'>
                  <button
                    type='button'
                    className='flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                  >
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path d='m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z'></path>
                    </svg>
                    875
                  </button>
                </div>

                <div className='block h-3 border-r border-gray-300 mx-3 dark:border-gray-600'></div>
                <div className='inline-block show'>
                  <button
                    type='button'
                    className='flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                  >
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path d='M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z'></path>
                    </svg>
                    16
                  </button>
                </div>

                <div className='block h-3 border-r border-gray-300 mx-3 dark:border-gray-600'></div>
                <div className='relative inline-flex'>
                  <button
                    onClick={handleToggle}
                    type='button'
                    className='flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                  >
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z'
                      ></path>
                      <path
                        fillRule='evenodd'
                        d='M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z'
                      ></path>
                    </svg>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
          {show ? (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              exit={{ x: -100, opacity: 0, delay: 0.5 }}
            >
              <div className='flex flex-row justify-center items-center -mt-20 mb-20'>
                <div className='z-10 bg-gray-900 shadow-md rounded-xl p-2 dark:bg-black'>
                  <a
                    className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400'
                    href='#'
                  >
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path d='M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z'></path>
                      <path d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z'></path>
                    </svg>
                    Copy link
                  </a>
                  <div className='border-t border-gray-600 my-2'></div>
                  <a
                    className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400'
                    href='#'
                  >
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'></path>
                    </svg>
                    Share on Twitter
                  </a>
                  <a
                    className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400'
                    href='#'
                  >
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'></path>
                    </svg>
                    Share on Facebook
                  </a>
                  <a
                    className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400'
                    href='#'
                  >
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z'></path>
                    </svg>
                    Share on LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          ) : (
            ''
          )}
        </motion.div>
      </section>
    </>
  )
}

export default Post

export const getStaticPaths = () => {
  const posts = getPosts()
  const paths = posts.map((post) => ({ params: { slug: post.slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  const mdxSource = await serialize(post.content)
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  }
}
