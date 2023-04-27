import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Loader } from '@react-three/drei'

const Model = dynamic(() => import('../components/Model').then((mod) => mod), {
  ssr: false,
})

const Index = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Model />
    </Suspense>
  )
}

export default Index
