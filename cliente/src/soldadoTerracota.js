import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Soldado(props) {
  const { nodes, materials } = useGLTF("./static/terracota_army_statue_xian.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./static/terracota_army_statue_xian.glb");