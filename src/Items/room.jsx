

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Room(props) {
  const { nodes, materials } = useGLTF('models/room.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.wall1.geometry} material={materials['Material.011']} position={[0.208, 11.189, -23.788]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[11.506, 0.326, 24.093]} />
      <mesh geometry={nodes.floor.geometry} material={materials['Material.009']} position={[0.074, 0.012, 0]} scale={[23.948, 0.326, 24.093]} />
      <mesh geometry={nodes.wall2.geometry} material={materials['Material.010']} position={[23.961, 11.2, 0.061]} rotation={[0, 0, -Math.PI / 2]} scale={[11.506, 0.326, 24.093]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.016']} position={[3.477, 10.214, -23.397]} rotation={[0, 0, -Math.PI / 2]} scale={[5.753, 0.479, 1.04]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.014']} position={[-2.117, 10.206, -23.397]} rotation={[0, 0, -Math.PI / 2]} scale={[5.753, 0.479, 1.04]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.015']} position={[3.066, 4.697, -23.396]} scale={[5.583, 0.381, 1.04]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['Material.013']} position={[8.347, 10.138, -23.397]} rotation={[0, 0, -Math.PI / 2]} scale={[5.753, 0.479, 1.04]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.026']} position={[3.066, 10.563, -23.396]} scale={[5.583, 0.381, 1.04]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.027']} position={[3.066, 15.54, -23.396]} scale={[5.583, 0.381, 1.04]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Material.018']} position={[23.944, 9.687, 5.752]} rotation={[0, 1.543, 0]} scale={[9.684, 0.479, 0.633]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['Material.031']} position={[23.944, 4.811, 5.752]} rotation={[0, 1.543, 0]} scale={[9.684, 0.479, 0.633]} />
      <mesh geometry={nodes.Cube012.geometry} material={materials['Material.032']} position={[24.021, 10.214, 14.868]} rotation={[0, 1.543, -Math.PI / 2]} scale={[5.894, 0.55, 0.917]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Material.030']} position={[23.905, 10.214, 6.488]} rotation={[0, 1.543, -1.571]} scale={[5.894, 0.55, 0.633]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.029']} position={[23.944, 15.654, 5.752]} rotation={[0, 1.543, 0]} scale={[9.684, 0.479, 0.633]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.028']} position={[24.24, 10.214, -3.365]} rotation={[0, 1.543, -1.571]} scale={[5.894, 0.55, 0.633]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.037']} position={[-16.741, 9.182, -23.2]} rotation={[1.65, 1.551, -0.052]} scale={[0.303, 0.18, 0.49]} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.038']} position={[-16.741, 9.182, -24.159]} rotation={[1.65, 1.551, -0.052]} scale={[0.303, 0.18, 0.49]} />
      <mesh geometry={nodes.door001.geometry} material={materials['Material.035']} position={[-17.76, 8.965, -23.703]} rotation={[-Math.PI, 0, 0]} scale={[-0.341, -8.722, -0.503]} />
      <mesh geometry={nodes.door002.geometry} material={materials['Material.034']} position={[-14.065, 17.219, -23.681]} rotation={[-Math.PI, 0, 0]} scale={[-4.004, -0.473, -0.514]} />
      <mesh geometry={nodes.door003.geometry} material={materials['Material.033']} position={[-10.39, 8.969, -23.668]} rotation={[-Math.PI, 0, 0]} scale={[-0.341, -8.722, -0.503]} />
      <mesh geometry={nodes.door004.geometry} material={materials['Material.036']} position={[-14.057, 8.626, -23.703]} rotation={[-Math.PI, 0, 0]} scale={[-3.364, -8.362, -0.503]} />
    </group>
  )
}

useGLTF.preload('models/room.glb')
