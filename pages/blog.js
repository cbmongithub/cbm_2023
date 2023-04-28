import Head from 'next/head'
import Heading from '../components/Heading'
import PostCard from '../components/PostCard'
import getPosts from '../helpers/getPosts'

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <Heading
          title='Blog'
          paragraph='Browse through my most recent articles'
        />
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
