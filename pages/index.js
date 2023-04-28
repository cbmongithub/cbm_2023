import { Suspense } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Loader } from '@react-three/drei'

const Model = dynamic(() => import('../components/Model').then((mod) => mod), {
  ssr: false,
})

const Index = () => {
  return (
    <>
      <Head>
        <title>Home | Christian B. Martinez</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </>
  )
}

export default Index
