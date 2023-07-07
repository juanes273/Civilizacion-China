import React, { useRef, useEffect } from "react";
import styled from 'styled-components';
import backgroundImage2 from "./background1.jpg"

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
  background-color: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(5px);
`;

const InfoTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  font-family: "Montserrat",sans-serif;
  align-items: flex-start;
  
`;

const AdditionalContent = styled.div`
width: 300px;
padding: 25px;
height: 300px;
background-color: #ffffff;

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
  background-color: #ffffff;
  border: 1px solid #000000;
  z-index: 999;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`;



function Cultura() {
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
        <SectionContainer  ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#f1f1f1' }}>
        
          <InfoContainer >
            <InfoText>
            <InfoTitle>SECCION1</InfoTitle>
              <p> SECCION1  Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en disLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demosteño gráfico en demostm ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto fina</p>
            </InfoText>
            <AdditionalContent>
              {/* Aquí puedes agregar cualquier contenido adicional que desees mostrar al lado del texto */}
            </AdditionalContent>
          </InfoContainer>
          
        </SectionContainer>

        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#e1e1e1' }}>
        <InfoContainer >
        <AdditionalContent>
              {/* Aquí puedes agregar cualquier contenido adicional que desees mostrar al lado del texto */}
            </AdditionalContent>
            <InfoText>
            <InfoTitle>SECCION2</InfoTitle>
              <p>SECCION1 Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en disLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demosteño gráfico en demostm ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto fina</p>
            </InfoText>
           
          </InfoContainer>
        </SectionContainer>

        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
        <InfoContainer >
            <InfoText>
            <InfoTitle>SECCION3</InfoTitle>
              <p>SECCION1 Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en disLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demosteño gráfico en demostm ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto fina</p>
              <AdditionalContent>
              {/* Aquí puedes agregar cualquier contenido adicional que desees mostrar al lado del texto */}
            </AdditionalContent>
            
            </InfoText>
            
          </InfoContainer>
        </SectionContainer>
        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
        <InfoContainer >
            <InfoText>
            <InfoTitle>SECCION4</InfoTitle>
              <p>SECCION1 Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en disLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demosteño gráfico en demostm ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto fina</p>
            </InfoText>
            <AdditionalContent>
              {/* Aquí puedes agregar cualquier contenido adicional que desees mostrar al lado del texto */}
            </AdditionalContent>
          </InfoContainer>
        </SectionContainer>
        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
        <InfoContainer >
            <InfoText>
            <InfoTitle>SECCION5</InfoTitle>
              <p>SECCION1 Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en disLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demosteño gráfico en demostm ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto finaLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto fina</p>
            </InfoText>
            <AdditionalContent>
              {/* Aquí puedes agregar cualquier contenido adicional que desees mostrar al lado del texto */}
            </AdditionalContent>
          </InfoContainer>
        </SectionContainer>

        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <div>
      {/* Aquí puedes agregar el contenido del botón */}
      <button style={{ /* Estilos del botón */ }}>Botón centrado</button>
    </div>
  </div>
</SectionContainer>

        <ButtonContainer>
          <StickyButton onClick={handleBackButtonClick}>Volver</StickyButton>
        </ButtonContainer>

       

        <ButtonContainer>
          <a href="/tour" rel="noopener noreferrer">
            <StickyButton>Volver</StickyButton>
          </a>
        </ButtonContainer>
      </div>
    </>
  );
}

export default Cultura;
