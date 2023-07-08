import React, { useRef, useEffect, useState } from "react";
import { TextureLoader,Vector3 } from "three";
import { Text } from '@react-three/drei';
import {  useThree } from "@react-three/fiber";
import { AuthContext } from "./authContext";
import { useContext } from "react";

const textureLoader = new TextureLoader();
const pared = textureLoader.load( "/static/Wall/Wood_Wall_002_SD/Wood_Wall_002_basecolor.jpg");
const piso = textureLoader.load("/static/Floor/Tatami_001_SD/Tatami_001_basecolor.jpg");
const techo = textureLoader.load("/static/Wall/Wood_Wall_002_SD/Stylized_Thatched_Roof_002_basecolor.jpg");

export default function Quiz({ onSceneChange }) {
  const { categoria } = useContext(AuthContext);
  const { camera } = useThree();
  const group = useRef();
  const botonAzul = useRef();
  const botonRojo = useRef();
  const botonBack = useRef();
  const resize = 30;
  const [buleanQui,setBuleanQui]=useState(true)
  const target = new Vector3(0, 13, 0);
  if(buleanQui){
    camera.position.x= 50;
    camera.position.y= 14;
    camera.position.z= 0;
    camera.lookAt(target)
    setBuleanQui(false)
  }
  
 const handleClickRojo =  () =>{
    botonRojo.current.position.x = 7
    setTimeout(() => {
      botonRojo.current.position.x = 8;
      setTimeout(() => {
        onSceneChange('quiz1');
      },200);
    }, 200);
    
  }
  const handleClickAzul =  () =>{
    botonAzul.current.position.x = 7
    setTimeout(() => {
      botonAzul.current.position.x = 8;
      setTimeout(() => {
        onSceneChange('welcome');
      },200);
    }, 300);
  }

  const handleClickBack = () => {
    botonBack.current.position.x = 7
    setTimeout(() => {
        botonBack.current.position.x = 8;
        onSceneChange('welcome');
    }, 200);
  };

  return (
    <group>
      <mesh position-y={0} position-x={resize} rotation-x={-Math.PI * 0.5}>
        <boxGeometry args={[resize * 1.5, resize * 1.5, 0.01]} />
        <meshStandardMaterial map={piso} />
      </mesh>
      <mesh position-y={0} position-x={resize*2.5} rotation-x={-Math.PI * 0.5}>
        <boxGeometry args={[resize * 1.5, resize * 1.5, 0.01]} />
        <meshStandardMaterial map={piso} />
      </mesh>
      <mesh position-y={resize * 0.5} position-x={resize * 0.25} rotation-y={Math.PI * 0.5}>
        <boxGeometry args={[resize * 1.5, resize, 0.01]} />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position-y={resize * 0.5} position-x={resize * 3.25} rotation-y={Math.PI * 0.5}>
        <boxGeometry args={[resize * 1.5, resize, 0.01]} />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position-x={resize} position-y={resize * 0.5} position-z={resize*0.75}  rotation-x={-Math.PI}>
        <boxGeometry args={[resize*1.5,resize*1,0.01]}  />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position-x={resize} position-y={resize * 0.5} position-z={-resize*0.75}  rotation-x={-Math.PI}>
        <boxGeometry args={[resize*1.5,resize*1,0.01]}  />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position-x={resize*2.5} position-y={resize * 0.5} position-z={resize*0.75}  rotation-x={-Math.PI}>
        <boxGeometry args={[resize*1.5,resize*1,0.01]}  />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position-x={resize*2.5} position-y={resize * 0.5} position-z={-resize*0.75}  rotation-x={-Math.PI}>
        <boxGeometry args={[resize*1.5,resize*1,0.01]}  />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position-y={resize} position-x={resize} rotation-x={- Math.PI * 0.5} >
        <boxGeometry args={[resize*1.5,resize*1.5,0.01]} />
        <meshStandardMaterial map={techo} />
      </mesh>
      <mesh position-y={resize} position-x={resize*2.5} rotation-x={- Math.PI * 0.5} >
        <boxGeometry args={[resize*1.5,resize*1.5,0.01]} />
        <meshStandardMaterial map={techo} />
      </mesh>
      
      <mesh position={[8, 10, 0]}>
        <Text fontSize={2} color="Black" position-y={6.2} maxWidth={35} textAlign="center" rotation={[0, Math.PI * 0.5, 0]}>
          <mesh position={[0, 0, -0.01]}>
            <boxGeometry args={[40, 15, 0.01]} />
            <meshBasicMaterial color="white" opacity={0.8} />
          </mesh>

          Bienvenido el quiz de la civilizacion china, aquí serán evaluados todos tus conocimientos aprendidos sobre {categoria}.{"\n"}
          ¿Estas listo? Presiona el botón para continuar
        </Text>
      </mesh>
      <mesh ref={botonRojo} onClick={handleClickRojo} position={[8, 5, 0]} rotation={[0, Math.PI * 0.5, 0]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={"red"} />
        <Text
              fontSize={1.5}
              color="white"
              position={[0, 0, 1.6]}
              rotation={[0, 0, 0]}
            >
              >
            </Text>
      </mesh>
    </group>
  );
}
