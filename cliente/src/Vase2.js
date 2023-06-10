/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: MAEF - museo virtual (https://sketchfab.com/MAEFmuseovirtual)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/askos-zoomorfo-punico-finales-del-s-v-ac-ec62abb0025a44ac946cce2874c72ea4
title: Askos zoomorfo púnico (finales del s. V a.C.)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Vase2(props) {
  const { nodes, materials } = useGLTF(
    "./static/askos_zoomorfo_punico_finales_del_s._v_a.c..glb"
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-1.71, -2.3, -1.21]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials["Scene_-_Root"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["Scene_-_Root"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials["Scene_-_Root"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./static/askos_zoomorfo_punico_finales_del_s._v_a.c..glb");