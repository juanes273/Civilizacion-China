import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene1 from './Scene1';
import Scene2 from './Scene2';

function Index2() {
  const [currentScene, setCurrentScene] = useState('scene1');

  const changeScene = (scene) => {
    setCurrentScene(scene);
  };

  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {currentScene === 'scene1' && <Scene1 changeScene={changeScene} />}
      {currentScene === 'scene2' && <Scene2 changeScene={changeScene} />}
    </Canvas>
  );
}

export default Index2;