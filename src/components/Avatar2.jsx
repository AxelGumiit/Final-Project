import React, { useEffect, useRef } from 'react';
import { useGraph, useFrame } from '@react-three/fiber';
import { useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import { AnimationMixer } from 'three';
import * as THREE from 'three';

export function Avatar2({ targetPosition, ...props }) {
  const { scene } = useGLTF('models/Avatar2.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const mixer = useRef(new AnimationMixer(clone));
  const idleAction = useFBX('animations/Idle.fbx');
  const walkAction = useFBX('animations/Walking.fbx');

  // Setup animations
  useEffect(() => {
    if (idleAction) {
      mixer.current.clipAction(idleAction.animations[0], clone).play();
    }
    if (walkAction) {
      mixer.current.clipAction(walkAction.animations[0], clone);
    }
  }, [idleAction, walkAction, clone]);

  useFrame((state, delta) => {
    mixer.current.update(delta);

    // Movement logic
    if (targetPosition) {
      const direction = new THREE.Vector3().subVectors(targetPosition, clone.position).normalize();
      const speed = 2; // Adjust speed as needed
      clone.position.add(direction.multiplyScalar(speed * delta));

      // Check if reached target position
      if (clone.position.distanceTo(targetPosition) < 0.1) {
        mixer.current.clipAction(idleAction.animations[0], clone).play();
      } else {
        mixer.current.clipAction(walkAction.animations[0], clone).play();
      }
    }
  });

  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
    </group>
  );
}

useGLTF.preload('models/Avatar2.glb');
