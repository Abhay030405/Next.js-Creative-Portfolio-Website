"use client"
import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Wizard(props) {
  const { nodes, materials } = useGLTF('/models/wizard-transformed.glb')
  const groupRef = useRef()

  // Animate floating up and down
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3 // Float amplitude
    }
  })
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01 // adjust speed here
    }
  })
  // useEffect(() => {
  //   if (materials.Cloth1) {
  //     materials.Cloth1.color.set('#ffffff') // Try other options too
  //     materials.Cloth1.metalness = 0.2      // optional: tweak material
  //     materials.Cloth1.roughness = 0.7
  //   }
  // }, [materials])
  useEffect(() => {
  if (materials.Cloth1) {
    // Remove any texture that blocks the color
    if (materials.Cloth1.map) {
      materials.Cloth1.map = null
    }

    // Set color
    materials.Cloth1.color.set('#8b5e3c') // Desert gold
    materials.Cloth1.roughness = 0.7
    materials.Cloth1.metalness = 0.2
  }
  if (materials.Skin1) {
    if (materials.Skin1.map) materials.Skin1.map = null
    materials.Skin1.color.set('#c68642') // Wheat (soft skin tone)
    materials.Skin1.roughness = 0.5
    materials.Skin1.metalness = 0.1
  }

}, [materials])

  return (
    <group {...props} dispose={null} ref={groupRef} scale={1.8}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial.geometry} material={materials.Cloth1} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_1.geometry} material={materials.Cloth1} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_2.geometry} material={materials.Cloth1} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_3.geometry} material={materials.Skin1} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_4.geometry} material={materials.Skin1} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_5.geometry} material={materials.Gold1} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_6.geometry} material={materials.Gold1} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_7.geometry} material={materials.Gold1} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_8.geometry} material={materials.Gold1} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_9.geometry} material={materials.Cloth1} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_10.geometry} material={materials.Gold1} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_11.geometry} material={materials.Cloth1} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_12.geometry} material={materials.Skin1} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/wizard-transformed.glb')
