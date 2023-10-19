import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  FaMapPin,
  FaBriefcase,
  FaUniversity,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from 'react-icons/fa'
import { AiFillGithub, AiFillSlackCircle } from 'react-icons/ai'
import { IoLogoJavascript } from 'react-icons/io'
import {
  SiTailwindcss,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiInsomnia,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiZoom,
  SiMongodb,
  SiExpress,
  SiVisualstudiocode,
  SiHeroku,
  SiNetlify,
} from 'react-icons/si'

import { experienceData } from '../constants'
import {
  SiteHead,
  Heading,
  GithubRepoCard,
  Socials,
  Avatar,
  ToolTip,
  ExperienceCard,
} from '../components'

const About = () => {
  const [repos, setRepos] = useState()

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch('/api/getLatestRepos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const result = await response.json()
      setRepos(result.json.items)
    }
    fetchRepos()
  }, [])
  return (
    <>
      <SiteHead
        page='About'
        title='About'
        description='A little about me'
        keywords='nextjs, blog, javascript, tech blogs, chatgpt, react js'
      />
      <section>
        <Heading
          title='About'
          paragraph='A little about me'
        />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 30, delay: 1 }}
          className='relative z-30 mx-auto mt-32 max-w-screen-md px-4 py-8 pb-20 lg:px-6 lg:py-16'>
          <div className='flex w-full flex-col break-words rounded-xl bg-white px-6 text-center shadow-xl dark:bg-slate-900'>
            <div className='mb-10 mt-[-75px] flex items-center justify-center'>
              <Avatar
                className='relative'
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 30,
                  delay: 0.25,
                }}
                width='w-32'
                height='h-32'
              />
            </div>
            <h3 className='mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl'>
              Christian B. Martinez
            </h3>
            <div className='mb-2 mt-0 flex flex-row items-center justify-center text-sm font-medium uppercase leading-normal text-zinc-500 dark:text-zinc-400'>
              <FaMapPin className='text-md mr-2 text-zinc-400' />
              Salt Lake City, Utah
            </div>
            <div className='mb-2 mt-10 flex flex-row items-center justify-center font-light text-zinc-500 dark:text-zinc-400'>
              <FaBriefcase className='text-md mr-2 text-zinc-500 dark:text-zinc-400' />
              Full Stack Developer
            </div>
            <div className='mb-2 flex flex-row items-center justify-center font-light text-zinc-500 dark:text-zinc-400'>
              <FaUniversity className='text-md mr-2 text-zinc-500 dark:text-zinc-400' />
              University of Utah
            </div>
            <div className='mt-10 border-t border-zinc-300 py-10 text-center dark:border-zinc-600'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full max-w-[600px]'>
                  <p className='text-md mb-2 font-light leading-relaxed text-zinc-500 dark:text-zinc-400'>
                    Hey there, 🖐 I&apos;m Christian, a dedicated Full Stack Web
                    Developer from Utah. I am actively pursuing a full time role
                    within the dynamic world of the tech industry. I recently
                    completed the rigorous 6-month coding bootcamp program at
                    the prestigious University of Utah, where I honed my skills
                    by successfully delivering a multitude of full stack
                    projects. This hands-on experience, alongside my current
                    role at MMBC, has equipped me with a strong foundation in
                    full stack web development. My passion for technology drives
                    me to stay current with emerging trends and cutting-edge
                    technologies, making me ever-ready to adapt and excel in
                    this rapidly evolving field. Thanks for viewing my portfolio
                    site, and I would be eager to connect!
                  </p>
                  <Socials style='list-none inline-flex mt-8' />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <Heading
          title='Experience'
          paragraph='Past and present roles'
        />
        <div className='relative z-30 mx-auto max-w-screen-xl px-4 py-8 pb-20 lg:px-6 lg:py-16'>
          <div className='grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3'>
            {experienceData.map((experience, i) => (
              <motion.div
                key={experience.company}
                initial={{
                  opacity: 0,
                  translateY: -100,
                }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 30,
                  duration: 0.5,
                  delay: 0.5 * i,
                }}>
                <ExperienceCard
                  src={experience.src}
                  company={experience.company}
                  type={experience.type}
                  role={experience.role}
                  from={experience.from}
                  to={experience.to}
                  accomplishments={experience.accomplishments}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <Heading
          title='Stack'
          paragraph='Preferred languages and frameworks'
        />
        <div className='relative z-30 mx-auto mb-40 mt-20 flex max-w-screen-xl flex-row flex-wrap items-center justify-center px-4 py-8 lg:px-6'>
          <ToolTip text='JavaScript'>
            <motion.div
              className='m-3 rounded-full bg-yellow-500 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.05,
              }}>
              <IoLogoJavascript className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='MySQL'
            align='left-1'>
            <motion.div
              className='m-3 rounded-full bg-blue-600 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.1,
              }}>
              <SiMysql className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='TypeScript'
            align='-left-2'>
            <motion.div
              className='m-3 rounded-full bg-blue-600 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.15,
              }}>
              <SiTypescript className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='React'
            align='left-2'>
            <motion.div
              className='m-3 rounded-full bg-zinc-600 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.2,
              }}>
              <FaReact className='h-7 w-7 text-sky-400' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='Bootstrap'
            align='-right-1'>
            <motion.div
              className='m-3 rounded-full bg-purple-600 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.25,
              }}>
              <FaBootstrap className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='NodeJS'
            align='-right-0'>
            <motion.div
              className='m-3 rounded-full bg-lime-600 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.3,
              }}>
              <FaNodeJs className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='TailwindCSS'
            align='-right-3'>
            <motion.div
              className='m-3 rounded-full bg-sky-400 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.35,
              }}>
              <SiTailwindcss className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='NextJS'
            align='right-1'>
            <motion.div
              className='m-3 rounded-full bg-zinc-600 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.4,
              }}>
              <SiNextdotjs className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='MongoDB'
            align='-right-2'>
            <motion.div
              className='m-3 rounded-full bg-green-600 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.45,
              }}>
              <SiMongodb className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
          <ToolTip text='ExpressJS'>
            <motion.div
              className='m-3 rounded-full bg-gray-500 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.5,
              }}>
              <SiExpress className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
        </div>

        <Heading
          title='Tools'
          paragraph='Some of the daily tools I use'
        />
        <div className='relative z-30 mx-auto mb-40 mt-20 flex max-w-screen-xl flex-row flex-wrap items-center justify-center px-4 py-8 lg:px-6'>
          <ToolTip
            text='VSCode'
            align='right-1'>
            <motion.div
              className='m-3 rounded-full bg-slate-700 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.5,
              }}>
              <SiVisualstudiocode className='h-7 w-7 text-blue-500' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='Git/GitHub'
            align='-left-2'>
            <motion.div
              className='m-3 rounded-full bg-gray-800 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.45,
              }}>
              <AiFillGithub className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='Compass'
            align='-left-0'>
            <motion.div
              className='m-3 rounded-full bg-green-600 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.4,
              }}>
              <SiMongodb className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='Insomnia'
            align='-left-0'>
            <motion.div
              className='m-3 rounded-full bg-purple-700 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.35,
              }}>
              <SiInsomnia className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
          <ToolTip text='Illustrator'>
            <motion.div
              className='m-3 rounded-full bg-yellow-900 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.3,
              }}>
              <SiAdobeillustrator className='h-7 w-7 text-yellow-600' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='Photoshop'
            align='-left-2'>
            <motion.div
              className='m-3 rounded-full bg-sky-400 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.25,
              }}>
              <SiAdobephotoshop className='h-7 w-7 text-indigo-800' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='Zoom'
            align='left-2'>
            <motion.div
              className='m-3 rounded-full bg-blue-500 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.2,
              }}>
              <SiZoom className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='Slack'
            align='left-2.5'>
            <motion.div
              className='m-3 rounded-full bg-zinc-700 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.15,
              }}>
              <AiFillSlackCircle className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='Netlify'
            align='left-1'>
            <motion.div
              className='m-3 rounded-full bg-teal-500 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.1,
              }}>
              <SiNetlify className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
          <ToolTip
            text='Heroku'
            align='left-0.5'>
            <motion.div
              className='m-3 rounded-full bg-purple-600/80 p-2 shadow-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 30,
                delay: 0.05,
              }}>
              <SiHeroku className='h-7 w-7 text-white' />
            </motion.div>
          </ToolTip>
        </div>

        <Heading
          title='Latest Repos'
          paragraph={`View latest pushes to Github`}
        />
        <div className='relative z-30 mx-auto max-w-screen-xl px-4 py-8 pb-20 lg:px-6 lg:py-16'>
          <div className='grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3'>
            {repos &&
              repos.map((latestRepo, i) => (
                <motion.div
                  key={latestRepo.id}
                  initial={{
                    opacity: 0,
                    translateY: -100,
                  }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 30,
                    duration: 0.5,
                    delay: 0.5 * i,
                  }}>
                  <GithubRepoCard
                    latestRepo={latestRepo}
                    key={latestRepo.node_id}
                  />
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
