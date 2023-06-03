import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Caballo(props) {
  const { nodes, materials } = useGLTF("./static/chinese_terracotta_horse.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.22, 2.5, -0.34]} rotation={[-1.85, -0.01, 0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Figur-Pferd-Chinesisch-v2_1M.1001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["Figur-Pferd-Chinesisch-v2_1M.1001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Figur-Pferd-Chinesisch-v2_1M.1001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["Figur-Pferd-Chinesisch-v2_1M.1001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials["Figur-Pferd-Chinesisch-v2_1M.1001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials["Figur-Pferd-Chinesisch-v2_1M.1001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials["Figur-Pferd-Chinesisch-v2_1M.1001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials["Figur-Pferd-Chinesisch-v2_1M.1001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials["Figur-Pferd-Chinesisch-v2_1M.1001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials["Figur-Pferd-Chinesisch-v2_1M.1001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./static/chinese_terracotta_horse.glb");