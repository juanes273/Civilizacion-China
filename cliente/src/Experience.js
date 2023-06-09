import { PointerLockControls, Sky } from '@react-three/drei';
import { useFrame, useThree, useEventListener } from "@react-three/fiber";
import { Perf } from 'r3f-perf';
import Model from './Model';
import TerracotaSoldier from './TerracotaSoldier';
import Welcome from './Welcome';
import Plaza from './Plaza';
import React, { useState, useRef, useEffect } from 'react';
import { handleKeyDown, handleKeyUp, updateCameraMovement } from './cameraControls';


export default function Experience(props) {
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

  return (
    <>
      <Perf position="top-left" />

      <PointerLockControls ref={controlsRef} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Sky/>
      <Welcome changeScene={props.changeScene} />
    </>
  );
}
