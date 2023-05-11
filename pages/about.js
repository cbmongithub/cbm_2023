import { useState } from 'react'
import Image from 'next/image'
import { FaMapPin, FaBriefcase, FaUniversity } from 'react-icons/fa'
import { motion } from 'framer-motion'
import SiteHead from '../components/SiteHead'
import Heading from '../components/Heading'
import { userData } from '../constants'
import getLatestRepos from '../helpers/getLatestRepos'
import GithubRepoCard from '../components/GithubRepoCard'

const About = ({ repositories }) => {
  const [repos, setRepos] = useState(repositories)
  return (
    <>
      <SiteHead
        page={'About'}
        title={'About'}
        description={'A little about me'}
        keywords={'nextjs, blog, javascript, tech blogs, chatgpt, react js'}
      />
      <section>
        <Heading title='About Me' paragraph='A little about me' />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 1 }}
        >
          <div className='flex flex-col justify-center items-center mt-52 pb-20 px-6 mx-auto lg:w-2/3'>
            <div className='flex flex-col min-w-0 break-words w-full shadow-xl rounded-lg'>
              <div className='px-6'>
                <div className='flex flex-wrap justify-center'>
                  <div className='w-full lg:w-2/3 px-4 lg:order-2 flex justify-center'>
                    <div className='relative'>
                      <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 100,
                          delay: 1.25,
                        }}
                      >
                        <Image
                          alt='Image of Christian B. Martinez'
                          src='/img/me.jpg'
                          className='shadow-xl rounded-full h-auto align-middle border-none absolute -m-[136px] -ml-20 lg:-ml-16'
                          style={{ maxWidth: '150px' }}
                          width={150}
                          height={150}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className='text-center mt-12'>
                  <h3 className='text-4xl font-semibold leading-normal mb-2 text-slate-700'>
                    Christian B. Martinez
                  </h3>
                  <div className='inline-flex text-sm leading-normal mt-0 mb-2 text-slate-400 font-bold uppercase'>
                    <FaMapPin className='mr-2 text-lg text-slate-400' />
                    Salt Lake City, Utah
                  </div>
                  <div className='flex flex-row justify-center items-center mb-2 mt-10 text-slate-600'>
                    <FaBriefcase className='mr-2 text-lg text-slate-400' />
                    Full Stack Bootcamp Student
                  </div>
                  <div className='flex flex-row justify-center items-center mb-2 text-slate-600'>
                    <FaUniversity className='mr-2 text-lg text-slate-400' />
                    University of Utah
                  </div>
                </div>
                <div className='mt-10 py-10 border-t border-slate-200 text-center'>
                  <div className='flex flex-wrap justify-center'>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-4 text-lg leading-relaxed text-slate-700'>
                        Hey there! 🖐 I&apos;m Christian, I build apps for the
                        web! I have been coding for around 6 years as a hobby,
                        although recently i decided to take action and pursue a
                        tech career. I am currently a student at the U of
                        U&apos;s coding bootcamp. Follow me on twitter to stay
                        up to date on my tech journey!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <Heading
          title='Latest Repos'
          paragraph='View my latest repos from Github'
        />

        <div className='mb-20 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
          <div className='grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
            {repos &&
              repos.map((latestRepo, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    translateY: -100,
                  }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    duration: 1.5,
                    delay: 0.5 * i + 0.5,
                  }}
                >
                  <GithubRepoCard latestRepo={latestRepo} key={i} />
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN

  const repositories = await getLatestRepos(userData, token)
  return {
    props: {
      repositories,
    },
  }
}

export default About
