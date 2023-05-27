import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function TerracotaSoldier(props) {
  const { nodes, materials } = useGLTF("./static/TerracotaSoldier.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI+ -Math.PI / 5] } scale={2}>
        <group rotation={[Math.PI / 2, 5, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.None}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.None}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./static/TerracotaSoldier.glb");