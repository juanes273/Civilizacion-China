/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: bilgehan.korkmaz (https://sketchfab.com/bilgehan.korkmaz)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/terracotta-vase-37f514c1996f4a0f85687d99fbb1afb4
title: Terracotta Vase
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Vase(props) {
  const { nodes, materials } = useGLTF("./static/terracotta_vase.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.DefaultMaterial}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./static/terracotta_vase.glb");