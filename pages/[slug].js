import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AiFillMail } from 'react-icons/ai'
import {
  FaFacebook,
  FaLinkedin,
  FaReddit,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'
import getPost from '../helpers/getPost'
import getPosts from '../helpers/getPosts'
import SiteHead from '../components/SiteHead'
import Heading from '../components/Heading'
import Socials from '../components/Socials'

const Post = ({ data, content, slug }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`

  const isBrowser = () => typeof window !== 'undefined'

  useEffect(() => {
    if (!isBrowser()) return
    document.querySelector('body').scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const saveSelection = async () => {
      let selection = window.getSelection().toString()
      if ('clipboard' in navigator) {
        if (document.querySelector('code:hover')) {
          document.querySelector('body').classList.add('copied')
          setTimeout(() => {
            document.querySelector('body').classList.remove('copied')
          }, 500)
          clearSelection()
        }
        return await navigator.clipboard.writeText(selection)
      } else {
        return document.execCommand('copy', true, selection)
      }
    }
    const clearSelection = () => {
      if (window.getSelection) {
        window.getSelection().removeAllRanges()
      } else if (document.selection) {
        document.selection.empty()
      }
    }
    document.addEventListener('mouseup', saveSelection)
    return () => document.removeEventListener('mouseup', saveSelection)
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
        <Heading title={data.title} delay={0.5} />
        <motion.div
          initial={{ x: -100, opacity: 0, duration: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
          className='w-full mx-auto max-w-screen-xl p-4 flex items-center text-center justify-center'
        >
          <div className='flex space-x-3'>
            <Image
              className='w-7 h-7 rounded-full'
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/img/me.webp`}
              alt='Christian B. Martinez Avatar'
              width={28}
              height={28}
            />
            <span className='font-medium text-zinc-800 dark:text-zinc-50'>
              {data.author}
            </span>
          </div>
          <div className='hidden md:inline-flex px-20'>
            <Socials style={'list-none inline-flex'} />
          </div>
          <div className='hidden md:ml-0 md:flex'>
            <span className='font-medium text-zinc-800 dark:text-zinc-50'>
              {data.date}
            </span>
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
          className='w-full flex flex-row justify-center items-center my-20'
        >
          <div className='flex flex-col prose p-6 dark:prose-invert'>
            <MDXRemote {...content} />
          </div>
        </motion.div>
        <div className='flex flex-row justify-center items-center w-full my-10'>
          <p className='text-zinc-800 dark:text-zinc-300'>Share this post</p>
        </div>
        <div className='flex flex-row justify-center items-center w-full '>
          <EmailShareButton
            url={shareUrl}
            subject={`Check out this blog post: ${data.title}`}
            aria-label='Share blog post by email button'
          >
            <div className='cursor-pointer p-2 mx-3 bg-gray-500 rounded-full shadow-xl hover:bg-gray-600'>
              <AiFillMail className='w-4 h-4 text-white' />
            </div>
          </EmailShareButton>
          <FacebookShareButton
            url={shareUrl}
            quote={data.title}
            hashtag={data.type}
            aria-label='Share blog post through facebook button'
          >
            <div className='cursor-pointer p-2 mx-3 bg-blue-600 rounded-full shadow-xl hover:bg-blue-700'>
              <FaFacebook className='w-4 h-4 text-white' />
            </div>
          </FacebookShareButton>
          <LinkedinShareButton
            url={shareUrl}
            title={data.title}
            summary={data.description}
            source={shareUrl}
            aria-label='Share blog post through linkedin button'
          >
            <div className='cursor-pointer p-2 mx-3 bg-sky-600 rounded-full shadow-xl hover:bg-sky-700'>
              <FaLinkedin className='w-4 h-4 text-white' />
            </div>
          </LinkedinShareButton>
          <RedditShareButton
            url={shareUrl}
            title={data.title}
            aria-label='Share blog post through reddit button'
          >
            <div className='cursor-pointer p-2 mx-3 bg-orange-600 rounded-full shadow-xl hover:bg-orange-700'>
              <FaReddit className='w-4 h-4 text-white' />
            </div>
          </RedditShareButton>
          <TwitterShareButton
            url={shareUrl}
            title={`Check out this blog post by @_coderchris! ${data.title}`}
            hashtags={['webdevelopment', 'blog', 'fullstack']}
            aria-label='Share blog post through twitter button'
          >
            <div className='cursor-pointer p-2 mx-3 bg-sky-500 rounded-full shadow-xl hover:bg-sky-600'>
              <FaTwitter className='w-4 h-4 text-white' />
            </div>
          </TwitterShareButton>
          <WhatsappShareButton
            url={shareUrl}
            aria-label='Share blog post through whatsapp'
          >
            <div className='cursor-pointer p-2 mx-3 bg-green-500 rounded-full shadow-xl hover:bg-green-600'>
              <FaWhatsapp className='w-4 h-4 text-white' />
            </div>
          </WhatsappShareButton>
        </div>
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
      slug: params.slug,
    },
  }
}
