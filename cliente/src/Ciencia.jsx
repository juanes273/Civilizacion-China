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
              <p> La civilización china ha realizado numerosos aportes significativos a la ciencia a lo largo de su historia. Algunos de ellos incluyen:

La invención del papel durante la dinastía Han, revolucionando la escritura y la difusión del conocimiento en todo el mundo.

La invención de la brújula magnética en la misma época, permitiendo la navegación precisa y siendo un hito importante en la exploración y el comercio marítimo.

El descubrimiento de la pólvora en el siglo IX, que inicialmente se utilizaba para fines pirotécnicos y ceremoniales, pero posteriormente revolucionó los métodos militares a nivel mundial.

La medicina tradicional china, con prácticas como la acupuntura, que ha demostrado efectividad en ciertos trastornos y afecciones a lo largo de miles de años.

Los avances en matemáticas, incluyendo la introducción del sistema decimal, el álgebra, la geometría y las contribuciones a la teoría de los números.

La invención de una forma temprana de impresión con bloques de madera durante la dinastía Tang, permitiendo una reproducción más rápida y precisa de textos.</p>
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
              <p>La pólvora tuvo un origen inicialmente pirotécnico y ceremonial, utilizada en festividades y celebraciones. No obstante, su verdadero potencial se descubrió cuando empezó a emplearse con fines militares. Esto permitió el desarrollo de armas de guerra innovadoras, como cohetes y cañones, que transformaron los métodos de combate de manera permanente.

El uso de la pólvora en la guerra resultó crucial en numerosas batallas y conflictos posteriores. Los ejércitos chinos empleaban cohetes propulsados por pólvora para lanzar proyectiles explosivos contra sus enemigos, otorgándoles una ventaja significativa en el campo de batalla. Asimismo, la introducción de los cañones de pólvora permitió a los chinos romper las defensas fortificadas de sus adversarios, revolucionando las tácticas y estrategias militares.</p>
            </InfoText>
           
          </InfoContainer>
        </SectionContainer>

        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
        <InfoContainer >
            <InfoText>
            <InfoTitle>Brújula</InfoTitle>
              <p>La brújula china, también conocida como la brújula de aguja magnética, es una invención antigua que se remonta al siglo II a.C. Su desarrollo en China marcó un hito en la navegación y tuvo un impacto significativo en la exploración y el comercio marítimo. La brújula consistía en una aguja magnetizada colocada en un plato o recipiente flotante lleno de agua. La aguja apuntaba siempre hacia el norte magnético, lo que permitía a los marineros y exploradores orientarse con mayor precisión en alta mar.

La brújula china revolucionó la navegación, ya que los marineros podían determinar su rumbo incluso en días nublados o sin referencias visuales. Este instrumento permitió a los chinos aventurarse más allá de las rutas costeras conocidas y explorar nuevas tierras. Además, la brújula también tuvo un impacto en el comercio, ya que facilitó el establecimiento de rutas marítimas más eficientes y seguras. El conocimiento de la brújula se extendió gradualmente por todo el mundo, y su adopción en Europa y otras regiones transformó por completo la navegación y la exploración marítima a nivel global. La brújula china, con su ingeniosa utilización de las propiedades magnéticas, es un testimonio del ingenio y la capacidad tecnológica de la antigua civilización china.</p>
             
            
            </InfoText>
            <AdditionalContent> <iframe title="Ancient Compass" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/90884ca431d0434bbcba60c93ba9fb5a/embed"> </iframe></AdditionalContent>
          </InfoContainer>
        </SectionContainer>
        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
        <InfoContainer >
            <InfoText>
            <InfoTitle>Seda</InfoTitle>
              <p>
              La seda es una de las invenciones más emblemáticas de la antigua China. Los chinos desarrollaron técnicas avanzadas para criar gusanos de seda y tejer finas hebras de seda a partir de sus capullos. La seda china se convirtió en un producto altamente valorado y codiciado en todo el mundo antiguo, y su producción y comercio desempeñaron un papel importante en la economía y el intercambio cultural de China.
              </p>
            </InfoText>
            <AdditionalContent>
            <iframe title="Crysede silk robe" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/283687e418a8404399ea9ea72cf5e8bd/embed"> </iframe>
            </AdditionalContent>
          </InfoContainer>
        </SectionContainer>
        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
        <InfoContainer >
            <InfoText>
            <InfoTitle>Lámparas de papel</InfoTitle>
              <p>
              Las lámparas de papel son una antigua invención china que se remonta a más de dos mil años atrás. Estas lámparas, también conocidas como faroles de papel, eran hechas a mano utilizando papel de arroz o seda y un armazón de bambú. Eran populares tanto en las áreas urbanas como en las rurales de la antigua China y se utilizaban en festividades, celebraciones y eventos ceremoniales.

Las lámparas de papel chinas eran verdaderas obras de arte, con diseños elaborados y colores vibrantes. Los artesanos chinos utilizaban diversas técnicas para decorar las lámparas, como la pintura a mano, la caligrafía y el recorte de papel. Además de su belleza estética, estas lámparas también eran funcionales, ya que se colocaban velas o lámparas de aceite en su interior para proporcionar iluminación. Las lámparas de papel chinas no solo eran una fuente de luz, sino que también tenían un significado simbólico, representando la esperanza, la prosperidad y la buena fortuna.
              </p>
            </InfoText>
            <AdditionalContent>
            <iframe title="Asian Chinese Paper Lucky Lantern New Year" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/6a9670edf25943b0afb469556e8966b8/embed"> </iframe>
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
