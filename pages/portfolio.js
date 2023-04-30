import Head from 'next/head'
import Heading from '../components/Heading'
import { PortfolioData } from '../constants'
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
            {PortfolioData.map((data, i) => {
              return (
                <motion.div
                  key={data.title}
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
                  <PortfolioCard
                    key={i}
                    imageUrl={data.imgUrl}
                    title={data.title}
                    description={data.description}
                    href={data.href}
                    repo={data.repo}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
