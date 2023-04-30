import Head from 'next/head'
import Heading from '../components/Heading'
import PortfolioCard from '../components/PortfolioCard'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Christian B. Martinez | Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <Heading title='Portfolio' paragraph='View my most recent projects' />
        <div className='mb-8 pb-16 px-6 mx-auto max-w-screen-xl '>
          <div className='grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3'>
            <motion.div
              initial={{
                opacity: 0,
                translateY: -100,
              }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                duration: 1.5,
              }}
            >
              <PortfolioCard
                imageUrl='https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                title='Twitter Bot'
                description={
                  'A twitter bot made with tmi js, node, and chat gpt'
                }
                href='https://twitter.com/chaoticmuchbot'
                repo='https://github.com/christianbmartinez/twitterbot'
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                translateY: -100,
              }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                duration: 1.5,
                delay: 0.5,
              }}
            >
              <PortfolioCard
                imageUrl='https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                title='Twitter Bot'
                description={
                  'A twitter bot made with tmi js, node, and chat gpt'
                }
                href='https://twitter.com/chaoticmuchbot'
                repo='https://github.com/christianbmartinez/twitterbot'
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                translateY: -100,
              }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                duration: 1.5,
                delay: 1,
              }}
            >
              <PortfolioCard
                imageUrl='https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                title='Twitter Bot'
                description={
                  'A twitter bot made with tmi js, node, and chat gpt'
                }
                href='https://twitter.com/chaoticmuchbot'
                repo='https://github.com/christianbmartinez/twitterbot'
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                translateY: -100,
              }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                duration: 1.5,
                delay: 1.5,
              }}
            >
              <PortfolioCard
                imageUrl='https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                title='Twitter Bot'
                description={
                  'A twitter bot made with tmi js, node, and chat gpt'
                }
                href='https://twitter.com/chaoticmuchbot'
                repo='https://github.com/christianbmartinez/twitterbot'
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                translateY: -100,
              }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                duration: 1.5,
                delay: 2,
              }}
            >
              <PortfolioCard
                imageUrl='https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                title='Twitter Bot'
                description={
                  'A twitter bot made with tmi js, node, and chat gpt'
                }
                href='https://twitter.com/chaoticmuchbot'
                repo='https://github.com/christianbmartinez/twitterbot'
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                translateY: -100,
              }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                duration: 1.5,
                delay: 2.5,
              }}
            >
              <PortfolioCard
                imageUrl='https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                title='Twitter Bot'
                description={
                  'A twitter bot made with tmi js, node, and chat gpt'
                }
                href='https://twitter.com/chaoticmuchbot'
                repo='https://github.com/christianbmartinez/twitterbot'
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
