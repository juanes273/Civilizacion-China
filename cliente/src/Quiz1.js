import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "react-three-fiber";
import { TextureLoader, Vector3 } from "three";
import { Text } from '@react-three/drei';
import Estrella from './Estrella';
import { shuffle } from 'lodash';
import { AuthContext } from "./authContext";
import { useContext } from "react";

const textureLoader = new TextureLoader();
const pared = textureLoader.load("/static/Wall/Wood_Wall_002_SD/Wood_Wall_002_basecolor.jpg");
const piso = textureLoader.load("/static/Floor/Tatami_001_SD/Tatami_001_basecolor.jpg");
const techo = textureLoader.load("/static/Wall/Wood_Wall_002_SD/Stylized_Thatched_Roof_002_basecolor.jpg");

export default function Quiz1({ onSceneChange }) {
  const { categoria } = useContext(AuthContext);
  const { camera } = useThree();
  const group = useRef();
  const botonA = useRef();
  const botonB = useRef();
  const botonC = useRef();
  const estrellaRef = useRef();
  const botonBack = useRef();
  const resize = 30;
  const [buleanQui1, setBuleanQui1] = useState(true)
  const target = new Vector3(0, 13, 0);
  if (buleanQui1) {
    camera.position.x = 50;
    camera.position.y = 14;
    camera.position.z = 0;
    camera.lookAt(target)
    setBuleanQui1(false)
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const [estrellaPosition, setEstrellaPosition] = useState(0);
  const [texts, setTexts] = useState(() => {
    if (categoria == "historia") {
      const shuffledTexts = shuffle([
        ["¿Cuál fue el período de la dinastía en la que se estableció el sistema político del 'Mandato del Cielo' en China?", ["Dinastía Qin", "Dinastía Zhou ", "Dinastía Han"], botonB],

        ["Durante las dinastías Han, Tang y Song en China, ¿qué importante red comercial se estableció, conectando China con el Medio Oriente y Europa?", ["Ruta de la Seda", "Ruta del Té", "Ruta del Marfil"], botonA],

        ["¿Cuál fue el propósito principal de la creación de los soldados de Terracota en China?", ["Realizar exhibiciones artísticas en la antigua China", "Proteger al primer emperador de China en su vida después de la muerte.", "Conquistar territorios extranjeros en nombre del imperio chino."], botonB],

        ["¿En qué año se descubrieron los soldados de Terracota en Xi'an, China?", ["1988", "2001", "1974"], botonC],
      ]);
      shuffledTexts.splice(5, 0, ["¡Has respondido correctamente todas las preguntas!\n\n\n Mira atras"]);
      return shuffledTexts.slice(0, 6);
    } else if (categoria == "cultura") {
      const shuffledTexts = shuffle([
        ["¿Cuál de los siguientes instrumentos musicales tradicionales era ampliamente utilizado en la antigua cultura china?", ["Violín", "Pipa", "Saxofón"], botonB],

        ["¿Cuál de las siguientes formas de arte era considerada una habilidad esencial para los eruditos en la antigua China?", ["Escultura en madera", "Caligrafía", "Cerámica"], botonB],

        ["¿Qué concepto filosófico chino sostenía que el equilibrio y la armonía se encontraban en la conexión con la naturaleza?", ["Taoísmo", "Estoicismo", "Nihilismo"], botonA],

        ["¿Cuál de las siguientes filosofías tuvo una gran influencia en la sociedad china antigua y enfatizaba la importancia de la ética y la moralidad?", ["Hedonismo", "Existencialismo", "Confucianismo"], botonC],

      ]);
      shuffledTexts.splice(5, 0, ["¡Has respondido correctamente todas las preguntas!\n\n\n Mira atras"]);
      return shuffledTexts.slice(0, 6);
    } else if (categoria == "religion") {
      const shuffledTexts = shuffle([
        ["¿Cuál es la traducción del término 'Tao' en el taoísmo?", ["La Compasión", "La Iluminación", "El Camino"], botonC],
        ["¿Cuál de las siguientes prácticas es parte integral de la tradición taoísta?", ["Meditación", "Ayuno", "Yoga"], botonA],
        ["¿Quién es el fundador del budismo?", ["Buda", "Confucio", "Laozi"], botonA],
        ["¿Cuál de las siguientes enseñanzas budistas busca alcanzar la liberación del sufrimiento?", ["Las Cuatro Nobles Verdades", "Los Diez Mandamientos", "El Tao Te Ching"], botonA],
      ]);
      shuffledTexts.splice(5, 0, ["¡Has respondido correctamente todas las preguntas!\n\n\n Mira atras"]);
      return shuffledTexts.slice(0, 6);
    } else if (categoria == "ciencia") {
      const shuffledTexts = shuffle([
        ["¿Qué invención china revolucionó la escritura y la difusión del conocimiento en todo el mundo?", ["La brújula magnética", "El papel", "La pólvora"], botonB],
        ["¿Qué práctica de la medicina tradicional china ha demostrado efectividad en ciertos trastornos y afecciones?", ["Acupuntura", "Aromaterapia", "Homeopatía"], botonA],
        ["¿Qué aplicación inicial tenía la pólvora en la antigua China?", ["Uso militar", "Uso médico", "Uso pirotécnico y ceremonial"], botonC],
        ["¿Qué impacto tuvo la introducción de la pólvora en la guerra?", ["No tuvo un impacto significativo", "Fue utilizada solo en festividades y celebraciones", "Revolucionó los métodos de combate"], botonC],
      ]);
      shuffledTexts.splice(5, 0, ["¡Has respondido correctamente todas las preguntas!\n\n\n Mira atras"]);
      return shuffledTexts.slice(0, 6);
    }
  });



  const handleClick = (ref) => {
    console.log(texts)
    // console.log(texts[currentIndex][1])
    ref.current.position.x = 7
    setTimeout(() => {
      ref.current.position.x = 8;
      setTimeout(() => {
        if (ref == texts[currentIndex][2]) {
          setCurrentIndex((prevIndex) => (prevIndex + 1));
          camera.position.x = 50;
          camera.position.y = 14;
          camera.position.z = 0;
        } else {
          onSceneChange('quiz');
        }

        // console.log("Animación del botón completada después de 2 segundos");
      }, 200);
    }, 200);
  };
  const handleClickBack = () => {
    botonBack.current.position.x = 7
    setTimeout(() => {
      botonBack.current.position.x = 8;
      onSceneChange('welcome');
    }, 200);
  };
  const handleClick1 = () => {
    // boton.current.position.x = 7
    setTimeout(() => {
      // boton.current.position.x = 8;
      setTimeout(() => {
        onSceneChange('welcome');
        // console.log("Animación del botón completada después de 2 segundos");
      }, 200);
    }, 200);
  };
  useFrame((_, delta) => {
    if (estrellaRef.current) {
      estrellaRef.current.rotation.y += 0.1; // Adjust the rotation speed as desired
    }
  });
  //   useEffect(() => {
  //     console.log(currentIndex)

  //     // Opcional: Función de limpieza
  //     return () => {
  //       // Código de limpieza (opcional)
  //     };
  //   });

  const goBack = () => {
    window.history.back();
  };

  return (
    <group>
      <mesh position-y={0} position-x={resize * 1.75} rotation-x={-Math.PI * 0.5}>
        <boxGeometry args={[resize * 3, resize * 2.5, 0.01]} />
        <meshStandardMaterial map={piso} />
      </mesh>
      <mesh position-y={resize * 0.5} position-x={resize * 0.25} rotation-y={Math.PI * 0.5}>
        <boxGeometry args={[resize * 2.5, resize, 0.01]} />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position-y={resize * 0.5} position-x={resize * 3.25} rotation-y={Math.PI * 0.5}>
        <boxGeometry args={[resize * 2.5, resize * 2, 0.01]} />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position-x={resize} position-y={resize * 0.5} position-z={resize * 1.25} rotation-x={-Math.PI}>
        <boxGeometry args={[resize * 1.5, resize * 2, 0.01]} />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position-x={resize} position-y={resize * 0.5} position-z={-resize * 1.25} rotation-x={-Math.PI}>
        <boxGeometry args={[resize * 1.5, resize * 2, 0.01]} />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position-x={resize * 2.5} position-y={resize * 0.5} position-z={resize * 1.25} rotation-x={-Math.PI}>
        <boxGeometry args={[resize * 1.5, resize * 2, 0.01]} />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position-x={resize * 2.5} position-y={resize * 0.5} position-z={-resize * 1.25} rotation-x={-Math.PI}>
        <boxGeometry args={[resize * 1.5, resize * 2, 0.01]} />
        <meshStandardMaterial map={pared} />
      </mesh>
      <mesh position-y={resize * 1.27} position-x={resize} rotation-x={- Math.PI * 0.5} >
        <boxGeometry args={[resize * 1.5, resize * 2.5, 0.01]} />
        <meshStandardMaterial map={techo} />
      </mesh>
      <mesh position-y={resize * 1.27} position-x={resize * 2.5} rotation-x={- Math.PI * 0.5} >
        <boxGeometry args={[resize * 1.5, resize * 2.5, 0.01]} />
        <meshStandardMaterial map={techo} />
      </mesh>
      <mesh ref={botonBack} onClick={handleClickBack} position={[8, 5, -30]} rotation={[0, Math.PI * 0.5, 0]}>
        <boxGeometry args={[7, 3, 2]} />
        <meshStandardMaterial color={"pink"} />
        <Text
          fontSize={1.5}
          color="black"
          position={[0, 0, 1.01]}
          rotation={[0, 0, 0]}
        >
          Regresar
        </Text>
      </mesh>
      <mesh position={[8, 10, 0]}>
        {currentIndex != 4 && (
          <Text fontSize={2} color="black" position-y={8} maxWidth={50} textAlign="left" lineHeight={1.5} rotation={[0, Math.PI * 0.5, 0]}>
            <mesh position={[-2, 0, -0.1]}>
              <boxGeometry args={[80, 40, 0.01]} />
              <meshBasicMaterial color="white" opacity={0.8} />
            </mesh>

            {texts[currentIndex][0]}{"\n"}{"\n"}
            a. {texts[currentIndex][1][0]}{"\n"}
            b. {texts[currentIndex][1][1]}{"\n"}
            c. {texts[currentIndex][1][2]}{"\n"}

          </Text>
        )}
        {currentIndex === 4 && (
          <Text fontSize={2} color="black" position-y={8} maxWidth={50} textAlign="left" lineHeight={1.5} rotation={[0, Math.PI * 0.5, 0]}>
            <mesh position={[0, 0, -0.01]}>
              <boxGeometry args={[80, 40, 0.01]} />
              <meshBasicMaterial color="white" opacity={0.8} />
            </mesh>

            {texts[currentIndex][0]}{"\n"}{"\n"}

          </Text>
        )}

      </mesh>
      {currentIndex !== 4 && (
        <mesh>
          <mesh ref={botonA} onClick={() => handleClick(botonA)} position={[8, 5, 10]} rotation={[0, Math.PI * 0.5, 0]}>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color={"blue"} />
            <Text
              fontSize={1.5}
              color="white"
              position={[0, 0, 1.6]}
              rotation={[0, 0, 0]}
            >
              a
            </Text>
          </mesh>
          <mesh ref={botonB} onClick={() => handleClick(botonB)} position={[8, 5, 0]} rotation={[0, Math.PI * 0.5, 0]}>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color={"red"} />
            <Text
              fontSize={1.5}
              color="white"
              position={[0, 0, 1.6]}
              rotation={[0, 0, 0]}
            >
              b
            </Text>
          </mesh>
          <mesh ref={botonC} onClick={() => handleClick(botonC)} position={[8, 5, -10]} rotation={[0, Math.PI * 0.5, 0]}>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color={"green"} />
            <Text
              fontSize={1.5}
              color="white"
              position={[0, 0, 1.6]}
              rotation={[0, 0, 0]}
            >
              c
            </Text>
          </mesh>
        </mesh>
      )}

      {currentIndex === 4 && (
        <mesh>
          <Text fontSize={2} color="black" position={[97, 22, 0]} maxWidth={35} textAlign="center" rotation={[0, -Math.PI * 0.5, 0]}>
            <mesh position={[0, 0, -0.01]}>
              <boxGeometry args={[40, 15, 0.01]} />
              <meshBasicMaterial color="white" opacity={0.8} />
            </mesh>
            Dale click a la estrella para regresar al inicio
          </Text>
          <mesh onClick={goBack} scale={0.03} position={[90, 3, 0]} ref={estrellaRef}>
            <Estrella />
          </mesh>
        </mesh>

      )}
    </group>
  );
}
