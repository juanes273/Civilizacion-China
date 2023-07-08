import React from "react";
import styled from "styled-components";
import backgroundImage from "./background.jpg";
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import TerracotaSoldier from './TerracotaSoldier';
import { useContext } from 'react';
import { AuthContext } from './authContext';

function Principal() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, username, setIsLoggedIn } = useContext(AuthContext);

  const handleClick = () => {
    // Redirecciona al componente deseado
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
  };


  return (
    <Wrapper>
      <Background src={backgroundImage} alt="background" />
      <Navbar>
        <NavLogo href="/">Logo</NavLogo>
        <NavLinks>
          <StyledNavLink exact="True" to="/">Inicio</StyledNavLink>
          <StyledNavLink to="/tour">Tour</StyledNavLink>
          {isLoggedIn ? (
            <StyledNavLink to="/principal" onClick={handleLogout}>Logout {username}</StyledNavLink>
          ) : (
            <StyledNavLink to="/login">Login</StyledNavLink>
          )}
        </NavLinks>
      </Navbar>
      <Title>La gran Muralla china</Title>
      <Description>Descubre de manera inmersiva esta maravilla</Description>
      <Container>
        <ModelViewer
          src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
          alt="Astronaut Model"
          camera-controls
          auto-rotate
          ar
          ar-modes="webxr scene-viewer quick-look"
          shadow-intensity="1"
          exposure="1"
        />
        <HighlightBox>
          <Paragraph>
            La Gran Muralla China es una impresionante obra arquitectónica que se extiende a lo largo de miles de kilómetros en el norte de China. Construida durante varias dinastías chinas a lo largo de varios siglos, esta majestuosa estructura defensiva es un testimonio del ingenio y la habilidad humana.

            La Muralla China fue diseñada originalmente para proteger el territorio chino de las invasiones y ataques de las tribus nómadas del norte. Con una altura que varía entre los 5 y 8 metros y una anchura suficiente para permitir que varios soldados marchen en formación, la muralla estaba equipada con torres de vigilancia estratégicamente ubicadas que permitían una amplia visibilidad y comunicación a lo largo de su extensión.

            Esta maravilla arquitectónica no solo cumplía una función militar, sino que también servía como un símbolo de la grandeza y la determinación del antiguo imperio chino. Además de su propósito defensivo, la Muralla China también facilitaba el control del comercio y las comunicaciones a lo largo de la antigua Ruta de la Seda.

            Hoy en día, la Gran Muralla China sigue siendo uno de los destinos turísticos más famosos del mundo, atrayendo a millones de visitantes cada año. Su belleza impresionante, su historia cautivadora y su importancia cultural la convierten en un lugar emblemático que refleja la grandeza y el legado de la antigua civilización china.
          </Paragraph>
        </HighlightBox>
      </Container>
      <StyledButton to="/tour">
        Ir a tour 3D
      </StyledButton>
    </Wrapper>
  );
}

// Estilos

const HighlightBox = styled.div`
  background-color: white;
  padding: 20px;
  margin: 20px 0;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  padding-top: 0px;
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
  color: black;
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

const Navbar = styled.nav`
  background-color: #333;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
`;

const NavLogo = styled.a`
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  cursor: pointer;
`;

const StyledNavLink = styled(NavLink)`
  margin-right: 20px;
  color: white;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;

export default Principal;
