import React, { useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import Fence from './Fence';
import Caballo from './caballoTerracote1';
import Soldado from './soldadoTerracota';
import { MeshStandardMaterial } from 'three'; // Importa el material MeshStandardMaterial


export default function Plaza({changeScene}) {
  const group = useRef();
  const resize = 20
  const handleClick = () => {
    changeScene('scene1');
  };
  const PATHPP = "/static/PisoPlaza/"
  const props = useTexture({
      map: PATHPP + 'Substance_Graph_Height.jpg',
      // normalMap: PATHPP + 'Substance_Graph_BaseColor.jpg',
      // roughnessMap: PATHPP + 'Substance_Graph_Roughness.jpg',
      // aoMap: PATHPP + 'Substance_Graph_AmbientOcclusion.jpg',
      metalnessMap: PATHPP + 'Substance_Graph_Normal.jpg'
      
  })

  const PATHPP2 = "/static/PisoPlaza2/"
  const props2 = useTexture({
      map: PATHPP2 + 'Ground_Dirt_009_BaseColor.jpg',
      normalMap: PATHPP2 + 'Ground_Dirt_009_Normal.jpg',
      roughnessMap: PATHPP2 + 'Ground_Dirt_009_Roughness.jpg',
      aoMap: PATHPP2 + 'Ground_Dirt_009_AmbientOcclusion.jpg',
      metalnessMap: PATHPP2 + 'Ground_Dirt_009_Height.png'
      
  })
  

  const material = new MeshStandardMaterial({ color: "red" });  
  
  return (
    // Pisos y vallas
    <group position-x={resize*3}>
      <group>
        <mesh position={[0,-resize*0.25,0]} rotation-x={- Math.PI * 0.5} >
          <boxGeometry args={[resize,resize*5,resize*0.5]} />
          <meshStandardMaterial {...props}  />
        </mesh>
        <Fence position={[resize*0.5,1,0]} rotation={[0,Math.PI*0.5,0]} scale={[52.35,1.3,1]} />
      </group>
      <group>
        <mesh position={[resize*4.5,-resize*0.25,-resize*3]}  rotation={[Math.PI*0.5,0,Math.PI*0.5]} >
          <boxGeometry args={[resize,resize*10,resize*0.5]}  />
          <meshStandardMaterial {...props}  />
        </mesh>
        <Fence position={[resize*5,1,-resize*2.5]} rotation={[0,0,0]} scale={[94.255,1.3,1]} />
      </group>
      <group>
        <mesh position={[resize*4.5,-resize*0.25,resize*3]} rotation={[Math.PI*0.5,0,Math.PI*0.5]} >
          <boxGeometry args={[resize,resize*10,resize*0.5]}  />
          <meshStandardMaterial {...props}  />
        </mesh>
        <Fence position={[resize*5,1,resize*2.5]} rotation={[0,0,0]} scale={[94.255,1.3,1]} />
      </group>
    {/* piso inferior */}
    <group>
      <mesh position={[resize*1.75,-resize*0.5,resize*1.25]} rotation-x={- Math.PI * 0.5}>
        {/* <boxGeometry args={[resize*9,resize*5,0.01]} /> */}
        <boxGeometry args={[resize*2.5,resize*2.5,0.01]} />
        <meshStandardMaterial {...props2}/>
      </mesh>
      <mesh position={[resize*1.75,-resize*0.5,-resize*1.25]} rotation-x={- Math.PI * 0.5}>
        {/* <boxGeometry args={[resize*9,resize*5,0.01]} /> */}
        <boxGeometry args={[resize*2.5,resize*2.5,0.01]} />
        <meshStandardMaterial {...props2}/>
      </mesh>
    </group>
    <group position-x={resize*2.5}>
      <mesh position={[resize*1.75,-resize*0.5,resize*1.25]} rotation-x={- Math.PI * 0.5}>
        {/* <boxGeometry args={[resize*9,resize*5,0.01]} /> */}
        <boxGeometry args={[resize*2.5,resize*2.5,0.01]} />
        <meshStandardMaterial {...props2}/>
      </mesh>
      <mesh position={[resize*1.75,-resize*0.5,-resize*1.25]} rotation-x={- Math.PI * 0.5}>
        {/* <boxGeometry args={[resize*9,resize*5,0.01]} /> */}
        <boxGeometry args={[resize*2.5,resize*2.5,0.01]} />
        <meshStandardMaterial {...props2}/>
      </mesh>
    </group>
    <group position-x={resize*5}>
      <mesh position={[resize*1.75,-resize*0.5,resize*1.25]} rotation-x={- Math.PI * 0.5}>
        {/* <boxGeometry args={[resize*9,resize*5,0.01]} /> */}
        <boxGeometry args={[resize*2.5,resize*2.5,0.01]} />
        <meshStandardMaterial {...props2}/>
      </mesh>
      <mesh position={[resize*1.75,-resize*0.5,-resize*1.25]} rotation-x={- Math.PI * 0.5}>
        {/* <boxGeometry args={[resize*9,resize*5,0.01]} /> */}
        <boxGeometry args={[resize*2.5,resize*2.5,0.01]} />
        <meshStandardMaterial {...props2}/>
      </mesh>
    </group>
    <group position-x={resize*7.5}>
      <mesh position={[resize*1.75,-resize*0.5,resize*1.25]} rotation-x={- Math.PI * 0.5}>
        {/* <boxGeometry args={[resize*9,resize*5,0.01]} /> */}
        <boxGeometry args={[resize*2.5,resize*2.5,0.01]} />
        <meshStandardMaterial {...props2}/>
      </mesh>
      <mesh position={[resize*1.75,-resize*0.5,-resize*1.25]} rotation-x={- Math.PI * 0.5}>
        {/* <boxGeometry args={[resize*9,resize*5,0.01]} /> */}
        <boxGeometry args={[resize*2.5,resize*2.5,0.01]} />
        <meshStandardMaterial {...props2}/>
      </mesh>
    </group>
    {/* paredes lado  bienvenida  */}
    <mesh position={[-resize*0.5,resize * 0.25,resize*2 ]} rotation={[0,Math.PI*0.5,0]} >
        <boxGeometry args={[resize*3,resize*0.5,0.01]} />
        <meshStandardMaterial color={"yellow"} />
    </mesh>
    <mesh position={[-resize*0.5,resize * 0.25,-resize*2 ]} rotation={[0,Math.PI*0.5,0]} >
        <boxGeometry args={[resize*3,resize*0.5,0.01]} />
        <meshStandardMaterial color={"yellow"} />
    </mesh>
    {/* paredes lado izquierda con "puertas" */}
    <mesh position={[resize*0.5,resize * 0.25,-resize*3.5 ]} rotation={[0,0,0]} >
        <boxGeometry args={[resize*2,resize*0.5,0.01]} />
        <meshStandardMaterial color={"gray"} />
    </mesh>
    <mesh position={[resize*1.7,resize * 0.25,-resize*3.5 ]} rotation={[0,0,0]} >
        <boxGeometry args={[resize*0.4,resize*0.5,0.01]} />
        <meshStandardMaterial color={"green"} />
    </mesh>
    {/*  */}
    <group position-x={resize*2.4}>
      <mesh position={[resize*0.5,resize * 0.25,-resize*3.5 ]} rotation={[0,0,0]} >
          <boxGeometry args={[resize*2,resize*0.5,0.01]} />
          <meshStandardMaterial color={"gray"} />
      </mesh>
      <mesh position={[resize*1.7,resize * 0.25,-resize*3.5 ]} rotation={[0,0,0]} >
          <boxGeometry args={[resize*0.4,resize*0.5,0.01]} />
          <meshStandardMaterial color={"green"} />
      </mesh>
    </group>
    {/*  */}
    <group position-x={resize*4.8}>
      <mesh position={[resize*0.5,resize * 0.25,-resize*3.5 ]} rotation={[0,0,0]} >
          <boxGeometry args={[resize*2,resize*0.5,0.01]} />
          <meshStandardMaterial color={"gray"} />
      </mesh>
      <mesh position={[resize*1.7,resize * 0.25,-resize*3.5 ]} rotation={[0,0,0]} >
          <boxGeometry args={[resize*0.4,resize*0.5,0.01]} />
          <meshStandardMaterial color={"green"} />
      </mesh>
    </group>
    {/*  */}
    <group position-x={resize*7.2}>
      <mesh position={[resize*0.5,resize * 0.25,-resize*3.5 ]} rotation={[0,0,0]} >
          <boxGeometry args={[resize*2,resize*0.5,0.01]} />
          <meshStandardMaterial color={"gray"} />
      </mesh>
      <mesh position={[resize*1.7,resize * 0.25,-resize*3.5 ]} rotation={[0,0,0]} >
          <boxGeometry args={[resize*0.4,resize*0.5,0.01]} />
          <meshStandardMaterial color={"green"} />
      </mesh>
    </group>
    <mesh position={[resize*9.3,resize * 0.25,-resize*3.5 ]} rotation={[0,0,0]} >
        <boxGeometry args={[resize*0.4,resize*0.5,0.01]} />
        <meshStandardMaterial color={"gray"} />
    </mesh>
    {/* Paredes y puertas lado derecho */}
    <mesh position={[resize*0.5,resize * 0.25,resize*3.5 ]} rotation={[0,0,0]} >
        <boxGeometry args={[resize*2,resize*0.5,0.01]} />
        <meshStandardMaterial color={"gray"} />
    </mesh>
    <mesh position={[resize*1.7,resize * 0.25,resize*3.5 ]} rotation={[0,0,0]} >
        <boxGeometry args={[resize*0.4,resize*0.5,0.01]} />
        <meshStandardMaterial color={"green"} />
    </mesh>
    {/*  */}
    <group position-x={resize*2.4}>
      <mesh position={[resize*0.5,resize * 0.25,resize*3.5 ]} rotation={[0,0,0]} >
          <boxGeometry args={[resize*2,resize*0.5,0.01]} />
          <meshStandardMaterial color={"gray"} />
      </mesh>
      <mesh position={[resize*1.7,resize * 0.25,resize*3.5 ]} rotation={[0,0,0]} >
          <boxGeometry args={[resize*0.4,resize*0.5,0.01]} />
          <meshStandardMaterial color={"green"} />
      </mesh>
    </group>
    {/*  */}
    <group position-x={resize*4.8}>
      <mesh position={[resize*0.5,resize * 0.25,resize*3.5 ]} rotation={[0,0,0]} >
          <boxGeometry args={[resize*2,resize*0.5,0.01]} />
          <meshStandardMaterial color={"gray"} />
      </mesh>
      <mesh position={[resize*1.7,resize * 0.25,resize*3.5 ]} rotation={[0,0,0]} >
          <boxGeometry args={[resize*0.4,resize*0.5,0.01]} />
          <meshStandardMaterial color={"green"} />
      </mesh>
    </group>
    {/*  */}
    <group position-x={resize*7.2}>
      <mesh position={[resize*0.5,resize * 0.25,resize*3.5 ]} rotation={[0,0,0]} >
          <boxGeometry args={[resize*2,resize*0.5,0.01]} />
          <meshStandardMaterial color={"gray"} />
      </mesh>
      <mesh position={[resize*1.7,resize * 0.25,resize*3.5 ]} rotation={[0,0,0]} >
          <boxGeometry args={[resize*0.4,resize*0.5,0.01]} />
          <meshStandardMaterial color={"green"} />
      </mesh>
    </group>
    <mesh position={[resize*9.3,resize * 0.25,resize*3.5 ]} rotation={[0,0,0]} >
        <boxGeometry args={[resize*0.4,resize*0.5,0.01]} />
        <meshStandardMaterial color={"gray"} />
    </mesh>
    {/* pared atras */}
    <mesh position={[resize*9.5,0,0 ]} rotation={[0,Math.PI*0.5,0]} >
        <boxGeometry args={[resize*7,resize,0.01]} />
        <meshStandardMaterial color={"yellow"} />
    </mesh>
    <mesh onClick={handleClick}>
      <boxBufferGeometry args={[1, 2, 0.1]} />
      <meshBasicMaterial color="green" />
    </mesh>
    {/* estatuas */}
    {/* fila 1 */}
    <group>
    <Caballo position={[30,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[29,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[50,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[49,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[70,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[69,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>
    
    <Caballo position={[90,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[89,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[110,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[109,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[130,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[129,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[150,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[149,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[170,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[169,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>
    </group>

    {/* fila 2 */}
    <group position={[0,0,25]}>
    <Caballo position={[30,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[29,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[50,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[49,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[70,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[69,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>
    
    <Caballo position={[90,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[89,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[110,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[109,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[130,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[129,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[150,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[149,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[170,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[169,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>
    </group>

    {/* fila 3 */}
    <group position={[0,0,45]}>
    <Caballo position={[30,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[29,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[50,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[49,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[70,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[69,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>
    
    <Caballo position={[90,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[89,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[110,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[109,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[130,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[129,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[150,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[149,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[170,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[169,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>
    </group>

    {/* fila 4 */}
    <group position={[0,0,65]}>
    <Caballo position={[30,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[29,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[50,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[49,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[70,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[69,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>
    
    <Caballo position={[90,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[89,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[110,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[109,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[130,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[129,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[150,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[149,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>

    <Caballo position={[170,-resize*0.38,-55]} scale={2} rotation={[0,Math.PI,0]} />
    <Soldado position={[169,-8.2,-32]} scale={30} rotation={[0,Math.PI,0]}/>
    </group>
        
    

      
      
    
    </group>
  );
}

