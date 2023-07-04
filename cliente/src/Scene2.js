import React from 'react';
import Plaza from './Plaza';

function Scene2({ onSceneChange }) {
  const handleClick = () => {
    onSceneChange('sceneWelcome');
  };

  return (
    <mesh onClick={handleClick}>
      <boxBufferGeometry args={[1, 2, 0.1]} />
      <meshBasicMaterial color="blue" />
      <Plaza/>
    </mesh>
  );
}

export default Scene2;