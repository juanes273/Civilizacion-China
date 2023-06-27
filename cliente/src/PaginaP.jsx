import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Index2 from "./index2";

import backgroundImage from "./background.jpg";

// Componente Principal
function Principal() {
  return (
    <Wrapper>
      <Background src={backgroundImage} alt="background" />
      <Title>La gran Muralla china</Title>
      <Description>Descubre de manera inmersiva esta maravilla</Description>
      <Container>
        <ModelViewer>
          {/* Aquí puedes insertar tu código para cargar y mostrar el modelo .glb */}
        </ModelViewer>
        <Paragraph>
          La Gran Muralla China es una impresionante obra arquitectónica que se extiende a lo largo de miles de kilómetros en el norte de China. Construida durante varias dinastías chinas a lo largo de varios siglos, esta majestuosa estructura defensiva es un testimonio del ingenio y la habilidad humana.

La Muralla China fue diseñada originalmente para proteger el territorio chino de las invasiones y ataques de las tribus nómadas del norte. Con una altura que varía entre los 5 y 8 metros y una anchura suficiente para permitir que varios soldados marchen en formación, la muralla estaba equipada con torres de vigilancia estratégicamente ubicadas que permitían una amplia visibilidad y comunicación a lo largo de su extensión.

Esta maravilla arquitectónica no solo cumplía una función militar, sino que también servía como un símbolo de la grandeza y la determinación del antiguo imperio chino. Además de su propósito defensivo, la Muralla China también facilitaba el control del comercio y las comunicaciones a lo largo de la antigua Ruta de la Seda.

Hoy en día, la Gran Muralla China sigue siendo uno de los destinos turísticos más famosos del mundo, atrayendo a millones de visitantes cada año. Su belleza impresionante, su historia cautivadora y su importancia cultural la convierten en un lugar emblemático que refleja la grandeza y el legado de la antigua civilización china.
        </Paragraph>
      </Container>
      <StyledButton to="/otrocomponente">Ir a tour 3D</StyledButton>
    </Wrapper>
  );
}

// Estilos
const Wrapper = styled.div`
  padding-top: 150px;
  display: grid;
  justify-items: center;
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Description = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: -1;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  margin-top: 40px;
`;

const ModelViewer = styled.div`
  /* Estilos para el contenedor del modelo .glb */
`;

const Paragraph = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

// Componente de enrutamiento
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/otrocomponente" element={<Index2 />} />
      </Routes>
    </Router>
  );
}

export default App;
