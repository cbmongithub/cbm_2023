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

const navLinks = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/portfolio', text: 'Portfolio' },
  { href: '/blog', text: 'Blog' },
  { href: '/contact', text: 'Contact' },
  { href: '/christians-resume.pdf', text: 'Resume' },
]

const svgPathOpen = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 8.5L24 8.5' },
}

const svgPathClose = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M0 14.5L24 14.5' },
  closed: { d: 'M0 14.5L12 14.5' },
}

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: 1 },
  },
}

const liVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 30, type: 'spring', ease: 'easeIn' },
    },
  },
  closed: {
    x: 100,
    opacity: 0,
    transition: {
      x: { stiffness: 30, type: 'spring', ease: 'easeOut' },
    },
  },
}

const layoutVariants = {
  inactive: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 30,
    },
  },
  in: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

const chatWidgetVariants = {
  open: {
    opacity: 1,
    x: 5,
    transition: {
      duration: 0.25,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 30,
    },
  },
  closed: {
    x: 300,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 30,
    },
  },
}

const socialLinks = {
  github: 'https://github.com/cbmongithub',
  linkedin: 'https://www.linkedin.com/in/cbmonlinkedn/',
  twitter: 'https://x.com/cbmonx',
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
    title: 'Tic Tac Toe',
    imgUrl:
      'https://images.unsplash.com/photo-1602632003094-0494b73b7c4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image for christians portfolio tic tac toe project',
    description:
      'A tic tac toe multiplayer game with chat. Built with Next, Socketio, and Express.',
    repo: 'https://github.com/christianbmartinez/tic-tac-toe',
    href: 'https://tictactoenextjs.netlify.app/',
    tags: ['#NEXT', '#SOCKETIO'],
  },
  {
    title: 'Create Chattr App',
    imgUrl:
      'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image for christians portfolio create-chattr-app project',
    description:
      'A Nextjs chatbot boilerplate that uses the chattr library I authored.',
    repo: 'https://github.com/christianbmartinez/create-chattr-app',
    href: 'https://githubbox.com/christianbmartinez/create-chattr-app',
    tags: ['#CHATTR', '#TYPESCRIPT'],
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
  chatWidgetVariants, experienceData, layoutVariants, liVariants, navLinks, portfolioData, socialLinks, svgPathClose, svgPathOpen, ulVariants
}

