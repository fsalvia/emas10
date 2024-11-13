import { Parallax } from "react-parallax";
import styled, { keyframes } from 'styled-components';
import fondo from '../assets/img/fondos/fondoHormigonLight2.jpg'
import logoColor from '../assets/img/emas10/LogoE10.png'




const Landing = () => {
  return (
    <div id="home">
       <Parallax bgImage={fondo} strength={500} bgImageStyle={{ objectFit: 'cover' }}>
      <div style={{ height: "100vh" }}>
        <StyledDiv>
          <StyledLogo src={logoColor} alt="" className='max-h-[300px]' />
          <AnimatedText>Construyendo el Futuro</AnimatedText>
          <AnimatedText2>Expertos en Construcción <br /> Residencial y Comercial</AnimatedText2>
        </StyledDiv>
      </div>
    </Parallax>
    </div>
   
  )
}

export default Landing

const StyledDiv = styled.div`
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLogo = styled.img`
  width: 300px;
  -webkit-filter: drop-shadow(5px 5px 5px #3C3C3C);
  filter: drop-shadow(5px 5px 5px #3C3C3C);
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AnimatedText = styled.h1`
  text-align: center;
  margin-top: 140px;
  font-size: 1.5rem;
  color: white;

  font-weight: 600;
  transform: translate(-50%, -50%);
  animation: ${slideInFromRight} 2s ease-out forwards;
`;

const AnimatedText2 = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  color: white;

  font-weight: 600;

  transform: translate(-50%, -50%);

  animation: ${slideInFromLeft} 2s ease-out forwards;
`;