import React from 'react';
import Plaza from './Plaza';

function Scene2({ changeScene }) {
  const handleClick = () => {
    changeScene('sceneWelcome');
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