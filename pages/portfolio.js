import SiteHead from '../components/SiteHead'
import Heading from '../components/Heading'
import { portfolioData } from '../constants'
import PortfolioCard from '../components/PortfolioCard'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <>
      <SiteHead
        page='Portfolio'
        title='Portfolio'
        description={'View my most recent portfolio of projects'}
        keywords={
          'portfolio site, next js portfolio, react, technology, chatgpt'
        }
      />
      <section>
        <Heading title='Portfolio' paragraph='View my most recent projects' />
        <div className='mb-20 pb-16 px-6 mx-auto max-w-screen-xl '>
          <div className='grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3'>
            {portfolioData.map((data, i) => {
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
                    href={data.href}
                    repo={data.repo}
                  >
                    <motion.div
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        delay: 0.5 * i + 0.5,
                      }}
                    >
                      <h2 className='mt-8 text-2xl font-semibold text-gray-800 capitalize dark:text-white'>
                        {data.title}
                      </h2>
                    </motion.div>
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        delay: 0.5 * i + 0.5,
                      }}
                    >
                      <p className='mt-2 text-center font-light text-gray-800 text-lg dark:text-gray-400'>
                        {data.description}
                      </p>
                    </motion.div>
                  </PortfolioCard>
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
