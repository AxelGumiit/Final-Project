import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Controls(props) {
  const { nodes } = useGLTF('models/controls.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Text.geometry}
        position={[-0.979, 0, -0.182]}
        rotation={[1.558, 0, 0]}
      >
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  )
}

useGLTF.preload('models/controls.glb')
