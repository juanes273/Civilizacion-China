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
      <Title>Civilizacion antigua china</Title>
      <Description>Descubre de manera inmersiva esta cultura</Description>
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