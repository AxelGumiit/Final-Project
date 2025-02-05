

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Chess(props) {
  const { nodes, materials } = useGLTF('models/Chess Set.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat21} />
      <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat23} />
    </group>
  )
}

useGLTF.preload('models/Chess Set.glb')
