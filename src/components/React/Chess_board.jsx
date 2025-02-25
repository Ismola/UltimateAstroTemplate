/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/chess_board.glb 
Author: Al (https://sketchfab.com/lightningocelot)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chess-board-a0d61768bc504082901728ec9603fa0d
Title: Chess Board
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Chess_board(props) {
  const { nodes, materials } = useGLTF('./models/chess_board.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-7.607, -18.64, -4.616]}>
          <mesh geometry={nodes.Object_3.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_16.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_18.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_19.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_20.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_21.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_23.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_24.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_25.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_26.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_27.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_28.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_29.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_30.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_31.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_32.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_33.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_34.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_35.geometry} material={materials.glassfogged} />
          <mesh geometry={nodes.Object_36.geometry} material={materials.glassfogged} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/chess_board.glb')
