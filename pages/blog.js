import Head from 'next/head'
import PostCard from '../components/PostCard'
import getPosts from '../helpers/getPosts'

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-row justify-center items-center pt-20'>
        <h1 className='mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          The Blog
        </h1>
      </div>
      <div className='flex flex-row justify-center items-center p-4'>
        <p className='mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
          Latest Posts
        </p>
      </div>
      <div className='mt-20 p-20 grid gap-4 sm:grid-cols-1 lg:grid-cols-4'>
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.data.title}
            date={post.data.date}
            description={post.data.description}
            slug={post.slug}
          />
        ))}
      </div>
    </>
  )
}

export default Blog

export const getStaticProps = () => {
  const posts = getPosts()

  return {
    props: {
      posts,
    },
  }
}
