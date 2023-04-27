import { MDXRemote } from 'next-mdx-remote'
import getPost from '../helpers/getPost'
import getPosts from '../helpers/getPosts'
import { serialize } from 'next-mdx-remote/serialize'

const Post = ({ data, content }) => {
  return (
    <>
      <div className='flex flex-row justify-center items-center pt-20'>
        <h1 className='mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          {data.title}
        </h1>
      </div>
      <div className='flex flex-row justify-center items-center p-4'>
        <p className='inline mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
          {data.date}
        </p>
        <p className='inline mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
          {data.author}
        </p>
      </div>
      <div className='flex flex-col justify-center items-center p-4'>
        <p className='prose mt-12'>
          <MDXRemote {...content} />
        </p>
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
