import React, { useRef, useEffect } from "react";
import styled from 'styled-components';
import backgroundImage2 from "./background7.jpeg"

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
            <InfoTitle>Invenciones</InfoTitle>
              <p> La civilización china ha realizado numerosos aportes significativos a la ciencia a lo largo de su historia. Algunos de los logros más destacados incluyen la invención del papel durante la dinastía Han, lo cual revolucionó la escritura y la difusión del conocimiento en todo el mundo. Asimismo, la invención de la brújula magnética en la misma época permitió la navegación precisa y fue un hito importante en la exploración y el comercio marítimo.
Otro importante aporte chino fue la descubierta de la pólvora en el siglo IX. Aunque inicialmente se utilizaba para fines pirotécnicos y ceremoniales, su aplicación en la guerra revolucionó los métodos militares en todo el mundo. La medicina tradicional china también ha dejado su huella con la acupuntura, una práctica que ha demostrado efectividad en ciertos trastornos y afecciones, y que ha sido practicada durante miles de años.
La antigua China también realizó importantes avances en matemáticas. Introdujeron el sistema decimal, el álgebra y la geometría, además de contribuir a la teoría de los números. Asimismo, los chinos inventaron una forma temprana de impresión con bloques de madera durante la dinastía Tang, lo que permitió una reproducción más rápida y precisa de textos.</p>
            </InfoText>
            <AdditionalContent>
              <iframe title="Still Life" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/50f7c8ca06564289bcf9b2340816a910/embed"> </iframe>
              {/* Aquí puedes agregar cualquier contenido adicional que desees mostrar al lado del texto */}
            </AdditionalContent>
          </InfoContainer>
          
        </SectionContainer>

        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#e1e1e1' }}>
        <InfoContainer >
        <AdditionalContent>
              <iframe title="Barrels GunPowder TNT" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/4a01ed9ab9904c8ab12b301ad7b28da4/embed"> </iframe>
              {/* Aquí puedes agregar cualquier contenido adicional que desees mostrar al lado del texto */}
            </AdditionalContent>
            <InfoText>
            <InfoTitle>Pólvora</InfoTitle>
              <p>En un principio, la pólvora fue utilizada con fines pirotécnicos y ceremoniales, en festividades y celebraciones. Sin embargo, su verdadero potencial se reveló cuando se empezó a utilizar con fines militares. La pólvora permitió el desarrollo de armas de guerra nunca antes vistas, como los cohetes y los cañones, que cambiaron para siempre los métodos de combate.
El uso de la pólvora en la guerra fue un factor determinante en muchas batallas y conflictos posteriores. Los ejércitos chinos utilizaban cohetes propulsados por pólvora para lanzar proyectiles explosivos sobre sus enemigos, lo que les otorgaba una ventaja significativa en el campo de batalla. Además, la introducción de cañones de pólvora permitió a los chinos romper las defensas fortificadas de sus adversarios, revolucionando las tácticas y estrategias militares.
La invención de la pólvora china tuvo un impacto trascendental en todo el mundo. A medida que se difundía a través de las rutas comerciales, la pólvora llegó a otras civilizaciones y fue adoptada en diferentes formas y aplicaciones. Su influencia se puede ver en el desarrollo de la artillería, la minería, la pirotecnia y la tecnología en general.</p>
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
