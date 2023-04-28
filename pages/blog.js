import Head from 'next/head'
import Heading from '../components/Heading'
import PostCard from '../components/PostCard'
import getPosts from '../helpers/getPosts'
import { motion } from 'framer-motion'

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Christian B. Martinez | Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <Heading
          title='Blog'
          paragraph='Browse through my most recent articles'
        />
        <motion.div
          initial={{ y: 100, opacity: 0, duration: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 1 }}
        >
          <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
            <div className='grid gap-8 lg:grid-cols-2'>
              {posts.map((post) => (
                <PostCard
                  key={post.slug}
                  title={post.data.title}
                  date={post.data.date}
                  description={post.data.description}
                  author={post.data.author}
                  type={post.data.type}
                  slug={post.slug}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
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
