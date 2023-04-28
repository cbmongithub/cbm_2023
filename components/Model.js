import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PresentationControls, Environment } from '@react-three/drei'

const Model = () => {
  return (
    <Canvas
      style={{
        width: '100%',
        height: '80vh',
        zIndex: '0',
      }}
      shadows
      camera={{ position: [0, 0, 10], fov: 4 }}
    >
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={2048}
        castShadow
      />
      <PresentationControls
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[1.4, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Head
          rotation={[-Math.PI / 7, 0, 0]}
          position={[0, 0.25, 0]}
          scale={1}
        />
      </PresentationControls>
      <Environment preset='city' />
    </Canvas>
  )
}

const Head = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('http://localhost:3000/models/me.gltf')
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
    group.current.rotation.y = Math.sin(t / 4) / 8
    group.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0.06]} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.teeth.geometry}
          material={materials.Default}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.back.geometry}
          material={materials.back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lens.geometry}
          material={materials.lens}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pupil.geometry}
          material={materials.pupil}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eyeball.geometry}
          material={materials.eyeball}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hair.geometry}
          material={materials.hair}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.head.geometry}
          material={materials.head}
        />
      </group>
    </group>
  )
}

export default Model
