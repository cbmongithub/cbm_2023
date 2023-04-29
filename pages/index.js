import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const Index = () => {
  return (
    <>
      <Head>
        <title>Home | Christian B. Martinez</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='mb-40'>
        <div className='px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left'>
          <div className='container mx-auto xl:px-32'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div className='mt-12 lg:mt-0'>
                <h1 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12'>
                  I&apos;m Christian
                  <br />I build
                  <span className='text-purple-600'>
                    <TypeAnimation
                      sequence={[
                        'Websites',
                        1000,
                        'Apps',
                        1000,
                        'Friendships',
                        1000,
                      ]}
                      wrapper='span'
                      cursor={false}
                      repeat={Infinity}
                      className='ml-3 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight'
                    />
                  </span>
                </h1>
                <Link
                  className='inline-block px-7 py-3 mr-2 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                  href='#!'
                  role='button'
                >
                  ABOUT ME
                </Link>
                <Link
                  className='inline-block px-7 py-3 bg-transparent text-purple-600 font-medium text-sm leading-snug uppercase rounded hover:text-purple-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                  href='#!'
                  role='button'
                >
                  PORTFOLIO
                </Link>
              </div>
              <div className='mb-12 lg:mb-0 flex flex-col justify-center items-center'>
                <Image
                  src='http://localhost:3000/img/me.jpg'
                  alt='Image of me'
                  width={500}
                  height={500}
                  className='rounded-lg shadow-md hover:shadow-2xl transition duration-150 ease-in-out'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
