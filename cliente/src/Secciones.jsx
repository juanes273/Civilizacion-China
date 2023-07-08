import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import backgroundImage1 from "./categoria_historia.jpg"
import backgroundImage2 from "./backgroundhome.jpg"
import backgroundImage3 from "./categoria_cultura.jpg"
import backgroundImage4 from "./categoria_religion.jpg"
import backgroundImage5 from "./categoria_ciencia.jpg"
import botonimagen from "./boton_atras.png"

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

  const H1 = styled.h1`
    padding: 16px;
    font-size: 45px;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    border-radius: 20px;
    background-color: transparent;
    color: black;
  `;

  const StickyButton = styled.button`
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 10px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-image: url(${botonimagen});
    z-index: 999;
    background-size: cover;
    background-repeat: no-repeat;
  `;

  return (
    <Container>
      <Block to="/historia" backgroundImage={backgroundImage1}>
        <H1>Historia</H1>
      </Block>
      <Block to="/cultura" backgroundImage={backgroundImage3}>
        <H1>Cultura</H1>
      </Block>
      <Block to="/religion" backgroundImage={backgroundImage4}>
        <H1>Religion</H1>
      </Block>
      <Block to="/ciencia" backgroundImage={backgroundImage5}>
        <H1>Ciencia</H1>
      </Block>
      <Link to="/" style={{ position: "fixed", top: "20px", right: "20px" }}>
        <StickyButton></StickyButton>
      </Link>
    </Container>
  );
}

export default Tourtemas;
