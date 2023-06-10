import { handleKeyDown, handleKeyUp, updateCameraMovement } from './cameraControls';
import React, { useState, useRef, useEffect } from 'react';
import { PointerLockControls, Sky } from '@react-three/drei';
import { useFrame, useThree, useEventListener } from "@react-three/fiber";
import { Perf } from 'r3f-perf';

function Scene1({ changeScene }) {
  const handleClick = () => {
    changeScene('sceneWelcome');
  };

  return (
    <>
    <mesh onClick={handleClick}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="red" />
    </mesh>
    </>
  );
}

export default Scene1;

