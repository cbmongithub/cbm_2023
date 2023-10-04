import { useState } from 'react'
import Image from 'next/image'
import {
  FaMapPin,
  FaBriefcase,
  FaUniversity,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoJavascript } from 'react-icons/io'
import {
  SiTailwindcss,
  SiCss3,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
} from 'react-icons/si'
import { motion } from 'framer-motion'
import SiteHead from '../components/SiteHead'
import Heading from '../components/Heading'
import getLatestRepos from '../helpers/getLatestRepos'
import GithubRepoCard from '../components/GithubRepoCard'

const About = ({ repositories }) => {
  const [repos] = useState(repositories)
  return (
    <>
      <SiteHead
        page={'About'}
        title={'About'}
        description={'A little about me'}
        keywords={'nextjs, blog, javascript, tech blogs, chatgpt, react js'}
      />
      <section>
        <Heading
          title='About'
          paragraph='A little about me'
        />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 1 }}
          className='mx-auto mt-52 flex flex-col items-center justify-center px-6 pb-20 lg:w-2/3'>
          <div className='flex min-w-0 flex-col break-words rounded-xl bg-white shadow-2xl dark:bg-slate-800'>
            <div className='px-6'>
              <div className='flex flex-wrap justify-center'>
                <div className='flex w-full justify-center px-4 lg:order-2 lg:w-2/3'>
                  <div className='relative'>
                    <motion.div
                      initial={{ y: -100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        delay: 0.25,
                      }}>
                      <Image
                        alt='Image of Christian B. Martinez'
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/img/me.webp`}
                        className='absolute -m-[136px] -ml-20 h-auto rounded-full border-none align-middle shadow-2xl lg:-ml-16'
                        style={{ maxWidth: '150px' }}
                        width={150}
                        height={150}
                        priority
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className='mt-12 text-center'>
                <h3 className='mb-2 text-4xl font-semibold leading-normal text-zinc-900 dark:text-zinc-50'>
                  Christian B. Martinez
                </h3>
                <div className='mb-2 mt-0 inline-flex text-sm font-bold uppercase leading-normal text-zinc-400'>
                  <FaMapPin className='mr-2 text-lg text-zinc-400 ' />
                  Salt Lake City, Utah
                </div>
                <div className='mb-2 mt-10 flex flex-row items-center justify-center text-zinc-800 dark:text-zinc-50'>
                  <FaBriefcase className='mr-2 text-lg text-zinc-400 dark:text-zinc-400' />
                  Full Stack Bootcamp Student
                </div>
                <div className='mb-2 flex flex-row items-center justify-center text-zinc-800 dark:text-zinc-50'>
                  <FaUniversity className='mr-2 text-lg text-zinc-400 dark:text-zinc-400' />
                  University of Utah
                </div>
              </div>
              <div className='mt-10 border-t border-zinc-200 py-10 text-center dark:border-zinc-400'>
                <div className='flex flex-wrap justify-center'>
                  <div className='w-full px-4 lg:w-9/12'>
                    <p className='mb-4 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200'>
                      Hey there! 🖐 I&apos;m Christian, I build apps for the
                      web! I have been coding for around 6 years as a hobby,
                      although recently i decided to take action and pursue a
                      tech career. I am currently a student at the U of U&apos;s
                      coding bootcamp. Follow me on&nbsp;
                      <a
                        href='https://www.twitter.com/_coderchris'
                        target='_blank'
                        className='underline opacity-75'>
                        twitter
                      </a>
                      &nbsp;to stay up to date on my tech journey!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <Heading
          title='Skills'
          paragraph='Tech stacks where i am most proficient'
        />
        <div className='mx-auto mb-40 mt-20 flex max-w-screen-xl flex-row flex-wrap items-center justify-center px-4 py-8 lg:px-6 lg:py-16'>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
            }}>
            <div className='m-3 rounded-full bg-yellow-500 p-2 shadow-xl'>
              <IoLogoJavascript className='h-7 w-7 text-white' />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.1,
            }}>
            <div className='m-3 rounded-full bg-orange-600 p-2 shadow-xl'>
              <AiFillHtml5 className='h-7 w-7 text-white' />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.2,
            }}>
            <div className='m-3 rounded-full bg-blue-600 p-2 shadow-xl'>
              <SiCss3 className='h-7 w-7 text-white' />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.3,
            }}>
            <div className='m-3 rounded-full bg-zinc-600 p-2 shadow-xl'>
              <FaReact className='h-7 w-7 text-sky-400' />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.4,
            }}>
            <div className='m-3 rounded-full bg-purple-600 p-2 shadow-xl'>
              <FaBootstrap className='h-7 w-7 text-white' />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.5,
            }}>
            <div className='m-3 rounded-full bg-lime-600 p-2 shadow-xl'>
              <FaNodeJs className='h-7 w-7 text-white' />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.6,
            }}>
            <div className='m-3 rounded-full bg-sky-400 p-2 shadow-xl'>
              <SiTailwindcss className='h-7 w-7 text-white' />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.7,
            }}>
            <div className='m-3 rounded-full bg-zinc-600 p-2 shadow-xl'>
              <SiNextdotjs className='h-7 w-7 text-white' />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.8,
            }}>
            <div className='m-3 rounded-full bg-green-600 p-2 shadow-xl'>
              <SiMongodb className='h-7 w-7 text-white' />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.9,
            }}>
            <div className='m-3 rounded-full bg-gray-500 p-2 shadow-xl'>
              <SiExpress className='h-7 w-7 text-white' />
            </div>
          </motion.div>
        </div>

        <Heading
          title='Latest Repos'
          paragraph={`View my latest six pushes to Github`}
        />

        <div className='mx-auto max-w-screen-xl px-4 py-8 pb-20 lg:px-6 lg:py-16'>
          <div className='grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3'>
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
                  }}>
                  <GithubRepoCard
                    latestRepo={latestRepo}
                    key={i}
                  />
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

  const repositories = await getLatestRepos(token)
  return {
    props: {
      repositories,
    },
  }
}

export default About
