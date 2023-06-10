import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { TextureLoader } from "three";
import TerracotaSoldier from './TerracotaSoldier';
import Vase from './Vase';
import Vase2 from './Vase2';
import Vase3 from './Vase3';
import { Text } from '@react-three/drei'
import { Float } from '@react-three/drei'

export default function Welcome(props) {
const handleClick = () => {
    changeScene('scene1');
  };
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/static/TerracotaSoldier.glb");
  const { actions } = useAnimations(animations, group);
  const resize = 20
  const textureLoader = new TextureLoader();
  const pared = textureLoader.load("/static/Wall/Wood_Wall_002_SD/Wood_Wall_002_basecolor.jpg", (texture) => {
    // console.log("Textura de pared cargada correctamente", texture);
  });
  const piso = textureLoader.load("/static/Floor/Tatami_001_SD/Tatami_001_basecolor.jpg", (texture) => {
    // console.log("Textura de piso cargada correctamente", texture);
  });
  const puerta = textureLoader.load("/static/Wall/Wood_Wall_002_SD/Wood_Door_002_basecolor.jpg", (texture) => {
    // console.log("Textura de pared cargada correctamente", texture);
  });
  const techo = textureLoader.load("/static/Wall/Wood_Wall_002_SD/Stylized_Thatched_Roof_002_basecolor.jpg", (texture) => {
    // console.log("Textura de pared cargada correctamente", texture);
  });
  
  
  return (
    <group>
      <mesh position-y={0} position-x={resize} rotation-x={- Math.PI * 0.5} >
        <boxGeometry args={[resize*3,resize,0.01]} />
        <meshStandardMaterial map={piso} />
      </mesh>
      <mesh position-y={resize/2} position-x={resize} rotation-x={- Math.PI * 0.5} >
        <boxGeometry args={[resize*3,resize,0.01]} />
        <meshStandardMaterial map={techo} />
      </mesh>
      <mesh position-y={resize * 0.25} position-z={-resize * 0.5} >
        <boxGeometry args={[resize,resize*0.5,0.01]} />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position-y={resize * 0.25} position-z={resize * 0.5}  rotation-x={-Math.PI}>
        <boxGeometry args={[resize,resize*0.5,0.01]}  />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position-y={resize * 0.25} position-x={-resize * 0.5} rotation-y={Math.PI * 0.5}>
        <boxGeometry args={[resize,resize*0.5,0.01]}  />
        <meshStandardMaterial map={pared} />
      </mesh>

      {/* <mesh  position={[resize * 0.5,resize * 0.25,resize*0.5 ]} rotation={[0,Math.PI * 0.07 ,0]}>
        <boxGeometry  args={[resize,resize*0.5,0.01]}  />
        <meshStandardMaterial map={puerta} />
      </mesh>
      <mesh position={[resize*0.5,resize * 0.25,-resize * 0.5]} rotation={[0,-Math.PI * 0.07,0]}>
        <boxGeometry args={[resize,resize*0.5,0.01]}  />
        <meshStandardMaterial map={puerta} />
      </mesh> */}

      
      <mesh position={[resize,resize * 0.25,-resize * 0.5]} >
        <boxGeometry args={[resize,resize*0.5,0.01]} />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position={[resize,resize * 0.25,resize * 0.5]} >
        <boxGeometry args={[resize,resize*0.5,0.01]} />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position={[resize*2,resize * 0.25,-resize * 0.5]} >
        <boxGeometry args={[resize,resize*0.5,0.01]} />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position={[resize*2,resize * 0.25,resize * 0.5]} >
        <boxGeometry args={[resize,resize*0.5,0.01]} />
        <meshStandardMaterial map={pared} />
      </mesh>

      <mesh position-y={resize * 0.25} position-x={resize * 2.5} rotation-y={Math.PI * 0.5}>
        <boxGeometry args={[resize,resize*0.5,0.01]}  />
        <meshStandardMaterial map={pared} />
      </mesh>

      
      
      <mesh scale={1.2} rotation-y={-Math.PI*0.8} position={[resize*0.4,0,-resize*0.2]}>
      <Float speed={0} >
        <Text
          fontSize={0.5}
          color="Black"
          position-y={6.2}
          maxWidth={5}
          textAlign="center"
          rotation={[0,Math.PI*0.5,0]}
          
        >
          
          <mesh position={[0, 0, -0.01]}>
            <boxGeometry args={[8, 2,0.01]}/>
            <meshBasicMaterial color="white" transparent opacity={0.8} />
          </mesh>
          
          Bienvenido a la civilizacion china
        </Text>
      </Float>
      <TerracotaSoldier onClick={handleClick} position-y={2}/>
      </mesh>
      <Vase position={[resize*2.4,1,-resize*0.4]}/>
      <Vase position={[-6,1,7]}/>
      <Vase2 scale={0.5} position={[resize,0.3,8]} rotation-y={Math.PI*0.6}/>
      <Vase3 scale={3} position={[resize*1.7,-0.8,9.5]} rotation-y={Math.PI*0.5}/>
    </group>
    
  );
}