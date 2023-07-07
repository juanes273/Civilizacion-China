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
  font-size: 50px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  font-family: "Montserrat",sans-serif;
  align-items: flex-start;
  
`;

const AdditionalContent = styled.div`

padding: 25px;

background-color: inherit;

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



function Historia() {
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
            <InfoTitle>Historia</InfoTitle>
              <p> La antigua civilización china tiene una historia rica y fascinante que se extiende a lo largo de miles de años. Desde sus inicios en el valle del río Amarillo alrededor del tercer milenio antes de Cristo, hasta la formación de un imperio unificado bajo la dinastía Qin en el siglo III antes de Cristo, China experimentó una serie de cambios culturales, políticos y sociales.

                Durante los primeros años de su historia, China fue testigo del desarrollo de ciudades, la invención de la escritura china y la expansión de los reinos feudales. Durante el periodo conocido como la dinastía Zhou, que abarcó desde el siglo XI hasta el siglo III antes de Cristo, se estableció un sistema político basado en la idea del "Mandato del Cielo", que sostenía que el emperador gobernaba con el respaldo divino.

                La Gran Muralla China, una de las construcciones más emblemáticas de la historia china, comenzó a construirse durante la dinastía Qin. Esta dinastía también fue famosa por unificar China bajo un solo gobierno centralizado y establecer el sistema de escritura, medidas y monedas estándar.

                En los siglos siguientes, China experimentó un período de expansión y prosperidad bajo las dinastías Han, Tang y Song. Durante estas dinastías, se llevaron a cabo grandes avances en la tecnología, la agricultura y las artes. Fue durante la dinastía Han que China estableció la Ruta de la Seda, una red comercial que conectaba China con el Medio Oriente y Europa, facilitando el intercambio cultural y económico.

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
          <a href="/secciones" rel="noopener noreferrer">
            <StickyButton>Volver</StickyButton>
          </a>
        </ButtonContainer>
      </div>
    </>
  );
}

export default Historia;
