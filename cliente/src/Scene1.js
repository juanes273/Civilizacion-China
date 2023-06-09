import React from 'react';

function Scene1({ changeScene }) {
  const handleClick = () => {
    changeScene('scene2');
  };

  return (
    <mesh onClick={handleClick}>
      <boxBufferGeometry args={[1, 2, 0.1]} />
      <meshBasicMaterial color="green" />
    </mesh>
  );
}

export default Scene1;
