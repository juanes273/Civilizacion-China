import React, { useRef, useEffect } from "react";
import styled from 'styled-components';
import backgroundImage2 from "./background8.jpg"

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
            <InfoTitle>Taoísmo</InfoTitle>
              <p> El taoísmo es una antigua tradición filosófica y religiosa que se originó en la antigua China. Basado en las enseñanzas del Dao De Jing, escrito por Laozi, el taoísmo busca vivir en armonía con el Tao, que se traduce como "el Camino" o "la Vía". En el taoísmo, se enfatiza la importancia de fluir con el curso natural de la vida, en lugar de resistirse a él. Se promueve la idea de dejar que las cosas se desarrollen sin esfuerzo y de vivir en equilibrio con la naturaleza. La meditación, la práctica de la atención plena y la cultivación del qi (energía vital) son parte integral de la tradición taoísta. Además, el taoísmo ha influido en otras áreas de la cultura china, como la medicina tradicional china, la poesía y la pintura, y ha dejado un legado duradero en la espiritualidad y el pensamiento filosófico de China y más allá.</p>
            </InfoText>
            <AdditionalContent>
              <iframe title="temple" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/b82703c3c0f940bc84901a004e41c6ee/embed"> </iframe>
              {/* Aquí puedes agregar cualquier contenido adicional que desees mostrar al lado del texto */}
            </AdditionalContent>
          </InfoContainer>
          
        </SectionContainer>

        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#e1e1e1' }}>
        <InfoContainer >
        <AdditionalContent>
              <iframe title="Buda" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/f3217a6ac49b4c4a995e41a7b8165383/embed"> </iframe>
              {/* Aquí puedes agregar cualquier contenido adicional que desees mostrar al lado del texto */}
            </AdditionalContent>
            <InfoText>
            <InfoTitle>Budismo</InfoTitle>
              <p>El budismo es una antigua tradición espiritual que se originó en la India y se extendió por toda Asia, incluyendo la antigua China. Fundado por Siddhartha Gautama, conocido como Buda, el budismo se basa en las Cuatro Nobles Verdades y el Noble Óctuple Sendero. El budismo busca alcanzar la iluminación y liberación del sufrimiento al comprender y superar el apego y el deseo. Se enfoca en la práctica de la meditación, la compasión y la búsqueda de la sabiduría. En la antigua China, el budismo se integró con las tradiciones religiosas y filosóficas existentes, como el taoísmo y el confucianismo, y se desarrollaron diferentes escuelas y corrientes de pensamiento budista. El budismo ha tenido una profunda influencia en la espiritualidad, la cultura, el arte y la ética en la antigua China y en el mundo en general.</p>
            </InfoText>
           
          </InfoContainer>
        </SectionContainer>

        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
        <InfoContainer >
            <InfoText>
            <InfoTitle>Confucianismo</InfoTitle>
              <p> El confucianismo es una filosofía y una forma de vida que se basa en los principios y enseñanzas del pensador chino Confucio. Puedes investigar sobre las enseñanzas confucianas, como la importancia de las relaciones familiares, la virtud personal y el cultivo moral. También puedes explorar cómo el confucianismo influyó en la ética y la gobernabilidad en la antigua China.</p>
    
            </InfoText>
            
            <AdditionalContent>
            <iframe title="Nyc confucious Statue" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/8b566deb25ef457db4cfa041033e6a13/embed"> </iframe>
            </AdditionalContent>
          </InfoContainer>
        </SectionContainer>
        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
        <InfoContainer >
            <InfoText>
            <InfoTitle>Religión popular</InfoTitle>
              <p>Además de las tradiciones filosóficas y el budismo, la antigua China también tenía una amplia gama de prácticas religiosas populares. Puedes explorar el culto a los antepasados y la adoración de los dioses, la creencia en espíritus y deidades locales, y las prácticas adivinatorias y rituales para obtener buena fortuna y protección.</p>
            </InfoText>
            <AdditionalContent>
            <iframe title="Chinese dragon (DARII)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/5a156cfbcb7a4a9c827f2ab91a12f67e/embed"> </iframe> 
            </AdditionalContent>
          </InfoContainer>
        </SectionContainer>
        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
        <InfoContainer >
            <InfoText>
            <InfoTitle>Legalismo</InfoTitle>
              <p>
              Aunque no se considera una religión en el sentido estricto, el legalismo fue una importante escuela de pensamiento en la antigua China que tenía una fuerte influencia en la política y el gobierno. Puedes investigar sobre los principios y las enseñanzas del legalismo, que se enfocaban en el poder y la autoridad del estado, la necesidad de leyes estrictas y el uso del castigo como medio de control social.
              </p>
            </InfoText>
            <AdditionalContent>
            <iframe title="Chinese Temple" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/01c6a525a8144693b1eb2446f761051c/embed"> </iframe> 
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
