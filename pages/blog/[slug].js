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

import { getPost, getPosts } from '../../helpers'
import { SiteHead, Heading, Socials } from '../../components'

const Post = ({ data, content, slug }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`

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
        page={`Blog | ${data.title}`}
        title={data.title}
        description={data.description}
        keywords={`nextjs, blog, javascript, tech blogs, chatgpt, react js, ${data.title}`}
      />
      <section>
        <Heading
          title={data.title}
          delay={0.5}
        />
        <motion.div
          initial={{ x: -100, opacity: 0, duration: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 30, delay: 0.5 }}
          className='mx-auto flex w-full max-w-screen-sm items-center justify-center p-4 text-center'>
          <div className='flex w-1/12 justify-start align-middle'>
            <div className='relative w-7'>
              <Image
                className='mx-auto h-7 w-7 rounded-full object-cover'
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/img/me.webp`}
                alt='Christian Martinez Avatar'
                width={28}
                height={28}
              />
              <div className='absolute inset-0 mx-auto h-7 w-7 rounded-full bg-purple-600 opacity-25 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-500 dark:opacity-35'></div>
            </div>
          </div>
          <div className='flex w-2/12 justify-start align-middle'>
            <span className='font-medium text-zinc-900 dark:text-zinc-50'>
              {data.author}
            </span>
          </div>
          <div className='hidden w-7/12 justify-center px-20 align-middle md:flex'>
            <Socials style='list-none flex' />
          </div>
          <div className='hidden w-2/12 justify-end align-middle md:ml-0 md:flex'>
            <span className='font-medium text-zinc-900 dark:text-zinc-50'>
              {data.date}
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0, duration: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 30, delay: 0.5 }}>
          <div className='mx-auto ml-0 flex w-screen items-center justify-center p-4 text-center md:hidden'>
            <p className='font-medium text-zinc-900 dark:text-zinc-50'>
              {data.date}
            </p>
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
          transition={{ type: 'spring', stiffness: 30, delay: 1 }}
          className='my-20 flex w-full flex-row items-center justify-center'>
          <div className='prose flex flex-col p-6 dark:prose-invert'>
            <MDXRemote {...content} />
          </div>
        </motion.div>
        <div className='my-10 flex w-full flex-row items-center justify-center'>
          <p className='text-zinc-800 dark:text-zinc-300'>Share this post</p>
        </div>
        <div className='flex w-full flex-row items-center justify-center '>
          <EmailShareButton
            url={shareUrl}
            subject={`Check out this blog post: ${data.title}`}
            aria-label='Share blog post by email button'>
            <div className='mx-3 cursor-pointer rounded-full bg-gray-500 p-2 shadow-xl hover:bg-gray-600'>
              <AiFillMail className='h-4 w-4 text-white' />
            </div>
          </EmailShareButton>
          <FacebookShareButton
            url={shareUrl}
            quote={data.title}
            hashtag={data.type}
            aria-label='Share blog post through facebook button'>
            <div className='mx-3 cursor-pointer rounded-full bg-blue-600 p-2 shadow-xl hover:bg-blue-700'>
              <FaFacebook className='h-4 w-4 text-white' />
            </div>
          </FacebookShareButton>
          <LinkedinShareButton
            url={shareUrl}
            title={data.title}
            summary={data.description}
            source={shareUrl}
            aria-label='Share blog post through linkedin button'>
            <div className='mx-3 cursor-pointer rounded-full bg-sky-600 p-2 shadow-xl hover:bg-sky-700'>
              <FaLinkedin className='h-4 w-4 text-white' />
            </div>
          </LinkedinShareButton>
          <RedditShareButton
            url={shareUrl}
            title={data.title}
            aria-label='Share blog post through reddit button'>
            <div className='mx-3 cursor-pointer rounded-full bg-orange-600 p-2 shadow-xl hover:bg-orange-700'>
              <FaReddit className='h-4 w-4 text-white' />
            </div>
          </RedditShareButton>
          <TwitterShareButton
            url={shareUrl}
            title={`Check out this blog post by @_coderchris! ${data.title}`}
            hashtags={['webdevelopment', 'blog', 'fullstack']}
            aria-label='Share blog post through twitter button'>
            <div className='mx-3 cursor-pointer rounded-full bg-sky-500 p-2 shadow-xl hover:bg-sky-600'>
              <FaTwitter className='h-4 w-4 text-white' />
            </div>
          </TwitterShareButton>
          <WhatsappShareButton
            url={shareUrl}
            aria-label='Share blog post through whatsapp'>
            <div className='mx-3 cursor-pointer rounded-full bg-green-500 p-2 shadow-xl hover:bg-green-600'>
              <FaWhatsapp className='h-4 w-4 text-white' />
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
  const paths = posts.map(post => ({ params: { slug: post.slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = getPost(params.slug)
  const mdxSource = await serialize(post.content)
  return {
    props: {
      data: post.data,
      content: mdxSource,
      slug: params.slug,
    },
  }
}
