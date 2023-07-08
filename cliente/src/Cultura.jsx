import React, { useRef, useEffect } from "react";
import styled from 'styled-components';
import backgroundImage2 from "./background6.jpg"
import backgroundImage3 from "./quiz.jpg"
import botonimagen from "./boton_atras.png"
import { AuthContext } from "./authContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';


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
    setCategoria('cultura');
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
              <InfoTitle>Cultura</InfoTitle>
              <p> La antigua cultura china era rica y diversa, abarcando una amplia gama de aspectos que incluían el arte, la música, la literatura, la filosofía y las tradiciones. Una de las formas de arte más emblemáticas de la antigua China fue la caligrafía, considerada una forma de expresión artística y una habilidad esencial para los eruditos. La escritura china, con sus caracteres pictóricos y estilizados, se considera una de las más antiguas y complejas del mundo.

                La música también ocupaba un lugar destacado en la cultura antigua china. Los instrumentos musicales tradicionales, como la pipa, el guzheng y el erhu, eran ampliamente utilizados y la música era valorada tanto en la corte imperial como en la vida cotidiana. Además, el teatro chino, con sus formas de ópera y drama, fue una forma de entretenimiento popular que combinaba música, danza y actuación.
              </p>
            </InfoText>
            <AdditionalContent><iframe title="Tomb in Song dynasty Chinese cultural heritage" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/6ce4f7f47eba4358b1ad37fa6a21c074/embed"> </iframe> </AdditionalContent>
          </InfoContainer>

        </SectionContainer>

        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#e1e1e1' }}>
          <InfoContainer >
            <AdditionalContent>
              <iframe title="Confucious" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/2dda6f9f04124d0eb51575d068ce06bc/embed"> </iframe>
            </AdditionalContent>
            <InfoText>
              <InfoTitle>Filosofia</InfoTitle>
              <p>
                En cuanto a la filosofía, la antigua China fue el hogar de diversas escuelas de pensamiento, incluyendo el confucianismo, el taoísmo y el budismo. Estas filosofías influyeron profundamente en la sociedad china y en la forma en que se entendían las relaciones sociales, el gobierno y el propósito de la vida. El confucianismo, por ejemplo, enfatizaba la importancia de la ética, la moralidad y la armonía social, mientras que el taoísmo promovía la búsqueda del equilibrio y la conexión con la naturaleza. Estas filosofías siguen siendo parte integral de la cultura china hasta el día de hoy, influyendo en las prácticas y creencias de la sociedad moderna.
              </p>
            </InfoText>

          </InfoContainer>
        </SectionContainer>

        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
          <InfoContainer >
            <InfoText>
              <InfoTitle>Vestimenta y moda</InfoTitle>
              <p>
                La vestimenta en la antigua China era un reflejo de la cultura y el estatus social. Puedes investigar sobre los diferentes estilos de vestimenta utilizados en diferentes períodos, como los trajes tradicionales de la dinastía Han o las túnicas largas de la dinastía Qing. También puedes explorar los materiales, colores y adornos utilizados en la moda china antigua, y cómo la vestimenta reflejaba la jerarquía social y las normas culturales.
              </p>


            </InfoText>
            <AdditionalContent>
              <iframe title="Ancient Chinese emperor Emperor of Qing Dynasty" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/bb744e86fbd648b882e9b40b09937c1a/embed"> </iframe>
            </AdditionalContent>
          </InfoContainer>
        </SectionContainer>
        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
          <InfoContainer >
            <InfoText>
              <InfoTitle>Gastronomía china</InfoTitle>
              <p>
                La antigua China tenía una rica tradición culinaria. Puedes investigar sobre los alimentos básicos utilizados en la cocina china antigua, como el arroz y el trigo, así como las técnicas de cocción y los condimentos utilizados. También puedes explorar la importancia de la alimentación en la cultura china, como los banquetes ceremoniales y los principios de equilibrio y armonía en la dieta según la medicina tradicional china.
              </p>
            </InfoText>
            <AdditionalContent>
              <iframe title="Asia food_steamed port dumplings" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/a27e0aba595f44e98a4f766cae1a81c6/embed"> </iframe>
            </AdditionalContent>
          </InfoContainer>
        </SectionContainer>
        <SectionContainer ref={(ref) => sectionRefs.current.push(ref)} style={{ backgroundColor: '#d1d1d1' }}>
          <InfoContainer >
            <InfoText>
              <InfoTitle>Cerámica Antigua </InfoTitle>
              <p>
                La cerámica china tiene una rica y distinguida historia que se remonta a miles de años. Es considerada una de las formas de arte más importantes y apreciadas de la cultura china. Desde las dinastías antiguas hasta la actualidad, los ceramistas chinos han demostrado una habilidad excepcional en la creación de piezas de cerámica bellamente elaboradas y decoradas. La porcelana china, conocida por su delicadeza, translucidez y esmaltes vibrantes, ha cautivado a personas de todo el mundo. La cerámica china no solo se valora por su estética, sino también por su funcionalidad, ya que ha sido utilizada a lo largo de los siglos para una amplia gama de propósitos, desde vajillas y jarrones hasta estatuillas y objetos rituales. La cerámica china es un testigo tangible de la destreza artística y la herencia cultural de una civilización milenaria.
              </p>
            </InfoText>
            <AdditionalContent>
              <iframe title="Chinese porcelain" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="850" height="460" src="https://sketchfab.com/models/52949d7ce0cc42bc8915d425198ecc94/embed"> </iframe>
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
          <StickyButton onClick={handleBackButtonClick}>r</StickyButton>
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
