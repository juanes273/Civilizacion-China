import React from 'react';

function Scene1({ changeScene }) {
  const handleClick = () => {
    changeScene('sceneWelcome');
  };

  return (
    <mesh onClick={handleClick}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}

export default Scene1;

