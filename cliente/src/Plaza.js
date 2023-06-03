import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import Fence from './Fence';
import { MeshStandardMaterial } from 'three'; // Importa el material MeshStandardMaterial


export default function Plaza(props) {
  const group = useRef();
  const resize = 20

  const material = new MeshStandardMaterial({ color: "red" });  
  
  return (
    // Pisos y vallas
    <group position-x={resize*3}>
      <group>
        <mesh position={[0,-resize*0.25,0]} rotation-x={- Math.PI * 0.5} >
          <boxGeometry args={[resize,resize*5,resize*0.5]} />
        </mesh>
        <Fence position={[resize*0.5,1,0]} rotation={[0,Math.PI*0.5,0]} scale={[52.35,1.3,1]} />
      </group>
      <group>
        <mesh position={[resize*4.5,-resize*0.25,-resize*3]} material={material} rotation={[Math.PI*0.5,0,Math.PI*0.5]} >
            <boxGeometry args={[resize,resize*10,resize*0.5]}  />
        </mesh>
        <Fence position={[resize*5,1,-resize*2.5]} rotation={[0,0,0]} scale={[94.255,1.3,1]} />
      </group>
      <group>
        <mesh position={[resize*4.5,-resize*0.25,resize*3]} material={material} rotation={[Math.PI*0.5,0,Math.PI*0.5]} >
          <boxGeometry args={[resize,resize*10,resize*0.5]}  />
        </mesh>
        <Fence position={[resize*5,1,resize*2.5]} rotation={[0,0,0]} scale={[94.255,1.3,1]} />
      </group>
    {/* piso inferior */}
    <mesh position={[resize*5,-resize*0.5,0]} rotation-x={- Math.PI * 0.5} material={new MeshStandardMaterial({ color: "green" })}>
      <boxGeometry args={[resize*9,resize*5,0.01]} />
    </mesh>

      
      
    
    </group>
  );
}

