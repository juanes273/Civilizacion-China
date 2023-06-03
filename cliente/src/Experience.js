import { PointerLockControls } from '@react-three/drei';
import { useFrame, useThree, useEventListener } from "@react-three/fiber";
import { Perf } from 'r3f-perf';
import Model from './Model';
import TerracotaSoldier from './TerracotaSoldier';
import Welcome from './Welcome';
import Plaza from './Plaza';
import React, { useState, useRef, useEffect } from 'react';

export default function Experience() {
  const controlsRef = useRef(null);
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up:false,
    down: false
  });
  const velocidad = 0.5

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "w") setMovement((prev) => ({ ...prev, forward: true }));
      if (event.key === "s") setMovement((prev) => ({ ...prev, backward: true }));
      if (event.key === "a") setMovement((prev) => ({ ...prev, left: true }));
      if (event.key === "d") setMovement((prev) => ({ ...prev, right: true }));
      if (event.key === " ") setMovement((prev) => ({ ...prev, up: true }));
      if (event.key === "Shift") setMovement((prev) => ({ ...prev, down: true }));
    };

    const handleKeyUp = (event) => {
      if (event.key === "w") setMovement((prev) => ({ ...prev, forward: false }));
      if (event.key === "s") setMovement((prev) => ({ ...prev, backward: false }));
      if (event.key === "a") setMovement((prev) => ({ ...prev, left: false }));
      if (event.key === "d") setMovement((prev) => ({ ...prev, right: false }));
      if (event.key === " ") setMovement((prev) => ({ ...prev, up: false }));
      if (event.key === "Shift") setMovement((prev) => ({ ...prev, down: false }));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const { camera } = useThree();

  useFrame(() => {
    const { forward, backward, left, right, up,down } = movement;

    // if (forward) controlsRef.current.moveForward(velocidad);
    // if (backward) controlsRef.current.moveForward(-velocidad);
    // if (left) controlsRef.current.moveRight(-velocidad);
    // if (right) controlsRef.current.moveRight(velocidad);
    if (forward) camera.translateZ(-0.5);
    if (backward) camera.translateZ(0.5);
    if (left) camera.translateX(-0.5);
    if (right) camera.translateX(0.5);
    if (up) camera.translateY(0.5);
    if (down) camera.translateY(-0.5);
  });

  return (
    <>
      <Perf position="top-left" />

      <PointerLockControls ref={controlsRef} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Welcome/>
      <Plaza/>

    </>
  );
}
