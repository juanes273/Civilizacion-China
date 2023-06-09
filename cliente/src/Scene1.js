import { handleKeyDown, handleKeyUp, updateCameraMovement } from './cameraControls';
import React, { useState, useRef, useEffect } from 'react';
import { PointerLockControls, Sky } from '@react-three/drei';
import { useFrame, useThree, useEventListener } from "@react-three/fiber";
import { Perf } from 'r3f-perf';

function Scene1({ changeScene }) {
  const handleClick = () => {
    changeScene('sceneWelcome');
  };

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

    <mesh onClick={handleClick}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="red" />
    </mesh>
    </>
  );
}

export default Scene1;

