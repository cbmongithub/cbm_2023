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
        <div className='mb-20 pb-16 px-6 mx-auto max-w-screen-xl'>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
            {portfolioData.map((data, i) => {
              return (
                <motion.div
                  key={data.title}
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
                  }}
                >
                  <PortfolioCard
                    key={i}
                    title={data.title}
                    imageUrl={data.imgUrl}
                    alt={data.alt}
                    description={data.description}
                    repo={data.repo}
                    href={data.href}
                    tags={data.tags}
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
