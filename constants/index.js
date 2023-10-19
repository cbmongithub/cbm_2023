const experienceData = [
  {
    src: '/img/nglogo.jpg',
    company: 'NGC',
    type: 'Full-Time',
    role: 'Technician',
    from: '2021',
    to: 'Present',
    accomplishments: [
      'Proficiently diagnosed and resolved issues in legacy computer applications.',
      'Manufactured composite components for the Airbus A400M aircraft using proprietary machinery.',
      'Collaborated with System Engineers, providing valuable feedback on software enhancements.',
      'Operated sophisticated Airbus computer systems to ensure parts maintain quality and consistency. ',
    ],
  },
  {
    src: '/img/mmbclogo.jpg',
    company: 'MMBC',
    type: 'Contract',
    role: 'Web Developer',
    from: '2020',
    to: 'Present',
    accomplishments: [
      'Built a lightning-fast single page application with React and Tailwind CSS.',
      'Increased website inquiries from 2% to 18% month over month.',
      'Demonstrated expertise in responsive design, accessibility, and mobile optimization.',
      'Continuously updated skills and knowledge to stay at the forefront of web development trends.',
    ],
  },
  {
    src: '/img/mixdlogo.png',
    company: 'Mixdlabs',
    type: 'Full-Time',
    role: 'Chief Technology Officer',
    from: '2015',
    to: '2020',
    accomplishments: [
      'Created a bespoke Shopify theme tailored to specific project requirements.',
      'Developed a wholesale portal for our retail clients which resulted in a $140,000 increase in annual revenue.',
      'Optimized page load speeds and SEO which lead to a 36% increase in organic traffic.',
      'Learned the liquid templating language.',
    ],
  },
]

const svgPathVariant1 = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 8.5L24 8.5' },
}

const svgPathVariant2 = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M0 14.5L24 14.5' },
  closed: { d: 'M0 14.5L12 14.5' },
}

const firstVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}

const secondVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0.07142857142,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}

const thirdVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0.14285714284,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}

const fourthVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0.21428571426,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}

const fifthVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0.28571428568,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}

const sixthVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0.3571428571,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}

const seventhVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0.42857142852,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}

const eighthVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0.5,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}

const socialLinks = {
  github: 'https://github.com/christianbmartinez',
  linkedin: 'https://www.linkedin.com/in/cmartinez1089/',
  twitter: 'https://twitter.com/_coderchris',
}

const portfolioData = [
  {
    title: 'Portfolio Site',
    imgUrl:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Image for christians portfolio site project',
    description:
      'My old portfolio site built with react, bootstrap, and threejs.',
    repo: 'https://github.com/christianbmartinez/cbm_2022',
    href: 'https://preeminent-raindrop-7e0d9e.netlify.app/',
    tags: ['#REACT', '#BOOTSTRAP'],
  },
  {
    title: 'Colorfill App',
    imgUrl:
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Image for christians colorfill app project',
    description:
      'A css tool that configures text fill animations. Also available on npm.',
    repo: 'https://github.com/christianbmartinez/colorfill',
    href: 'https://codepen.io/_coderchris/pen/KKgyywR',
    tags: ['#CSS VARIABLES', '#JS'],
  },
  {
    title: 'Full Stack Blog',
    imgUrl:
      'https://plus.unsplash.com/premium_photo-1686041335799-a140e5b3b35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    alt: 'Image for christians full stack blog project',
    description: 'A full stack tech blog written with MVC architecture',
    repo: 'https://github.com/christianbmartinez/tech-blog',
    href: 'https://guarded-ocean-61686-3600ffdf6cf0.herokuapp.com/',
    tags: ['#EXPRESS', '#HANDLEBARS'],
  },
  {
    title: 'Consulting Site',
    imgUrl:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    alt: 'Image for christians mmbc website project',
    description: 'A single page application built with react and tailwind.',
    repo: 'https://github.com/christianbmartinez/mmbc',
    href: 'https://www.mmbc.llc/',
    tags: ['#TAILWIND', '#REACT'],
  },
  {
    title: 'Employee Tracker',
    imgUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Image for christians employee tracker project',
    description: 'A node cli application that uses mysql to manage employees.',
    repo: 'https://github.com/christianbmartinez/employee-tracker',
    href: 'https://drive.google.com/file/d/1uLsYvFhE-2sl5wxVCUevMd-yZhQ4aVN0/view',
    tags: ['#INQUIRER', '#MYSQL'],
  },
  {
    title: 'Mysteryboard',
    imgUrl:
      'https://images.unsplash.com/photo-1615185990778-a15d7015b41d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    alt: 'Image for christians mysteryboard project',
    description:
      'A full stack application that allows users to post anonymously.',
    repo: 'https://github.com/christianbmartinez/mysteryboard',
    href: 'https://mysteryboard.herokuapp.com/',
    tags: ['#EXPRESS', '#MONGODB'],
  },
  {
    title: 'Codeathon',
    imgUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    alt: 'Image for christians portfolio codeathon project',
    description: 'A full stack application that brings coders together',
    repo: 'https://github.com/JenevaRay/Codeathon',
    href: 'https://codeathon-1b48b4588e47.herokuapp.com/',
    tags: ['#REACT', '#GRAPHQL'],
  },
  {
    title: 'Chattr App',
    imgUrl:
      'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    alt: 'Image for christians portfolio chattr app project',
    description: 'An anonymous chatting application that uses chatgpt.',
    repo: 'https://github.com/christianbmartinez/chattrapp',
    href: 'https://chattrapp.netlify.app/',
    tags: ['#REACT', '#CHATGPT'],
  },
  {
    title: 'Logo Generator',
    imgUrl:
      'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80',
    alt: 'Image for christians portfolio SVG Logo generator project',
    description: 'A node cli application for generating quality svg logos',
    repo: 'https://github.com/christianbmartinez/svg-logo-generator',
    href: 'https://drive.google.com/file/d/1Tg1iBDdUqCIz06HrNIAeVbb3j-26K3-V/view',
    tags: ['#INQUIRER', '#JS'],
  },
]

export {
  experienceData,
  socialLinks,
  portfolioData,
  svgPathVariant1,
  svgPathVariant2,
  firstVariant,
  secondVariant,
  thirdVariant,
  fourthVariant,
  fifthVariant,
  sixthVariant,
  seventhVariant,
  eighthVariant,
}
