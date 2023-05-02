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
        <div className='mb-20 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
          <div className='grid gap-12 lg:grid-cols-2'>
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{
                  opacity: 0,
                  translateY: -100,
                }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  duration: 1.5,
                  delay: 0.5 * i,
                }}
              >
                <PostCard
                  key={post.slug}
                  title={post.data.title}
                  date={post.data.date}
                  description={post.data.description}
                  author={post.data.author}
                  type={post.data.type}
                  slug={post.slug}
                />
              </motion.div>
            ))}
          </div>
        </div>
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
