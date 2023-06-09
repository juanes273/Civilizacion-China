import React from 'react';

function Scene2({ changeScene }) {
  const handleClick = () => {
    changeScene('sceneWelcome');
  };

  return (
    <mesh onClick={handleClick}>
      <boxBufferGeometry args={[1, 2, 0.1]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
}

export default Scene2;