import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import Index2 from "./index2";
import backgroundImage1 from "./background1.jpg"
import backgroundImage2 from "./backgroundhome.jpg"
import backgroundImage3 from "./wallpaperhome3.jpg"
import backgroundImage4 from "./backgrounhome4.jpg"
import { AuthContext } from "./authContext";
import { useContext, useState } from 'react';


import { render } from "@react-three/fiber";
import logo from "./logo.png"

// Componente Principal
function Principal() {

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const username = localStorage.getItem('username');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    // Realiza las acciones necesarias para cerrar la sesión, como limpiar el token de autenticación, etc.
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.reload();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>

      <Navbar>
        <LogoButton>
          <Link to="/">
            <LogoImage src={logo} alt="Logo" />
          </Link>
        </LogoButton>
        {isLoggedIn ? (
          <NavButtonContainer>
            <UsernameText onClick={toggleDropdown}>{username}</UsernameText>
            <DropdownMenu isOpen={isDropdownOpen}>
              <DropdownMenuItem onClick={handleLogout}>Cerrar sesión</DropdownMenuItem>
            </DropdownMenu>
          </NavButtonContainer>
        ) : (
          <NavButtonContainer>
            <Link to="/login">
              <NavButton>Iniciar Sesión</NavButton>
            </Link>
            <Link to="/register">
              <NavButton>Registrarse</NavButton>
            </Link>
          </NavButtonContainer>
        )}
      </Navbar>
      <BackgroundImage>

        <ContentContainer>
          <ContentContainertitulo>
            <h1 className="welcome-text">Bienvenido</h1>
          </ContentContainertitulo>
          <ContentContainerbutton>
            <a href="/secciones" rel="noopener noreferrer" >
              <Button>Comenzar</Button>
            </a>
          </ContentContainerbutton>
        </ContentContainer>
      </BackgroundImage>

    </div>
  );
}

const change = keyframes`
  0% {
    background-image: url(${backgroundImage1});
  }
  20% {
    background-image: url(${backgroundImage2});
  }
  40% {
    background-image: url(${backgroundImage3});
  }
  60% {
    background-image: url(${backgroundImage4});
  }
  80% {
    background-image: url(${backgroundImage1});
  }
  100% {
    background-image: url(${backgroundImage1});
  }
`;


const BackgroundImage = styled.div`
  animation: ${change} 30s infinite;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;


`;


const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  padding: 10px;
  z-index: 999;
`;

const LogoButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  
`;

const LogoImage = styled.img`
  width: 300px; /* Ajusta el tamaño según tus necesidades */
  height: auto; /* Ajusta el tamaño según tus necesidades */
  background-image: url(${logo});
  background-size: cover;
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 0 10px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  font-family: "Montserrat",sans-serif;
`;



const ContentContainer = styled.div`
  text-align: center;
  color: white;
  position: relative;
  flex-direction: column;
  
  
`;


const ContentContainertitulo = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 10px;
  
  
  
  .welcome-text {
    font-size: 120px;
    padding-bottom: 10px;
 
    font-weight: bold;
    
    font-family: "Montserrat",sans-serif;
  }
`;
const ContentContainerbutton = styled.div`
  text-align: center;
  color: white;
  

  display: inline-block;  .welcome-text {
    font-size: 120px;
    font-weight: bold;
    font-family: "Montserrat",sans-serif;
  }
`;

const Button = styled.button`

  appearance: button;
  background-color: #889FA5;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 19px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
 
&:hover {
  background-image: url("ruta_del_gif_hover.gif");

}
&:after {
  background-clip: padding-box;
  background-color: #628281;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  
 }
 
 &:main, button:focus {
  user-select: auto;
  
 }
 
 &:hover:not(:disabled) {
  filter: brightness(1.1);
  
 }
 
 &:disabled {
  cursor: auto;
  
 }
 
 &:active:after {
  border-width: 0 0 0px;
  
 }
 
 &:active {
  
  padding-bottom: 10px;
 }

`;

const NavButtonContainer = styled.div`
  position: relative;
`;

const UsernameText = styled.span`
  color: white;
  margin-right: 10px;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 999;
  width: 200px; /* Ajusta el ancho según tus necesidades */
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-10px')});
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out, visibility 0.2s;
`;

const DropdownMenuItem = styled.div`
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;



export default Principal;
