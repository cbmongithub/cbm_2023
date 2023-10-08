import SiteHead from '../../components/SiteHead'
import Heading from '../../components/Heading'
import PostCard from '../../components/PostCard'
import getPosts from '../../helpers/getPosts'
import { motion } from 'framer-motion'

const Blog = ({ posts }) => {
  return (
    <>
      <SiteHead
        page={'Blog'}
        title={'Blog'}
        description={posts.description}
        keywords={'nextjs, blog, javascript, tech blogs, chatgpt, react js'}
      />
      <section>
        <Heading
          title='Blog'
          paragraph='Browse through my most recent articles'
        />
        <div className='mx-auto max-w-screen-xl px-4 py-8 pb-20 lg:px-6 lg:py-16'>
          <div className='grid gap-12 lg:grid-cols-2'>
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
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
                }}>
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
