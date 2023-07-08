import React, { useRef, useEffect } from "react";
import styled from 'styled-components';
import backgroundImage2 from "./background2.jpeg"
import botonimagen from "./boton_atras.png"
import { useContext } from 'react';
import { AuthContext } from './authContext';
import { useNavigate } from 'react-router-dom';
import backgroundImage3 from "./quiz.jpg"

const SectionContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Alineación a la izquierda */
  flex-direction: column;
  
`;

const InfoContainer = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0px;
  background-color:#889FA5;
  flex: 1;
  background-image: url(${backgroundImage2});
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: flex-start; /* Alineación a la izquierda */
`;

const InfoText = styled.div`
  flex: 1;
  width: 100%;
  color: #ffffff;
  text-align: justify;
  
  margin: 0 30px;
  padding: 20px; /* Agregado padding de 20px */
  font-family: "Montserrat", sans-serif;
  font-weight: sans-serif;
  border-radius: 35px;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(100px);
`;

const InfoTitle = styled.h2`
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  font-family: "Montserrat",sans-serif;
  align-items: flex-start;
  
`;

const AdditionalContent = styled.div`

padding: 25px;
flex: 1;
margin-left: 20px;
margin-right: 20px;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
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

  z-index: 999;;
  background-size: cover;
  background-repeat: no-repeat;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const SectionContainerquiz = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* AlineaciÃ³n a la izquierda */
  flex-direction: column;
  background-image: url(${backgroundImage3});
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledButton = styled.button`
  outline: 0;
  grid-gap: 8px;
  align-items: center;
  background: 0 0;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-size: 16px;
  gap: 8px;
  justify-content: center;
  line-height: 1.5;
  overflow: hidden;
  padding: 12px 16px;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all .14s ease-out;
  white-space: nowrap;

  &:hover {
    box-shadow: 4px 4px 0 #000;
    transform: translate(-4px,-4px);
  }

  &:focus-visible {
    outline-offset: 1px;
  }
`;

function Historia() {

  const { categoria, setCategoria } = useContext(AuthContext);
  const { perdida, setPerdida } = useContext(AuthContext);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const cambiarCategoria = () => {
    setCategoria('historia');
    setPerdida(false)
    navigate('/tour');
  };

  const inicioSes = () => {
    navigate('/login');
  };

  const sectionRefs = useRef([]);
  const buttonRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const currentSectionIndex = sectionRefs.current.findIndex(
        (sectionRef) => {
          const rect = sectionRef.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
      );

      if (currentSectionIndex === sectionRefs.current.length - 1) {
        buttonRef.current.disabled = true;
      } else {
        buttonRef.current.disabled = false;
      }
    };

    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        handleButtonClick();
      } else if (event.deltaY < 0) {
        handleWheelUp(event);
      }
    };

    const handleWheelUp = (event) => {
      const currentSectionIndex = sectionRefs.current.findIndex(
        (sectionRef) => {
          const rect = sectionRef.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
      );

      const previousSection = sectionRefs.current[currentSectionIndex - 1];

      if (previousSection) {
        previousSection.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleBackButtonClick = () => {
    const currentSectionIndex = sectionRefs.current.findIndex(
      (sectionRef) => {
        const rect = sectionRef.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      }
    );

    const previousSection = sectionRefs.current[currentSectionIndex - 1];

    if (previousSection) {
      previousSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleButtonClick = () => {
    const currentSectionIndex = sectionRefs.current.findIndex(
      (sectionRef) => {
        const rect = sectionRef.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      }
    );

    const nextSection = sectionRefs.current[currentSectionIndex + 1];

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div style={{ overflowY: 'hidden', height: '100vh' }}>
        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#f1f1f1' }}>

          <InfoContainer >
            <InfoText>
              <InfoTitle>Historia</InfoTitle>
              <p>
                La antigua civilización china tiene una historia fascinante que abarca miles de años. Experimentó cambios políticos, culturales y sociales, desde sus inicios en el valle del río Amarillo hasta la unificación bajo la dinastía Qin. Durante las dinastías Han, Tang y Song, hubo avances tecnológicos, prosperidad y establecimiento de la Ruta de la Seda, que facilitó el intercambio comercial y cultural. Destacan la construcción de la Gran Muralla China y el sistema político basado en el "Mandato del Cielo".
              </p>
            </InfoText>
            <AdditionalContent>

              <iframe title="Chinese Temple Pagoda" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/e1a9cd5024f24b6aa4a7ee90a29d727b/embed"> </iframe>
              {/* Aquí puedes agregar cualquier contenido adicional que desees mostrar al lado del texto */}
            </AdditionalContent>
          </InfoContainer>

        </SectionContainer>

        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#e1e1e1' }}>
          <InfoContainer >
            <AdditionalContent>
              <iframe title="Terracotta Warrior" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/8fd9421a512745ddbe6abb31c1425017/embed"> </iframe>
              {/* Aquí puedes agregar cualquier contenido adicional que desees mostrar al lado del texto */}
            </AdditionalContent>
            <InfoText>
              <InfoTitle>Soldados de Terracota</InfoTitle>
              <p>
                Los soldados de Terracota son uno de los descubrimientos arqueológicos más asombrosos de la historia. Estas estatuas de tamaño real representan un ejército masivo que fue enterrado junto al primer emperador de China, Qin Shi Huang, con el propósito de protegerlo en su vida después de la muerte. La construcción de este ejército comenzó en el año 246 a.C. y se estima que más de 8,000 soldados, junto con caballos y carros de guerra, fueron meticulosamente creados.

                Cada soldado de Terracota es único y muestra detalles exquisitos, desde su apariencia física hasta sus armaduras y armas. Estas estatuas, que fueron pintadas originalmente con colores vivos, proporcionan una visión fascinante de cómo eran los soldados chinos de la época. El descubrimiento de los soldados de Terracota en 1974 en Xi'an, China, ha permitido a los investigadores y al mundo en general comprender mejor la magnificencia y el poder del antiguo imperio chino bajo la dinastía Qin.
              </p>
            </InfoText>

          </InfoContainer>
        </SectionContainer>

        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
          <InfoContainer >
            <InfoText>
              <InfoTitle>Dinastía Qin y la unificación de China</InfoTitle>
              <p>
                La dinastía Qin, gobernada por el emperador Qin Shi Huang, fue crucial para la unificación de China en el siglo III a.C. Durante esta época, se construyeron importantes proyectos, como la Gran Muralla China y el Ejército de Terracota. Explorar esta dinastía proporciona una visión fascinante de la formación del imperio chino y los logros culturales y arquitectónicos.

              </p>

            </InfoText>
            <AdditionalContent>
              <iframe title="Statuette Qin" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/c529401f6ecf4401ad3573247f9434ea/embed"> </iframe>
            </AdditionalContent>

          </InfoContainer>
        </SectionContainer>
        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
          <InfoContainer >
            <InfoText>
              <InfoTitle>El camino de seda</InfoTitle>
              <p>
                La antigua China desempeñó un papel crucial en el desarrollo y la expansión de la Ruta de la Seda, una red de rutas comerciales que conectaba a China con Europa y África. Esta ruta no solo facilitaba el comercio de bienes y productos, sino también el intercambio cultural, tecnológico y religioso entre las civilizaciones. Explorar la Ruta de la Seda brinda una visión amplia de las relaciones internacionales y el intercambio global en la antigua China.
              </p>
            </InfoText>
            <AdditionalContent>
              <iframe title="Horse Sculpture 1660 AD w/3 LOD - Nepal Heritage" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/38f3f92cd27048fdaceb694d66615ddd/embed"> </iframe>
            </AdditionalContent>
          </InfoContainer>
        </SectionContainer>
        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
          <InfoContainer >
            <InfoText>
              <InfoTitle>La Dinastía Zhou</InfoTitle>
              <p>
                La Dinastía Zhou fue una de las más importantes y duraderas en la antigua civilización china. Puedes explorar temas como el establecimiento y la organización del sistema feudal durante este período, el desarrollo de la filosofía china y el surgimiento de grandes pensadores como Confucio y Laozi, y los cambios políticos y sociales que llevaron al colapso de la dinastía.
              </p>
            </InfoText>
            <AdditionalContent>
              <iframe title="Zun wine vessel, 10th C BCE" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/40e4c669e4794bc3a9b65c36cac40379/embed"> </iframe>
            </AdditionalContent>
          </InfoContainer>
        </SectionContainer>

        <SectionContainerquiz ref={(ref) => sectionRefs.current.push(ref)}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: '500px' }}>
            <div>
              {isLoggedIn ? (
                <StyledButton onClick={cambiarCategoria}>Empezar</StyledButton>
              ) : (
                <StyledButton onClick={inicioSes}>Inicia sesión</StyledButton>
              )}
            </div>
          </div>
        </SectionContainerquiz>

        <ButtonContainer>
          <StickyButton onClick={handleBackButtonClick}></StickyButton>
        </ButtonContainer>


        <ButtonContainer>
          <a href="/secciones" rel="noopener noreferrer">
            <StickyButton></StickyButton>
          </a>
        </ButtonContainer>
      </div>
    </>
  );
}

export default Historia;
