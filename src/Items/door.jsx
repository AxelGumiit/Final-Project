import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Door(props) {
  const { nodes, materials } = useGLTF('models/room.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.door001.geometry} material={materials['Material.035']} position={[-17.76, 8.965, -23.703]} rotation={[-Math.PI, 0, 0]} scale={[-0.341, -8.722, -0.503]} />
      <mesh geometry={nodes.door002.geometry} material={materials['Material.034']} position={[-14.065, 17.219, -23.681]} rotation={[-Math.PI, 0, 0]} scale={[-4.004, -0.473, -0.514]} />
      <mesh geometry={nodes.door003.geometry} material={materials['Material.033']} position={[-10.39, 8.969, -23.668]} rotation={[-Math.PI, 0, 0]} scale={[-0.341, -8.722, -0.503]} />
      <mesh geometry={nodes.door004.geometry} material={materials['Material.036']} position={[-14.057, 8.626, -23.703]} rotation={[-Math.PI, 0, 0]} scale={[-3.364, -8.362, -0.503]} />
    </group>
  )
}

useGLTF.preload('models/room.glb')









