import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from 'styled-components';
import Index2 from "./index2";
import backgroundImage1 from "./background1.jpg"
import backgroundImage2 from "./backgroundhome.jpg"
import { render } from "@react-three/fiber";
import logo from "./assets/img/logo.png"

// Componente Principal
function Tourtemas() {
  const Container = styled.div`
    display: flex;
    height: 100vh;
  `;

  const Block = styled(Link)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    position: relative;
    text-decoration: none;
    color: inherit;

    &:hover::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
    }
  `;

  const H1 = styled.button`
    padding: 16px;
    font-size: 35px;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    background-color: transparent;
    color: #fff;
    font-weight: bold;
    
    font-family: "Montserrat",sans-serif;
    
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
  `;

 
  return (
    <Container>
      <Block to="/historia"  backgroundImage={backgroundImage1}>
        <StyledLink >
          <H1>Historia</H1>
        </StyledLink>
      </Block>
      <Block to="/cultura" backgroundImage={backgroundImage2}>
        <StyledLink >
          <H1>Cultura</H1>
        </StyledLink>
      </Block>
      <Block  to="/religion" backgroundImage={backgroundImage1}>
        <StyledLink>
          <H1>Religion</H1>
        </StyledLink>
      </Block>
      <Block to="/ciencia" backgroundImage={backgroundImage2}>
        <StyledLink >
          <H1>Ciencia</H1>
        </StyledLink>
      </Block>
    </Container>
  );
}








export default Tourtemas;
