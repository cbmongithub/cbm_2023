import { MDXRemote } from 'next-mdx-remote'
import getPost from '../helpers/getPost'
import getPosts from '../helpers/getPosts'
import { serialize } from 'next-mdx-remote/serialize'
import Heading from '../components/Heading'
import Image from 'next/image'
import Socials from '../components/Socials'

const Post = ({ data, content }) => {
  return (
    <>
      <Heading title={data.title} />
      <div className='w-full mx-auto max-w-screen-xl p-4 flex items-center text-center justify-center'>
        <div className='flex space-x-3'>
          <Image
            className='w-7 h-7 rounded-full'
            src='http://localhost:3000/img/me.jpg'
            alt='Jese Leos avatar'
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
      <div className='ml-0 md:hidden mx-auto w-screen p-4 flex items-center text-center justify-center'>
        <p className='font-medium'>{data.date}</p>
      </div>
      <Socials
        style={
          'list-none inline-flex md:hidden mx-auto w-screen pt-10 flex items-center text-center justify-center'
        }
      />
      <div className='w-full xl p-4 flex items-center text-left justify-center'>
        <div className='prose mt-12 w[1024px]'>
          <MDXRemote {...content} />
        </div>
      </div>
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
