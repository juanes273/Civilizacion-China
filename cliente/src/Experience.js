import { PointerLockControls, Sky } from '@react-three/drei';
import { useFrame, useThree } from "@react-three/fiber";
import { Perf } from 'r3f-perf';
import React, { useState, useRef, useEffect } from 'react';
import { handleKeyDown, handleKeyUp, updateCameraMovement } from './cameraControls';
import Scene1 from './Scene1';
import Scene2 from './Scene2';
import Quiz from './Quiz';
import Quiz1 from './Quiz1';
import { useHelper } from '@react-three/drei';
import { DirectionalLightHelper } from 'three';
import { PerspectiveCamera } from 'three';
import { Html } from '@react-three/drei';

export default function Experience() {

  const Point = () => {
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    return (
      <mesh position={[0, 0, -10]}>
        <circleBufferGeometry args={[0.02 / aspect, 8]} />
        <meshBasicMaterial color="black" />
      </mesh>
    );
  };

  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper, 1);
  const controlsRef = useRef(null);
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false
  });
  const velocidad = 0.5;
  const [currentScene, setCurrentScene] = useState("quiz");

  useEffect(() => {
    const handleKeyDownEvent = (event) => handleKeyDown(event, setMovement);
    const handleKeyUpEvent = (event) => handleKeyUp(event, setMovement);

    document.addEventListener("keydown", handleKeyDownEvent);
    document.addEventListener("keyup", handleKeyUpEvent);

    return () => {
      document.removeEventListener("keydown", handleKeyDownEvent);
      document.removeEventListener("keyup", handleKeyUpEvent);
    };
  }, []);

  const { camera } = useThree();

  useFrame(() => {
    updateCameraMovement(movement, camera);
  });

  const handleSceneChange = (scene) => {
    setCurrentScene(scene);
  };

  let sceneComponent;






  if (currentScene === "welcome") {
    sceneComponent = <Welcome onSceneChange={handleSceneChange} />;
  } else if (currentScene === "quiz") {
    sceneComponent = <Quiz onSceneChange={handleSceneChange} />;
  } else if (currentScene === "quiz1") {
    sceneComponent = <Quiz1 onSceneChange={handleSceneChange} />;
  }

  return (
    <>

      <Html center>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            width: '2px',
            height: '20px',
            backgroundColor: 'red',
          }} />
          <div style={{
            width: '20px',
            height: '2px',
            backgroundColor: 'red',
          }} />
        </div>
      </Html>
      <PointerLockControls ref={controlsRef} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Sky />

      {sceneComponent}
    </>
  );
}